import React from "react";
export interface Props {
    value: boolean;
    label?: JSX.Element;
    onChange: (value: boolean, event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
    className?: string;
    flipped?: boolean;
    fullWidth?: boolean;
    small?: boolean;
}
declare const ToggleButton: ({ value, label, onChange, className, flipped, fullWidth, small, }: Props) => React.JSX.Element;
export default ToggleButton;
