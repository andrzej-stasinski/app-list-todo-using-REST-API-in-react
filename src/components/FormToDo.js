import React from 'react'
import {Form, Input, Button} from './FormToDo.css'

const FormToDo = ({onHandleInput, onAddTask, taskValue}) => {
    return (
        <Form onSubmit={onAddTask}>
            <Input 
                type='text' 
                value={taskValue} 
                onChange={onHandleInput} 
            /> 
            <Button 
                type='submit' 
            >
                Add
            </Button>                 
        </Form>
    )
}
export default FormToDo