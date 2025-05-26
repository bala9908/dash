import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Slidebar from './Components/Slidebar'
import Header from './Components/Header'
import Humanstructure from './Components/Dashboard/Humanstructure'
import Activity from './Components/Dashboard/Activity'
import HealthStatuscard from './Components/Dashboard/HealthStatuscard'
import Calender from './Components/Dashboard/Calender'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className='main-page'>
    <div className='main-flex'>
      <Slidebar />         
    <div className='twocomponet'> 
        <Header />
        <Humanstructure />
  </div>

    </div>
    </div> */}


    <div className="main-page">
  <div className="main-flex ">
    <Slidebar />
   
    <div className="main-content">
       <Header />
      <Humanstructure/>
      <Activity/>
    
    </div>
    
    <Calender/>
      
      <div>
      </div>
     
  </div>
   
</div>
    </>
  )
}

export default App
