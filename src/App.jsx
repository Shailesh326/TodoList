import React, { useState } from "react";
import TodoList from "./TodoList";

const App =()=>{
    const[input,setInput]= useState("");
    const[inputList,setList]= useState([]);

    
    const inputEvent =(event)=>{
         setInput(event.target.value);
    }

    const list=()=>{
        setList((olditems) =>{
            return[...olditems,input];
        });
        setInput("");
    }

    const deleteItems=(id)=>{
        console.log("deleted");

        setList((olditems) =>{
           return  olditems.filter((arrElement,index)=>{
                return index!==id;
            })
        });
        
    }
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1 className="heading">Todo List</h1>
                <br/>
                <input type="text" placeholder="Add a Item" onChange={inputEvent} value={input}/>
                <button onClick={list}>+</button>
                <ul style={{listStyle : "none" }}> 
                    {inputList.map((itemval,index) => {
                        return <TodoList text={itemval}
                                id={index}
                                key={index}
                                onSelect={deleteItems}/>
                    })}
                </ul>
            </div>
        </div>
        </>
    );
}

export default App;