import react from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'
class App extends react.Component {
  render() {
    return (
      <div itemID='body'>
        <div className='div1'>
          <Header />
        </div>

        <div className='div2'>
          <Main />
        </div>

        <div className='div3'>
          <Footer />
        </div>
      </div>
    )

  }
}

export default App;