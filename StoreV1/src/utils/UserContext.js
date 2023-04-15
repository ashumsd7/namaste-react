import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Ashutosh",
    email: "aat8001@gmail.com",
  },
});


UserContext.displayName='USER KA CONTEXT'
export default UserContext;
