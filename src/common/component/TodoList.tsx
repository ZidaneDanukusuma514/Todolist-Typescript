import * as React from "react";
import {
  DataContext,
  IDataContextProps,
} from "../../setup/app-context-manager/DataProvider";
import TodoItem from "./TodoItem";

export interface ITodoListProps {}

export default function TodoList(props: ITodoListProps) {
  const { Data } = React.useContext(DataContext) as IDataContextProps;

  return (
    <div className="flex flex-col space-y-2 my-4">
      <h1 className="text-lg bg-white">Todo List:</h1>
      {Data?.map((item, index) => {
        return (
          <TodoItem key={index} text={item.text} priority={item.priority} />
        );
      })}
    </div>
  );
}
