import React, { FC } from 'react';

type Props = {
  link: {
    description: string;
    url: string;
  };
};

export const Link: FC<Props> = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        {link.description} ({link.url})
      </div>
    </div>
  );
};
