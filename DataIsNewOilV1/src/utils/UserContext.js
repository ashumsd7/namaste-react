import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Ashutosh",
    email: "aat8001@gmail.com",
  },
});

export default UserContext;
