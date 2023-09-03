/// <reference types="react-scripts" />

type ToDo = {
  id: string;
  title: string;
  description: string | null;
  dueDate: string | null;
  priority: number | null;
  categoryID: string | null;
  isDone: boolean;
};

type modalButtonType = {
  text: string;
  callback: () => void;
  isSubmit?: boolean;
};
