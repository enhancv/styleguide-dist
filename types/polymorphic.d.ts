import type React from "react";
/**
 * A component's own props plus the props of the element it renders. `Element`
 * may be a union of tags, which yields the props they share.
 */
export type PolymorphicProps<Element extends React.ElementType, OwnProps> = OwnProps & {
    as?: Element;
} & Omit<React.ComponentPropsWithoutRef<Element>, keyof OwnProps | "as">;
export type PolymorphicRef<Element extends React.ElementType> = React.ComponentPropsWithRef<Element>["ref"];
/** `forwardRef` cannot stay generic, so components cast their result to this. */
export type PolymorphicComponent<Allowed extends React.ElementType, Default extends Allowed, OwnProps> = <Element extends Allowed = Default>(props: PolymorphicProps<Element, OwnProps> & {
    ref?: PolymorphicRef<Element>;
}) => React.ReactElement | null;
