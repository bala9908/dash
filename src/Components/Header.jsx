import React from 'react'
import '../Styles/Header.css'
import {Bell,Search} from 'lucide-react'
function Header() {
  return (
   <>
   <div className='header'>
    <div className='input-element'>
      <div className='search-icon'>
         <Search size={16}/>
      </div>
        <input type='text' className='input'  />
        <div className='icon'>
       <i class="fa-solid fa-bell"></i>
        </div>
    </div>
   </div>
   </>
  )
}

export default Header