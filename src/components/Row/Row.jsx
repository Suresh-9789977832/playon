import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useContext } from 'react';
import TextTruncate from 'react-text-truncate'; // recommend




import './Row.scss';

import { FreeMode,Navigation } from 'swiper/modules';
import axios from 'axios';
import { maincontext } from '../context/Contextcomponent';
import { useNavigate } from 'react-router-dom';

export default function Row({ fetch, name, selectbar,featureplay }) {
    
    let context = useContext(maincontext)
    

    

    const featureplaylist= async (id) => {
       
        context.setloading(true)
        let res=await axios.get(`https://saavn.me/playlists?id=${id}`)
    
        let data = res.data
       
        setTimeout(() => {
            context.setsongs(data)
            context.setopen(prev => !prev)
            context.setloading(false)

        },[1000])
    }    


    
    const displaydata = async (id) => {
       
        context.setloading(true)
        let res = await axios.get(`https://saavn.me/albums?id=${id}`)
    
        let data = res.data
       
        setTimeout(() => {
            context.setsongs(data)
            context.setopen(prev => !prev)
            context.setloading(false)

        },[1000])
    }
console.log(context.open)

    return <>
            
            <div style={{margin:"20px 0px 0 70px",display:"flex",alignItems:"center",justifyContent:"space-between"}} className='title'>
            <h2 style={{ fontWeight: 900, fontSize: "35px", color: "white", textShadow: "0 5px 8px rgba(0 , 0, 0, 0.8)" }}>{name}</h2>
            </div>

            
        <div className='swiper'>

          {
                fetch.map((e, i) => {
                 return <div key={i} className='swiper-slide' onClick={() =>featureplay?featureplaylist(e.id):displaydata(e.id)}>
                     <div style={{ display: "flex", flexDirection: "column " }} className='scroll' >
                         <div className='img_back'>
                         <i class="fa-regular fa-circle-play box_open"></i>

                             <img src={e.image[2].link} className='swiper_img' />
                             </div>
                          <TextTruncate
                              line={1}element="strong"truncateText="…"
                              text={e.name || e.title} />
                          <TextTruncate
                              line={1}element="p"truncateText="…"
                             text={e.subtitle || e.artists[0].name} />
                         
                      </div>
                      
                  </div>
                  
                  
              })
            }
          
          </div>

        
          
    
      </>

}
