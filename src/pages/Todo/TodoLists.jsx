import React from 'react';

const data = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Doe', age: 30 },
  { id: 3, name: 'Bob Smith', age: 40 },
];

const TodoLists = () => {
  return (
    <div className='Auth-form-container'>
        <div className="Auth-form-content">
        <h3 className="Auth-form-title text-center">Todo List</h3>

    <table className='my-table'>
      <thead>
        <tr>
          <th>Tasks</th>
          <th>Assignee</th>
          <th>Due Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>"Status"</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div></div>
  );
};

export default TodoLists;
