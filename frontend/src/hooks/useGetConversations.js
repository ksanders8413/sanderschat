// import { useState } from "react";
// import { useEffect } from "react";
// import toast from "react-hot-toast";

// const useGetConversations = () => {
//   const [loading, setLoading] = useState(false);
//   const [conversations, setConversations] = useState([]);

//   useEffect(() => {
//     const getConversations = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch("/api/users");
//         const data = await res.json();
//         if (data.error) {
//           throw new Error(data.error);
//         }
//         setConversations(data);
//       } catch (error) {
//         toast.error(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getConversations();
//   }, []);
//   return {loading, conversations}
// };

// export default useGetConversations;



import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      setError(null); // Reset error on new fetch attempt
      try {
        const res = await fetch("/api/users");
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setConversations(data);
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);

  return { loading, conversations, error };
};

export default useGetConversations;
