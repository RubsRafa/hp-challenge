'use client'

import { useContext } from 'react'
import style from './style.module.css'
import { House, HouseContext } from '@/app/context/HouseContext'
import Image from 'next/image'

import Gryffindor from '../../assets/gryffindor.png'
import Slytherin from '../../assets/slytherin.png'
import Ravenclaw from '../../assets/ravenclaw.png'
import Hufflepuff from '../../assets/hufflepuff.png'

export default function HomeComponent() {
  const { house, setHouse } = useContext(HouseContext)
  const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']
  const housesImages = [Gryffindor, Slytherin, Ravenclaw, Hufflepuff]

  const sortHouse = () => {
    const randomIndex = Math.floor(Math.random() * houses.length)
    setHouse(houses[randomIndex].toLowerCase() as House)
    return
  }
  return (
    <div>
      <div className={style.houses}>
        <h2>Choose your house!</h2>
        <ul>
          {houses.map((house, index) => (
            <li
              key={house}
              // className={`${house.toLowerCase()}`}
              style={{
                backgroundColor: `var(--medium--${house.toLowerCase()})`,
                border: `2px solid var(--lightest--${house.toLowerCase()})`,
              }}
              onClick={() => {
                localStorage.setItem('house', house.toLowerCase())
                setHouse(house.toLowerCase() as House)
              }}>
              <Image src={housesImages[index]} alt={`${house} house image`} width={421} height={421} />
            </li>
          ))}
        </ul>
      </div>
      <div className={style.sort_house}>
        <h2>Or let the Sorting Hat decide for you!</h2>
        <button onClick={sortHouse} className={`${house}`}>Sort Me</button>
      </div>
    </div>
  )
}