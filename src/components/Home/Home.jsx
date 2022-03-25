import React from 'react'
import './Home.css'

import HomeSlider from './HomeComponents/HomeSlider/HomeSlider'
import HomePromotion from './HomeComponents/HomePromotion/HomePromotion'
import HomeLinks from './HomeComponents/HomeLinks/HomeLinks'

const Home = () => {
  return (
    <section className='home'>
        <div className='home-banner'>
            <HomeSlider />
            <div>
                <HomePromotion src="promotion-01" />
                <HomePromotion src="promotion-02" />
            </div>
        </div>
        <HomeLinks />
    </section>
  )
}

export default Home