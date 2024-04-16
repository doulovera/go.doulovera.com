import type { HonoContext } from '../types'

import { Hono } from 'hono'
import { homepage } from './page'

const app = new Hono<HonoContext>()

app.get('/', async (c) => {
  const list = await c.env.URLS.list()
  return c.html(homepage(list.keys.map((item) => item.name)))
})

app.post('/', async (c) => {
  const param: { name: string, url: string, auth: string } = await c.req.json()

  if (param.auth !== c.env.AUTH) {
    return c.json({ success: false, error: "Unauthorized" }, 401)
  }

  if (!param.name || !param.url) {
    return c.json({ success: false, error: "Invalid request" }, 400)
  }

  await c.env.URLS.put(param.name, param.url)

  return c.json({ success: true }, 200)
})

app.get('/:name', async (c) => {
  const name = c.req.param('name')  

  const url = await c.env.URLS.get(name)

  if (!url) {
    return c.text("Not found", 404)
  }

  const destination = url.startsWith('http') ? url : `https://${url}`

  return c.redirect(destination)
})

export default app
