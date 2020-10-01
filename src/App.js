
import React from 'react'
import Accordion from './accordion'

function App(){

    const items=[{
        title:'what is react',
        description:'React is a UI component based library'
    },
    {
        title:'Who made React',
        description:"It's made by facebook"
    },
    {
        title:'Why we use React',
        description:'It uses virtual dom and its fast as compare to another framework or library'
    }


]
    return(
        <React.Fragment>
           <Accordion items={items}/>

          
        </React.Fragment>
    )
}

export default App;