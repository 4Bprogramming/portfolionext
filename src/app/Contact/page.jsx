"use client";
import React from 'react'
import Email from '../Component/Email/Email'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import Link from 'next/link'
// import whatsapp from '../../assets/WhatsApp.png'
// import './Contac.css'

function page() {
  return (
    <>
    <div id='contact'>

          
              {/* <Email/> */}
           

          <div >
          <span >Argentina</span>
          <Link href='https://api.whatsapp.com/send?phone=5492612060231'>
              <AiFillGithub className='gitHub'/>
              {/* <img src={whatsapp}  className='gitHub' /> */}
          </Link>
         
          <Link href='https://www.instagram.com/4b_programing/'>
              <BsInstagram className='instagram'/>
          </Link>
          <span >Venezuela</span>
          <Link href='https://api.whatsapp.com/send?phone=584127471315'>
              <AiFillGithub className='gitHub'/>
              {/* <img src={whatsapp}  className='gitHub' /> */}
              
          </Link>
          </div>
         
    </div>
    </>
  )
}



export default page;
