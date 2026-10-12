import type { FurnitureItem } from './furnitureData';

// Resolves the free-text wood / fabric option names used across the catalogue
// to a display colour, so swatches and 3D materials always agree.

const WOOD_RULES: [RegExp, string][] = [
  [/smoked|charcoal|ebony/i, '#362B24'],
  [/fluted|dark walnut/i, '#3B2317'],
  [/walnut/i, '#4A2E1E'],
  [/natural white oak/i, '#B58D64'],
  [/oak/i, '#A67C52'],
  [/sheesham|rosewood/i, '#5A2D1B'],
  [/teak/i, '#7C4B27'],
];

const FABRIC_RULES: [RegExp, string][] = [
  [/ivory|bouclé|boucle/i, '#EDE7DC'],
  [/cognac/i, '#874B2A'],
  [/oatmeal|linen/i, '#D7CEBE'],
  [/olive|forest|velvet/i, '#3B4D3C'],
  [/charcoal|black/i, '#2A2725'],
];

const match = (rules: [RegExp, string][], name: string | undefined, fallback: string) =>
  (name && rules.find(([re]) => re.test(name))?.[1]) || fallback;

export const woodHex = (name?: string) => match(WOOD_RULES, name, '#7C4B27');
export const fabricHex = (name?: string) => match(FABRIC_RULES, name, '#EDE7DC');

/* -------------------------------------------------------------------------- */
/*                         Which 3D model a product uses                      */
/* -------------------------------------------------------------------------- */

export type ModelKind = 'armchair' | 'sofa' | 'dining' | 'dining-chair' | 'bed' | 'tv' | 'wardrobe' | 'desk';

const BY_ID: Record<string, ModelKind> = {
  'crf-01': 'armchair',
  'crf-02': 'sofa',
  'crf-03': 'dining',
  'crf-04': 'bed',
  'crf-05': 'tv',
  'crf-06': 'wardrobe',
  'crf-07': 'desk',
  'crf-08': 'dining-chair',
  'crf-13': 'sofa',
  'crf-14': 'sofa',
};

const BY_CATEGORY: Record<FurnitureItem['category'], ModelKind> = {
  'living-room': 'sofa',
  dining: 'dining',
  bedroom: 'bed',
  'tv-units': 'tv',
  wardrobes: 'wardrobe',
  'office-furniture': 'desk',
};

export const modelFor = (product: Pick<FurnitureItem, 'id' | 'category'>): ModelKind =>
  BY_ID[product.id] ?? BY_CATEGORY[product.category];
