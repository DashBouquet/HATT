import React, { FC, useContext } from 'react';
import { Loading, Success } from './styles';
import { AppContext } from '../../context';
import { useFetch } from '../../hooks/useFetch';

export const Layout: FC = () => {
  const {
    state: { characterPage, RMApi },
    setData,
  } = useContext(AppContext);
  const { isLoading, isError } = useFetch(setData, RMApi.getCharactersPage);

  return (
    <Success>
      <p>Hello! I want to leave a short comment.</p>
      <p>
        In the job description, I saw information that you are trying to switch
        to Hooks and the Context API. So, to complete the task, I decided to
        stick with the same state management approach.
      </p>
      <p>The Fetch API is used to get data.</p>
      <p>For flexible styling, I used the CSS-IN-JS library.</p>
      <p>I used Typescrypt there and also configured basic linting.</p>
      <p>
        The character card is rendered using conditional rendering. Routing
        could also be used for this.
      </p>
      <br />
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <Loading>Loading</Loading>
      ) : (
        characterPage.map((item: any) => {
          console.log(item);
          return <span key={`cha${item.id}`}>{item.name}</span>;
        })
      )}
    </Success>
  );
};
