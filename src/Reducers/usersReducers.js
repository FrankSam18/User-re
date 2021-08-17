import { ADD_USER } from '../actions/userActions'

const InitialState = {
  users: [
    {
    name: 'Frank',
    email: 'frank@gmail.com',
    age: '20'
  }
  ],
    };
    const usersReducers = (state=InitialState, action)=> { 
        switch (action.type) { 
            case ADD_USER: 
            return { ...state.users, users: [...state.users, action.payload] };

            default: 
               return state; 
        }
     };
 export default usersReducers;