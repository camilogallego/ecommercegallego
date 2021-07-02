import React from 'react'
import Route  from './components/Router'
import NavBar from './components/NavBar/NavBar'
import {ItemsProvider} from './ItemsContext/ItemsContext'


function App() {
  return (
    <ItemsProvider>
      <Route>
      <NavBar />
      </Route>
    </ItemsProvider>
  )
}

export default App
