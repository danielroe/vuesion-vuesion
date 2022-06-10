import { describe, test, expect } from 'vitest';
import {
  FontWeightValues,
  AlignmentValues,
  HorizontalAlignmentValues,
  VerticalAlignmentValues,
  SpacingValues,
  TextColorValues,
  TextStyleValues,
  WidthValues,
} from '@/components/prop-types';

describe('prop-types', () => {
  test('All type values should be present', () => {
    expect(TextStyleValues).not.toBeUndefined();
    expect(TextColorValues).not.toBeUndefined();
    expect(FontWeightValues).not.toBeUndefined();
    expect(AlignmentValues).not.toBeUndefined();
    expect(HorizontalAlignmentValues).not.toBeUndefined();
    expect(VerticalAlignmentValues).not.toBeUndefined();
    expect(SpacingValues).not.toBeUndefined();
    expect(WidthValues).not.toBeUndefined();
  });
});
