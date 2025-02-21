import React from 'react'
import "./App.css"
import LandingPage from './stores/pages/LandingPage'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import WatchesPage from './stores/pages/WatchesPage'
import MensPage from './stores/pages/MensPage'
import WomensPage from './stores/pages/WomensPage'
import Furniture from './stores/components/Furniture'
import FurniturePage from './stores/pages/FurniturePage'
import KitchenPage from './stores/pages/KitchenPage'
import FridgePage from './stores/pages/FridgePage'
import SpeakersPage from './stores/pages/SpeakersPage'
import Tv from './stores/pages/TvPage'
import AcPage from './stores/pages/AcPage.jsx'
import TvPage from './stores/pages/TvPage'
import BooksPage from './stores/pages/BooksPage'
import MobileSingle from './singles/MobileSingle.jsx'
import CardContext from './stores/context/CardContext.jsx'
import Cart from './stores/pages/Cart.jsx'
import ComputerSingle from './singles/ComputerSingle.jsx'
import AcSingle from './singles/acSingle.jsx'
import WatchesSingle from './singles/WatchesSingle.jsx'
import MenSingle from './singles/MenSingle.jsx'
import WomenSingle from './singles/WomenSingle.jsx'
import FridgeSingle from './singles/FridgeSngle.jsx'
import FurnitureSingle from './singles/FurnitureSingle.jsx'
import KitchenSingle from './singles/KitchenSingle.jsx'
import BooksSingle from './singles/BooksSingle.jsx'
import SpeakerSingle from './singles/SpeakerSingle.jsx'
import TvSingle from './singles/TvSingle.jsx'
import Signup from './stores/pages/Signup.jsx'
import Login from './stores/pages/Login.jsx'
import Products from './stores/components/Products.jsx'
import OrdersPage from './stores/pages/OrdersPage.jsx'
import Payment from './stores/pages/payment.jsx'

let router = createBrowserRouter(
  [
    {
      path:"/",
      element:<LandingPage></LandingPage>,
      children:[
        {
          path:"/mobiles",
          element:<MobilePage></MobilePage>
        },{
          path:"/",
          element:<Products></Products>
        } ,
        {
          path:"/computers",
          element:<ComputerPage></ComputerPage>
        },
        {
          path:"watches",
          element:<WatchesPage></WatchesPage>
        },
        {
          path:"/mens",
          element:<MensPage></MensPage>
        }
        ,
        {
          path:"/womens",
          element:<WomensPage></WomensPage>
        },
        {
          path:"/furniture",
          element:<FurniturePage></FurniturePage>
        },
        {
          path:"/kitchen",
          element:<KitchenPage></KitchenPage>
        },
        {
          path:"/fridge",
          element:<FridgePage></FridgePage>
        },
        {
          path:"/books",
          element:<BooksPage></BooksPage>
        },
        {
          path:"/speakers",
          element:<SpeakersPage></SpeakersPage>
        },
        {
          path:"/tv",
          element:<TvPage></TvPage>
        },
        {
          path:"/ac",
          element:<AcPage></AcPage>
        },
        
    {
      path:"/login",
      element:<Login></Login>
    }
      ]
    },
    {
      path:"/orders",
      element:<OrdersPage></OrdersPage>
    }
    ,
   
    {
      path:"/mobiles/:id",
      element:<MobileSingle></MobileSingle>
    },
    {
      path:"/cart",
      element:<Cart></Cart>
    },
    {
      path:"/computers/:id",
      element:<ComputerSingle></ComputerSingle>
    },
    {
      path:"/ac/:id",
      element:<AcSingle></AcSingle>
    },
    {
      path:"/watches/:id",
      element:<WatchesSingle></WatchesSingle>
    },
    {
      path:"/mens/:id",
      element:<MenSingle></MenSingle>
    },
    {
      path:"/women/:id",
      element:<WomenSingle></WomenSingle>
    },
    {
      path:"/fridges/:id",
      element:<FridgeSingle></FridgeSingle>
    },
    {
      path:"/furniture/:id",
      element:<FurnitureSingle></FurnitureSingle>
    },
    {
      path:"/kitchen/:id",
      element:<KitchenSingle></KitchenSingle>
    }
    ,{
      path:"/books/:id",
      element:<BooksSingle></BooksSingle>
    },{
      path:"/speakers/:id",
      element:<SpeakerSingle></SpeakerSingle>
    },{
      path:"/tv/:id",
      element:<TvSingle></TvSingle>
    },{
      path:"/signup",
      element:<Signup></Signup>
    },
    {
      path:"/payment",
      element:<Payment></Payment>
    }
  ]
)

const App = () => {
  return (
    <div>
      <CardContext>
        
      <RouterProvider router={router}></RouterProvider>

      </CardContext>
      </div>
  )
}

export default App
