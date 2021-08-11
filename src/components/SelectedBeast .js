import react from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'


class SelectedBeast extends react.Component {


    render() {
        return (

            
            <Modal show={this.props.show} >
                <Modal.Header onHide={this.props.onhide} closeButton >
                    <Modal.Title>{this.props.data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={this.props.data.image_url} alt={this.props.data.alt} />
                    <p>{this.props.data.description}</p></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onhide}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default SelectedBeast;