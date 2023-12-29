export interface BookType {
  id: string,
  attributes: {
    author: string,
    cover: string,
    dedication: string,
    pages: number,
    release_date: string,
    summary: string,
    title: string,
    wiki: string,
  },
  relationships: {
    chapters: {
      data: {
        id: string,
        type: string,
      }[]
    }
  }
}
// 