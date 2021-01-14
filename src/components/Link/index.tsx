import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { message } from 'antd';
import { selectToken } from 'modules/LoginGQL/selectors';
import { timeDifferenceForDate } from 'utils/timeDifference';
import { LinkType } from 'types';
import {
  CommonInfoWrapper,
  LinkWrapper,
  Order,
  Vote,
  ExtraInfoWrapper,
} from './styled';
import { CssRuleDescription } from 'typography';
import { VOTE_MUTATION } from 'graphql/mutations';
import { FEED_QUERY } from 'graphql/queries';

type Props = {
  index: number;
  link: LinkType;
};

export const Link: FC<Props> = (props) => {
  const { link } = props;
  const authToken = useSelector(selectToken);

  const [vote] = useMutation(VOTE_MUTATION, {
    variables: {
      linkId: link.id,
    },
    update(cache, { data: { vote } }) {
      const { feed } = cache.readQuery<any>({
        query: FEED_QUERY,
      });

      const updatedLinks = feed.links.map((feedLink: LinkType) => {
        if (feedLink.id === link.id) {
          return {
            ...feedLink,
            votes: [...feedLink.votes, vote],
          };
        }
        return feedLink;
      });

      cache.writeQuery({
        query: FEED_QUERY,
        data: {
          feed: {
            links: updatedLinks,
          },
        },
      });
    },
    onCompleted: () => {
      message.success('Successfully voted!');
    },
    onError: () => {
      message.error('Already voted!');
    },
  });

  return (
    <LinkWrapper>
      <CommonInfoWrapper>
        <Order>{props.index + 1}.</Order>
        {authToken && (
          <Vote
            role="img"
            aria-label="Vote"
            onClick={() => vote()}
            children="👍"
          />
        )}
      </CommonInfoWrapper>
      <div>
        <CssRuleDescription>
          {link.description} ({link.url})
        </CssRuleDescription>
        {authToken && (
          <ExtraInfoWrapper as="div">
            {link.votes.length} votes | by{' '}
            {link.postedBy ? link.postedBy.name : 'Unknown'}{' '}
            {timeDifferenceForDate(link.createdAt)}
          </ExtraInfoWrapper>
        )}
      </div>
    </LinkWrapper>
  );
};
