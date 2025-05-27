import React from 'react'
import '../../Styles/Calender.css'
import { SquarePlus,UserPen,MoveLeft,MoveRight} from 'lucide-react'
import data from '../../data'
import scheduleData from '../../sheduledates'
import heart from '../../assets/Heart.png'
import teeth from '../../assets/Teeth.png'
import strong from '../../assets/Strong.png'
import syreng from '../../assets/green-syringe-element-vector_53876-140866-removebg-preview.png'
import eye from '../../assets/Eye.png'
import icon from '../../assets/doctor-icon-flat-art-black-white-isolated_1223784-16889-removebg-preview.png'


function Calender() {
    const today = new Date().getDate();
  return (
  <>
  <div className='calender'>
    <div className='user-icon-container'>
        <SquarePlus />
        <UserPen />
    </div>
    <div className='calender-container'>
        <div>October 2024</div>
        <div className='icon-calender-container'>
            <MoveLeft size={16} />
            <MoveRight  size={16}/>
        </div>
    </div>

    <div className='date-container'>
      {
        scheduleData.map(({day, date, times, appointments, isDisabled},index)=>(
            <div key={index} className={`date-card ${isDisabled ? 'disabled' :''} ${date==today ? 'today' :''}   `}>
                <div >
                    <p>{day}</p>
                    <p>{date}</p>
                    {
                        times.map((time,idx)=>{
                            return(
                                <>
                                <p key={idx} className={`${time=='---' ? 'no-time':appointments[idx]? 'navy-time':'light-navy-time'}`}>{time}</p>
                                </>
                            )
                        })
                    }

                </div>

            </div>
        ))
      }
    </div>





    <div className='middlecards-container'>
    <div className='middlecard-1'>
        <div className='dentist-card'>
            <div className='dentist'>
                <h5 className=''>Dentist</h5>
                 <p className='time'>09:00-11:00</p>
             <p className='time'>Dr.Ramya</p>
              
            </div>
           
               <img src={teeth} className='image-icon'/>
        </div>
    </div>


     <div className='middlecard-2'>


     <div className='dentist-card'>
            <div className='dentist'>
                <h5 className='heading'>Psysiotheraphy Appoinmentt</h5>
                 <p className='time'>09:00-11:00</p>
             <p className='time'>Dr.Ramya</p>
            </div>
           
               <img src={strong} className='image-icon'/>
        </div>

    </div>
    </div>


    <h3 className='margin'>The Upcomeing Schedule</h3>
   <p className='margin'>On Thursday</p>
    <div className='middlecards-container-2'>
    <div className='middlecard-3'>
        <div className='middle-dentist-card'>
            <div >
                <p className='healthcheckpu'>Healthcheckup Complete</p>
              <p>11:00AM</p>
            </div>

             <img src={syreng} className='image-icon'/>
           
        </div>
    </div>


     <div className='middlecard-4'>
        <div className='middle-dentist-card'>
            <div >
                <h5 className='heading-1'>Opthomologist</h5>
                 <p className='time'>14:00PM</p>
            </div>

            <img src={eye} className='image-icon'/>
            
        </div>
    </div>
    </div>
  <div className='margin'>on saturday</div>





            <div className='last-container'>
               <div className='lastcard-1'>
        <div className='middle-dentist-card'>
            <div >
                <p className='healthcheckpu'>Cardiologist</p>
              
              <p>11:00AM</p>
            </div>

             <img src={heart} className='image-icon'/>
           
        </div>
    </div>

                <div className='lastcard-1'>
        <div className='middle-dentist-card'>
            <div >
                <p className='healthcheckpu'>Neurologist</p>
              <p>11:00AM</p>
            </div>

             <img src={icon} className='image-icon'/>
           
        </div>
    </div>


    </div>

  </div>
  </>
  )
}

export default Calender
