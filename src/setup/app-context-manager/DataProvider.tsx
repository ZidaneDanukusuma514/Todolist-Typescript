import * as React from "react";
import { ContextProps, DataProp } from "./Interface";

interface IDataProviderProps {
  children: React.ReactNode;
}

export const DataContext = React.createContext<ContextProps | null>(null);

export default function DataProvider({ children }: IDataProviderProps) {
  const [Mode, setMode] = React.useState<"edit" | "writing">("writing");
  const [Done, setDone] = React.useState<boolean>(false);
  const [Data, setData] = React.useState<DataProp[]>([
    {
      text: "Write a structual program",
      priority: 10,
    },
  ]);
  const HandleAdd = (item: DataProp) => {
    setData([...Data, item]);
  };
  const HandleDelete = (item: DataProp) => {
    let result: DataProp[] = [];
    Data.map((n: DataProp) => {
      if (n.text === item.text) {
        result = Data.filter((item) => item.text !== n.text);
      }
    });
    setData(result);
  };
  const HandleEdit = () => {
    setMode("edit");
  };
  const HandleUpdate = (item: DataProp, updt: DataProp) => {};
  const HandleDone = () => {
    setDone(!Done);
  };
  return (
    <DataContext.Provider
      value={{
        Data,
        Mode,
        Done,
        HandleAdd,
        HandleDone,
        HandleDelete,
        HandleEdit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
