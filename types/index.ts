import type { Context } from "hono"

export type HonoContext = {
  Bindings: {
    URLS: KVNamespace
    AUTH: string
  }
}

export type GoCtx = Context<HonoContext>
