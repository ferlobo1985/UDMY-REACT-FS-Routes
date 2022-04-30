import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './components/home'
import Posts from './components/posts'
import Profile from './components/profile';

const App = () => {
  return(
    <BrowserRouter>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4">My app</span>
          </Link>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="posts" className="nav-link">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="profile" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
        </header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="posts" element={<Posts/>}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App;