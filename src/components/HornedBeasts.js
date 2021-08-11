import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
class HornedBeasts extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            NumOfVot: 0,
            show: false
        }
    }

    IncrNumOfVot = () => {
        this.setState({
            NumOfVot: this.state.NumOfVot + 1
        })
    }
    handleModal=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    render() {
        return (
            <div className='container'>

                <Card  style={{ width: '19rem' }}>
                    <Card.Img  onClick={this.handleModal} src={this.props.src} />
                    <Card.Body>
                        <Card.Title>{this.props.imgTitle}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Button onClick={this.IncrNumOfVot} variant="primary">Number of votes: {this.state.NumOfVot}</Button>
                    </Card.Body>
                </Card>
                
      <Modal show={this.state.show} >
        <Modal.Header closeButton onHide={this.handleModal}>
          <Modal.Title>{this.props.imgTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={this.props.src}/> <p>{this.props.description}</p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

            </div>
        )
    }
}
export default HornedBeasts;
// onClick={console.log(this.props.keymodal)}