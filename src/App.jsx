
import './App.css'
import Home from './pages/Home/Home'
import About from "./pages/About/About"
import MainLay from "./pages/Mainlayout/MainLay"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './pages/Home/Portfolio/Portfolio'
import Contacts from './pages/Contacts/Contacts'
import NotFound from './pages/NotFound/NotFound'


function App() {

  let routes=createBrowserRouter([
    {path:"", element:<MainLay></MainLay>,children:[
      {index:true, element:<Home></Home>},
      {path:"home", element:<Home></Home>},
      {path:"about",element:<About></About>},
      {path:"portfolio",element:<Portfolio></Portfolio>},
      {path:"contacts",element:<Contacts></Contacts>},
      {path:"*",element:<NotFound></NotFound>}
    ]},
   
  ])

  return (
    <>

   <RouterProvider router={routes}></RouterProvider>

 
    </>
  )
}

export default App
