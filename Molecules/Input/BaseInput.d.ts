import { Props as IconProps } from "../../Atoms/Icon";
import { HTMLAttributes } from "react";
declare type InputIcon = {
    position: "left" | "right";
} & IconProps;
declare type Props = {
    className?: string;
    fluid?: boolean;
    icon?: InputIcon;
    color?: "red";
    size?: "medium" | "large";
    [index: string]: any;
} & HTMLAttributes<HTMLInputElement>;
export default function BaseInput({ className, fluid, size, color, icon, ...props }: Props): JSX.Element;
export {};
