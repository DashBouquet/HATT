import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SET_DATA } from '../constants';
import { ParsedRes } from '../types';

type Result = {
  isLoading: boolean;
  isError: boolean;
};

export const useFetch = (sendRequest: () => any): Result => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const setToStore = useCallback(
    (payload: ParsedRes) => dispatch({ type: SET_DATA, payload }),
    [dispatch]
  );

  const getData = useCallback(async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const data = await sendRequest();
      setToStore(data);
    } catch (e) {
      setIsError(true);
    }
    setIsLoading(false);
  }, [sendRequest, setToStore]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { isLoading, isError };
};
