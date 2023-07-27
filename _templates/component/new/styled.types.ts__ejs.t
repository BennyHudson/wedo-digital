---
to: src/components/<%= name %>/styles/<%= name %>.style.types.ts
---
import type { Theme } from '@themes/wedoTheme/wedoTheme.types'

export interface Styled<%= name %>Props {
  theme: Theme;
}
