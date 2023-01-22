export interface DataProp {
  id?: string;
  text: string;
  priority: number;
}

export interface ContextProps {
  Data?: DataProp[];
  Mode?: "edit" | "writing";
  Done?: boolean;
  HandleAdd: (item: DataProp) => void;
  HandleDelete: (item: DataProp) => void;
  HandleEdit: () => void;
  HandleDone: () => void;
}

export interface ZustandProps {
  Data: DataProp[];
}
