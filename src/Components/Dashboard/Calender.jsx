import React from 'react'
import '../../Styles/Calender.css'
import { SquarePlus,UserPen,MoveLeft,MoveRight} from 'lucide-react'
import data from '../../data'
import scheduleData from '../../sheduledates'
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

    {/* <div className='date-container'>
            <div className='date-card'>
                <div>
                    <p>Mon</p>
                    <h3>25</h3>
                    <p>11:00</p>
                      <p>11:00</p>
                        <p>11:00</p>
                </div>
            </div>


             <div className='date-card clicked-card'>
                <div>
                    <p>Tue</p>
                    <h3>26</h3>
                    <p>8:00</p>
                      <p className='clicked-date'>9:00</p>
                        <p>10:00</p>
                </div>
            </div>


            
             <div className='date-card'>
                <div>
                    <p>Wed</p>
                    <h3>27</h3>
                    <p>12:00</p>
                      <p>----</p>
                        <p>1:00</p>
                </div>
            </div>


            
             <div className='date-card'>
                <div>
                    <p>Thu</p>
                    <h3>28</h3>
                    <p>10:00</p>
                      <p className='clicked-date-1'>11:00</p>
                        <p>----</p>
                </div>
            </div>


             <div className='date-card'>
                <div>
                    <p>Fri</p>
                    <h3>29</h3>
                    <p>----</p>
                      <p className='clicked-date-1'>14:00</p>
                        <p>16:00</p>
                </div>
            </div>

            <div className='date-card'>
                <div>
                    <p>Sat</p>
                    <h3>30</h3>
                    <p className='clicked-date-1'>12:00</p>
                      <p >14:00</p>
                        <p>15:00</p>
                </div>
            </div>


        <div className='date-card'>
                <div>
                    <p>Sun</p>
                    <h3>31</h3>
                    <p className='clicked-date-1'>9:00</p>
                      <p>10:00</p>
                        <p>11:00</p>
                </div>
            </div>
    </div> */}

        
    {/* <div className="date-container">
      {scheduleData.map((item, index) => (
        <div
          key={index}
          className={`date-card ${
            item.clickedTime ? 'clicked-card' : ''
          }`}
        >
          <div>
            <p>{item.day}</p>
            <h3>{item.date}</h3>
            {item.times.map((time, idx) => (
              <p
                key={idx}
                className={
                  time === item.clickedTime
                    ? item.day === 'Tue'
                      ? 'clicked-date'
                      : 'clicked-date-1'
                    : ''
                }
              >
                {time}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div> */}


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
           
               <img src={`${data[3].image4}`} className='image-icon'/>
        </div>
    </div>


     <div className='middlecard-2'>
        {/* <div className='dentist-card'>
            <div className='dentist'>
                <h5 className='heading'>Psysiotheraphy Appoinment</h5>
                <p className='time'>09:00-11:00</p>
             <p className='time'>Dr.Ramya</p>
            </div>
            
             <img src={`${data[5].image6}`} className='image-icon'/>
        </div>
    </div> */}

     <div className='dentist-card'>
            <div className='dentist'>
                <h5 className='heading'>Psysiotheraphy Appoinmentt</h5>
                 <p className='time'>09:00-11:00</p>
             <p className='time'>Dr.Ramya</p>
            </div>
           
               <img src={`${data[5].image6}`} className='image-icon'/>
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
                {/* <img src={`${data[4].image5}`} className='image-icon'/> */}
              <p>11:00AM</p>
            </div>

             <img src={`${data[6].image7}`} className='image-icon'/>
           
        </div>
    </div>


     <div className='middlecard-4'>
        <div className='middle-dentist-card'>
            <div >
                <h5 className='heading-1'>Opthomologist</h5>
                 <p className='time'>14:00PM</p>
            </div>

            <img src={`${data[7].Image8}`} className='image-icon'/>
            
        </div>
    </div>
    </div>
  <div className='margin'>on saturday</div>


 {/* <div className='middlecards-container-3'>
    <div className='middlecard-5'>
        <div className='dentist-card'>
            <div className='dentist'>
                <h5>Dentist</h5>
                <img src={`${data[4].image5}`} className='image-icon'/>
            </div>
            <p className='time'>09:00-11:00</p>
             <p className='time'>Dr.Ramya</p>
        </div>
    </div>


     <div className='middlecard-6'>
        <div className='dentist-card'>
            <div className='dentist'>
                <h5 className='heading'>Psysiotheraphy Appoinment</h5>
                <img src={`${data[5].image6}`} className='image-icon'/>
            </div>
            <p className='time'>09:00-11:00</p>
             <p className='time'>Dr.Ramya</p>
        </div>
    </div>
    </div> */}



            <div className='last-container'>
               <div className='lastcard-1'>
        <div className='middle-dentist-card'>
            <div >
                <p className='healthcheckpu'>Healthcheckup Complete</p>
                {/* <img src={`${data[4].image5}`} className='image-icon'/> */}
              <p>11:00AM</p>
            </div>

             <img src={`${data[0].image1}`} className='image-icon'/>
           
        </div>
    </div>

                <div className='lastcard-1'>
        <div className='middle-dentist-card'>
            <div >
                <p className='healthcheckpu'>Healthcheckup Complete</p>
                {/* <img src={`${data[4].image5}`} className='image-icon'/> */}
              <p>11:00AM</p>
            </div>

             <img src={`${data[8].Image9}`} className='image-icon'/>
           
        </div>
    </div>


    </div>

  </div>
  </>
  )
}

export default Calender