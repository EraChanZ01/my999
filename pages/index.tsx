import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../Components/Layout/Layout'



const Home: NextPage = () => {
  return (
    <div className=" bg-[url('/fon.png')] bg-fixed h-full">
      <Head>
        <title>Home Gachi </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/gage.jpg" />
      </Head>
      <div className = 'h-full'>
        <Layout>
          <div className="mt-[200px]">
            <h1 className="ml-10 text-3xl font-bold text-white drop-shadow-2xl">
              НОВЫЙ МИР GACHI В GTA 5 С РЕЖИМОМ
            </h1>
            <img src="/rp.png" width="800" className="animate-bounce" />
          </div>
          <div className="ml-8 mr-[900px] h-20 border border-white rounded-full flex">
            <div className=" ">
              <Link href="/start">
                <button className=" w-[313px] h-[70px] mx-2 my-1 bg-white rounded-full text-purple-600 text-bold text-xl text-center hover:bg-purple-200">
                  КАК НАЧАТЬ ИГРАТЬ
                </button>
              </Link>
            </div>
            <img src="/online.png" width="90" className=" ml-20" />
            <h1 className="ml-5 text-lg min-w-full">
              Cейчас играют
              <p>
              </p>
            </h1>
          </div>
          <div>
          </div>
        </Layout >
      </div>
    </div>
  )
}

export default Home


