import { Controller, Post, Inject, Body, Get } from '@midwayjs/decorator';
import { ArticleService } from '../service/article.service';
import { Context } from '@midwayjs/koa';
// import { IArticles } from '../interface';

@Controller('/article')
export class TestController {
  @Inject()
  articleService: ArticleService;
  @Inject()
  ctx: Context;

  @Post('/publish')
  async articlePublishController(@Body() params: object) {
    return this.articleService.articlePublishService(params);
  }

  @Get('/list')
  async articleListController() {
    const query = this.ctx.query;
    return this.articleService.articleListService(query);
  }
}
