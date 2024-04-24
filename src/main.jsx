import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './Pages/Home/Home.jsx'
import Error from './Pages/Error/Error.jsx'
import FunctionalHarmony from './Pages/FunctionalHarmony/FunctionalHarmony.jsx'
import ModesInParallel from './Pages/ModesInParellel/ModesInParallel.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/functionalHarmony',
        element: <FunctionalHarmony />
      },
      {
        path: '/ModesInParallel',
        element: <ModesInParallel />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
