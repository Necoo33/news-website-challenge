import React, { useEffect, useState } from 'react'
import styles from "../../styles/Home.module.css";
import Link from "next/link"

export default function index() {
    let [data, setData] = useState([]);
    let [filter, setFilter] = useState("tr");
    let [otherData, setOtherData] = useState([]);

    useEffect(function(){
        getData(filter, "676f017549224f488970f1835f9db971").then(param => setData(param.articles));
        //otherGetData().then(param => setOtherData(param));
    }, [filter]);

    if(!data){
        return <div>Loading...</div>
    }

    /*if(!otherData){
        return <div>Loading...</div>
    }*/

    if(!filter){
        return <div>Loading...</div>
    }

    console.log(data);

    console.log("other data:", otherData)
  
    return (
    <div>
        <h2 style={ { textAlign: "center" } }>Business News</h2>

        <div className={styles.categoryPagesFilter}>

            <div className={styles.filteringDatas}>
                <h2>Filter By Countries:</h2>

                <form className={styles.filterForm}>
                    <label>
                        <input type="radio" onChange={() => setFilter("tr")} checked={filter === "tr" ? true : false}/>
                        <span>Türkiye</span>
                    </label>

                    <label>
                        <input type="radio" onChange={() => setFilter("usa")} checked={filter === "usa" ? true : false}/>
                        <span>Amerika</span>
                    </label>

                    <label>
                        <input type="radio" onChange={() => setFilter("eng")} checked={filter === "eng" ? true : false}/>
                        <span>İngiltere</span>
                    </label>

                    <label>
                        <input type="radio" onChange={() => setFilter("fr")} checked={filter === "fr" ? true : false}/>
                        <span>Fransa</span>
                    </label>

                    <label>
                        <input type="radio" onChange={() => setFilter("ita")} checked={filter === "ita" ? true : false}/>
                        <span>İtalya</span>
                    </label>

                    <label>
                        <input type="radio" onChange={() => setFilter("ca")} checked={filter === "ca" ? true : false}/>
                        <span>Kanada</span>
                    </label>

                    <label>
                        <input type="radio" onChange={() => setFilter("esp")} checked={filter === "esp" ? true : false}/>
                        <span>İspanya</span>
                    </label>
                </form>
            </div>


            <div className={styles.newsContainer}>
                {data && data.map(function(param){
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
    </div>
  )
}

async function getData(filter, apikey){
    let request = await fetch(`https://newsapi.org/v2/top-headlines?country=${filter}&category=business&apiKey=${apikey}`);
    let response = await request.json();

    return response;
}

/*async function otherGetData(){
    let request = await fetch(`https://newsapi.org/v2/top-headlines?country=rf&category=business&apiKey=676f017549224f488970f1835f9db971`);
    let response = await request.json();

    return response;
}*/