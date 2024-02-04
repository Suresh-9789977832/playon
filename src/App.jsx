import Navbar from './components/Navbar/Navbar'
import { maincontext } from './components/context/Contextcomponent'
import Bottom from './components/Bottom/Bottom'
import Topchart from './components/Top charts/Topchart'
import { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Bars } from 'react-loading-icons'
import Row from './components/Row/Row'
import Songs from './components/Songs/Songs'
import { ArrowBack } from '@mui/icons-material'

function App() {

  
  const context = useContext(maincontext)
  

   
  
  return <>
    {
            context.loading?(    <span style={{ position: "absolute",zIndex:"1",left:"600px",bottom:"240px" }}>{<Bars speed={1} className='bars'/>} </span>
            ):""
    }    
    
  
    <div className='background_image'></div>
    <div className='blur_effect'>
    {
      !context.open?( <div>

      <Navbar /> 
      <div className='trending'>

          <Row fetch={context.Trending} name={"Trending"} selectbar={true} featureplay={false} />   
      </div>
        <div className='Top'>
        <Topchart/>
      </div>
      <div className='new_release'>
        <Row fetch={context.newrelease}  name={"New Release"} selectbar={false} featureplay={false}/>
      </div>
        <div className='playlist'>
       <Row fetch={context.list} name={"Featured Playlists"} selectbar={false} featureplay={true}/>
      </div>



    </div>):(<div className='blur_effect'>
            <Songs/>      
  </div>

          )
        
      }
      <Bottom />

   
      
</div>


  
    

   
    

    
  </>
}

export default App
