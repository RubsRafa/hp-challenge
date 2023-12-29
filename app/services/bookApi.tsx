import { BookInfoType, ChapterType } from "../books/[book]/type";
import { BookType } from "../components/Books/types";
import baseURL from "./api";

export async function getListBooks(): Promise<BookType[]> {
  const response = await fetch(`${baseURL}/v1/books`)
  const data = await response.json()
  return data.data;
}

export async function getBookInfo(book_id: string): Promise<BookInfoType> {
  const response = await fetch(`${baseURL}/v1/books/${book_id}`)
  const data = await response.json()
  return data.data
}

export async function getChapters(book_id: string): Promise<ChapterType[]> {
  const response = await fetch(`${baseURL}v1/books/${book_id}/chapters`)
  const data = await response.json()
  return data.data
}
