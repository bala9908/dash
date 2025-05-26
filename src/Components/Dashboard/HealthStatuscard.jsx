import React from 'react'
import data from '../../data'
import '../../Styles/Healthstatuscard.css'
function HealthStatuscard() {
  return (
    <>
   
 <div className='container'>
  <div className='healthcard'>
   <div className='healthcard-content'>
    <img src={`${data[2].image3}`} className='partimage' />
    <p >Lungs</p>
   </div>
   <p className='date'>Date:18-Nov-2024 </p>
   <div className='bar'>
    <div className="bar-fill"></div>
   </div>
   
  </div>

   <div className='healthcard'>
   <div className='healthcard-content'>
    <img src={`${data[3].image4}`} className='teethimage' />
    <p >Teeth</p>
   </div>
   <p className='date'>Date:18-Nov-2024 </p>
   <div className='bar-teeth'>
    <div className="bar-fill-1"></div>
   </div>
   
  </div>


   <div className='healthcard'>
   <div className='healthcard-content'>
    <img src={`${data[4].image5}`} className='partimage' />
    <p >Bone</p>
   </div>
   <p className='date'>Date:18-Nov-2024 </p>
   <div className='bar-teeth'>
    <div className="bar-fill-2"></div>
   </div>
   
  </div>
</div>
   
    </>
  )
}

export default HealthStatuscard