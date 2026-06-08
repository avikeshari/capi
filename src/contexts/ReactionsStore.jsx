import React from 'react'

const reducer = (state, action) => {
    if (action.type === 'LIKE') {
        return state + 1;
    }
};

export const ReactionsContext = React.createContext();

const ReactionsStore = ({ children }) => {

  const [likes, setLikes] = React.useReducer(reducer, 0);

  return <ReactionsContext.Provider value={{ likes, setLikes }}>
      {children}
  </ReactionsContext.Provider>
}

export default ReactionsStore