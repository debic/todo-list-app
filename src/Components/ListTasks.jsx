import React from 'react'
import { useEffect, useState } from 'react';
import ListMaping from './ListMaping'

export default function ListTasks({toDoList, setToDoList, deletePost}) {
    const [toDo, setToDo] = useState([])
  const [inProgres, setInProgres] = useState([])
  const [done, setDone] = useState([])
  useEffect(() => {
    const filterToDo = toDoList.filter((list) => list.status === 'toDo')
    const filterInProgress = toDoList.filter((list) => list.status === 'InProgress')
    const filterDone = toDoList.filter((list) => list.status === 'done')
    setToDo(filterToDo)
    setInProgres(filterInProgress)
    setDone(filterDone)
  },[toDoList])


  return (
    <div className='folders'>
    <div  className='folder'>
      <h2>To do</h2>
      <ListMaping   toDoList={toDo} deletePost={deletePost}  />
    </div>
    <div  className='folder'>
      <h2>In Progres</h2>
      <ListMaping  toDoList={inProgres} deletePost={deletePost}  />
    </div>
    <div  className='folder'>
      <h2>Done</h2>
      <ListMaping   toDoList={done} deletePost={deletePost} />
    </div>
        
  </div>
  )
}
