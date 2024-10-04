import ReactDOM from 'react-dom/client'
import SiteRouter from './Routes/SiteRouter.tsx'
import React from 'react'
import store from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <Provider store={store}>
    <SiteRouter />
  </Provider>,
)