import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useAxios(
  url,
  method = "GET",
  body = null,
  secure = true,
  options = {}
) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let headers = {};
        if (secure) {
          const token = localStorage.getItem("token");
          if (token) {
            headers["Authorization"] = `Bearer ${token}`;
          } else {
            navigate("/login");
          }
        }
        setLoading(true);
        const res = await axios({
          url,
          method,
          data: body,
          headers: { ...headers, ...options.headers },
          ...options,
        });
        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, method, body, secure, options]);

  return { data, error, loading };
}

export default useAxios;
