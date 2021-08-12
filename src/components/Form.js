import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'

class form extends react.Component {

    render() {  
        return (
            <>

                <Form onChange={this.props.getchosen}>
                    <Form.Label>view the beasts by the number of horns</Form.Label>
                    <Form.Select size="md" aria-label="Default select example" >
                        <option value="0">ALL Beasts</option>
                        <option value="1">One horn</option>
                        <option value="2">Two horn</option>
                        <option value="3">Three horn</option>
                        <option value="100">Hundred horn</option>

                    </Form.Select>
                </Form>
            </>
        )
    }
}
export default form;