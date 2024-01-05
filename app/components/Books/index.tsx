'use client'

import Image from 'next/image'
import style from './style.module.css'
import { useContext, useEffect, useState } from 'react'
import { getListBooks } from '@/app/services/bookApi'
import { BookType } from './types'
import Link from 'next/link'
import { HouseContext } from '@/app/context/HouseContext'

const BooksContent = () => {
  const [books, setBooks] = useState<BookType[]>([])
  const [hover, setHover] = useState<string | null>(null)
  const { house } = useContext(HouseContext)
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = getListBooks()
        setBooks(await data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchBooks()
  }, [])

  return (
    <section className={style.books__section}>
      {!books[0] &&
        list.map((item) =>
          <div
            key={item}
            data-cy="book_card_skeleton"
            className={style.book__card_skeleton}
            style={{
              backgroundColor: `var(--medium--${house})`
            }}></div>
        )
      }
      {books[0] && books.map((book) =>
        <div
          key={book.attributes.title}
          data-cy="book_card"
          className={style.book__card}
          style={{
            backgroundColor: `var(--medium--${house})`,
          }}
        >
          <Image className={style.book__image} src={book.attributes.cover} alt="" width={229} height={354} />
          <div className={style.book_content__card}>
            <h3 className='title--extra-small'>{book.attributes.title}</h3>
            <h5 className='normal-text'>{book.attributes.author}</h5>
            <h5 className='normal-text'>{book.attributes.release_date}</h5>
          </div>
          <Link href={`/books/${book.id}`}>
            <button
              className={style.book__read_button}
              style={{
                backgroundColor: `var(--medium--${house})`,
                boxShadow: hover === book.id ? `0 .1rem .4rem 0 var(--light--${house})` : ''
              }}
              onMouseEnter={() => setHover(book.id)}
              onMouseLeave={() => setHover(null)}
            >
              Read
            </button>
          </Link>
        </div>
      )}
    </section>
  )
}

export default BooksContent