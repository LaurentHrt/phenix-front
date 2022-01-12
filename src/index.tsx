import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Profile from './pages/Profile'
import Photographers from './pages/Photographers'
import { GlobalStyle } from './utils/style/global'
import { store } from './utils/store'
import { Provider } from 'react-redux'
import Login from './pages/Login/index'
import Error404 from './pages/Error404'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Photographers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
