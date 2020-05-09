import React from 'react'
import Header from '../component/Header'

import RoomContainer from './../component/RoomContainer'
export default function Home() {
    return (
        <div className="home">
            <Header />
            <RoomContainer className = {`featuredroom`} />
            <div></div>
            <RoomContainer  />
        
        </div>
    )
}
