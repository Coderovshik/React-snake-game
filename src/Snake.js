import { useState } from 'react'

function generateGrid(width, height, gridCell) {
    let cells = [];
    for (let i = 0; i < h; i++) {
        let temp = [];
        for (let j = 0; j < w; j++) {
            temp.push(<div className='empty-cell'></div>);
        }
        cells.push(temp);
    }

    return cells;
}

export 