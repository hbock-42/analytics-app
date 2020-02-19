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
        title: result.title,
        content: result.body,
        iconId: Math.floor(Math.random() * 100),
        minSalary: result.min_salary
      });
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [postId]);

  useEffect(() => {
    if (localStorage[postId + "/post"]) {
      setState(JSON.parse(localStorage[postId + "/post"]));
      setLoading(false);
    } else {
      fetchData();
    }
  }, [fetchData, postId]);

  useEffect(() => {
    if (!error && !IsEmpty(state)) {
      localStorage.setItem(postId + "/post", JSON.stringify(state));
    }
  }, [postId, state, error]);

  return [state, loading, error];
};

function IsEmpty(object) {
  return Object.entries(object).length === 0 && object.constructor === Object;
}
