import { ApiInstance } from "./utils/apiInstance";
import { API_ENDPOINTS, CANDIDATE_ID, COMETH_OBJECT, POLYANET_OBJECT, SOLOON_OBJECT } from "./utils/constants";
import getPositions from "./utils/helper";
import { Positions } from "./utils/types";

class App {
    goal: string[][];
    apiInstance: ApiInstance;
    positions: Positions;
    constructor() {
        this.goal = [];
        this.apiInstance = new ApiInstance();
        this.positions = {
            COMETH: [],
            SOLOON: [],
            POLYANET: []
        }
    }
    async getGoal() {
        const data = await this.apiInstance.get(API_ENDPOINTS.MAP);
        this.goal = data.goal;
        return data.goal;
    }
    getPoisitions() {
        const positions = getPositions(this.goal);
        this.positions = positions
    }
    async createObject(objectType: string) {
        let objects;
        let url = API_ENDPOINTS.POLYANET;
        switch(objectType) {
            case POLYANET_OBJECT:
                objects = this.positions.POLYANET;
                break;
            case COMETH_OBJECT:
                objects = this.positions.COMETH;
                url = API_ENDPOINTS.COMETH;
                break;
            case SOLOON_OBJECT:
                objects = this.positions.SOLOON;
                url = API_ENDPOINTS.SOLOON;
                break;
            default:
                objects = this.positions.POLYANET;            
        }
        for(let i = 0; i < objects.length; i++) {
            setTimeout(() => {
                this.apiInstance.post(url, {...objects[i], candidateId: CANDIDATE_ID})
            }, (i + 1) * 2000 )
        }
    }
    async deleteObject(objectType: string, params: {row: number, column: number}) {
        let url = API_ENDPOINTS.POLYANET;
        switch(objectType) {
            case COMETH_OBJECT:
                url = API_ENDPOINTS.COMETH;
                break;
            case SOLOON_OBJECT:
                url = API_ENDPOINTS.SOLOON;
                break;
            default:
                url = API_ENDPOINTS.SOLOON;            
        }
        await this.apiInstance.delete(url, {...params, candidateId: CANDIDATE_ID})
    }
}
const initApp = async () => {
    const app = new App();
    const goal = await app.getGoal();
    if(goal) {
        app.getPoisitions();
        app.createObject(POLYANET_OBJECT);
        app.createObject(COMETH_OBJECT);
        app.createObject(SOLOON_OBJECT);
    }
}
initApp();