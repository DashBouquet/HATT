import React, { FC } from 'react';
import { Link } from 'components';
import { useQuery } from '@apollo/client';
import { LinkType } from 'types';
import { FEED_QUERY } from 'graphql/queries';

export const LinkList: FC = () => {
  const { data, loading, error } = useQuery(FEED_QUERY);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error! ${error.message}</span>;

  return (
    <div>
      {data && (
        <>
          {data.feed.links.map((link: LinkType) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};
