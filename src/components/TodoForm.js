import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    onChangeHandle(event) {
        this.setState({text: event});
    }

    render() {
        return (
            <form className={style.TodoForm} onSubmit={(e) => {
                    e.preventDefault();
                    this.props.addTodo(this.state.text);
                    }}>
                <label>Add task:</label>
                <input
                    type='text'
                    placeholder='Type task and press Enter'
                    onChange={event => this.onChangeHandle(event.target.value)}
                    />
            </form>
        );
    }
}

export default TodoForm;
