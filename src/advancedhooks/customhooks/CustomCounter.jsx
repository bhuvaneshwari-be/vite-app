import useCounter from "./useCounter";

export default function CustomCounter(){
    const {count, add, subtract, multiply, divide, reset} = useCounter();

    return(
        <>
            <div>
                <h3 className="text-center">Custom Hook Example</h3>

                <h4>Count: {count}</h4>

                <button onClick={add}> + </button>
                <button onClick={subtract}> - </button>
                <button onClick={multiply}> * </button>
                <button onClick={divide}> / </button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}