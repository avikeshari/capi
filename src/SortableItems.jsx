import React from 'react'
import { useSortable } from '@dnd-kit/react/sortable';

const SortableItems = ({ id, index , children }) => {
    const { ref } = useSortable({ id , index });
    return <li ref={ref} style={{listStyle: 'none', padding: '8px', border: '1px solid #ccc', marginBottom: '4px', cursor: 'move' }}>
        {children}
    </li>
}

export default SortableItems