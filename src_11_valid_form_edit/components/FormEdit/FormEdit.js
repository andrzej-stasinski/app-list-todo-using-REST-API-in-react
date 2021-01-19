import React, { Component } from 'react'
import {LinkStyled} from './FormEdit.css'
import {getOne, REST_API_URL, update} from '../../helpers/api'
import {Form, Input, Button} from '../FormToDo/FormToDo.css'
import {withRouter} from 'react-router-dom'

class FormEdit extends Component {

    state = {
        taskItem: null,
        fetched: false,
        errors: '',
    }

    getId = () => this.props.match.params.id

    componentDidMount = async () =>  {
        const id = this.getId()
        console.log('Edit', id)
        const task = await getOne(id)
        console.log(task)
        this.setState({ taskItem: task, fetched: true });
    }

    InputEdit = (e) => {
        this.setState({ taskItem: {
            ...this.state.taskItem, 
            text: e.target.value,
            date: new Date().toLocaleString(),
            },
            errors: '' 
        });
    }
    CheckboxEdit = (e) => {
        console.log(e.target.checked)
        this.setState({ taskItem: {
            ...this.state.taskItem, 
            done: e.target.checked,
            },
            errors: '' 
        });
    }

    // fetch by helper
    // -----------------
    SubmitData = async(e) => {
        e.preventDefault()

        const textValue = this.state.taskItem.text
        if(!textValue) {
            this.setState({ errors: 'Required' });
            return
        } else if(textValue.length <= 3) {
            this.setState({ errors: 'Too short, min 3 chars' });
            return            
        }

        const task = this.state.taskItem
        console.log(task)
        const res = update(
            this.getId(), 
            {...this.state.taskItem}
        )
        res
        .then(() => {
            console.log('PUT ok')
            this.props.history.push('/')
        })
        .catch(err => console.log('PUT failure', err))
    }

    // fetch - only
    // ----------------
    // SubmitData = async(e) => {
    //     e.preventDefault()
    //     const task = this.state.taskItem
    //     console.log(task)
    //     const test = REST_API_URL(this.getId())
    //     console.log(test)
    //     const response = await fetch(REST_API_URL(this.getId()),{
    //         method: 'PUT',
    //         headers: {
    //             'Content-type': 'application/json',
    //         },         
    //         body: JSON.stringify(this.state.taskItem)
    //     }).then(() => console.log('Modified'))
    //     .catch(err => console.log(err))
    // }

    render() {
        // console.log(this.props)
        // console.log(this.state.taskItem)
        const id = this.getId()
        return (
            <div>
                <h2>FormEdit</h2>
                {/* <h4>params id = {id}</h4> */}
                {
                this.state.fetched
                ? <div>
                    <h4>Data fetched loaded</h4>
                    <div style={{color: 'red',}}
                    >
                        {this.state.errors}
                    </div>
                    <Form onSubmit={this.SubmitData}>
                        <Input 
                            type='text' 
                            value={this.state.taskItem.text} 
                            onChange={this.InputEdit} 
                            placeholder='type task'
                        />
                        <label style={{marginLeft: 10, }}
                        >done
                            <input 
                                type='checkbox'
                                checked={this.state.taskItem.done}
                                onChange={this.CheckboxEdit}
                                style={{marginLeft: 5, marginTop: 10,}}
                            />                            
                        </label>

                        <Button>Save</Button>
                    </Form>
                </div>
                : <div>
                    <h4>Loading...</h4>
                </div>
                }
                <br/>
                <LinkStyled to='/'>ToDo List</LinkStyled>
            </div>
        )
    }
}
export default FormEdit