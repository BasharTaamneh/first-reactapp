import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import HornedData from './HornedData.json'

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
        // console.log(HornedData.find(this.props.keyModal ))
        // console.log(this.props.keyModal)
        return (
            <div className='container'>

                <Card style={{ width: '19rem' }}>
                    <Card.Img  onClick={this.props.Modalview}  src={this.props.src} />
                    <Card.Body>
                        <Card.Title>{this.props.imgTitle}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button onClick={this.IncrNumOfVot} variant="primary">Number of votes: {this.state.NumOfVot}</Button>
                    </Card.Body>
                </Card>

                <Modal show={this.props.showstatuse} >
                    <Modal.Header closeButton onHide={this.props.Modalview}>
                        <Modal.Title>{this.props.imgTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><img src={this.props.src}alt={this.props.imgTitle} /> <p>{this.props.description}</p></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.Modalview}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}
export default HornedBeasts;