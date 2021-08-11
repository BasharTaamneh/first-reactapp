import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'


class form extends react.Component {


    constructor(props) {
        super(props);
        this.state = {
            horNum: ''
        }
    }

    DataForm = async (e) => {
        e.preventDefault();

        await this.setState({
            horNum: e.target.select.value
        })
        console.log('state= '+ this.state);
    }


    render() {
        return (
            <>
            <Form onChange={this.DataForm}>
            <Form.Label>view the beasts by the number of horns</Form.Label>
            <Form.Select aria-label="Default select example" name='select'>
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="100">All</option>

            </Form.Select>
            </Form>
            </>
        )
    }
}
export default form;