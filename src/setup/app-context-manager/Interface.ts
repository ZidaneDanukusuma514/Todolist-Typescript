export interface DataProp {
  text: string;
  priority: number;
}

export interface ContextProps {
  Data?: DataProp[];
  HandleAdd: (item: DataProp) => void;
  HandleDelete: (item: DataProp) => void;
}
