import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'

export const BannerSliders = () => {
    const data = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            title: 'Fresh Vegetables & Fruits at your doorstop',
            description: 'We deliver fresh vegetables & fruits at your doorstop',
            button: 'https://www.google.com'
        },
        {
            id: 2,
            image:'https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title: 'Fresh Vegetables & Fruits at your doorstop',
            description: 'We deliver fresh vegetables & fruits at your doorstop',
            button: 'https://www.google.com'
        } 
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };    

  return (
    <div className='bannerslider'>
        <Slider className='bannerslider' {...settings}>
            {
                data.map(item=>{
                    return (
                        <div className='imagecont' key={item.id}>
                            <img src={item.image} alt='noimg' />
                            <div className='content'>
                                <h1>{item.title}</h1>
                                <span>{item.description}</span>
                                <button>Shop More</button>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}
