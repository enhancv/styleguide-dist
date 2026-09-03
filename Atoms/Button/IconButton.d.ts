import type { ButtonElement, ButtonSize } from "./ButtonPrimitive";
import type { ButtonColorToken } from "../../tokens/components/button";
import type { UiIconName } from "../Icon/Icon";
import type { PolymorphicComponent, PolymorphicProps } from "../../types/polymorphic";
declare const DEFAULT_ELEMENT = "button";
interface IconButtonOwnProps {
    color?: ButtonColorToken;
    size?: ButtonSize;
    variant?: "primary" | "secondary" | "ghost";
    fullWidth?: boolean;
    /** The glyph — the square's only content. */
    icon: UiIconName;
    children?: never;
    /** Centered Loader over the hidden glyph — the square never resizes.
     *  Visual only (plus aria-busy): pair with `disabled` to block clicks. */
    loading?: boolean;
    /** The icon is the only content, so the accessible name is mandatory. */
    "aria-label": string;
}
export type IconButtonProps<E extends ButtonElement = typeof DEFAULT_ELEMENT> = PolymorphicProps<E, IconButtonOwnProps>;
export declare const IconButton: PolymorphicComponent<ButtonElement, typeof DEFAULT_ELEMENT, IconButtonOwnProps>;
export {};
