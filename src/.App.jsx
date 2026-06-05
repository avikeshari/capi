import React from 'react'
import Childa from './components/Childa.jsx'

//1. Create context
export const MessageContext = React.createContext();

const App = () => {
  //parent component which has the data
  const message = "Hello from App component";

  return (
    //<Childa message={message} />
    <MessageContext.Provider value={message}>
      <div>
        <Childa />
      </div>
    </MessageContext.Provider>
  )
}

export default App