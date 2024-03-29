'use client'
import style from './style.module.css'
import Logo from '../../assets/hp.jpg'
import Image from 'next/image'
import { useContext, useState } from 'react'
import Link from 'next/link'
import { Category, CategoryContext } from '@/app/context/CategoryContext'
import { HouseContext } from '@/app/context/HouseContext'

export const TopBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [hover, setHover] = useState<string | null>('')
  const { category, setCategory } = useContext(CategoryContext)
  const { house } = useContext(HouseContext)

  const navItens = ['Home', 'Books']

  return (
    <nav data-cy="nav" className={`${house} ${style.nav}`}>
      <Image src={Logo} alt='' />
      <ul className={style.navbar__itens}>
        {navItens.map((item, index) =>
          <li
            key={item}
            id={index.toString()}
            data-cy={item}
            onMouseEnter={() => setHover(item)}
            onMouseLeave={() => setHover(null)}
            onClick={() => {
              setCategory(item as Category)
              setShowMenu(false)
            }}
            className={(category == item && !showMenu) ? style.current_category : ''}
            style={{
              borderBottom: category == item ? `1px solid var(--lightest--${house})` : '',
              color: (category == item || hover == item) ? `var(--lightest--${house})` : 'var(--neutral-white)',
            }}
          ><Link href={`/${item === 'Home' ? '' : item.toLowerCase()}`}>{item}</Link></li>
        )}
      </ul>
      <div className={style.divisor}></div>
    </nav >
  )
}