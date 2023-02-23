import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import styles from "../../styles/Home.module.css"
import Link from "next/link"

export default function index() {
    let router = useRouter();
    let createSearchParam = new URLSearchParams(router.asPath.substring(router.asPath.lastIndexOf("?"), router.asPath.length));
    let getSearchParam = createSearchParam.get("searching");
    let [data, setData] = useState([]);

    useEffect(function(){
        getData("676f017549224f488970f1835f9db971").then(param => setData(param.articles));
      }, []);

    if(!createSearchParam){
        return <div>Loading...</div>
    }

    if(!data){
        return <div>Loading...</div>
    }

    console.log(data)

    console.log(getSearchParam, getSearchParam.toLocaleLowerCase());

    let filterTheNews = data.filter(function(param){
        return JSON.stringify(param).toLocaleLowerCase().includes(getSearchParam.toLocaleLowerCase());
    });

  return (
    <div>
        <h2>Word Which Searched: {getSearchParam}</h2>

        <div className={styles.newsContainer}>
            {data && filterTheNews.map(function(param){
                return (
                    <div className={styles.individualNew}>
                        <div className={styles.newImage}>
                            <img src={param.urlToImage ? param.urlToImage : "https://via.placeholder.com/400x300"}/>
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