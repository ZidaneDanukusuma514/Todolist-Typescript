import * as React from "react";
import { DataContext } from "../../setup/app-context-manager/DataProvider";
import { ContextProps } from "../../setup/app-context-manager/Interface";

export interface ITodoItemProps {
  text: string;
  priority: number;
}

export default function TodoItem({ text, priority }: ITodoItemProps) {
  const { HandleDelete } = React.useContext(DataContext) as ContextProps;

  const Delete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let data = {
      text: text,
      priority: priority,
    };
    HandleDelete(data);
  };

  return (
    <div className="flex bg-white items-center px-2">
      <p className="grow">Text: {text}</p>
      <p>Priority: {priority}</p>
      <button
        onClick={Delete}
        className="p-2 text-white bg-rose-600 hover:bg-rose-500 font-bold mx-2"
      >
        Del
      </button>
    </div>
  );
}
