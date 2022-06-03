import { PropsWithChildren } from "react";
interface Props {
    label?: string;
    name?: string;
    error?: string[] | string;
    className?: string;
}
export default function InputItem({ label, name, children, error, className, }: PropsWithChildren<Props>): JSX.Element;
export {};
