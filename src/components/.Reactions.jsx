import React from 'react'
import { ReactionsContext } from '../App';

const Reactions = () => {
    const { likes, setLikes } = React.useContext(ReactionsContext);
    return <div>
        <h1>Likes: {likes}</h1>
        <button onClick={() => setLikes({ type: 'LIKE' })}>Like</button>
    </div>
}

export { Reactions };