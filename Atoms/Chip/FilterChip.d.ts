import type { ChipClickableProps, ChipComponent, ChipStaticProps, ChipVisualProps } from "./ChipPrimitive";
import type { UiIconName } from "../Icon/Icon";
interface FilterChipOwnProps extends ChipVisualProps {
    /** Leading glyph while unselected; the check replaces it when selected. */
    iconStart?: UiIconName;
    /** Figma Selected. Controlled — toggle it in your onClick. */
    selected?: boolean;
    /** Hidden state text for static and dropdown chips. Default "selected". */
    selectedLabel?: string;
    children: string;
}
export interface FilterChipClickableProps extends ChipClickableProps {
    /** Figma Icon Trailing: a chevron-down that rotates on aria-expanded="true". */
    dropdown?: boolean;
}
export interface FilterChipStaticProps extends ChipStaticProps {
    /** Static variants have no Trailing Icon: a span can't open a menu. */
    dropdown?: never;
}
export type FilterChipProps = FilterChipOwnProps & (FilterChipClickableProps | FilterChipStaticProps);
export declare const FilterChip: ChipComponent<FilterChipProps>;
export {};
