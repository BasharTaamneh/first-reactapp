import react from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'
import SelectedBeast from './components/SelectedBeast '
import Form from './components/Form';

class App extends react.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: {},
      
    }
  }


  handleModal = (props) => {
    this.setState({
      show: true,
      data: props

    })
  }


  onhide = () => {
    this.setState({
      show: false,
      data: {}
    })
  }
  
  

  render() {
    return (
      <div itemID='body'>
        <div className='div1'>
          <Header />
        </div>

        <div className='div2'>
        <Form/>
          <Main show={this.handleModal} />
          
        <SelectedBeast onhide={this.onhide} show={this.state.show} data={this.state.data} />
        </div>
        <div className='div3'>
          <Footer />
        </div>
      </div>

    )

  }
}

export default App;