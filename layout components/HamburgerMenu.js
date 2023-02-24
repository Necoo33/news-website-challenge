import { useRouter } from 'next/router'
import React from 'react'
import css from "./Layout.module.css"
import Link from 'next/link';

export default function HamburgerMenu() {
    let router = useRouter();

  return (
    <div className={css.hmenuContainer}>
        <div className={css.hmenuItself}>
            <Link className={css.links} href="/">Home</Link>
            <Link className={css.links} href="/about">About Me</Link>
            <Link className={css.links} href="/business">Business</Link>
            <Link className={css.links} href="/entertainment">Entertainment</Link>
            <Link className={css.links} href="/general">General</Link>
            <Link className={css.links} href="/health">Health</Link>
            <Link className={css.links} href="/science">Science</Link>
            <Link className={css.links} href="/sports">Sports</Link>
            <Link className={css.links} href="/technology">Technology</Link>
        </div>
    </div>
  )
}
