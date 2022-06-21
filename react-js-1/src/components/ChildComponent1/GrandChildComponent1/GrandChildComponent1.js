import React from "react";
import './GrandChildComponent1.css'

const GrandChildComponent1=({ title, description,backgroundColor }) =>
{
   
    return(<div className="GrandChildComponent1" style={{backgroundColor }}
    >
    <h3>{title}</h3>
    {description && <p>Description goes here - {description}</p>}

    <h2>GrandChildComponent1</h2>
    
        </div>

    )
}

export default GrandChildComponent1

/* conditional rendering- Control rendering of jsx based an a perticular condition*/