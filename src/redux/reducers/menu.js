import { TOGGLE_MENU } from "../actions/menu";

const initState = {
    toggled: false
};

export default function(state = initState, action) {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                toggled: !state.toggled
            };
        default:
            return state
    }
};