import { BookType } from "@/app/components/Books/types"

export type BookInfoType = BookType

export interface ChapterType {
  id: string,
  attributes: {
    order: number,
    slug: string,
    summary: string,
    title: string,
  }
}