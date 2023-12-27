import { BookType } from "../components/Books/types";
import baseURL from "./api";

export async function getListBooks(): Promise<BookType[]> {
  const response = await fetch(`${baseURL}/v1/books`)
  const data = await response.json()
  return data.data;
}