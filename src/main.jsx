import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactionsStore from './contexts/ReactionsStore.jsx';

createRoot(document.getElementById('root')).render(
  <ReactionsStore>
    <App />
  </ReactionsStore>
)
