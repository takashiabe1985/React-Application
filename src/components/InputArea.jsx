import React from "react";

export const InputArea = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <>
      <div className="input-area">
        <input
          placeholder="Write down Todo Memo"
          value={todoText}
          onChange={onChange}
        />
        <button onClick={onClick}>subscribe!</button>
      </div>
    </>
  );
};
