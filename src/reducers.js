import { FETCH_USERLIST } from "./actions";

export default (state,action) => {
    console.log("789");
    switch (action.type) {
        case FETCH_USERLIST:
            return {...state};
        default:
            return state;
    }
}