import React from 'react'
import css from "./Layout.module.css";
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
    let router = useRouter();

    console.log(router.asPath)
  return (
    <div className={css.navbarContainer}>
        <div className={css.navbarLinks}>
            <Link className={css.links} href="/" style={ { borderBottom: router.asPath === "/" ? "2px solid black" : "none" } }>Home</Link>
            <Link className={css.links} href="/about" style={ { borderBottom: router.asPath === "/about" ? "2px solid black" : "none" } }>About Me</Link>
            <Link className={css.links} href="/business" style={ { borderBottom: router.asPath === "/business" ? "2px solid black" : "none" } }>Business</Link>
            <Link className={css.links} href="/entertainment" style={ { borderBottom: router.asPath === "/entertainment" ? "2px solid black" : "none" } }>Entertainment</Link>
            <Link className={css.links} href="/general" style={ { borderBottom: router.asPath === "/general" ? "2px solid black" : "none" } }>General</Link>
            <Link className={css.links} href="/health" style={ { borderBottom: router.asPath === "/health" ? "2px solid black" : "none" } }>Health</Link>
            <Link className={css.links} href="/science" style={ { borderBottom: router.asPath === "/science" ? "2px solid black" : "none" } }>Science</Link>
            <Link className={css.links} href="/sports" style={ { borderBottom: router.asPath === "/sports" ? "2px solid black" : "none" } }>Sports</Link>
            <Link className={css.links} href="/technology" style={ { borderBottom: router.asPath === "/technology" ? "2px solid black" : "none" } }>Technology</Link>
        </div>
    </div>
  )
}
