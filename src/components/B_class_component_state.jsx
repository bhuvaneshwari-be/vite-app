import { Component } from "react";

export default class B_class_component_state extends Component(){
    constructor(){
        super()
        this.state = {
            candidateName : "Bhuvaneshwari",
            candidateAge : 22
        }
    }
    
    render(){
        return(
            <>
                <div>
                    <div>
                        <span>Candidate Name</span>
                        <span>{this.state.candidateName}</span>
                    </div>

                    <div>
                        <span>Candidate Age</span>
                        <span>{this.state.candidateAge}</span>
                    </div>
                </div>
            </>
        )
    }
}