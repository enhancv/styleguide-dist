import React from "react";
import "../../tokens/components/dropdown.css";
import "../../tokens/components/dropdown-density.css";
import type { DropdownDensityToken } from "../../tokens/components/dropdown-density";
export interface DropdownSurfaceProps extends React.ComponentPropsWithoutRef<"div"> {
    /** The Dropdown Density mode every row and label inside follows. */
    density?: DropdownDensityToken;
    /** `"auto"` applies dropdown/min-width and dropdown/max-width. */
    width?: "auto" | "trigger" | "fixed";
    /**
     * Draws the panel in the flow instead of fixed over the page: for docs and
     * QA boards that show many panels at once. Not a product API.
     */
    inline?: boolean;
    /** The mobile sheet: full width minus 8px, Touch rows, over a backdrop. */
    sheet?: boolean;
}
/**
 * The floating surface every dropdown panel uses: Figma's Dropdown set
 * (dropdown/surface, radius/8, Shadow/Default/LG, the density's padding and
 * max height). The Dropdown root renders it in a portal and positions it;
 * docs render it `inline`.
 */
export declare const DropdownSurface: React.ForwardRefExoticComponent<DropdownSurfaceProps & React.RefAttributes<HTMLDivElement>>;
