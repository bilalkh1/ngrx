export interface ArticleInterface {
    author: ProfileInterface,
    body: string,
    createdAt: Date,
    description: string,
    favorited: boolean
    favoritesCount: number
    slug: string,
    tagList: string[],
    title: string,
    updatedAt: Date
}

export interface ProfileInterface {
    bio: string;
    following: boolean
    image: string;
}