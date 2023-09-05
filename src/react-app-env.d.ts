/// <reference types="react-scripts" />

type ISODateString =
  `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`;

type ToDo = {
  id: string;
  title: string;
  description: string | null;
  dueDate: ISODateString | null;
  priority: number | null;
  categoryId: string | null;
  isDone: boolean;
};

type modalButtonType = {
  text: string;
  callback: () => void;
  isSubmit?: boolean;
};
