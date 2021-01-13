import { useMutation } from '@apollo/client';
import { CREATE_LINK_MUTATION } from 'graphql/mutations';
import React, { FC, useState } from 'react';
import { InputWrapper, Input } from './styled';

export const CreateLink: FC = () => {
  const [formState, setFormState] = useState({
    description: '',
    url: '',
  });
  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      description: formState.description,
      url: formState.url,
    },
  });

  return (
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
  );
};
