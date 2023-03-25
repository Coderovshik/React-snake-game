import { useState } from 'react'

function generateEmptyGrid(width, height, gridCell) {
    let cells = [];
    for (let i = 0; i < height; i++) {
        let temp = [];
        for (let j = 0; j < width; j++) {
            temp.push(gridCell);
        }
        cells.push(temp);
    }

    return cells;
}

export default generateEmptyGrid;