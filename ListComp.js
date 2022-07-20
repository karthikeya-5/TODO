import React from "react";
const ListComp=(props)=>{
    const meth=()=>{
        props.fun(props.val.key);
    }
    return(
        <>
       <b>TODO:</b> {props.val.value}&nbsp;&nbsp;&nbsp;&nbsp;<label onClick={meth}>(Delete)</label><br/>
        </>
    )
}
export default ListComp;