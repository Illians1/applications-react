import React from 'react';
import '../css/App.css';

function ToDo(props) {
    let newTasks = [];
    props.tasks.forEach(task => {
        newTasks.push(task);
    });
    const changeCompleted = () => {
        if (newTasks[props.cle].completed === true) {
            newTasks[props.cle].completed = false
            props.modif(newTasks);
        } else {
            newTasks[props.cle].completed = true;
            props.modif(newTasks);
        }
    }

    return (

        <li className="list-group-item d-flex align-items-center">
            <span>{props.tasks[props.cle].title}</span>
            <button className={"btn btn-sm ml-auto " + (props.tasks[props.cle].completed ? 'btn-success' : 'btnoutline-success')} onClick={changeCompleted} >&#x2713;</button>
        </li>
    );
}

export default ToDo;