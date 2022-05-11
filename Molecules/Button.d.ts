export declare enum ColorType {
    Green = "green",
    Purple = "purple",
    Red = "red"
}
declare enum SizeType {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
interface Props {
    color?: `${ColorType}`;
    primary?: boolean;
    size?: `${SizeType}`;
    label: string;
    icon?: string;
    redirectUrl?: string;
    onClick: () => void;
}
export declare const Button: ({ primary, size, label, color, onClick, }: Props) => JSX.Element;
export {};
