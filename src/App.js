// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const c = console.log;
const gridColors = ["#E5FDD1", "#C9F4AA"];

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function Cell({ row, col }) {
  let color = gridColors[(row + col) % 2];

  return <div style={{ backgroundColor: color }} className='cell'></div>;
}

function AppleGrid() {
  let w = 15, h = 15;
  let cells = [];
  for (let i = 0; i < h; i++) {
    let temp = [];
    for (let j = 0; j < w; j++) {
      temp.push(<div className='empty-cell'></div>);
    }
    cells.push(temp);
  }
}

function SnakeGrid({ snake }) {
  let w = 15, h = 15;
  let cells = [];
  for (let i = 0; i < h; i++) {
    let temp = [];
    for (let j = 0; j < w; j++) {
      temp.push(<div className='empty-cell'></div>);
    }
    cells.push(temp);
  }

  for (let i = 1; i < snake.length; i++) {
    cells[snake[i][1]][snake[i][0]] = <div className='snake-body-piece'></div>;
  }
  cells[snake[0][1]][snake[0][0]] = <div className='snake-head'></div>;

  return <div className='snake-grid'>{cells}</div>;
}

function Grid() {
  let w = 15, h = 15;
  let cells = [];
  for (let i = 0; i < h; i++) {
    let temp = [];
    for (let j = 0; j < w; j++) {
      temp.push(<Cell row={i} col={j} />);
    }

    cells.push(temp);
  }

  return (
    <div className='grid'>
      {cells}
    </div>
  );
}

function Game({snake}) {

  return (
    <>
      <Grid />
      <SnakeGrid snake={snake}/>
    </>
  );
}

export default Game;