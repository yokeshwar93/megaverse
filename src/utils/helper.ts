import { Positions } from "./types";
import { COMETH_OBJECT, EMPTY_OBJECT, POLYANET_OBJECT, SOLOONS_COLOUR, SOLOON_OBJECT } from './constants'
const getPositions = (goal: string[][]) : Positions => {
    const positions: Positions = {
        SOLOON: [],
        POLYANET: [],
        COMETH: []
    }
    for(let row = 0; row < goal.length; row++) {
        for(let column = 0; column < goal[0].length; column++) {
            const object = goal[row][column];
            if(object !== EMPTY_OBJECT) {
                if(object === POLYANET_OBJECT) {
                    positions.POLYANET.push({
                        row,
                        column
                    })
                } else if(object.includes(COMETH_OBJECT)) {
                    const direction = object.split('_')[0];
                    positions.COMETH.push({
                        row,
                        column,
                        direction: direction.toLowerCase()
                    })
                } else if(object.includes(SOLOON_OBJECT)) {
                    const color = object.split('_')[0] as string;
                    positions.SOLOON.push({
                        row,
                        column,
                        color: color.toLowerCase() as SOLOONS_COLOUR
                    })
                }
            }
        }
    }
    return positions
}
export default getPositions;