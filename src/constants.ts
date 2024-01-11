import { RuneStatType } from '@/rune';

export const RUNE_QUALITIES = ['COMMON', 'MAGIC', 'RARE', 'HERO', 'LEGEND'] as const;

export const RUNE_SETS = [
  'ENERGY',
  'FATAL',
  'BLADE',
  'RAGE',
  'SWIFT',
  'FOCUS',
  'GUARD',
  'ENDURE',
  'VIOLENT',
  'WILL',
  'NEMESIS',
  'SHIELD',
  'REVENGE',
  'DESPAIR',
  'VAMPIRE',
  'DESTROY',
  'FIGHT',
  'DETERMINATION',
  'ENHANCE',
  'ACCURACY',
  'TOLERANCE',
] as const;

export const RUNE_STAT_TYPES = [
  'ATTACK_PERCENTAGE',
  'ATTACK_FLAT',
  'DEFENSE_PERCENTAGE',
  'DEFENSE_FLAT',
  'HEALTH_PERCENTAGE',
  'HEALTH_FLAT',
  'CRITICAL_RATE',
  'CRITICAL_DAMAGE',
  'SPEED',
  'RESISTANCE',
  'ACCURACY',
] as const;

export const PERCENTAGE_RUNE_STAT_TYPES: RuneStatType[] = [
  'ATTACK_PERCENTAGE',
  'DEFENSE_PERCENTAGE',
  'HEALTH_PERCENTAGE',
  'CRITICAL_RATE',
  'CRITICAL_DAMAGE',
  'RESISTANCE',
  'ACCURACY',
];
