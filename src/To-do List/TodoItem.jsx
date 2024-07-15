import React from 'react';

const ToDoItem = ({ item, onComplete, onDelete }) => {
  return (
    <li className="flex justify-between items-center bg-gray-200 p-2 my-2 rounded">
      <span className={item.completed ? 'line-through' : ''}>{item.text}</span>
      <div>
        <button
          className="bg-green-500 text-white px-2 py-1 rounded mr-2"
          onClick={() => onComplete(item.id)}
        >
          {item.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
