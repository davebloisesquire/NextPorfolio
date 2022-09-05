import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dave's Home Page</title>
      </Head>
      <h1 className='text-7xl font-bold my-4'>Home Page</h1>
      <p>Welcome to the home page. Not much to see yet, but give it time.</p>
    </div>
  )
}
