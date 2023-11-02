import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const maincontext=createContext()

const Contextcomponent = ({ children }) => {

    const [Top, setTop] = useState([])
    const [language, setlanguage] = useState('tamil')
    const [Trending, setTrending] = useState([])
    const [newrelease, setnewrelease] = useState([])
    const [list, setlist] = useState([])
    const [open, setopen] = useState(false)
    const [songs, setsongs] = useState([])
    const [loading,setloading]=useState()
    const [finalsong, setfinalsong] = useState([])
    const [play, setplay] = useState(false)


    const getdata =async() => {
        let res = await axios.get(`https://saavn.me/modules?language=${language}`)
        let data = res.data.data
        console.log(data)
        setTrending(data.trending.albums)
        setTop(data.charts)
        setnewrelease(data.albums)
        setlist(data.playlists)
    }
    
    useEffect(() => {
        getdata()   
    },[language])

    return <>
        <maincontext.Provider value={{
            language, setlanguage, Top, Trending, newrelease,
            list, open, setopen, songs, setsongs, setloading, loading,
            setfinalsong,finalsong,play,setplay
        }}>
            {children}
        </maincontext.Provider>
    </>
}

export default Contextcomponent
