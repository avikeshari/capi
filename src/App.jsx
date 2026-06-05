//import { DragDropProvider } from '@dnd-kit/react';
import React from 'react'
/*import SortableItems from './SortableItems';
import { isSortable } from '@dnd-kit/react/sortable';*/
import { Reactions } from './components/Reactions';

/*const App = () => {

    const [items, setItems] = React.useState([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' }
    ]);

  return <div>
    <h1>List of Items</h1>
    <DragDropProvider onDragEnd={(event) => {
        if (event.canceled) return;
        const { source } = event.operation;
        if (isSortable(source)) {
            const { initialIndex, index } = source;
            if (initialIndex !== index) {
                setItems((items) => {
                    const newItems = [...items];
                    const [movedItem] = newItems.splice(initialIndex, 1);
                    newItems.splice(index, 0, movedItem);
                    return newItems;
                });
            }
        }
    }}>
        <ul>
            {items.map((item , index) => (
                <SortableItems key={item.id} id={item.id} index={index}>
                    {item.name}
                </SortableItems>
            ))}
        </ul>
    </DragDropProvider>
  </div>
}*/

const reducer = (state, action) => {
    if (action.type === 'LIKE') {
        return state + 1;
    }
};

export const ReactionsContext = React.createContext();

const App = () => {

    const [likes, setLikes] = React.useReducer(reducer, 0);
    
    return <ReactionsContext.Provider value={{ likes, setLikes }}>
        <Reactions />
    </ReactionsContext.Provider>
}

export default App