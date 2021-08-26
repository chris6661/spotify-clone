export const initialState = {
    user: null, 
    playlists: [], 
    playing: false, 
    item: null,
    //add token here to be able to skip login step every time on refresh, make sure to remove after done developing and past the build step/process
    token: "BQBNKJGkyb6NaJ_qLukKMIvKJNhOnyxCiLtMQBn9XjmRQLJzmUWTkahz1w7WM0DzVQNLYv1OO4RDH8jW-09vMeil5P25Aq9gxiYQwKzhg-ljHRZNevkTgWtDAIQQWLPmHmx7VCs-4aUpWdeQUDLARlTnEvmpLlj-IDM"
};

const reducer = (state, action) => {

    console.log(action); 

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            };

        case 'SET_TOKEN': 
        return {
            ...state, 
            token: action.token
        }
        default: 
        return state;
    }
}

export default reducer; 