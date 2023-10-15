import { DOMAttributes, Dispatch, MouseEventHandler, SetStateAction } from "react";

type cellProps = {
  id:number,
  go: string,
  setGo: Dispatch<SetStateAction<string>>;
  cells:string[]
  cell:string 
  setCells:Dispatch<SetStateAction<string[]>>
  winningMessage:string
};

const Cell = ({go, setGo, id, cells, setCells, cell, winningMessage}: cellProps) => {
  

  const handleClick = (e) => {
    const taken = !!cells[id];

    if(winningMessage) {
      return
    }

    if(!taken) {
      if(go ==="circle") {
        handleCellChange("circle")
        setGo("cross")
      } else if(go === "cross"){
        handleCellChange("cross")
        setGo("circle");
      }
      
    }

    

  }
  const handleCellChange = (cellToChange: string) => {
       let copyCells = [...cells];
       copyCells[id] = cellToChange;
       setCells(copyCells);
  }
    return (
      <div className="square" onClick={handleClick}>
        <div className={cell} >{(cell ?  cell === "circle" ? "O":  "X" : '')}</div>
      </div>
      
    )
}

export default Cell;