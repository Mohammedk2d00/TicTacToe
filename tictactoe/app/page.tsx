"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Cell from './components/Cell';

export default function Home() {

  const winingCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState("")
  useEffect(() => {
      winingCombos.forEach((combo) => {
        const circleWins = combo.every((cell) => cells[cell] ==="circle")
        const crossWins = combo.every((cell) => cells[cell]=== "cross")

        if(circleWins) {
          setWinningMessage("Circle Wins!!!")
        } else if (crossWins) {
          setWinningMessage("Cross Wins !!!")
        }
      })
  }, [cells])

   useEffect(() => {
    if(cells.every((cell) => cell !== "") && !winningMessage) {
      setWinningMessage("Draw!!")
    }
   }, [cells, winningMessage])
  return (
    <div className='container'>
      <div className='gameBoard'>
        {cells.map((cell, index) => (
         <Cell go={go}
          setGo={setGo}
          key={index} 
          id={index} 
          cells={cells} 
          cell={cell}
          setCells={setCells} 
          winningMessage={winningMessage}
          />
        ))}
      
      </div>
      <div>{winningMessage}</div>
      <div>{ !winningMessage &&`it's ${go} turn!`}</div>
    </div>
)}
