import { PropsWithChildren } from "react";

export interface IFilterBarProps<T> {
    options: T[]
    onSelectOption: (option: number) => void;
    backgroundColor?: string;
    textSelectedColor?: string;
    textUnselectedColor?: string;
}

export interface IOptionFilterBar {
  label: string;
  value: string;
}

export interface ContainerProps extends PropsWithChildren {
    titleSection: React.ReactNode
    backgroundColor?: string;
}
