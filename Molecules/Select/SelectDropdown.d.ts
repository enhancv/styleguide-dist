import React, { ReactNode } from "react";
export interface Props<T = string | number> {
    value?: T;
    label?: string | JSX.Element;
    onChange: (value: T) => void;
    className?: string;
    options: {
        value: T;
        text: string;
    }[];
    fullWidth?: boolean;
    small?: boolean;
    children?: ReactNode;
}
declare function SelectDropdown<T>({ value, onChange, className, options, fullWidth, label, children, }: Props<T>): React.JSX.Element;
export default SelectDropdown;
