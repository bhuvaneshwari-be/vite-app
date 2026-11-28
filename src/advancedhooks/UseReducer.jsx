import { useState, useReducer } from "react";

const initialState = 0;
function reducer(state, action){
    switch(action){
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return 0;
        
        default:
            return state;
    }
}

export default function UseReducer(){
    const [count, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <h3 className="text-center">UseReducer Example</h3>

            <h4>Count: {count}</h4>

            <button onClick={() => dispatch('increment')}> + </button>
            <button onClick={() => dispatch('decrement')}> - </button>
            <button onClick={() => dispatch('reset')}> Reset </button>
        </div>
    )
}