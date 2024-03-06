export const PHASE_1_GOAL = [
    ['SPACE', 'SPACE', 'SPACE', 'SPACE'],
    ['POLYANET', 'SPACE', 'SPACE', 'SPACE'],
    ['SPACE', 'SPACE', 'POLYANET', 'SPACE']
]
export const PHASE_1_EXPECTED = [
    { row: 1, column: 0},
    { row: 2, column: 2}
] 
export const PHASE_2_GOAL = [
    ['SPACE', 'SPACE','SPACE','SPACE'],
    ['SPACE','POLYANET', 'WHITE_SOLOON','POLYANET'],
    ['SPACE','SPACE','POLYANET','SPACE'],
    ['POLYANET','RIGHT_COMETH','SPACE','POLYANET']
]
export const PHASE_2_EXPECTED = {
    POLYANET: [
        {row: 1, column: 1},
        {row: 1, column: 3},
        {row: 2, column: 2},
        {row: 3, column: 0},
        {row: 3, column: 3}
    ],
    COMETH: [
        {row: 3, column: 1, direction: 'right'}
    ],
    SOLOON: [
        {row: 1, column: 2, color: 'white'}
    ]
}