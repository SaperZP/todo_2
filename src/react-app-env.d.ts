/// <reference types="react-scripts" />

type ToDo = {
  id: string;
  title: string;
  description: string | null;
  dueDate: string | null;
  priority: number | null;
  label: string | null;
  isDone: boolean;
};

type ToDoPartial<K extends keyof ToDo> = {
  [P in K]: ToDo[P];
};
