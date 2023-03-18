import React from 'react'
import './HomeCategories.css'
import img1 from '../../ASSESTS/Images/1.jpg'
import img2 from '../../ASSESTS/Images/2.jpg'
import img3 from '../../ASSESTS/Images/3.jpg'
import img4 from '../../ASSESTS/Images/5.jpg'


export const HomeCategories = () => {
  return (
    <div className='homecategories'>
        <div className='container'>
            <img src={img1} alt='img1' />
            <div className='content'>
                <h1>Vegetables at your doorstep</h1>
                <p>Shop vegetables now</p>
            </div>
        </div>
        <div className='container'>
             <img src={img2} alt='img2' />
             <div className='content'>
                <h1>Vegetables at your doorstep</h1>
                <p>Shop vegetables now</p>
            </div>
        </div>
        <div className='container'>
             <img src={img3} alt='img3' />
             <div className='content'>
                <h1>Vegetables at your doorstep</h1>
                <p>Shop vegetables now</p>
            </div>
        </div>
        <div className='container'>
             <img src={img4} alt='img4' />
             <div className='content'>
                <h1>Vegetables at your doorstep</h1>
                <p>Shop vegetables now</p>
            </div>
        </div>
    </div>
  )
}
