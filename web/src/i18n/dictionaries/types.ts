/** A block of a long-form (legal) page. Strings accept the Rich markup (see ../rich.tsx). */
export type Block = { p: string } | { h2: string } | { ul: string[] };

/** Title of a page split in two lines; the second one is rendered as the gold italic accent. */
export type SplitTitle = { line1: string; accent: string };
