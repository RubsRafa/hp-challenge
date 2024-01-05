'use client'

import { useContext, useState } from 'react'
import style from './style.module.css'
import { House, HouseContext } from '@/app/context/HouseContext'
import Image from 'next/image'

import Gryffindor from '../../assets/gryffindor.png'
import Slytherin from '../../assets/slytherin.png'
import Ravenclaw from '../../assets/ravenclaw.png'
import Hufflepuff from '../../assets/hufflepuff.png'

import SortingHat from '../../assets/sorthat.png'

export default function HomeComponent() {
  const [sort, setSort] = useState(false)
  const { house, setHouse } = useContext(HouseContext)
  const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']
  const housesImages = [Gryffindor, Slytherin, Ravenclaw, Hufflepuff]
  const sortingHatPhrases = {
    'gryffindor': 'Ahh... Very well. Courage, hmm... All right, very well. Gryffindor!',
    'slytherin': 'Hmm, challenging... Ambition and a lot of determination. I know, Slytherin!',
    'ravenclaw': 'Ahh... Curiosity, intelligence. I have no doubts, Ravenclaw!',
    'hufflepuff': 'Honesty, loyalty... I know exactly what to do with you. Hufflepuff!',
  }

  const sortHouse = () => {
    setSort(true)
    const randomIndex = Math.floor(Math.random() * houses.length)
    setHouse(houses[randomIndex].toLowerCase() as House)
    return
  }
  return (
    <section data-cy="home_page">
      <div className={style.houses}>
        <h2 className='title--small'>Choose your house!</h2>
        <ul>
          {houses.map((house, index) => (
            <li
              key={house}
              data-cy={house}
              style={{
                backgroundColor: `var(--medium--${house.toLowerCase()})`,
                border: `2px solid var(--lightest--${house.toLowerCase()})`,
              }}
              onClick={() => {
                setHouse(house.toLowerCase() as House)
                setSort(false)
              }}>
              <Image src={housesImages[index]} alt={`${house} house image`} width={200} height={200} />
            </li>
          ))}
        </ul>
      </div>
      <div className={style.sort_house}>
        <h2 className='title--extra-small'>Or let the Sorting Hat decide for you!</h2>
        <div className={style.center}>
          <div data-cy="balloon_phrase" className={style.balloon}>
            <span className={sort ? style.show : style.hidden}>{sortingHatPhrases[house]}</span>
            <div className={style.triangle} style={{
              display: sort ? 'block' : 'none'
            }}></div>
          </div>
          <Image data-cy="sorting_hat" className={sort ? style.show : style.hidden} src={SortingHat} alt={`${house} house image`} width={421} height={421} />
        </div>
        <button data-cy="sort_button" onClick={sortHouse}>Sort Me</button>
      </div>
    </section>
  )
}