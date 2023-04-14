import { useEffect, useState } from "react";
import { GITHUB_USER_URL } from "./constant";

const useRestaurant = (resID) => {
  const [res, setRes] = useState(null);

  async function getRes() {
    console.log("In hook id is", resID);
    const data = await fetch(GITHUB_USER_URL);
    const json = await data.json();
    setRes(json);
  }

  useEffect(() => {
    getRes();
  }, []);

  return res;
};

export default useRestaurant;
