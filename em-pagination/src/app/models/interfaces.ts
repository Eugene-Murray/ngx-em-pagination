export interface Content {
  contentId: string,
  siteId: number,
  siteName: string,
  siteSection: string,
  contentType: string,
  title: string,
  subTitle: string,
  description: string,
  linkToContentSite: string,
  urlOfContent: string,
  creator: string,
  tags: string[
  ],
  createdAt: Date,
}
