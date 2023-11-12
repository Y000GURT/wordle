import React from "react";
import "../styles/rowSquare.css";
import Square from "./Square";

function RowSquare({colorClass, children}) {

  if(!colorClass) {
    return (
      <div className="rowSquare">
        <Square>{children ? children[0] : null}</Square>
        <Square>{children ? children[1] : null}</Square>
        <Square>{children ? children[2] : null}</Square>
        <Square>{children ? children[3] : null}</Square>
        <Square>{children ? children[4] : null}</Square>
      </div>
    )
  }
  return (
    <div className='rowSquare' >
      <Square colorClass={colorClass[0]}>{children ? children[0] : null}</Square>
      <Square colorClass={colorClass[1]}>{children ? children[1] : null}</Square>
      <Square colorClass={colorClass[2]}>{children ? children[2] : null}</Square>
      <Square colorClass={colorClass[3]}>{children ? children[3] : null}</Square>
      <Square colorClass={colorClass[4]}>{children ? children[4] : null}</Square>
    </div>
  );
}

export default RowSquare;
