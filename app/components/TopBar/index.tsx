'use client'
import style from './style.module.css'
import Logo from '../../assets/hp.jpg'
import Image from 'next/image'
import { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Category, CategoryContext } from '@/app/context/CategoryContext'

export const TopBar = () => {
  const [indicatorMarginLeft, setIndicatorMarginLeft] = useState<string>('0rem')
  const [indicatorWidth, setIndicatorWidth] = useState<string>('');
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const indicatorRef = useRef(null)
  const { category, setCategory } = useContext(CategoryContext)
  const currentCategory = localStorage.getItem('category') || category

  const navItens = ['Home', 'Books', 'Characters', 'Movies', 'Potions', 'Spells']

  useEffect(() => {
    // indicatorAnim()
  }, [])

  // const indicatorAnim = () => {
  //   const btn: NodeListOf<HTMLElement> = document.querySelectorAll('li')
  //   setIndicatorMarginLeft('0rem')
  //   for (let i = 0; i < btn.length; i++) {
  //     const num = Number(btn[i].dataset.num)
  //     btn[i].onmousedown = function () {
  //       const first = document.getElementById('0')
  //       const distance = Number(first?.offsetLeft)

  //       const e = document.getElementById(num.toString())
  //       const pxToRem = Number(e?.clientWidth) / 16
  //       const offSetLeft = Number(e?.offsetLeft)

  //       const result = (offSetLeft - distance) / 16

  //       setIndicatorWidth(pxToRem.toString() + 'rem')
  //       setIndicatorMarginLeft(result.toString() + 'rem')
  //     }
  //   }

  // }

  return (
    <nav className={style.nav}>
      <Image src={Logo} alt='' />
      {/* <h4 onClick={() => setShowMenu(!showMenu)} className={`${style.category} ${style.current_category}`}>{category}</h4> */}
      {/* {showMenu && */}
      <ul className={style.navbar__itens}>
        {navItens.map((item, index) =>
          <li
            key={item}
            id={index.toString()}
            onClick={() => {
              setCategory(item as Category)
              localStorage.setItem('category', item)
              setShowMenu(false)
            }}
            className={(currentCategory == item && !showMenu) ? style.current_category : ''}
          ><Link href={`/${item === 'Home' ? '' : item.toLowerCase()}`}>{item}</Link></li>
        )}
        {/* <div
          className={style.indicator}
          ref={indicatorRef}
          style={{ marginLeft: indicatorMarginLeft, width: indicatorWidth }}
        ></div> */}
      </ul>
      {/* } */}
      <div className={style.divisor}></div>
    </nav >
  )
}