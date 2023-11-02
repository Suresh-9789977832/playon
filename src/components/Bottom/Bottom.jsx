import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import './Bottom.scss'
import { ArrowBack, Loop, Pause } from '@mui/icons-material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import DownloadIcon from '@mui/icons-material/Download';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import { maincontext } from '../context/Contextcomponent';
import { VolumeOff } from '@mui/icons-material';
import truncateText from "truncate-text-between-words";

// 
const Bottom = () => {
    const audio = useRef()


    const [current, setcurrent] = useState('https://aac.saavncdn.com/916/38084e59336a125977e8f94b96e25bdf_96.mp4')
    const [volume, setvolume] = useState(50)
    const [time, settime] = useState(0)
    const [name, setname] = useState('song name')
    const [beforetime, setbeforetime] = useState(0)
    const [img, setimg] = useState('/images/pro.webp')
    const [artist,setartist]=useState('Artist')

    const context=useContext(maincontext)
    let play = context.play
    let setplay = context.setplay
    
    const toogleplay = () => {
        !play ? audio.current.play() : audio.current.pause()
        setplay(prev => !prev)

    }

    

    useEffect(() => {

        audio.current.volume = volume / 100

        if (play) {
            let duration_ = Math.floor(audio?.current?.duration)
            settime(duration_)
          
        }
        },[volume, play])

    
    const handletime= ()=> {
        let currenttime = (audio?.current?.currentTime)
        setbeforetime(currenttime)
    }


        function handlechange(e){
            let current = Number(e.target.value)
            audio.current.currentTime =current
            setbeforetime(current)
        }
        
    const playafter = () => {
        setbeforetime(audio.current.currentTime+=10)
    }
    const playbefore = () => {
        setbeforetime(audio.current.currentTime-=10)
        }

    function format(time) {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60)
            const sec = Math.floor(time % 60)
            return `${minutes}:${sec < 10 ? "0": ""} ${sec}`
        } else {
            return '00:00'
        }
       
    }

    console.log(current)
    
    useEffect(() => {
        audio.current.play()
        
    }, [current])
    

    useEffect(() => {
        {context.finalsong.map((e) => {
            return setcurrent(e.downloadUrl[2].link)  
        })}
        
        
        {context.finalsong.map((e) => {
            return  setname(e.name)
        })
        }

          
        {context.finalsong.map((e) => {
            return  setartist(e.primaryArtists)
        })
        }

          
        {context.finalsong.map((e) => {
            return  setimg(e.image[2].link)
        })
        }
        
        
    },[context.finalsong])
console.log(context.finalsong)
    return <>
      

     

        <div className='bottom_box'>
       
            <div className='bottom_first'>
                
                <div className='bottom_img'>
                    <img src={img} />
                </div>
                <div className='bottom_title'>

                    <span className='bottom_name'>
                            
                        <strong>{truncateText(name, 20)}</strong>
                    </span>
                    <p className='bottom_astist'>{truncateText(artist, 20)}</p>
                </div>
                </div>
                



                <div className='bottom_middle'>
                <audio ref={audio}  src={current}  onTimeUpdate={handletime}/>
                <div className='bottom_top'>
                    <span><Loop/></span>
                    <span><SkipPreviousIcon/></span>
                    <span onClick={toogleplay}>
                        {
                            play?<Pause/>:<PlayArrowIcon />

                        }
                    </span>
                    <span><SkipNextIcon /></span>
                    <span><ShuffleIcon/></span>
                </div>
                
                <div className='bottom_bottom'>
                    <p className='icon' onClick={playbefore}><FastRewindIcon/></p>&nbsp;
                    <p>{(format(beforetime)) }</p>&nbsp;
                    <input type='range' className='range' value={beforetime}  max={time} onChange={e=>handlechange(e)}/>
                    &nbsp;<p>{format(time)}</p>&nbsp;
                    <p className='icon' onClick={playafter}><FastForwardIcon/></p>
                </div>
            </div>

            <div className='bottom_last'>
                <div className='bottom_download'>
                    <span><DownloadIcon />
                    
                    </span>
                </div>

                <div className='bottom_speaker'>
                    <div onClick={()=>setvolume(prev=>prev > 0?0:100)}>
                        {
                            volume == '0' ?  <VolumeOff style={{ color: "white" }}/> :  <VolumeUpIcon style={{ color: "white" }}/>
                            
                            
                        }
                       
                        </div>

                    <div><input type='range' className='soundplay' min={0} max={100}
                            value={volume} onChange={e=>setvolume((e.target.value))}/></div> 
                </div>
 
            </div>  
            </div>
            
        
    </>
}
export default Bottom

