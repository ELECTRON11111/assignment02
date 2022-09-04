import React,{Component} from "react";

class Char extends Component {
    style = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black"   
    }

    render() {
        return (
            <div className="Char" style={this.style} onClick = {this.props.clicked} >
                {this.props.character}
            </div>
        )
    }
}

export default Char;