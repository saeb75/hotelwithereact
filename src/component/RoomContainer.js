import React,{useContext,useState} from 'react'
import {RoomContext} from './../Content Api/RoomProvider'
import {NavLink} from 'react-router-dom'
import Roomtitle from  './RoomTitle'

export default function RoomContainer(props) {
    const [state ,setState] = useState(false)
    let {className} =props
    let context = useContext(RoomContext)
    let {featuredRoom ,id} =context
    console.log(featuredRoom)
    let threeRoom = featuredRoom.slice(0,3)
    console.log(threeRoom)
    let myrooms =  !state ? threeRoom:featuredRoom
    let handlemore=() => {
        setState(!state)
        myrooms =  state ? threeRoom:featuredRoom
        return myrooms
    }
   
    return (
        <div className="roomcontainer">
            <div className={className}>
                <Roomtitle title = 'Featured Room'/>
                <div className="card_item">
                   {  myrooms.map(item => {
                         return(
                           <div key={id} className='roomcard'>
                             <img src={item.image[0]} alt={item.name} />
                             <div className="price_section">
                              <h3>Price : $ {item.price}</h3>
                              <h3>{item.breakfast?"breakfast":"no breakfast"}</h3>
                              <h3>{item.pets?"pets":"no pets"}</h3>
                             </div>
                             <NavLink className='links' to={`/rooms/${item.slug}`} >
                                 <h2>more information</h2>
                             </NavLink>
                             </div>
                            
                         )
                     })
                    }
                </div>
                <div className="More_first" onClick={handlemore}>{!state ? 'more rooms' : 'unmore rooms'}</div>
            </div>
        </div>
    )
}
