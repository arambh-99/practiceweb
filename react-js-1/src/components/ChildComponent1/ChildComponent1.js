import React from 'react'

import './ChildComponent1.css'

import GrandChildComponent1 from './GrandChildComponent1/GrandChildComponent1'

     

const ChildComponent1 = () => {
    return ( <div className='ChildComponent1' >
        <h1> ChildComponent1</h1>
        <GrandChildComponent1 title='Heading 1' description='this is the discription' backgroundColor='red'/>
        <GrandChildComponent1 title='Heading 2' description='this is the discription' backgroundColor='blue'/>
        </div>
        )

}

//you can use components as much time
// ../
// ./ for current forder

//inline css  style={{ 
    //     backgroundColor: 'red'
        
    // }}

    //internal css
// let mainDivStyle ={  backgroundColor: 'red'}


   
//style={mainDivStyle}
export default ChildComponent1