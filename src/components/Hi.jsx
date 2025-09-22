// composant de classe

import { Component } from "react"

class Hi extends Component {
    render() {
        return (
            <div>
                <h2> Hi {this.props.nom} from {this.props.children} </h2>
            </div>
        )
    }
}

export default Hi 