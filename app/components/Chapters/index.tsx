import style from './style.module.css'
import { ChapterType } from "@/app/books/[book]/type"
import { Dispatch, SetStateAction, useState } from "react"

interface ChaptersProps {
  chapter: ChapterType
  visibleSummary: number | null,
  setVisibleSummary: Dispatch<SetStateAction<number | null>>
}

export default function Chapters({ chapter, visibleSummary, setVisibleSummary }: ChaptersProps) {
  const isSummaryVisible = chapter.attributes.order === visibleSummary
  return (
    <section>

      <h2
        id='chapter_title'
        className={style.chapter__title}
        style={{ cursor: chapter.attributes.summary == '' && chapter.attributes.summary == null ? 'auto' : 'pointer' }}
        onClick={() =>
          setVisibleSummary(isSummaryVisible
            ? null
            : chapter.attributes.order)}
      >Chapter {chapter.attributes.order}: {chapter.attributes.title}</h2>

      {chapter.attributes.summary !== '' && chapter.attributes.summary !== null &&
        <div
          className={style.chapter__summary}
          style={{ display: isSummaryVisible ? 'block' : 'none' }}
        >{chapter.attributes.summary}</div>
      }
    </section>
  )
}