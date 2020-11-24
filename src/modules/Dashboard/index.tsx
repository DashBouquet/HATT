import React, { FC, useCallback, useState } from 'react';
import { Success, Text, H1, ButtonForTest } from './styled';
import { useFetch } from '../../hooks/useFetch';
import { Modal, Avatar, Table, Tag, Button } from 'antd';
import { CharCard } from '../../components';
import { useSelector } from 'react-redux';
import {
  selectCharacterPage,
  selectRMApi,
  selectTotal,
} from '../../store/selectors';

export const Dashboard: FC = () => {
  const characterPage = useSelector(selectCharacterPage);
  const RMApi = useSelector(selectRMApi);
  const total = useSelector(selectTotal);
  const [currPage, setCurrPage] = useState(1);
  const [currChar, setCurrChar] = useState(1);
  const [hiddenTextVisible, setHiddenTextVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const getCharactersPage = useCallback(
    () => RMApi.getCharactersPage(currPage),
    [RMApi, currPage]
  );
  const { isLoading, isError } = useFetch(getCharactersPage);

  const columns = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Photo',
      dataIndex: 'image',
      key: 'image',
      render: (image: string) => <Avatar size={50} src={image} />,
    },

    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name: number) => <Text>{name}</Text>,
    },
    {
      title: 'Species',
      key: 'species',
      dataIndex: 'species',
      render: (species: string) => <Tag color="blue">{species}</Tag>,
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (id: number) => (
        <Button
          type="primary"
          onClick={() => {
            setCurrChar(id);
            setVisible(true);
          }}
        >
          More info
        </Button>
      ),
    },
  ];

  return (
    <Success>
      {isError && <div>Something went wrong...</div>}
      {visible && (
        <Modal
          title="Character`s info"
          centered
          footer={null}
          visible={visible}
          onCancel={() => setVisible(false)}
          width={1000}
        >
          <CharCard charId={currChar} />
        </Modal>
      )}
      <H1>Rick&Morty App</H1>
      <ButtonForTest onClick={() => setHiddenTextVisible(!hiddenTextVisible)}>
        CLICK ME
      </ButtonForTest>
      {hiddenTextVisible && <div>Surprise</div>}
      <Table
        loading={isLoading}
        columns={columns}
        pagination={{
          defaultPageSize: 20,
          current: currPage,
          showSizeChanger: false,
          total,
          onChange: (page) => setCurrPage(page),
        }}
        dataSource={characterPage}
        rowKey={(record) => record.id}
      />
    </Success>
  );
};
