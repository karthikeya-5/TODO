import React, { useState } from "react";
import ListComp from "./ListComp";
const List=()=>{


    const [data,setData]=useState([]);
    const [ele,setEle]=useState("");
    const [count,setCount]=useState(0);

    
    
    const fun=(e)=>{
        e.preventDefault();
        
        let obj={
            key:count,
            value:ele
        }

        setCount(count+1);
        data.push(obj);
        
        setData(data.filter(meth));
    }

    function meth(tempo) {  
        return tempo;
      }
   
    const callback=(Key)=>{
        console.log(Key);
        function meth1(tempo) {  
            return tempo.key!=Key;
          }    
        setData(data.filter(meth1));
    }
      
    const handleChange=(e)=>{
        setEle(e.target.value);
      }
      
    let kp=data.map((ele)=>(
        <ListComp val={ele} fun={callback}/>
    ));
    return(     
        <>
        
        <form onSubmit={fun}>
                   <input type={"text"} name="name" onChange={handleChange} ></input><br></br>
        <input type={"submit"} value="Add"  ></input>
        </form>

        {kp}
        
        </>
    );
}
export default List;