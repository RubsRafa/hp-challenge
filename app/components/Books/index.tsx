'use client'

import Image from 'next/image'
import style from './style.module.css'
import { useEffect, useState } from 'react'
import { getListBooks } from '@/app/services/bookApi'
import { BookType } from './types'
import Link from 'next/link'

const BooksContent = () => {
  const [books, setBooks] = useState<BookType[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = getListBooks()
        setBooks(await data)
        // console.log(await data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchBooks()
  }, [])

  return (
    <section className={style.books__section}>
      {books.map((book) =>
        <div key={book.attributes.title} className={style.book__card}>
          <Image className={style.book__image} src={book.attributes.cover} alt="" width={229} height={354} />
          <div className={style.book_content__card}>
            <h3>{book.attributes.title}</h3>
            <h5>{book.attributes.author}</h5>
            <h5>{book.attributes.release_date}</h5>
          </div>
          <Link href={`/books/${book.id}`}>
            <button className={style.book__read_button}>
              Read
            </button>
          </Link>
        </div>
      )}
    </section>
  )
}

export default BooksContent