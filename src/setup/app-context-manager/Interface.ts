export interface DataProp {
  text: string;
  priority: number;
}

export interface ContextProps {
  Data?: DataProp[];
  Mode?: "edit" | "writing";
  HandleAdd: (item: DataProp) => void;
  HandleDelete: (item: DataProp) => void;
  HandleEdit: () => void;
}
