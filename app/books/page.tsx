'use client'

import React, { useContext } from "react"
import BooksContent from "../components/Books"
import { HouseContext } from "../context/HouseContext"

const BookPage = () => {
  const { house } = useContext(HouseContext)
  return (
    <main className={`${house}`}>
      <div className={`container`}>
        <BooksContent />
      </div>
    </main>
  )
}

export default BookPage