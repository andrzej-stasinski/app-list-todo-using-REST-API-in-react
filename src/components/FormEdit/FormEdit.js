import React, { Component } from 'react'
import {LinkStyled} from './FormEdit.css'
import {getOne, REST_API_URL, update} from '../../helpers/api'
import {Form, Input, Button} from '../FormToDo/FormToDo.css'

class FormEdit extends Component {

    state = {
        taskItem: null,
        fetched: false,
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
            } 
        });
    }

    SubmitData = async(e) => {
        e.preventDefault()
        const task = this.state.taskItem
        console.log(task)
        const res = update(
            this.getId(), 
            {...this.state.taskItem}
        )
        res
        .then(() => console.log('PUT ok'))
        .catch(err => console.log('PUT failure', err))
    }

    render() {
        const id = this.getId()
        return (
            <div>
                <h2>FormEdit</h2>
                <h4>params id = {id}</h4>
                {
                this.state.fetched
                ? <div>
                    <h4>Data fetched</h4>
                    <div>
                    <Form onSubmit={this.SubmitData}>
                        <Input type='text' value={this.state.taskItem.text} onChange={this.InputEdit} 
                        />
                        <Button>Save</Button>
                    </Form>
                    </div>
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