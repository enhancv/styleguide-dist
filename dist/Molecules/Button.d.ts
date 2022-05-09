declare enum ColorType {
    Green = "green",
    Purple = "purple",
    Red = "red"
}
interface Props {
    color?: ColorType;
    primary?: boolean;
    size?: string;
    label: string;
    icon?: string;
    redirectUrl?: string;
    onClick: () => void;
}
export declare const Button: ({ primary, size, label, color, onClick, }: Props) => JSX.Element;
export {};
