import React from "react";
import "./CustomScrollbar.scss";
interface Props {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    height?: string;
}
export default function CustomScrollbar({ className, children, style, height, }: Props): React.JSX.Element;
export {};
