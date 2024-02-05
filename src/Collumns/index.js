import React from "react";
import EditableDiv from "./EditableText";
import NewCard from "./NewCard";
import "./CollumnsStyle.css";


const MainCollumn = () =>{


    return (
        <div className="changeText">
        <EditableDiv />
        <NewCard />
        </div>
    );
}

export default MainCollumn;