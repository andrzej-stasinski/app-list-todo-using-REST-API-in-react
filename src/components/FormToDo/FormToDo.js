import React from 'react'
import {Form, Input, Button} from './FormToDo.css'

const FormToDo = ({onHandleInput, onAddTask, taskValue, chars}) => {
    return (
        <Form onSubmit={onAddTask}>
            <Input 
                type='text' 
                value={taskValue} 
                onChange={onHandleInput} 
                className='input'
                placeholder='type task...'
            /> 
            <Button 
                type='submit' 
            >
                Add
            </Button> 
            <div
                style={{
                    color: '#888',
                    position: 'absolute',
                    fontSize: 14,
                    left: 230, bottom: 8
                }}
            >{chars}</div>                
        </Form>
    )
}
export default FormToDo