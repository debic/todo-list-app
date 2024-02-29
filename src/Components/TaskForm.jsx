import React from 'react'
import {  useState } from 'react';
import { nanoid } from 'nanoid';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TaskForm({addPost}) {
    const [text, setText] = useState('')
    const [type, setType] = useState('Urgent')

    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handlePostText = (e) => {
        setText(e.target.value)
    }
    const handleSelect = (e) => {
        setType(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            id: nanoid(),
            text: text,
            createDate: new Date().toLocaleDateString(),
            type: type,
            status: 'toDo'
        }
        addPost(newPost);
        setText("")
        setType('Urgent')
    }

  return (
    <>
            <Button className="mainCTA"  onClick={handleShow}>Add task</Button>
            <Modal show={show} onHide={handleClose}>
                    <form onSubmit={handleSubmit}>
                        <Form.Label className="label" htmlFor="exampleColorInput">To Do</Form.Label>
                        <Form.Control onChange={handlePostText} className="textArea" as="textarea" rows={3} name="text" value={text} />
                        <Form.Label className="label label2" htmlFor="exampleColorInput">Type</Form.Label>
                        <Form.Select onChange={handleSelect}>
                            <option value="Urgent">Urgent</option>
                            <option value="NotUrgent">Not Urgent</option>
                            <option value="Bonus">Bonus</option>
                        </Form.Select>
                        <Button className="formCTA" type='submit' onClick={handleClose}>Save note</Button>
                        <Button className="formCTA" variant="secondary" onClick={handleClose}> Close </Button>
                    </form>
            </Modal>

            
    </>
  )
}
