import React, { useContext } from 'react'
import { maincontext } from '../context/Contextcomponent'
import './Songs.scss'
import TextTruncate from 'react-text-truncate'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';

const Songs = () => {
    let context = useContext(maincontext)
    

    const getsong = async (id) => {
        let res = await axios.get(`https://saavn.me/songs?id=${id}`)
        let data = res.data.data
        context.setfinalsong(data)
        context.setplay(true)
    }

    
    return <>

        <div className='songs_main'>
        <span className='back' onClick={()=>context.setopen(prev=>!prev)}><ArrowBackIcon/></span>

            <div className='songs_left'>
                <img src={context.songs.data.image[2].link} />
                <h2>{context.songs.data.name}</h2>   
                <p>{context.songs.data.songs.length} Songs</p>    
            </div> 

            <div className='songs_right'>
                <div className='songs_head'>
                <h2>Songs List</h2>
                </div>

                <div className='songs_container'>
                    
                {
                    context.songs.data.songs.map((e, i) => {
                        return<div onClick={()=>getsong(e.id)}>
                        <div className='songs_item'>
                        <div className='songs_img'>
                        <img src={e.image[1].link} />
                        </div>
                        
                                <div className='songs_name'>
                                    <TextTruncate
                                        line={1}
                                        element='h3'
                                        text={e.name}
                                    />
                                    <TextTruncate line={1}
                                        element='p' text={e.primaryArtists} />
                        </div>
    
                        <div className='songs_duration'>
                                <p>{e.duration}</p>
                            </div>

    
                            </div>
                            <hr/>
                        </div>
                    })
                    }
                                        </div>


                
                
            </div>
        </div>
    </>
}

export default Songs
