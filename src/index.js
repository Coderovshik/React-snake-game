import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Main {
  static vel;
  static snake;
  static interval;

  static calculateSnake() {
    let tempSnake = this.snake.slice();
    for (let i = tempSnake.length - 1; i >= 1; i--) {
      tempSnake[i] = tempSnake[i - 1].slice();
    }
    tempSnake[0] = [tempSnake[0][0] + this.vel[0], tempSnake[0][1] + this.vel[1]];

    this.snake = tempSnake;
  }

  static setVel(vel) {
    this.vel = vel;
  }

  static {
    this.vel = [0, 1];
    this.snake = [[7, 7], [7, 6], [7, 5]];

    window.addEventListener('keydown', (ev) => {
      if (ev.defaultPrevented || ev.repeat) {
        return;
      }

      let vel;

      switch (ev.key) {
        case "ArrowDown":
          vel = [0, 1];
          break;
        case "ArrowUp":
          vel = [0, -1];
          break;
        case "ArrowLeft":
          vel = [-1, 0];
          break;
        case "ArrowRight":
          vel = [1, 0];
          break;
        default:
          break;
      }

      Main.setVel(vel);
    });

    this.interval = setInterval(() => {
      Main.calculateSnake();
      root.render(<App snake={Main.snake}/>);
    }, 100);
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
