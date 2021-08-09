import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

class HornedBeasts extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            NumOfVot: 0
        }
    }
    IncrNumOfVot = () => {
        this.setState({
            NumOfVot: this.state.NumOfVot + 1
        })
    }
    render() {
        return (
            <div className='container'>

                <Card style={{ width: '19rem' }}>
                    <Card.Img src={this.props.src} />
                    <Card.Body>
                        <Card.Title>{this.props.imgTitle}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button onClick={this.IncrNumOfVot} variant="primary">Number of votes: {this.state.NumOfVot}</Button>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}
export default HornedBeasts;