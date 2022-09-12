import { ArticleInterface } from "./article.interface";

export interface GetFeedResponse {
    articles: ArticleInterface[],
    articlesCount: number
}