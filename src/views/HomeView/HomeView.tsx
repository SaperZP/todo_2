import React from 'react';
import Box from '@mui/material/Box';
import Header from './components/Header';
import NoTodos from './components/NoTodos';
import AddTodoModal from './components/AddTodoModal';
import ManageTodos from './components/ManageTodos';
import { useQuery } from '@apollo/client';
import MY_TODOS from '../../graphql/queries/myTodos';

const HomeView = () => {
  const { data } = useQuery(MY_TODOS);

  return (
    <>
      <Header />
      <Box component={'main'} style={{ flex: '1 1 auto' }}>
        {data?.myTodos && data?.myTodos.length > 0 ? (
          <ManageTodos />
        ) : (
          <NoTodos />
        )}
        <AddTodoModal />
      </Box>
    </>
  );
};

export default HomeView;
