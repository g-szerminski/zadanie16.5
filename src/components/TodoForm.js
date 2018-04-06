import React from 'react';
import style from './TodoForm.css';

// const TodoForm = props => {
//     let entry = '';
//     return (
//         <form className={style.TodoForm} onSubmit={event => {event.preventDefault(); props.addTodo(props.text)}>
//             <label>Add "ToDo" task</label>
//             <input
//                 type='text'
//                 palceholder='Type task and press Enter'
//                 onChange={event => props.change(event.target.value)}
//                 value={props.text}
//                 />
//         </form>
//     );
// }

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
