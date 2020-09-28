import '../css/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ToDoList from './ToDoList';
import NavBar from './Navbar';
import AddTask from './AddTask';
import initialData from '../data/initialData'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState(initialData);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://jsonplaceholder.typicode.com/todos/?userId=1")

      setTasks(result.data);
    };
    fetchData();
  }, []);

  console.log(tasks);
  function modifTask(newTask) {
    setTasks(newTask);
  }

  function addTask(newTask) {
    const newT = {
      id: "4",
      title: newTask,
      completed: false
    }
    setTasks([...tasks, newT]);
  }
  return (
    <section id="todo">
      <h1 className="m-3">Liste de tâches</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/add-task" render={(props) => <AddTask {...props} modif={addTask} />} />
          <Route path="/:filter?" render={(props) => <ToDoList {...props} delete={modifTask} modif={modifTask} tasks={tasks} />} />
        </Switch>
        <NavBar />
      </BrowserRouter>
    </section>
  );
}

export default App;
