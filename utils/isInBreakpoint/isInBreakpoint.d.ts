export type BreakpointsType = ("xs" | "sm" | "xsm" | "md" | "lg" | "xl")[];
declare function isInBreakpoint(breakpoints: BreakpointsType): boolean;
export default isInBreakpoint;
