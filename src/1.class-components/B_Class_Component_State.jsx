import { Component } from "react";

export default class B_Class_Component_State extends Component{

    constructor(){
        super()
        this.state = {
            name: "Bhuvaneshwari",
            age : 22,
            address : "South Street, Srivaikundam",
            degree : "B.E",
            district : "Thoothukudi",
            state : "Tamilnadu"
        }
    }

    render(){
        return(
            <>
                <div>
                    <div className={"h2 text-primary text-center"}>Personal Details</div>
                </div>

                <div className = {"mt-3"}>
                    <div>
                        <span className = {"fs-2"}>Name:</span>
                        <span className = {"fs-2"}> {this.state.name} </span>
                    </div>

                    <div>
                        <span className = {"fs-2"}>Age:</span>
                        <span className = {"fs-2"}> {this.state.age} </span>
                    </div>

                    <div>
                        <span className = {"fs-2"}>Address:</span>
                        <span className = {"fs-2"}> {this.state.address} </span>
                    </div>

                    <div>
                        <span className = {"fs-2"}>Degree:</span>
                        <span className = {"fs-2"}> {this.state.degree} </span>
                    </div>
                </div>
            </>
        )
    }
}