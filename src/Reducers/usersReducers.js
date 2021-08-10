const initialstate = {
    users: [
        {
          name: 'Frank',
          email: 'Frank.fr@gmail.com',
          age: '24'
        }
      ],
    } 
    const usersReducers = (state={initialstate}, action)=> { 
        switch (action.type) { 
            case "ADD_USER": 
                return state 
            default: 
               return state; 
        }
     };
 export default usersReducers;