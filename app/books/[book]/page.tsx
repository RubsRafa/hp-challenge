'use client'

import style from './style.module.css'
import { getBookInfo, getChapters } from "@/app/services/bookApi"
import Image from "next/image"
import { useEffect, useState } from "react"
import { BookInfoType, ChapterType } from "./type"
import Chapters from '@/app/components/Chapters'

const Books = ({ params }: { params: { book: string } }) => {
  const [bookInfo, setBookInfo] = useState<BookInfoType>()
  const [chapters, setChapters] = useState<ChapterType[]>()
  const [visibleSummary, setVisibleSummary] = useState<number | null>(null)

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
  }, [])
  return (
    <section className={`container`}>
      <div className={style.book__info}>
        {bookInfo?.attributes.cover &&
          <Image className={style.book__image} alt='' src={bookInfo?.attributes.cover} width={388} height={600} />
        }
        <div>
          <h2 className={style.book__title}>{bookInfo?.attributes.title}</h2>
          <h3 className={style.book__author}>by {bookInfo?.attributes.author}</h3>
          <h4>{bookInfo?.attributes.release_date.slice(0, 4)}</h4>
          <p>{bookInfo?.attributes.summary}</p>
        </div>
      </div>
      <div className={style.book__chapters}>
        <h5>
          <em>{bookInfo?.attributes.dedication}</em>
        </h5>
        {chapters?.map((chapter) =>
          <Chapters key={chapter.attributes.slug} chapter={chapter} visibleSummary={visibleSummary} setVisibleSummary={setVisibleSummary} />
        )}
      </div>
    </section>
  )
}

export default Books