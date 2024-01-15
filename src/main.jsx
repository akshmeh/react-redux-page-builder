import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import PreviewPage from './PreviewPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/preview-page",
    element:<PreviewPage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  </React.StrictMode>,
)
  
