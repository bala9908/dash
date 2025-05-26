import React from 'react'
import data from '../../data'
import '../../Styles/Healthstatuscard.css'
import teeth from '../../assets/Teeth.png'
import lung from '../../assets/Lungs.png'
import bone from '../../assets/Bones.png'
function HealthStatuscard() {
  return (
    <>
   
 <div className='container'>
  <div className='healthcard'>
   <div className='healthcard-content'>
    <img src={lung} className='partimage' />
    <p >Lungs</p>
   </div>
   <p className='date'>Date:18-Nov-2024 </p>
   <div className='bar'>
    <div className="bar-fill"></div>
   </div>
   
  </div>

   <div className='healthcard'>
   <div className='healthcard-content'>
    <img src={teeth} className='teethimage' />
    <p >Teeth</p>
   </div>
   <p className='date'>Date:18-Nov-2024 </p>
   <div className='bar-teeth'>
    <div className="bar-fill-1"></div>
   </div>
   
  </div>


   <div className='healthcard'>
   <div className='healthcard-content'>
    <img src={bone} className='partimage' />
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