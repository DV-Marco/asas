import React, { useState } from 'react';
import './App.css';

type FormElement = React.FormEvent<HTMLFormElement>;

interface  itask {
  name: string,
  done: boolean
}

function App(): JSX.Element {

  const [newTask, setNewTask] = useState<string>('');
  const [task, setTask] = useState<itask[]>([]);

  const handleAction = (e: FormElement) => {
      e.preventDefault();
      addTask(newTask);
      console.log(task);
  }

  const addTask = (name: string) => {
    const newTask: itask[] = [...task, {name, done: false}];
    setTask(newTask);
  }

  return (
    <div className="App">
      <form action="submit" onSubmit={handleAction}>
        <input type="text" onChange={e => setNewTask(e.target.value)} value={newTask} />
        <button>Submit</button>
      </form>
      {
        task.map(task => {
          return <h1>{task.name}</h1>
        })
      }
   </div>
  );
}

export default App;
