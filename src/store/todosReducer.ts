import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type todosInitType = {
  todos: ToDo[];
};

const initialState: todosInitType = {
  todos: [
    {
      id: '0d44a680-a8e9-eb27-180d-1a0cbd31bd04',
      title: 'todo a todo',
      description: 'from todo to todo',
      dueDate:
        'Tue Aug 29 2023 18:03:53 GMT+0300 (Eastern European Summer Time)',
      priority: 7,
      label: 'university',
      isDone: false,
    },
  ],
};

const TodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ToDo>) => {
      state.todos.push(action.payload);
    },
    editTodo: (
      state,
      action: PayloadAction<{ todoId: string; todoProp: ToDo }>
    ) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return { ...todo, ...action.payload.todoProp };
        }

        return todo;
      });
    },
  },
});

export const { addTodo } = TodosSlice.actions;
export default TodosSlice.reducer;
