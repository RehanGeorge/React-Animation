import './App.css'
import Hello from './components/Hello'

import ItemsContextProvider from './store/items-store'

function App() {

  return (
    <ItemsContextProvider>
      <Hello />
    </ItemsContextProvider>
  )
}

export default App
