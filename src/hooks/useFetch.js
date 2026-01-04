import { useEffect, useState } from "react";

export default function useFetch(fn) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fn().then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}
