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
      dueDate: '2023-08-30T10:37:26.495Z',
      priority: 7,
      categoryId: 'university',
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
      action: PayloadAction<{
        todoId: string;
        todoProp: Partial<ToDo>;
      }>
    ) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.todoId) {
          return { ...todo, ...action.payload.todoProp };
        }

        return todo;
      });
    },
    deleteTodo: (state, action: PayloadAction<{ todoId: string }>) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload.todoId
      );
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = TodosSlice.actions;
export default TodosSlice.reducer;
