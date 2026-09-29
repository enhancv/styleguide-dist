import type { ChipClickableProps, ChipComponent, ChipStaticProps, ChipVisualProps } from "./ChipPrimitive";
import type { UiIconName } from "../Icon/Icon";
interface SuggestionChipOwnProps extends ChipVisualProps {
    /** Figma Icon Leading + Leading Icon (preset `magic`). */
    iconStart?: UiIconName;
    children: string;
}
export type SuggestionChipProps = SuggestionChipOwnProps & (ChipClickableProps | ChipStaticProps);
export declare const SuggestionChip: ChipComponent<SuggestionChipProps>;
export type { ChipSize, ChipVariant } from "./ChipPrimitive";
