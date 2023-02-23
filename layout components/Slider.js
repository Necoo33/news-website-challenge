import { useRouter } from 'next/router';
import React, { useEffect, useState, useRef } from 'react'
import css from "./Layout.module.css"

export default function Slider() {
    let [data, setData] = useState([]);
    let leftButtonRef = useRef();
    let rightButtonRef = useRef();
    let sliderRef = useRef();
    let [slideNews, setSlideNews] = useState(0);
    let router = useRouter()
    let [isPointerDown, setIsPointerDown] = useState(false);
    let [isImagesPressable, setIsImagesPressable] = useState(true);

    useEffect(function(){
        getData("676f017549224f488970f1835f9db971").then(param => setData(param.articles));
    }, []);

    if(!data){
        return <div>Loading...</div>
    }

    console.log(data.slice(0, 3));

    console.log("slide news:", slideNews)

    function slideToLeft(){
        setSlideNews(slideNews => slideNews === 0 ? data.slice(0, 3).length - 1 : slideNews - 1);
    }

    function slideToRight(){
        setSlideNews(slideNews => slideNews === data.slice(0, 3).length - 1 ? 0 : slideNews + 1);
    }

    function handlePointerMove(param){
        if(!isPointerDown){
            return
        }

        if(param.movementX > 0){
            param.movementX = 1;
            setSlideNews(slideNews + 1);
        } else if(param.movementX < 0){
            param.movementX = -1;
            setSlideNews(slideNews - 1);
        }
    }

    function handleScroll(){
        setIsImagesPressable(false);
    }

  return (
    <div className={css.sliderFlex}>
        <div onClick={slideToLeft} className={css.leftButton} style={ { scale: "2" } } ref={leftButtonRef}><span className="material-symbols-outlined">chevron_left</span></div>

        <div className={css.overflowHiddenTag}>
            <div className={css.sliderItself} ref={sliderRef}>
                {data && data.slice(0, 3).map(function(param){
                    return (<>
                                <div className={css.individualSliderNew} style={ { translate: slideNews === 0 ? `${slideNews+100}%` : `-${slideNews === 1 ? slideNews : slideNews + 100}%`, transition: "0.3s" } }>
                                    <img /*onPointerDown={isPointerDown ? () => setIsPointerDown(false) : () => setIsPointerDown(true)} onPointerMove={(e) => handlePointerMove(e)}*/ onPointerUp={() => router.push(param.url)} src={param.urlToImage ? param.urlToImage : "https://via.placeholder.com/700x300"} draggable="false" />
                                    <div>
                                        <p>{param.title}</p>
                                    </div>
                                </div>
                            </>
                        )
                })}
            </div>
        </div>

        <div onClick={slideToRight} className={css.rightButton} style={ { scale: "2" } } ref={rightButtonRef}><span className="material-symbols-outlined">chevron_right</span></div>
    </div>
  )
}


async function getData(apikey){
    let request = await fetch(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${apikey}`);
    let response = await request.json();

    return response;
}