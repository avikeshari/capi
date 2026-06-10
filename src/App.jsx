//import { DragDropProvider } from '@dnd-kit/react';
import React from 'react'
//import SortableItems from './SortableItems';
//import { isSortable } from '@dnd-kit/react/sortable';
//import { Reactions } from './components/Reactions';
//import { ReactionsContext } from './contexts/ReactionsStore.jsx';
//import { useDispatch , useSelector } from 'react-redux';
//import { selectLikes, selectDislikes , setLikes ,setDislikes } from './redux/features/reactionSlice.js';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import HomeWrapper from './wrappers/HomeWrapper';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/app/store.js';
import Dashboard from './pages/Dashboard';
import DashboardWrapper from './wrappers/DashboardWrapper';
import Notes from './pages/Notes.jsx';
import Note from './pages/Note.jsx';

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

/*const reducer = (state, action) => {
    if (action.type === 'LIKE') {
        return state + 1;
    }
};*/

//export const ReactionsContext = React.createContext();

/*const App = () => {

    //const [likes, setLikes] = React.useReducer(reducer, 0);
    
    return <ReactionsContext.Provider value={{ likes, setLikes }}>
        <Reactions />
    </ReactionsContext.Provider>*/

    /*const { likes, setLikes } = React.useContext(ReactionsContext);

    return <div>
        <h1>Likes: {likes}</h1>
        <button onClick={() => setLikes({ type: 'LIKE' })}>Like</button>
    </div>
}

const App = () => {
    const likes = useSelector(selectLikes);
    const dislikes = useSelector(selectDislikes);
    const dispatch = useDispatch();
    return <div>
        <h1>Likes: { likes }, Dislikes: { dislikes }</h1>
        <button onClick={() => dispatch(setLikes())}>Like</button>
        &nbsp;
        <button onClick={() => dispatch(setDislikes())}>Dislike</button>
    </div>
}*/

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeWrapper />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardWrapper />,
        children: [
            {
                path: '',
                element: <Dashboard />,
                children: [
                    {
                        path: '',
                        element: <Notes />
                    },
                    {
                        path: 'notes/:id',
                        element: <Note />
                    }
                ]
            }
        ]
    }
]);

const App = () => {
  return <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
}

export default App