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

            case "EDIT_USER":
      const newUsers =  state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      )
      return {...state, users: newUsers};

      case "DELETE_USER":
      const savedUsers = state.users.filter((user) => {
        return user.id !== action.payload;
      });
      return {...state, users: savedUsers};

            default: 
               return state; 
        }
     };
 export default usersReducers;