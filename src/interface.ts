/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}

export interface IArticles {
  id: number;

  name: string;

  description: string;

  filename: string;

  views: number;

  isPublished: boolean;
}
