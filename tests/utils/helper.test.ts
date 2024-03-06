import getPositions from "../../src/utils/helper";
import { PHASE_1_EXPECTED, PHASE_1_GOAL, PHASE_2_EXPECTED, PHASE_2_GOAL } from "../__mocks__/mocks";

test('Phase 1 polyanets', () => {
    const polyanets = getPositions(PHASE_1_GOAL).POLYANET;
    expect(polyanets).toEqual(PHASE_1_EXPECTED);
});

test('Phase 2', () => {
    const positions = getPositions(PHASE_2_GOAL);
    expect(positions).toMatchObject(PHASE_2_EXPECTED)
});