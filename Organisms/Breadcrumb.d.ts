interface Path {
    name: string;
    url: string;
}
interface Props {
    paths: Path[];
    className?: string;
    eventParams?: {};
}
declare const Breadcrumb: ({ paths, className, eventParams }: Props) => JSX.Element;
export default Breadcrumb;
