import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dave's Home Page</title>
      </Head>
      <h1>Home Page</h1>
      <p>Welcome to the home page. Not much to see yet, but give it time.</p>
    </div>
  )
}
