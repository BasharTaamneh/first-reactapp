import react from 'react';
import './HornedBeasts.css'

class HornedBeasts extends react.Component {
    render() {
        return (
            <div className='container'>

                <h2>{this.props.imgTitle}</h2>

                <img src={this.props.src}
                    alt={this.props.alternativ}
                    title={this.props.title} />

                <p>{this.props.description}</p>

            </div>
        )
    }
}
export default HornedBeasts;