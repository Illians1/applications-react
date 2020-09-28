import '../css/App.css';
import React, { useRef } from 'react';
function AddTask(props) {

    const newTask = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.modif(newTask.current.value);
        newTask.current.value = "";
    }

    return (
        <>
            <h1 className="m-3">Nouvelle tâche</h1>
            <div className="card mx-3">
                <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label form="taskName">Nom de la tâche</label>
                        <input type="text" className="form-control" name="taskName" id="taskName" required ref={newTask} />
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Créer</button>
                </form>
            </div>
        </>
    );
}

export default AddTask;