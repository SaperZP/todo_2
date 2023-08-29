import React from 'react';
import Box from '@mui/material/Box';
import Header from './components/Header';
import NoTodos from './components/NoTodos';
import { useAppSelector } from '../../store/hooks';
import AddTodo from './components/AddTodo';
import TodoList from './components/Todos';

const HomeView = () => {
  const { todos } = useAppSelector((state) => state.todosData);

  console.log('HomeView');

  // const [todos, setTodos] = useState<ToDo[]>(() => {
  //   const savedToDos: string | null = localStorage.getItem('todos');
  //
  //   return savedToDos ? JSON.parse(savedToDos) : [];
  // });

  return (
    <>
      <Header />
      <Box component={'main'} style={{ flex: '1 1 auto' }}>
        {todos.length > 0 ? <TodoList todos={todos} /> : <NoTodos />}
        <AddTodo />
      </Box>
    </>
  );
};

export default HomeView;
