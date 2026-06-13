import React from 'react'
import { useParams , useNavigate } from 'react-router';
import instance from '../instances/instance.js';
import { useSelector , useDispatch } from 'react-redux';
//import { selectNote , setNote } from '../redux/features/noteSlice.js'
import noteServices from '../services/noteServices.js';

const Note = () => {
    const { id } = useParams();
    //const note = useSelector(selectNote);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchNote = async () => {
        try {
            const response = await noteServices.getNote(id);
            dispatch(setNote(response.data));
        }
        catch (error) {
            dispatch(setNote(null));
        }
    }

    React.useEffect(() => {
        /*instance.get(`/Notes/${id}`)
        .then(response => {
            dispatch(setNote(response.data));
        })
        .catch(error => {
            console.error('Error fetching note:', error);
        });*/
        fetchNote();
    }, []);

    return <div>
        <h2>Note: {note?.id}</h2>
        <h3>{note?.title}</h3>
        <p>Created On: {note?.createdAt}</p>
        <p>{note?.description}</p>
        <button onClick={() => navigate(-1)}>
            Back to Notes List
        </button>
    </div>
}

export default Note