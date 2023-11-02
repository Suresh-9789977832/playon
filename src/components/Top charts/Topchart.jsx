import React from 'react'
import { useContext } from 'react'
import './Topchart.scss'
import axios from 'axios'
import { maincontext } from '../context/Contextcomponent'

const Topchart = () => {

    const context = useContext(maincontext)


    const displaydata = async (id) => {
       
        context.setloading(true)
        let res = await axios.get(`https://saavn.me/playlists?id=${id}`)
    
        let data = res.data
       
        setTimeout(() => {
            context.setsongs(data)
            context.setopen(prev => !prev)
            context.setloading(false)

        },[1000])
    }

    console.log(context.songs)
    return <>
                        <h1 className='top_title'>Top Charts</h1>

        <div className='Top_chart'>
                
        <i class="fa-regular fa-circle-play box_open"></i>

                <div className='charts_left'>
                    {context.Top.map((e, i) => {
                           
                        return <div key={i} onClick={()=>displaydata(e.id)}>
                            <p>{i + 1}</p>
                            <span className='padding'>
                                <img src={e.image[2].link} className="chart_img" />
                                </span>
                            <div className='chart_inner'>
                                <div className='chart'>
                                <h2>{e.title}</h2>
                                    <h3>{e.language}</h3>
                                    </div>

                                <div className='chart_icon'>
                                <i class="fa-regular fa-circle-play "></i>
                                </div>

                            </div>
                               
                                </div>
                                
                               
                        })
                   }
                </div>
               
        </div>
    </>
}

export default Topchart
