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
        console.log(await chapters)
      } catch (error) {
        console.log(error)
      }
    }

    fetchChapters()
  }, [params.book])
  return (
    <main className={`${house}`}>
      <section className={`container`}>
        <div className={style.book__info}>
          {bookInfo?.attributes.cover &&
            <Image className={style.book__image} alt='' src={bookInfo?.attributes.cover} width={388} height={600} />
          }
          <div>
            <h2 className={style.book__title}>{bookInfo?.attributes.title}</h2>
            <h3 className={style.book__author}>by {bookInfo?.attributes.author}</h3>
            <p>{bookInfo?.attributes.summary}</p>
            <h4 className={style.book__release_date}>Originally published: {bookInfo?.attributes.release_date.slice(0, 4)}</h4>
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
    </main>
  )
}

export default Books