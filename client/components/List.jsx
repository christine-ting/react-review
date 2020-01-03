import React from 'react';
import ListEntry from './ListEntry.jsx';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            todos: []
        }
    }

    onChangeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitHandler(event) {
        event.preventDefault(); // make sure you do this when you have onSubmit
        let currentTodos = this.state.todos;
        currentTodos.push(this.state.todo);
        this.setState({
            todos: currentTodos,
            todo: ''
        }, () => console.log(this.state));
        document.getElementById('form').reset();
    }

    render() {
        return (
            <div>
                <form id="form" onSubmit={this.onSubmitHandler.bind(this)}>
                    <label>
                        New Todo:
                        <input name="todo" required onChange={this.onChangeHandler.bind(this)}/>
                    </label>
                    <input type="submit" value="submit"/> 
                </form>
                <ul>
                    {this.state.todos.map((todo, i) => 
                        <ListEntry todo={todo} key={i} index={i}/>)}
                </ul>
            </div>
        )
    }
}