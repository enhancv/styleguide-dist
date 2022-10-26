/// <reference types="react" />
export interface Props {
    onClick?: () => void;
    label?: string;
    labelClassName?: string;
    checked: boolean;
    labelFor?: string;
}
export default function RadioButton({ onClick, checked, label, labelClassName, labelFor, }: Props): JSX.Element;
