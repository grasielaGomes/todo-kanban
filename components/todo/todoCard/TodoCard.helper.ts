import { BadgeTypesI } from "./todoCard.interface";

export const BADGE_TYPES: BadgeTypesI = {
  bug: {
    label: "Bug Fix",
    colorScheme: "brand.pink"
  },
  discovery: {
    label: "Discovery",
    colorScheme: "brand.green"
  },
  feature: {
    label: "New Feature",
    colorScheme: "brand.purple"
  }
};

export const ICON_SIZE = 20;
