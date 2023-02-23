import React, { useRef } from 'react'
import css from "./Layout.module.css";
import { useRouter } from 'next/router';
import Search from "../public/search.svg";
import Image from 'next/image';

export default function Header() {
    let router = useRouter();
    let searchRef = useRef();

    function handleSearch(param){
        param.preventDefault();
        
        router.push(`/search/?searching=${searchRef.current.value}`);
    }

  return (
    <div className={css.headerContainer}>
        <div className={css.logo}>
            <h2>Necdet Arda Etiman</h2>
        </div>

        <div className={css.searchFormContainer}>
            <form className={css.formItself} onSubmit={handleSearch}>
                <input type="search" placeholder='search...' className={css.searchBox} name="searching" ref={searchRef}/>
                <button className={css.searchSubmit}>
                    <Image width={18} height={18} src={Search} />
                </button>
            </form>
        </div>
    </div>
  )
}
