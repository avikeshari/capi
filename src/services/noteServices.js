import instance from '../instances/instance.js';

const noteServices = {
    getNotes: async () => {
        return await instance.get('/Notes');
    },
    getNote: async (id) => {
        await instance.get(`/Notes/${id}`);
    }
}

export default noteServices;