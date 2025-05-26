import React from 'react'
import '../Styles/Slidebar.css'
import { LayoutDashboard } from 'lucide-react';
import { History,Calendar,SquarePlus,ChartSpline,MessageCircleMore,Phone,Settings} from 'lucide-react';
function Slidebar() {
  return (
    <div className='slidebar'>
        <h3 className='logo'><span className='span-1'>Health</span><span className='span-2'>Care.</span></h3>
    <div className='general space'>General</div>
    <div className=''>
    <div className='all-icons'>
    <div className='icon-container-1'>
        <LayoutDashboard/>
      <p>Dashboard</p>
    </div>

    <div className='icon-container'>
      <History />
      <p>History</p>
    </div>

     <div className='icon-container'>
        <Calendar />
      <p>Calandar</p>
    </div>


     <div className='icon-container'>
       <SquarePlus />
      <p>Appointment</p>
    </div>

      <div className='icon-container'>
      <ChartSpline />
      <p>Statistics</p>
    </div>




    </div>
    <div className='general'>Tools
      <div className='icon-container'>
      <MessageCircleMore />
      <p>Chat</p>
    </div>
    <div className='icon-container'>
    <Phone />
      <p>Support</p>
    </div>
    </div>


    <div className='general last'>
    <div className='icon-container'>
   <Settings />
      <p>Settings</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Slidebar