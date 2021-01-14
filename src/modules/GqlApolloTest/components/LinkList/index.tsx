import React, { FC } from 'react';
import { Link } from 'components';
import { useQuery } from '@apollo/client';
import { LinkType } from 'types';
import { FEED_QUERY } from 'graphql/queries';
import { ListWrapper } from './styled';

export const LinkList: FC = () => {
  const { data, loading, error } = useQuery(FEED_QUERY);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error! ${error.message}</span>;

  return (
    <ListWrapper>
      {data && (
        <>
          {data.feed.links.map((link: LinkType, i: number) => (
            <Link key={link.id} link={link} index={i} />
          ))}
        </>
      )}
    </ListWrapper>
  );
};
