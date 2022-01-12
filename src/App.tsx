import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Profile from './pages/Profile'
import Photographers from './pages/Photographers'
import { GlobalStyle } from './utils/style/global'
import Login from './pages/Login/index'
import Error404 from './pages/Error404'
import { store } from './utils/store'

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}
