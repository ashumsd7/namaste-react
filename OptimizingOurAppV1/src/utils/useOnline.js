import { useState ,useEffect} from "react";

const useOnline = () => {

    const handleOnline= () => {
        setIsOnline(true);
      }
      const handleOffline= () => {
        setIsOnline(false);
      }
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online",handleOnline );
    window.addEventListener("offline",handleOffline);

    return ()=>{
        window.removeEventListener('online',handleOnline)
        window.removeEventListener('offline',handleOffline)
    }
  }, []);

  //wrote a logic to check if the state is online and offline

  return isOnline; // t or f
};

export default useOnline;
