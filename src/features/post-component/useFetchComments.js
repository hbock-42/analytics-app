import { useState, useEffect, useCallback } from "react";
import { API_URL } from "../../config";

export const UseFetchComments = postId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endPoint = `${API_URL}posts/${postId}/comments`;
      console.log(endPoint);
      const result = await (await fetch(endPoint)).json();

      setState({
        ...result,
        comments: result.map(comment => {
          return {
            from: comment.email
              .substring(0, comment.email.indexOf("@"))
              .replace("_", " ")
              .replace(".", " "),
            mail: comment.email,
            content: comment.body
          };
        })
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
