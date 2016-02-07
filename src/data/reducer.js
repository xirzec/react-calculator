import {KEYPRESS} from "./actions";
import * as Immutable from "immutable";

const initialState = Immutable.fromJS({
    buffer: []
});

const emptyList = Immutable.List.of();

function handleKeypress(state, key) {
    let buffer = state.get('buffer');
    switch(key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        
        return state.set('buffer', buffer.push(key));

        break;
        
        case ".":
        return state.set('buffer', buffer.push(key));
        break;
        
        case "/":
        case "*":
        case "+":
        case "-":
        return state.set('buffer', buffer.push(key));
        break;
        
        case "=":
        return state.set('buffer', emptyList);
        break;
        
        case "C":
        return state.set('buffer', emptyList);
        break;
        
        default:
        return state;
    }
}

export default function reduce(state = initialState, action) {
    switch(action.type) {
        case KEYPRESS:
            return handleKeypress(state, action.key);
        default:
            return state;
    }
}