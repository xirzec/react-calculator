import {KEYPRESS} from "./actions";
import * as Immutable from "immutable";
import BigNumber from "bignumber.js";

const initialState = Immutable.fromJS({
    buffer: []
});

const emptyList = Immutable.List.of();


function isDigit(key) {
    return (key >= "0" && key <= "9");
}

function isCommand(key) {
    switch(key) {
        case "/":
        case "*":
        case "+":
        case "-":
            return true;
        default:
            return false;
    }
}

function addNumber(buffer, number) {
    if (!buffer.size) {
        return buffer.push(number);
    } else {
        const last = buffer.last();
        if(last === "0") {
            return buffer.pop().push(number);
        } else if(isDigit(last)) {
            return buffer.pop().push(last + number);
        } else {
            return buffer.push(number);
        }
    }
}

function addCommand(buffer, command) {
    if (!buffer.size) {
        return buffer.push("0").push(command);
    } else {
        const last = buffer.last();
        if(isCommand(last)) {
            return buffer.pop().push(command);
        } else {
            return buffer.push(command);
        }
    }
}

function addDecimal(buffer) {
    if (!buffer.size) {
        return buffer.push("0.");
    } else {
        const last = buffer.last();
        if(isDigit(last)) {
            if(last.indexOf(".") === -1) {
                return buffer.pop().push(last + ".");
            } else {
                return buffer;
            }
        } else {
            return buffer.push("0.");
        }
    }
}

function equal(buffer) {
    if (!buffer.size) {
        return "0";
    }
    
    let lastCommand = null;
    let result = new BigNumber(buffer.first());
    for(var i = 1; i < buffer.size; i++) {
        let current = buffer.get(i);
        // even are numbers
        if(i % 2 == 0) {
            switch(lastCommand) {
                case "/":
                    result = result.div(current);
                    break;
                case "*":
                    result = result.times(current);
                    break;
                case "+":
                    result = result.plus(current);
                    break;
                case "-":
                    result = result.minus(current);
                    break;
            }
        } else {
           // odd are commands
           lastCommand = current;
        }
    }
    
    return Immutable.List.of(result.toString());
}

function handleKeypress(state, key) {
    let buffer = state.get('buffer');
    if(isDigit(key)) {
        return state.set('buffer', addNumber(buffer, key));
    } else if(isCommand(key)) {
        return state.set('buffer', addCommand(buffer, key));
    } else if(key === ".") {
        return state.set('buffer', addDecimal(buffer));
    } else if(key === "=") {
        return state.set('buffer', equal(buffer));
    } else if(key === "C") {
        return state.set('buffer', emptyList);
    } else {
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