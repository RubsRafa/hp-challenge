'use client'

import React, { createContext, useState } from "react"

export type Category = 'Home' | 'Books' | 'Characters' | 'Movies' | 'Potions' | 'Spells'

interface CategoryContextProps {
  category: Category,
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
}

const getStoredCategory = (): Category => {
  if (typeof window !== 'undefined') {
    const storedCategory = localStorage.getItem('category') as Category
    console.log(storedCategory)
    return storedCategory || 'Home'
  }
  return 'Home'
}

const initialValue: CategoryContextProps = {
  category: getStoredCategory(),
  setCategory: () => { },
}

export const CategoryContext = createContext<CategoryContextProps>(initialValue)

export const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState<Category>(getStoredCategory())
  console.log(category)
  return (
    <CategoryContext.Provider value={{
      category,
      setCategory
    }}>{children}</CategoryContext.Provider>
  )
}
