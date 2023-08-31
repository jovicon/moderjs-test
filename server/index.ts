import { Middleware } from '@modern-js/runtime/server';

export const middleware: Middleware = (ctx, next) => {
  console.log(ctx.request.url);
  next();
};
