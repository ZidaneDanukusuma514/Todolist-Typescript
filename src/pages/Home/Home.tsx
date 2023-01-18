import * as React from "react";
import TodoForm from "../../common/component/TodoForm";
import TodoList from "../../common/component/TodoList";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="mx-auto w-[600px]">
      <h1 className="py-12 text-2xl text-center font-bold text-white font-mono">
        Todolist with Typescript
      </h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
