export interface Customer {
  id: string;
  name: string;
  phoneNumber: string;
  address: string;
}

export interface PaginationType {
  current: number;
  pageSize: number;
  total: number;
}

export interface HomeState {
  isLoading: boolean;
  list: Customer[];
  pagination: PaginationType;
  searchKey: string;
}

interface OptionType {
  label: string;
  value: string;
}

export interface SelectionType {
  options: OptionType[];
  defaultValue?: string;
}

export interface FormItemType {
  label: string;
  name: string;
  suffix?: string;
  type?: 'input' | 'selection';
  selection?: SelectionType;
}

export type AsyncDispatchCallback = () => void;
