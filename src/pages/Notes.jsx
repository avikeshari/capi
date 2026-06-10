import React from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { selectNotes, setNotes } from '../redux/features/noteSlice.js';
import instance from '../instances/instance.js';
import { Link } from 'react-router';

const Notes = () => {
    //const [notes, setNotes] = React.useState([]);
    const notes = useSelector(selectNotes);
    const dispatch = useDispatch();
    React.useEffect(() => {
        instance.get('/Notes')
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
                //<li key={note.id}><b>{note.title}</b>: {note.description}</li>
                <li key={note.id}><Link to={`/dashboard/notes/${note.id}`}>{note.title}</Link></li>
            ))}
        </ul>
    </div>
}

export default Notes