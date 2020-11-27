import React, { FC, useCallback } from 'react';
import { Success, Text, H1, ButtonForTest } from './styled';
import { useFetch } from '../../hooks/useFetch';
import { Modal, Avatar, Table, Tag, Button } from 'antd';
import { CharCard } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCharacterPage,
  selectCurrChar,
  selectCurrPage,
  selectHiddenTextVisible,
  selectRMApi,
  selectTotal,
  selectVisible,
} from './selectors';
import { Redirect } from 'react-router-dom';
import { ParsedRes } from '../../types';
import {
  SET_CURR_CHAR,
  SET_CURR_PAGE,
  SET_DATA,
  SET_MODAL_VISIBLE,
  SET_TOKEN,
} from '../../constants';
import { selectToken } from '../Login/selectors';

export const Dashboard: FC = () => {
  const dispatch = useDispatch();
  const characterPage = useSelector(selectCharacterPage);
  const RMApi = useSelector(selectRMApi);
  const total = useSelector(selectTotal);
  const currPage = useSelector(selectCurrPage);
  const currChar = useSelector(selectCurrChar);
  const hiddenTextVisible = useSelector(selectHiddenTextVisible);
  const visible = useSelector(selectVisible);
  const loginToken = useSelector(selectToken);
  const setToStore = useCallback(
    (payload: ParsedRes) => dispatch({ type: SET_DATA, payload }),
    [dispatch]
  );
  const getCharactersPage = useCallback(
    () => RMApi.getCharactersPage(currPage),
    [RMApi, currPage]
  );
  const { isLoading, isError } = useFetch(setToStore, getCharactersPage);

  const logOut = () => {
    dispatch({ type: SET_TOKEN, payload: '' });
    localStorage.removeItem('loginToken');
  };
  const setCurrPage = (page: number) =>
    dispatch({ type: SET_CURR_PAGE, payload: page });
  const setModalVisible = (payload: boolean) =>
    dispatch({ type: SET_MODAL_VISIBLE, payload });
  const setCurrChar = (id: number) =>
    dispatch({ type: SET_CURR_CHAR, payload: id });

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
            setModalVisible(true);
          }}
        >
          More info
        </Button>
      ),
    },
  ];

  if (!loginToken) {
    return <Redirect to="/login" />;
  }

  return (
    <Success>
      {isError && <div>Something went wrong...</div>}
      {visible && (
        <Modal
          title="Character`s info"
          centered
          footer={null}
          visible={visible}
          onCancel={() => setModalVisible(false)}
          width={1000}
        >
          <CharCard charId={currChar} />
        </Modal>
      )}
      <H1>Rick&Morty App</H1>
      <ButtonForTest onClick={logOut}>LOG OUT</ButtonForTest>
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
