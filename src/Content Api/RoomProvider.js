import React, { Component, createContext } from 'react'
import items from './../data'


const RoomContext = createContext()

 class RoomProvider extends Component {



    state ={

        rooms : [],
        image : [],
        featuredRoom :[],
        slug : []
        
    }


    componentDidMount(){
  
 
          let  rooms = this.RoomsInfo(items)
          let image = rooms.map(item => {
              return item.image
          })
          let featuredRoom = rooms.filter(item => {
              return item.featured === true
          })
          this.setState({
              rooms:rooms,
              image,
              featuredRoom
          })
       
        

    
    }
        
    RoomsInfo(items){
          let template =  items.map(item => {
       
            let id = item.sys.id
            let image = item.fields.images.map(image => {
              return  image.fields.file.url
              
            })
        
            let room = {...item.fields,image,id}
            return room
            })
         return template
        }

        
    render() {
        
        return (
            <RoomContext.Provider value={{...this.state}} >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}


export {RoomProvider,RoomContext}