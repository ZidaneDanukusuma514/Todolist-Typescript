import * as React from "react";
import { DataContext } from "../../setup/app-context-manager/DataProvider";
import { ContextProps } from "../../setup/app-context-manager/Interface";

export interface ITodoItemProps {
  text: string;
  priority: number;
}

export default function TodoItem({ text, priority }: ITodoItemProps) {
  const { HandleDelete, HandleDone, HandleEdit, Done } = React.useContext(
    DataContext
  ) as ContextProps;

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
      <p className={`${Done ? "line-through" : "no-underline"} grow`}>
        Text: {text}
      </p>
      <p>Priority: {priority}</p>
      <div className="flex mx-2 space-x-2">
        <button
          onClick={Delete}
          className="p-2 text-white bg-rose-600 hover:bg-rose-500 font-bold"
        >
          Del
        </button>
        <button
          onClick={() => {
            HandleEdit();
          }}
          className="p-2 text-white bg-purple-600 hover:bg-purple-500 font-bold "
        >
          Edit
        </button>
        <button
          onClick={() => {
            HandleDone();
          }}
          className="p-2 text-white bg-green-600 hover:bg-green-500 font-bold "
        >
          Done
        </button>
      </div>
    </div>
  );
}
