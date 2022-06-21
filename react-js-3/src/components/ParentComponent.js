import { useEffect } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {

    useEffect(()=>
    {
        console.log("[ParentComponent] Component Mounted!")
    },[])
return (
    <>
    <div> ParentComponent</div>
    <ChildComponent/>

</>)
};

export default ParentComponent;