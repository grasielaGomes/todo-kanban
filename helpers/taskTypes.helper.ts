export const TYPES: string[] = ["discovery", "feature", "bug"];

export const TYPES_TITLES: { [key: string]: string } = {
  discovery: "Discovery",
  feature: "New Feature",
  bug: "Bug Fix"
};

export type Types = "discovery" | "feature" | "bug";