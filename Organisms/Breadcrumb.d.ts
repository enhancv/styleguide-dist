import { HTMLAttributes } from "react";
declare type Props = {
    currentPage: string;
    paths?: string[];
    className?: string;
    eventParams?: {};
} & HTMLAttributes<HTMLButtonElement>;
declare const Breadcrumb: ({ currentPage, paths, className, eventParams, }: Props) => JSX.Element;
export default Breadcrumb;
