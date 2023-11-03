import React, { ReactNode } from "react";
export interface Props {
    defaultValue?: string;
    label?: string | JSX.Element;
    onChange: (value: string) => void;
    className?: string;
    options: any[];
    fullWidth?: boolean;
    small?: boolean;
    children?: ReactNode;
}
declare const SelectDropdown: ({ defaultValue, onChange, className, options, fullWidth, label, children, }: Props) => React.JSX.Element;
export default SelectDropdown;
