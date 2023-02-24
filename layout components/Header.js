import React, { useRef, useState } from 'react'
import css from "./Layout.module.css";
import { useRouter } from 'next/router';
import Search from "../public/search.svg";
import Image from 'next/image';
import HamburgerMenu from './HamburgerMenu';

export default function Header() {
    let router = useRouter();
    let searchRef = useRef();
    let [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

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

        <div className={css.hamburgerMenu}  >
            <button className={css.hamburgerMenuButton} ><span onPointerDown={openHamburgerMenu ? () => setOpenHamburgerMenu(false) : () => setOpenHamburgerMenu(true)} class="material-symbols-outlined">menu</span></button>

            <div className={css.hamburgerMenuBackground} style={ { display: openHamburgerMenu ? "block" : "none", transition: "1s" } }>
                <HamburgerMenu/>
            </div>

        </div>
    </div>
  )
}
