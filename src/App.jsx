import React from 'react'
import { fetchPhotos,fetchVideos, fetchGifs, fetchStickers } from './api/mediaApi'

const App = () => {
  return (
    <div>
      <button onClick={()=>fetchPhotos("cat")} className='px-2 py-2 bg-red-800 rounded-lg m-10'>Photos</button>
      <button onClick={()=>fetchVideos("cat")} className='px-2 py-2 bg-red-800 rounded-lg m-10'>Videos</button>
      <button onClick={()=>fetchGifs("cat")} className='px-2 py-2 bg-red-800 rounded-lg m-10'>Gifs</button>
      <button onClick={()=>fetchStickers("cat")} className='px-2 py-2 bg-red-800 rounded-lg m-10'>Stickers</button>
    </div>
  )
}

export default App
