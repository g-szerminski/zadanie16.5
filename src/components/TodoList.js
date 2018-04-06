import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => {
    let listTodo = props.dataList.map(element => {
        return <Todo item={element} remove={props.removeTodo} key={element.id} />
    })
    return (
        <ol className={style.TodoList}>
            {listTodo}
        </ol>
    );
};

export default TodoList;