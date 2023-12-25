import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Navbar/Navbar';
import Developer from './Developer/Developer';
import Skills from './Skills/Skills';
function App() {

  return (
    <>
     <Navbar />
     <Developer/>
     <Skills />
    </>
  )
}

export default App