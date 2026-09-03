import type { ButtonElement, ButtonSize } from "./ButtonPrimitive";
import type { ButtonColorToken } from "../../tokens/components/button";
import type { UiIconName } from "../Icon/Icon";
import type { PolymorphicComponent, PolymorphicProps } from "../../types/polymorphic";
declare const DEFAULT_ELEMENT = "a";
interface LinkOwnProps {
    color?: ButtonColorToken;
    size?: ButtonSize;
    iconStart?: UiIconName;
    iconEnd?: UiIconName;
    fullWidth?: boolean;
}
export type LinkProps<E extends ButtonElement = typeof DEFAULT_ELEMENT> = PolymorphicProps<E, LinkOwnProps>;
/**
 * Button-family text link: the Link type of the Figma set. Renders an anchor
 * by default; `as="button"` for click handlers that navigate nowhere.
 */
export declare const Link: PolymorphicComponent<ButtonElement, typeof DEFAULT_ELEMENT, LinkOwnProps>;
export {};
