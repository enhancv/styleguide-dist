export interface Props {
    breakpoints: ("xs" | "sm" | "xsm" | "md" | "lg" | "xl")[];
}
declare function isInBreakpoint({ breakpoints }: Props): boolean;
export default isInBreakpoint;
