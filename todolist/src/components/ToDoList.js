import React from 'react';
import '../css/App.css';
import ToDo from './ToDo';

function ToDoList(props) {
    let filteredTasks = [];
    //console.log(props.tasks);
    switch (props.match.params.filter) {
        case 'completed':
            filteredTasks = props.tasks.filter(task => task.completed === true);
            break;
        case 'delete':
            filteredTasks = props.tasks.filter(task => task.completed === false);
            break;
        default:
            filteredTasks = props.tasks;
    }

    return (
        <ul>
            { filteredTasks.length > 0 ?
                filteredTasks.map((item, index) => <ToDo cle={index} key={index} modif={props.modif} tasks={filteredTasks} />)
                : "Aucune tâche à afficher."}
        </ul>
    );
}

export default ToDoList;
