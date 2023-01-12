import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { ArticleEntity } from '../entity/article.entity';
import { Repository } from 'typeorm';

@Provide()
export class ArticleService {
  @InjectEntityModel(ArticleEntity)
  articleModel: Repository<ArticleEntity>;

  // publish save
  async articlePublishService(params) {
    const article = new ArticleEntity();
    article.poster = params.poster;
    article.title = params.title;
    article.abstract = params.abstract;
    article.text = params.text;

    const result = await this.articleModel.save(article);

    console.log(result.id, 'params');
  }

  // article get
  async articleListService(query) {
    const result = await this.articleModel.find({
      skip: query.pageNo,
      take: 10,
    });
    return result;
  }
}
