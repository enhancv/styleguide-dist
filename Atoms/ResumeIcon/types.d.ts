export interface ResumeIconPath {
    d: string;
    fillRule?: "evenodd" | "nonzero";
}
export interface ResumeIconSetData {
    id: string;
    viewBox: string;
    /** Rendered when a name is missing from the set, so resume data never renders blank. */
    defaultName: string;
    paths: Record<string, ReadonlyArray<ResumeIconPath>>;
}
