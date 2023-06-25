import Navbar from './components/Navbar'
import InterestsPage from './Interests3'
import Footer from './components/Footer'
import Her from './components/Her'

function InterestsPg() {
    return (
        <div className="App">
        <Navbar/>
        <Her/>
        <InterestsPage/>
        <Footer/>
        </div>
      );
}

export default InterestsPg;