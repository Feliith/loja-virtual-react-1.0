import React, { Component } from 'react'
import './HomeSlider.css'
import HomeSliderData from './HomeSliderData'

class HomeSlider extends Component {

    state = {
        current: 0
    }

    prevSlide = () => {
        this.setState({
            current: this.state.current === 0 ? HomeSliderData.length - 1 : this.state.current - 1
        })
    }

    nextSlide = () => {
        this.setState({
            current: this.state.current === HomeSliderData.length - 1 ? 0 : this.state.current + 1
        })
    }

    ballSelect = (ball) => {
        let ballID = ball.target.getAttribute('id')
        this.setState({
            current: parseInt(ballID)
        })
    }

    render() {

        setTimeout(this.nextSlide, 9000);

        return (
            <div className='home-slider'>
                <button className='slider-button left' onClick={this.prevSlide}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className='slider-button right' onClick={this.nextSlide}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
                {HomeSliderData.map((item, index) => {
                    return (
                        <a key={index} href="" className={index === this.state.current ? "slide active" : "slide"}>
                            {index === this.state.current && 
                            (<img key={index} src={item.image} />)}
                        </a>
                    )
                })}
                <div className='slider-balls'>
                    {HomeSliderData.map((item, index) => {
                        return (
                            <div key={index} className="balls-wrap">
                                <input id={index} className='ball-input' type="radio" name="current" checked={index === this.state.current ? true : false} onClick={this.ballSelect} readOnly />
                                <label className='ball-label' htmlFor="current"></label>
                            </div>
                        )
                    })}
                </div>
            </div>
          )
    }
}

export default HomeSlider