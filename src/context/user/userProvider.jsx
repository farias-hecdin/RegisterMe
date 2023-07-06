// Providing Data from a Root Component
import { createContext } from "react";
import db_user from "../../data/data_user_profile.jsx";

// Take list of data
const users = db_user[0].users;

const initial_state = {
  theList: users,
  theAdd: [],
  theSelected: null,
};

// Make a Context and Provider
const UserContext = createContext();

function UserDataAccess({ children }) {
  // Define value or data pass to context
  const contextData = {
    users: initial_state.theList,
  };

  return (
    <UserContext.Provider value={contextData}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext };
export default UserDataAccess; // Shared data to (../../main.jsx)
