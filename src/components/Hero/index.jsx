import React from 'react'
import "./styles.css"
export const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className='hero__container-text'>
                    <p className="hero__min_title">Our blog</p>
                    <h1 className="hero__title">Stories and interviews</h1>
                    <p className=" hero__text">Subscribe to learn about new product features, the latest in technology, solutions, and updates. </p>



                </div>

                <div className="subscribe">
                    <form className="subscribe__form" action="">
                        <input className="subscribe__input" type="email" name="" id="" placeholder=" Enter your email" />
                        <p className="subscribe__form-info">We care about your data in our  <a class="subscribe__link_privacy" href="#">privacy policy</a></p>
                        <button className="subscribe__btn" type="submit"> Subscribe</button>

                    </form>
                    <p className="subscribe__form-info-mobile">We care about your data in our  <a class="subscribe__link_privacy" href="#">privacy policy</a></p>

                   

                </div>
            </div>
        </>
    )
}
