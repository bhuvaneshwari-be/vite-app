import { Component } from "react";

export default class C_Update_State extends Component{

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    render(){
        return(
            <>
                <div>
                    <div className = {"h1 text-center text-primary"}>Simple Calculator</div>
                </div>
                <div className = {"mt-3"}>
                    <div className = {"h3"}> COUNT: {this?.state?.count} </div>
                </div>

                <div>
                    <button className={"fs-2"} onClick = {() => {this.setState ({count: this.state.count + 1}) }}>ADD</button>
                    <button className={"fs-2"} onClick = {() => {this.setState ({count: this.state.count - 1}) }}>SUB</button>
                    <button className={"fs-2"} onClick = {() => {this.setState ({count: this.state.count * 2}) }}>MUL</button>
                    <button className={"fs-2"} onClick = {() => {this.setState ({count: this.state.count / 2}) }}>DIV</button>
                    <button className={"fs-2"} onClick = {() => {this.setState ({count: 0}) }}>RESET</button>
                </div>
            </>
        )
    }
}