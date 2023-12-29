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
        className={style.chapter__title}
        onClick={() =>
          setVisibleSummary(isSummaryVisible
            ? null
            : chapter.attributes.order)}
      >Chapter {chapter.attributes.order}: {chapter.attributes.title}</h2>
      <div className={`${!isSummaryVisible && style.chapter__summary_hide} ${style.chapter__summary}`}>{chapter.attributes.summary}</div>

    </section>
  )
}