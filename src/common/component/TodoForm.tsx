import * as React from "react";
import { DataContext } from "../../setup/app-context-manager/DataProvider";
import { ContextProps } from "../../setup/app-context-manager/Interface";

export interface ITodoFormProps {}

export default function TodoForm(props: ITodoFormProps) {
  const [Text, setText] = React.useState("");
  const TextRef = React.useRef<HTMLInputElement>(null);
  const PriorityRef = React.useRef<HTMLInputElement>(null);
  const [Priority, setPriority] = React.useState(0);
  const { HandleAdd, Mode } = React.useContext(DataContext) as ContextProps;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let ood = {
      text: Text,
      priority: Priority,
    };

    if (Mode === "writing") {
      HandleAdd(ood);
    } else if (Mode === "edit") {
      console.log("edit");
    } else {
      console.log("Error Submit Form");
    }

    setText("");
    setPriority(0);
  };
  console.log("RENDERED: ");
  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 bg-white p-4">
      <input
        className="grow border-r-2"
        ref={TextRef}
        type="text"
        placeholder="Text here..."
      />
      <input type="number" ref={PriorityRef} placeholder="Priority here..." />
      <button
        type="submit"
        className="text-white bg-sky-800 hover:bg-sky-700 p-2 rounded-lg"
        onClick={() => {
          setText(String(TextRef.current?.value)),
            setPriority(Number(PriorityRef.current?.value));
        }}
      >
        {Mode}
      </button>
    </form>
  );
}
