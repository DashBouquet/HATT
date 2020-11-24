import React, { FC, useMemo } from 'react';
import { Descriptions } from 'antd';
import { CardImage, EpisodeName, Container, TextWrap } from './styled';
import { ParsedCharacter } from '../../types';
import { useSelector } from 'react-redux';
import { selectCharacterPage } from '../../store/selectors';

type Props = {
  charId: number;
};

export const CharCard: FC<Props> = ({ charId }) => {
  const characterPage = useSelector(selectCharacterPage);

  const char = useMemo(
    () => characterPage.find((item: ParsedCharacter) => item.id === charId),
    [charId, characterPage]
  );

  return (
    <div>
      {char ? (
        <>
          <Container>
            <CardImage size={150} src={char.image} />
            <TextWrap>
              {char.episodesList.map((item: string, i: number) => (
                <EpisodeName key={`item${i}`}>{item}</EpisodeName>
              ))}
            </TextWrap>
          </Container>
          <Descriptions
            bordered
            column={{ xxl: 4, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label="Name">{char.name}</Descriptions.Item>
            <Descriptions.Item label="Id">{char.id}</Descriptions.Item>
            <Descriptions.Item label="Species">
              {char.species}
            </Descriptions.Item>
            <Descriptions.Item label="Gender">{char.gender}</Descriptions.Item>
            <Descriptions.Item label="Origin location">
              {char.origin.locName}
            </Descriptions.Item>
            <Descriptions.Item label="Current location">
              {char.location.locName}
            </Descriptions.Item>
            <Descriptions.Item label="Origin dimension">
              {char.origin.locDimension}
            </Descriptions.Item>
            <Descriptions.Item label="Current dimension">
              {char.location.locDimension}
            </Descriptions.Item>
            <Descriptions.Item label="Origin location residents amount">
              {char.origin.residentsAmount}
            </Descriptions.Item>
            <Descriptions.Item label="Current location residents amount">
              {char.location.residentsAmount}
            </Descriptions.Item>
          </Descriptions>
        </>
      ) : (
        <p>Unexpected problem</p>
      )}
    </div>
  );
};
