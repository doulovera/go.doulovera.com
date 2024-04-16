import type { HonoContext } from '../types'

import { Hono } from 'hono'
import { LIST } from './list'

const app = new Hono<HonoContext>()

app.get('/:name', (c) => {
  const name = c.req.param('name')  

  if (name in LIST) {
    return c.redirect(LIST[name])
  }

  return c.text("Not found", 404)
})

export default app
