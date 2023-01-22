import { create } from "zustand";
import { ZustandProps, DataProp } from "./Interface";
import uuid from "react-uuid";
export const useStore = create<ZustandProps>((set) => ({
  Testing: "Zustan is Rock",
  Data: [],
  addTodo: (todo: DataProp) => {
    set((state) => ({
      Data: [
        ...state.Data,
        {
          id: uuid(),
          text: todo.text,
          priority: todo.priority,
        } as DataProp,
      ],
    }));
  },
  deleteTodo: (id: string) => {
    set((state) => ({
      Data: state.Data.filter((data) => data.id !== id),
    }));
  },
}));
