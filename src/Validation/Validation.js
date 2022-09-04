// recieves text as a prop
import React, {Component} from 'react'

class Validation extends Component {
    render(){
        return (           
            <div className='Validation'>
                <p>{this.props.length}</p>
                {this.props.length < 5 ?
                    (<p>Text too short</p>)
                    : (<p>Text long enough</p>)
                }
            </div>
        )
    }
}

export default Validation