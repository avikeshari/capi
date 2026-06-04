import React from 'react'
import Childa from './components/Childa.jsx'

const App = () => {
  //parent component which has the data
  const message = "Hello from App component";

  return (
    <Childa message={message} />
  )
}

export default App