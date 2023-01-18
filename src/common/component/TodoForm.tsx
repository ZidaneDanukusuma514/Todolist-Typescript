import * as React from "react";
import {
  DataContext,
  IDataContextProps,
} from "../../setup/app-context-manager/DataProvider";

export interface ITodoFormProps {}

export default function TodoForm(props: ITodoFormProps) {
  const [Text, setText] = React.useState("");
  const [Priority, setPriority] = React.useState(0);
  const { HandleAdd } = React.useContext(DataContext) as IDataContextProps;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let ood = {
      text: Text,
      priority: Priority,
    };
    HandleAdd(ood);
    setText("");
    setPriority(0);
  };
  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 bg-white p-4">
      <input
        className="grow border-r-2"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={Text}
        type="text"
        placeholder="Text here..."
      />
      <input
        type="number"
        onChange={(e) => {
          setPriority(Number(e.target.value));
        }}
        value={Priority}
        placeholder="Priority here..."
      />
      <button
        type="submit"
        className="text-white bg-sky-800 hover:bg-sky-700 p-2 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
}
