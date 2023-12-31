import React from "react";

const TodoList = (props)=>{
    return(
        <>
        <div className="item">
            <i className="fa fa-times" aria-hidden="true" 
            onClick={()=>{
                    props.onSelect(props.id);
            }}></i>
            <li>{props.text}</li>
        </div>
        </>
    );
}

export default TodoList;