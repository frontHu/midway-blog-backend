import { MidwayError } from '@midwayjs/core';

export class ArticleError extends MidwayError {
  constructor(err?: Error) {
    super('error', {
      cause: err,
    });
    if (err?.stack) {
      this.stack = err.stack;
    }
  }
}
