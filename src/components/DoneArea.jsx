import React from "react";

export const DoneArea = (props) => {
  const { completeTodos, onClickBack, onClickCompleteDelete } = props;
  return (
    <div className="done-area">
      <p className="title">Complete-Tasks</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>Back</button>
              <button onClick={() => onClickCompleteDelete(index)}>
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
