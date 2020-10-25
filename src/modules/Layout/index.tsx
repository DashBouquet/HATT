import React, { FC, useCallback, useContext, useState } from 'react';
import { Success, Text } from './styled';
import { AppContext } from '../../context';
import { useFetch } from '../../hooks/useFetch';
import { Modal, Avatar, Table, Tag, Button } from 'antd';
import { CharCard } from '../../components';

export const Layout: FC = () => {
  const {
    state: { characterPage, RMApi, total },
    setData,
  } = useContext(AppContext);
  const [currPage, setCurrPage] = useState(1);
  const [currChar, setCurrChar] = useState(1);
  const [visible, setVisible] = useState(false);
  const getCharactersPage = useCallback(
    () => RMApi.getCharactersPage(currPage),
    [RMApi, currPage]
  );
  const { isLoading, isError } = useFetch(setData, getCharactersPage);

  console.log(characterPage);

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
