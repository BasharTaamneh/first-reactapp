import react from 'react';
import HornedBeasts from './HornedBeasts';
import HornedData from './HornedData.json'
import './Main.css';
class App2 extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleModal = () => {
        this.setState({
            show: !this.state.show
        })
    }


    render() {
        console.log()
        return (
            <>
                {
                    HornedData.map((items, idx) => {
                        // console.log(idx)
                        return (
                            <HornedBeasts
                                keyModal={idx}
                                imgTitle={items.title}
                                src={items.image_url}
                                description={items.description}
                                Modalview={this.handleModal}
                                showstatuse={this.state.show}

                            />

                        );
                    })

                }
                {/* {HornedData.find(element => element.keyModal)} */}
            </>
        )
    }
}
export default App2;