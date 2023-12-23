'use client'
import style from './style.module.css'
import Logo from '../../assets/hp.jpg'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export const TopBar = () => {
  const [indicatorMarginLeft, setIndicatorMarginLeft] = useState<string>('0rem')
  const [indicatorWidth, setIndicatorWidth] = useState<string>('');
  const indicatorRef = useRef(null)

  const navItens = ['Home', 'Books', 'Characters', 'Movies', 'Potions', 'Spells']

  useEffect(() => {
    indicatorAnim()
  }, [])

  const indicatorAnim = () => {
    const btn: NodeListOf<HTMLElement> = document.querySelectorAll('li')
    setIndicatorMarginLeft('0rem')
    for (let i = 0; i < btn.length; i++) {
      const num = Number(btn[i].dataset.num)
      btn[i].onmousedown = function () {
        const first = document.getElementById('0')
        const distance = Number(first?.offsetLeft)

        const e = document.getElementById(num.toString())
        const pxToRem = Number(e?.clientWidth) / 16
        const offSetLeft = Number(e?.offsetLeft)

        const result = (offSetLeft - distance) / 16

        setIndicatorWidth(pxToRem.toString() + 'rem')
        setIndicatorMarginLeft(result.toString() + 'rem')
      }
    }

  }
  return (
    <nav className={style.nav}>
      <Image src={Logo} alt='' />
      <ul className={style.navbar__itens}>
        {navItens.map((item, index) =>
          <li
            key={item}
            id={index.toString()}
          >{item === 'Books' ? <Link href={'/books'}>{item}</Link> : item}</li>
        )}
        <div
          className={style.indicator}
          ref={indicatorRef}
          style={{ marginLeft: indicatorMarginLeft, width: indicatorWidth }}
        ></div>
      </ul>
      <div className={style.divisor}></div>
    </nav >
  )
}