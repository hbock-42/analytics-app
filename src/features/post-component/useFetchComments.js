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
      const result = await (await fetch(endPoint)).json();

      setState({
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
    if (localStorage[postId + "/comments"]) {
      setState(JSON.parse(localStorage[postId + "/comments"]));
      setLoading(false);
    } else {
      fetchData();
    }
  }, [fetchData, postId]);

  useEffect(() => {
    if (!error && !IsEmpty(state)) {
      localStorage.setItem(postId + "/comments", JSON.stringify(state));
    }
  }, [postId, state, error]);

  return [state, loading, error];
};

function IsEmpty(object) {
  return Object.entries(object).length === 0 && object.constructor === Object;
}
