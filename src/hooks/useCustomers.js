import { useEffect, useState } from "react";
const useCustomers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("customers.json")
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);
  return [customers, setCustomers];
};
export default useCustomers;