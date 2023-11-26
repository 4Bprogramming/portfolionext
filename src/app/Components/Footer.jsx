import React from 'react'
import Link from "next/link";
import Image from "next/image";
import './Footer.css'

function Footer() {
  return (
    <footer className="light-bg flex justify-space">
    <span className="white">Copyright © 2022 <Link href="/">4B Programming</Link> - All rights reserved.</span>
    <ul className="flex">
        <li>
            <a href="" target="_blank" rel="noreferrer">
                <Image src="/icons/facebook.svg" width={24} height={24} alt="facebook-icon" />
            </a>
        </li>
        <li>
            <a href="" target="_blank" rel="noreferrer">
                <Image src="/icons/instagram.svg" width={24} height={24} alt="instagram-icon" />
            </a>
        </li>
        <li>
            <a href="" target="_blank" rel="noreferrer">
                <Image src="/icons/linkedin.svg" width={24} height={24} alt="linkedin-icon" />
            </a>
        </li>
        <li>
            <a href="" target="_blank" rel="noreferrer">
                <Image src="/icons/github.svg" width={24} height={24} alt="github-icon" />
            </a>
        </li>
        <li>
            <a href="" target="_blank" rel="noreferrer">
                <Image src="/icons/youtube.svg" width={24} height={24} alt="youtube-icon" />
            </a>
        </li>
    </ul>
</footer>
  )
}

export default Footer