export interface Props {
    id: string;
    label?: string;
    name?: string;
    className?: string;
    defaultChecked?: boolean;
    onClick?: () => void;
}
export declare const Checkbox: ({ label, onClick, name, id, defaultChecked, className, }: Props) => JSX.Element;
