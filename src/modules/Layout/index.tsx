import React, { FC, useContext, useEffect, useState } from 'react';
import { Loading, Success } from './styles';
import { getCharactersPage } from '../../utils/api';
import { AppContext } from '../../context';

export const Layout: FC = () => {
  const {
    state: { characterPage },
    setData,
  } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const defaultCharacters = await getCharactersPage();
      setData(defaultCharacters);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) return <Loading>Loading</Loading>;
  return (
    <Success>
      {characterPage &&
        characterPage.map((item: any) => {
          console.log(item);
          return <span key={`cha${item.id}`}>{item.name}</span>;
        })}
      11
    </Success>
  );
};
