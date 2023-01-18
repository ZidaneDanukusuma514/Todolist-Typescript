import * as React from "react";

export interface IDataProviderProps {
  children: React.ReactNode;
}

interface DataProp {
  text: string;
  priority: number;
}
export interface IDataContextProps {
  Data?: DataProp[];
  HandleAdd?: (item: DataProp) => void;
  HandleDelete: (item: DataProp) => void;
}
export const DataContext = React.createContext<IDataContextProps | null>(null);
export default function DataProvider({ children }: IDataProviderProps) {
  const [Data, setData] = React.useState<DataProp[]>([]);
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
