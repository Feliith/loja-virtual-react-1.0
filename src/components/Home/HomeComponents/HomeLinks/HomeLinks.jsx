import React from 'react'
import './HomeLinks.css'

import HomeLinksData from './HomeLinksData'

const HomeLinks = () => {
  return (
    <div className='home-links'>
        {HomeLinksData.map((item, index) => {
            return (
                <div key={index} className="home-link">
                    <a href="">
                        <img src={item.src} />
                        <p>{item.title}</p>
                    </a>
                </div>
            )
        })}
    </div>
  )
}

export default HomeLinks