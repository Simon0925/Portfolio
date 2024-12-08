import './App.css'
import Footer from './components/Footer/Footer'
import Header from './layout/Header/Header'
import Main from './layout/Main/Main'

function App() {
  

  return (
    <div className=' bg-white dark:bg-gray-900'>
      <Header />
      <Main />
      <hr/>
        <Footer />
        <div id="modal-root"></div>
    </div>
  )
}

export default App
