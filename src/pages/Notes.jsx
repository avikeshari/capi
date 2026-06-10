import React from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectNotes, setNotes } from '../redux/features/noteSlice.js';

const Notes = () => {
    //const [notes, setNotes] = React.useState([]);
    const notes = useSelector(selectNotes);
    const dispatch = useDispatch();
    React.useEffect(() => {
        axios.get('https://6a29c98df59cb8f65f1d9d24.mockapi.io/Notes')
        .then(response => {
            //setNotes(response.data);
            dispatch(setNotes(response.data));
        })
        .catch(error => {
            console.error('Error fetching notes:', error);
        });
    }, []);
    return <div>
        <h3>Notes</h3>
        <ul>
            {notes.map(note => (
                <li key={note.id}><b>{note.title}</b>: {note.description}</li>
            ))}
        </ul>
    </div>
}

export default Notes