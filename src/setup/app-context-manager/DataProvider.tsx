import * as React from "react";
import { ContextProps, DataProp } from "./Interface";

interface IDataProviderProps {
  children: React.ReactNode;
}

export const DataContext = React.createContext<ContextProps | null>(null);

export default function DataProvider({ children }: IDataProviderProps) {
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
  return (
    <DataContext.Provider value={{ Data, HandleAdd, HandleDelete }}>
      {children}
    </DataContext.Provider>
  );
}
