import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../Components/Layout/Layout'



const Home: NextPage = () => {
  return (
    <div className=" bg-[url('/fon.png')] bg-fixed">
      <Head>
        <title>Home Gachi </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/gage.jpg" />
      </Head>
      <div>
        <Layout>


          <div className="mt-[200px]">
            <h1 className="ml-10 text-3xl font-bold text-white drop-shadow-2xl">
              НОВЫЙ МИР GACHI В GTA 5 С РЕЖИМОМ
            </h1>
            <img src="/rp.png" width="800" className="animate-bounce" />

          </div>

          <div className="ml-8 mr-[900px] h-20 border border-white rounded-full flex">



            <div className=" ">
              <a href="/start">
                <button className=" w-[313px] h-[70px] mx-2 my-1 bg-white rounded-full text-purple-600 text-bold text-xl text-center hover:bg-purple-200">
                  КАК НАЧАТЬ ИГРАТЬ
                </button>
              </a>

              </div>
              
              <img src="/online.png" width="90" className=" ml-20" />
              <h1 className="ml-5 text-lg min-w-full">
                Cейчас играют
                <p>
                  
                </p>
              </h1>

          </div>
        <div>
          11
          <br/>
          11
          <br/>
          11
          <br/>
          11
          <br/>
          11
        </div>
           
           
        </Layout >


      </div>











      <br />



    </div>
  )
}

export default Home


