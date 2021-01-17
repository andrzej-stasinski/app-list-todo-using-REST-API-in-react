import React from 'react'

const FormToDo = ({onHandleInput, onAddTask, taskValue}) => {
    return (
        <div className='form'>
            <input 
                type='text' 
                value={taskValue} onChange={onHandleInput} 
                className='form__input'
            /> 
            <button onClick={onAddTask} 
                className='form__button'
            >
                Add
            </button>                 
        </div>
    )
}
export default FormToDo