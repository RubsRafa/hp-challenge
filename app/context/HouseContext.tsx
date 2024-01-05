'use client'

import React, { createContext, useState } from "react"

export type House = 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff'

interface HouseContextProps {
  house: House,
  setHouse: React.Dispatch<React.SetStateAction<House>>
}

const getStoredHouse = (): House => {
  if (typeof window !== 'undefined'  && window.localStorage) {
    const storedHouse = localStorage.getItem('house') as House
    return storedHouse || 'gryffindor'
  }
  return 'gryffindor'
}

const initialValue: HouseContextProps = {
  house: getStoredHouse(),
  setHouse: () => { }
}

export const HouseContext = createContext<HouseContextProps>(initialValue)

export const HouseProvider = ({ children }: { children: React.ReactNode }) => {
  const [house, setHouse] = useState<House>(getStoredHouse)
  return (
    <HouseContext.Provider value={{
      house,
      setHouse
    }}>{children}</HouseContext.Provider>
  )
}
