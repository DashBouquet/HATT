import { useCallback, useEffect, useState } from 'react';
import { ParsedRes } from '../types';

type Result = {
  isLoading: boolean;
  isError: boolean;
};

export const useFetch = (
  setToStore: (data: ParsedRes) => void,
  sendRequest: () => any
): Result => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
