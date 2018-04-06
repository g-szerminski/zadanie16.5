import React from 'react';

const Todo = ({item, remove}) => {
    return (
        <li onClick={() => remove(item.id)}>{item.text}</li>
    );
};

export default Todo;