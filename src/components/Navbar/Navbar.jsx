import React from 'react'
import './Navbar.scss'
import { maincontext } from '../context/Contextcomponent'
import { useContext } from 'react'
function Navbar() {
    let context=useContext(maincontext)
    return <>
        <div className='navbar_main'>
            <div className='navbar_icon'>
                <span className='nav_icons'><i class="fa-solid fa-beat fa-play fa-2x"></i></span>&nbsp;&nbsp;
                <h2>PLAYon</h2>
            </div>

            <div className='select'>
            <select onChange={(e) => context.setlanguage(e.target.value)} className='selector'>
            <option><p>S</p>elect Your Language</option>
                <option value="tamil">Tamil</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="telugu">Telugu</option>
                <option value="punjabi">Punjabi</option>
            </select>
        </div>
    
            
        </div>
      
    </>
}

export default Navbar
