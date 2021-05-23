import React from 'react'
import './App.css'
import Header from './components/main/Header/Header'
import Main from './components/main/Main/Main'
import Footer from './components/main/Footer/Footer'

const App = (): JSX.Element => {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App
