import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://localhost:3000/user",
});

/**
 * Call API and set states (data, isLoading and hasError)
 * @function useAxios
 * @param  {string} params api URL
 *
 * @return {object} (API response)
 * @author Laetitia Hars
 * @version 1.0
 */

export const useAxios = (params) => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    if (!params) return;

    // initialize loading to true to display loader
    setLoading(true);

    /**
     * Download data from the specified URL.
     *
     * @async
     * @function fetchData
     * @return {Promise<string>} The data from the URL.
     */

    const fetchData = async () => {
      try {
        // call API with Axios
        const response = await baseUrl.get(params);
        const { data } = response.data;
        setData(data);
      } catch (err) {
        setError(true);
      } finally {
        // initialize loading to remove loader
        setLoading(false);
      }
    };
    fetchData();
  }, [params]);

  return { isLoading, data, hasError };
};
