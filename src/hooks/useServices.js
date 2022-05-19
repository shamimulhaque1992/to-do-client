import { useEffect, useState } from "react";
const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};
export default useServices;