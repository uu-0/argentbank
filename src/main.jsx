import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'

import { createGlobalStyle } from 'styled-components'
import { colors } from './style/colors'

import Home from './pages/Home/'
import Error from './pages/Error/'
import SignIn from './pages/SignIn'
import Profil from './pages/Profil'
import EditProfil from './pages/EditProfil'
import Header from './components/Header'
import Footer from './components/Footer'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${colors.gray};
  }

  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/editprofil" element={<EditProfil />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
)
