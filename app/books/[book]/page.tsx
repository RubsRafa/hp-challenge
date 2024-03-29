'use client'

import style from './style.module.css'
import { getBookInfo, getChapters } from "@/app/services/bookApi"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { BookInfoType, ChapterType } from "./type"
import Chapters from '@/app/components/Chapters'
import { HouseContext } from '@/app/context/HouseContext'

const Books = ({ params }: { params: { book: string } }) => {
  const [bookInfo, setBookInfo] = useState<BookInfoType>()
  const [chapters, setChapters] = useState<ChapterType[]>()
  const [visibleSummary, setVisibleSummary] = useState<number | null>(null)
  const { house } = useContext(HouseContext)

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const data = getBookInfo(params.book)
        setBookInfo(await data)

        const chapters = getChapters(params.book)
        setChapters(await chapters)
      } catch (error) {
        console.log(error)
      }
    }

    fetchChapters()
  }, [params.book])
  return (
    <main className={`${house}`}>
      <section className={`container`}>

        {!bookInfo &&
          <div
            data-cy="book_skeleton"
            className={style.book__skeleton}>
            <div className={style.book__image_skeleton} style={{
              backgroundColor: `var(--medium--${house})`
            }}></div>
            <div className={style.book__content_skeleton}>
              <div className={style.book__title_skeleton} style={{
                backgroundColor: `var(--medium--${house})`
              }}></div>
              <div className={style.book__author_skeleton} style={{
                backgroundColor: `var(--medium--${house})`
              }}></div>
              <div className={style.book__summary_skeleton} style={{
                backgroundColor: `var(--medium--${house})`
              }}></div>
              <div className={style.book__release_date_skeleton} style={{
                backgroundColor: `var(--medium--${house})`
              }}></div>
            </div>
          </div>
        }
        {bookInfo &&
          <>
            <div
              data-cy="book_info"
            className={style.book__info}>
              {bookInfo?.attributes.cover &&
                <Image className={style.book__image} alt='' src={bookInfo?.attributes.cover} width={388} height={600} />
              }
              <div>
                <h2 data-cy="book_title" className={`title ${style.book__title}`}>{bookInfo?.attributes.title}</h2>
                <h3 data-cy="book_author" className={style.book__author}>by {bookInfo?.attributes.author}</h3>
                <p data-cy="book_summary">{bookInfo?.attributes.summary}</p>
                <h4 data-cy="book_release_date" className={`normal-text ${style.book__release_date}`}>Originally published: {bookInfo?.attributes.release_date.slice(0, 4)}</h4>
              </div>
            </div>
            <div data-cy="book_chapters" className={style.book__chapters}>
              <h5 data-cy="book_dedication">
                <em>{bookInfo?.attributes.dedication}</em>
              </h5>
              {chapters?.map((chapter) =>
                <Chapters
                  key={chapter.attributes.slug}
                  chapter={chapter}
                  visibleSummary={visibleSummary}
                  setVisibleSummary={setVisibleSummary}
                  house={house}
                />
              )}
            </div>
          </>
        }
      </section>
    </main>
  )
}

export default Books