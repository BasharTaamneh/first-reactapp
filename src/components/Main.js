import react from 'react';
import HornedBeasts from './HornedBeasts';
import './Main.css';
class App2 extends react.Component {
    render() {
        return (
            <>
              <div className='imgcontainer'>
            <div className='img1'>
                <HornedBeasts
                    imgTitle='UniWhal'
                    src={URL = 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'}
                    alternativ="narwhal"
                    title='UniWhal'
                    description='A unicorn and a narwhal nuzzling their horns' />
                    </div>

                    <div className='img2'>
                <HornedBeasts
                    imgTitle='Rhino Family'
                    src={URL = 'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'}
                    alternativ="rhino"
                    title='Rhino Family'
                    description='Mother (or father) rhino with two babies' />
                    </div>

                    <div className='img3'>
                    <HornedBeasts
                    imgTitle='Unicorn Head'
                    src={URL = 'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg'}
                    alternativ="unicorn"
                    title='Unicorn Head'
                    description='Someone wearing a creepy unicorn head mask' />
                    </div>
                    </div>

            </>
        )
    }
}
export default App2;