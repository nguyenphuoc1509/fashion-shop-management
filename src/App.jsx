import ProductPage from './components/ProductPage';
import PageLayout from './components/layouts/PageLayout';
import Navbar from './components/partials/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Collection from './components/Collection'

function App() {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path='/' element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/collection" element={<Collection />} />
        </Route>
      </Routes>
    </>
  )
}
export default App;