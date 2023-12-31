'use client'

import { useContext } from "react";
import HomeComponent from "./components/HomeComponent";
import { HouseContext } from "./context/HouseContext";

export default function Home() {
  const { house } = useContext(HouseContext)
  return (
    <main className={`${house}`}>
      <div className={`container`}>
        <HomeComponent />
      </div>
    </main>
  )
}
