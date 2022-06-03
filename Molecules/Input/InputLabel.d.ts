import { ReactNode } from "react";
interface Props {
    className?: string;
    htmlFor?: string;
    children: ReactNode;
}
export default function InputGroup({ className, htmlFor, children }: Props): JSX.Element;
export {};
