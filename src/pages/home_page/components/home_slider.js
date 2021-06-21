import React from 'react'
import {Carousel} from "react-bootstrap";

export function HomeSlider() {
    return(
            <div className={'header-image'} style={{
                backgroundImage: 'url("./images/serve_bg.png")',
                backgroundPosition:"center",
                backgroundRepeat: "no-repeat", backgroundSize:"100% 100%",
            }}>
                <div className={'mask blur-image-area'}>
                    <div className={'slider-area'}>
                        <Carousel className={'carousel-slider'} nextLabel={''} prevLabel={''}>
                            <Carousel.Item className={'carousel-item'}>
                               <h1>Professional Accounting & Tax Services</h1>
                                <p>Infinite Accounts is a leading company providing quality accounting & tax services to businesses.</p>
                                <div className={'row-button'}>
                                    <button className={'btn btn-services m-2'}>  Read More  </button>
                                    <button className={'btn btn-outlines m-2'}>  Contact Us </button>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    </div>
                </div>



    )
}