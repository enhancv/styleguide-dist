export interface Props {
    required: boolean;
    label?: string;
    labelFor?: string;
    labelClassName?: string;
    name?: string;
    className?: string;
    placeholder?: string;
    resize?: boolean;
    value?: string;
    rows?: number;
    maxLength?: number;
    onChange?: () => void;
    onBlur?: () => void;
}
export declare const Textarea: ({ required, label, labelFor, labelClassName, name, className, placeholder, resize, value, onChange, rows, maxLength, onBlur, }: Props) => JSX.Element;
