import React from "react";
import type { UiIconName } from "../Icon/Icon";
export interface InputActionProps extends Omit<React.ComponentPropsWithoutRef<"button">, "children" | "type"> {
    icon: Extract<UiIconName, "close" | "eye" | "eye-off">;
    "aria-label": string;
}
/**
 * Figma's _InputAction: the small icon button inside a field (Clear, the
 * password toggle). The box is the icon's size, so it lines up with the
 * field's padding; the target reaches 4px past it on every side. Private:
 * outside a field use IconButton.
 */
export declare const InputAction: {
    ({ icon, className, ...rest }: InputActionProps): React.JSX.Element;
    displayName: string;
};
