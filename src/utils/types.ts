import { SOLOONS_COLOUR } from './constants'

export type Goal = string[][];

interface Polyanet {
    row: number,
    column: number
}

interface Cometh extends Polyanet {
    direction: string
}

interface Soloon extends Polyanet {
    color: SOLOONS_COLOUR
}

export type Positions = {
    COMETH: Cometh[];
    SOLOON: Soloon[];
    POLYANET: Polyanet[]
}
export type RequestParam = {
    row: number;
    column: number;
    direction?: string;
    color?: string;
    candidateId: string;
}
export type DeleteRequestParam = {
    row: number;
    column: number;
    candidateId: string;
}