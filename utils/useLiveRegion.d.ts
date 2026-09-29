/**
 * The text of a polite `role="status"` region and the function that sets it.
 * `say("")` stays silent. A trailing NBSP on every other message makes screen
 * readers re-announce identical text.
 */
export declare const useLiveRegion: () => [string, (message: string) => void];
