import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import Slider from '../layout components/Slider';
import { useRouter } from 'next/router';

export default function Home() {
  let [data, setData] = useState([]);
  let router = useRouter()

  useEffect(function(){
    getData("676f017549224f488970f1835f9db971").then(param => setData(param.articles));
  }, []);

  if(!data){
    return <div>Loading...</div>
  }

  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Slider/>
      </div>

      <h2 style={ { textAlign: "center" } }>News</h2>

      <div className={styles.newsContainer}>

        {data && data.slice(3, 20).map(function(param){
          return (
            <div className={styles.individualNew}>
              <div className={styles.newImage}>
                <img src={param.urlToImage ? param.urlToImage : "https://via.placeholder.com/400x300"} onPointerUp={() => router.push(`${param.url}`)}/>
              </div>

              <div className={styles.newInfos}>
                  <h3>{param.title}</h3>
                  <p>{param.description}</p>
                  <Link href={param.url}>Habere Git...</Link>
              </div>
            </div>
          )
        })}  
      </div>  
    </div>
  )
}

async function getData(apikey){
  let request = await fetch(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${apikey}`);
  let response = await request.json();

  return response;
}
