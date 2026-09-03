import type { IconProps } from "../../Atoms/Icon/Icon";
/** The input's glyph: an `Icon` name plus which side it sits on. */
export type InputIcon = Pick<IconProps, "name" | "size" | "color" | "className"> & {
    position?: "left" | "right";
    onClick?: () => void;
};
