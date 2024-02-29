import './App.css';
import { useEffect, useState } from 'react';
import TaskForm from './Components/TaskForm';
import ListTasks from './Components/ListTasks';

function App() {
  const [toDoList, setToDoList] = useState([])

  useEffect(()=>{
    setToDoList(JSON.parse(localStorage.getItem("toDoList")))
  }, [])

  const addPost = (newPost) => {
    const arrayWithNewPost = [...toDoList, newPost]
    setToDoList(arrayWithNewPost)
    localStorage.setItem("toDoList", JSON.stringify(arrayWithNewPost))
  }

  const deletePost = (noteId) => {
    const copiedtodoList = [...toDoList]
    const deletedIdList = copiedtodoList.filter(note => note.id !== noteId)
    setToDoList(deletedIdList)
    localStorage.setItem("toDoList", JSON.stringify(deletedIdList))
  }
  return (
    <div className="App">
      <TaskForm addPost={addPost} toDoList={toDoList} setToDoList={setToDoList}/>
      <ListTasks toDoList={toDoList} setToDoList={setToDoList} deletePost={deletePost}/>
    </div>
  );
}

export default App;
