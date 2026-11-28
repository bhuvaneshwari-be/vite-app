import { useState } from "react";

export default function useCounter(){
    const [ count, setCount ] = useState(0);

    function add(){
        setCount(count + 1);
    }

    function subtract(){
        setCount(count - 1);
    }

    function multiply(){
        setCount(count * 2);
    }

    function divide(){
        setCount(count / 2);
    }

    function reset(){
        setCount(0);
    }

    return { count, add, subtract, multiply, divide, reset } ;
}