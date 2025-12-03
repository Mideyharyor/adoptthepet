import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import Root from './components/Root'
import HomePage from './pages/HomePage'
import Pet from './components/Pet'
import PetDetailsPage, { petLoader } from './pages/PetDetailsPage'
import SearchPage from './pages/SearchPage'
import Error404 from './pages/Error404'
import PetDetailsNotFound from './pages/PetDetailsNotFound'



function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="/:type" element={<HomePage />} />
      <Route path="/:type/:id" element={<PetDetailsPage />} loader={petLoader}errorElement={<PetDetailsNotFound />} />
      <Route path="/search" element={<SearchPage />}/>
      <Route path='/error404' element={<Error404 />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
