import type { Context } from "hono"

export type WranglerEnv = {}

export type HonoContext = {
  Bindings: WranglerEnv
}

export type GoCtx = Context<HonoContext>
