import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Footer from '../Components/footer'
import Header from '../Components/header'
import { HeroSection } from '../Components/HeroSection'
import Spinner from '../Components/spinner'
import styles from '../styles/Home.module.css'

export default function Home() {
const [isLoading, setIsLoading] = useState()

  return (
    < >
        <Spinner />

      <HeroSection />


    </>
  )
}
