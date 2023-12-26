/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import style from './style.module.css'

const BooksContent = () => {
  return (
    <section className={style.books__section}>
      <div className={style.book__card}>
        <Image className={style.book__image} src="https://potterdb.com/_next/image?url=https%3A%2F%2Fwww.wizardingworld.com%2Fimages%2Fproducts%2Fbooks%2FUK%2Frectangle-1.jpg&w=1920&q=70" alt="" width={229} height={354} />
        <div className={style.book_content__card}>
          <h3>Harry Potter and the Philosopher's Stone</h3>
          <h5>J. K. Rowling</h5>
          <h5>26.6.1997</h5>
        </div>
        <button className={style.book__read_button}>Read</button>
      </div>
    </section>
  )
}

export default BooksContent