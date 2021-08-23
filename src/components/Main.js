import react from 'react';
import HornedBeasts from './HornedBeasts';
import HornedData from './HornedData.json'
import './Main.css';

class App2 extends react.Component {

    render() {
        return (
            <>
                {
                    HornedData.map((items, idx) => {
                        return (
                            <HornedBeasts
                                keyModal={idx}
                                imgTitle={items.title}
                                src={items.image_url}
                                description={items.description}
                                data={items}
                                show={this.props.show}
                            />
                        );
                    })

                }
            </>
        )
    }
}
export default App2;