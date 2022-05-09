/// <reference types="react" />
interface Props {
    name?: string;
    label?: string;
    className?: string;
    error?: string;
    placeholder?: string;
    onBlur?: () => void;
    onClick?: () => void;
    icon?: string;
    size?: "medium" | "large";
}
export default function Input({ name, label, className, error, placeholder, onBlur, onClick, size, icon, }: Props): JSX.Element;
export {};
