import React from 'react'
import '../../Styles/Humanstructure.css'
import {ChevronDown} from 'lucide-react'
import image from '../../assets/human-body-frontal_1048-5345-removebg-preview.png'
import { Heart } from 'lucide-react'
import data from '../../data'
import HealthStatuscard from './HealthStatuscard'
import leg from '../../assets/Leg.png'

function Humanstructure() {
  
  return (
   <>
   <div className='header-1'>
   <div className='border'>
    <h3>DashBoard</h3>
    </div>
   <div className='dropdown'>
    <p>ThsWeek</p>
    <ChevronDown />
   </div>
   </div>

  


   <div className='flex'>
    <div className='image-container'>
    <img src={image} className='image '/>

      <div className="dot dot-heart" title="Heart - Healthy">
         <div className="card">
      <img src={`${data[0].image1}`}  className='image-1'/>
      <span>Healthy</span>
    </div>
      </div>


        <div className="dot dot-leg" title="Leg - Fractured">
             <div className="card-1">
     <img src={leg}  className='image-2'/>
      <span>Healthy</span>
    </div>
     
        </div>
        
    </div>

   
    <HealthStatuscard/>

   </div>
   
   
   </>
  )
}

export default Humanstructure