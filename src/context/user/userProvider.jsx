// Providing Data from a Root Component
import { createContext, useReducer } from 'react';
import data_user from "../../data/data_user_profile.jsx"
import reducerUser, { actions } from "./userReducer.jsx"

// Take list of data
const arrayUser = data_user[0].users

const INITIAL_STATE = {
  LIST: arrayUser,
  NEW: [],
  SELECTED: null,
}

// Make a new Context and Provider
const UserContext = createContext();

function UserData({ children }) {
  const [state, dispatch] = useReducer(reducerUser, INITIAL_STATE);

  // Define value
  const value = {
    dataList: state,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, INITIAL_STATE }
export default UserData; // Export to (../../main.jsx)
