'use client'

import React, { createContext, useState } from "react"

export type Category = 'Home' | 'Books'

interface CategoryContextProps {
  category: Category,
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
}

const getStoredCategory = (): Category => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedCategory = localStorage.getItem('category') as Category
    
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

  return (
    <CategoryContext.Provider value={{
      category,
      setCategory
    }}>{children}</CategoryContext.Provider>
  )
}
