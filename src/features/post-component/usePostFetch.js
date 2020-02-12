import { useState, useEffect, useCallback } from "react";
import { API_URL } from "../../config";

export const usePostFetch = postId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endPoint = `${API_URL}posts/${postId}`;
      const result = await (await fetch(endPoint)).json();

      setState({
        ...result,
        title: result.title,
        content: result.body,
        salary: postId * 1000 + 30000,
        iconId: Math.floor(Math.random() * 100)
      });
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [postId]);
  useEffect(() => {
    fetchData();
    setState({});
  }, [fetchData, postId]);
  return [state, loading, error];
};
