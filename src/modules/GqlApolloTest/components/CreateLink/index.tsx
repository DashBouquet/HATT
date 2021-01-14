import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import { AppHeader } from 'components';
// import { LINKS_PER_PAGE, routesGql } from 'Constants';
import { routesGql } from 'Constants';
import { CREATE_LINK_MUTATION } from 'graphql/mutations';
import { PageWrapper } from 'typography';
import { Header } from '../Header';
import { InputWrapper, Input } from './styled';
import { FEED_QUERY } from 'graphql/queries';

export const CreateLink: FC = () => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    description: '',
    url: '',
  });
  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      description: formState.description,
      url: formState.url,
    },
    update(cache, { data: { post } }) {
      // const take = LINKS_PER_PAGE;
      // const skip = 0;
      // const orderBy = { createdAt: 'desc' };

      const { feed } = cache.readQuery<any>({
        query: FEED_QUERY,
        // variables: {
        //   take,
        //   skip,
        //   orderBy,
        // },
      });

      cache.writeQuery({
        query: FEED_QUERY,
        data: {
          feed: {
            links: [post, ...feed.links],
          },
        },
        // variables: {
        //   take,
        //   skip,
        //   orderBy,
        // },
      });
    },
    onCompleted: () => history.push('/gql_apollo'),
  });

  return (
    <PageWrapper>
      <AppHeader
        title="Hacker News Clone"
        subTitle="howtographql.com/react-apollo"
        routes={routesGql}
      />
      <Header />
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createLink();
          }}
        >
          <InputWrapper>
            <Input
              value={formState.description}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  description: e.target.value,
                })
              }
              type="text"
              placeholder="A description for the link"
            />
            <Input
              value={formState.url}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  url: e.target.value,
                })
              }
              type="text"
              placeholder="The URL for the link"
            />
          </InputWrapper>
          <button type="submit">Submit</button>
        </form>
      </div>
    </PageWrapper>
  );
};
