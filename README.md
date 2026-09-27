# pwa-ui-core

Centralized library of **Design Tokens**, **Semantic Native CSS**, and **Standalone Angular UI Components** for Progressive Web Apps (PWAs).

Eliminates the dependency on Tailwind CSS in favor of clean, modern, and lightweight native CSS optimized for mobile touch interfaces and PWA performance without overengineering.

---

## 📦 Installation & Setup

### 1. Import Styles and Tokens in your PWA (`styles.css`)

You can import the complete bundle or individual modular layers:

```css
/* Recommended: Complete bundle (Tokens + PWA Reset + Semantic Classes + Layout Utilities) */
@import "pwa-ui-core/styles";

/* Or import by layers: */
@import "pwa-ui-core/tokens";
@import "pwa-ui-core/styles/reset";
@import "pwa-ui-core/styles/components";
@import "pwa-ui-core/styles/utilities";
```

### 2. Customizing Your App Brand Color

Each PWA can easily override its primary brand color in its `:root` stylesheet without affecting the rest of the design system:

```css
/* In your PWA's styles.css: */
:root {
  /* Example: DipWise (Sky) */
  --pwa-brand-500: #0284c7;
  --pwa-brand-600: #0369a1;

  /* Example: Spanish Mortgage Planner (Indigo) */
  /* --pwa-brand-500: #4f46e5; */
  /* --pwa-brand-600: #4338ca; */

  /* Example: BleepSync (Emerald) */
  /* --pwa-brand-500: #10b981; */
  /* --pwa-brand-600: #059669; */
}
```

---

## 🎨 Design Tokens (CSS Custom Properties)

- **Surfaces**: `--pwa-bg-canvas`, `--pwa-bg-surface`, `--pwa-bg-card`, `--pwa-bg-card-hover`, `--pwa-bg-subtle`, `--pwa-bg-input`.
- **Text**: `--pwa-text-primary`, `--pwa-text-secondary`, `--pwa-text-muted`, `--pwa-text-inverse`.
- **Borders**: `--pwa-border`, `--pwa-border-strong`, `--pwa-border-subtle`.
- **States**: `--pwa-success`, `--pwa-warning`, `--pwa-danger`, `--pwa-info` (with `-soft` and `-text` variants).
- **Radii**: `--pwa-radius-sm` (8px), `--pwa-radius-md` (12px), `--pwa-radius-lg` (16px), `--pwa-radius-xl` (24px), `--pwa-radius-full` (9999px).
- **Typography**: `--pwa-font-sans`, `--pwa-font-mono`, and `--pwa-font-features` (includes tabular numbers `tnum`).

---

## 🧩 Semantic CSS Classes (Zero-Tailwind)

| Element | Available Classes |
| :--- | :--- |
| **Buttons** | `.pwa-btn`, `.pwa-btn--primary`, `.pwa-btn--secondary`, `.pwa-btn--danger`, `.pwa-btn--ghost`, `.pwa-btn--soft`, `.pwa-btn--sm`, `.pwa-btn--lg`, `.pwa-btn--icon`, `.pwa-btn--chip` |
| **Cards** | `.pwa-card`, `.pwa-card--interactive`, `.pwa-card--subtle` |
| **Form Controls** | `.pwa-input-group`, `.pwa-label`, `.pwa-input`, `.pwa-select`, `.pwa-textarea`, `.pwa-slider` |
| **Badges & Pills** | `.pwa-badge`, `.pwa-badge--success`, `.pwa-badge--warning`, `.pwa-badge--danger`, `.pwa-badge--info`, `.pwa-badge-dot`, `.pwa-badge-dot--pulse` |
| **Containers & Grid** | `.pwa-container`, `.pwa-container--narrow`, `.pwa-grid-kpis`, `.pwa-grid-2` |
| **PWA Tables** | `.pwa-table-container`, `.pwa-table` |

---

## ⚡ Standalone Angular Components (`ChangeDetectionStrategy.OnPush`)

All components are Standalone and tree-shakeable:

```typescript
import {
  PwaHeaderComponent,
  PwaModalComponent,
  PwaKpiCardComponent,
  PwaBadgeComponent,
  PwaNumericSliderComponent,
  PwaToastContainerComponent,
  PwaUpdateBannerComponent
} from 'pwa-ui-core';
```

### Example: PWA Header with Network Indicator & App Installer
```html
<pwa-header
  title="DipWise"
  subtitle="ATH Tactical DCA"
  badgeText="Offline First"
>
  <div header-logo class="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white font-bold">
    📈
  </div>

  <div header-actions>
    <button type="button" class="pwa-btn pwa-btn--secondary pwa-btn--sm" (click)="openSettings()">
      ⚙️ Settings
    </button>
  </div>
</pwa-header>
```

### Example: Accessible Modal Dialog
```html
<pwa-modal
  [isOpen]="isSettingsOpen()"
  title="Portfolio Configuration"
  subtitle="Adjust periodic DCA parameters"
  (close)="isSettingsOpen.set(false)"
>
  <div class="space-y-4">
    <div class="pwa-input-group">
      <label class="pwa-label">Monthly Budget (€)</label>
      <input type="number" class="pwa-input" [(ngModel)]="budget" />
    </div>
  </div>

  <div modal-footer>
    <button type="button" class="pwa-btn pwa-btn--secondary" (click)="isSettingsOpen.set(false)">Cancel</button>
    <button type="button" class="pwa-btn pwa-btn--primary" (click)="save()">Save Changes</button>
  </div>
</pwa-modal>
```

---

## 🛠️ Core PWA Services

- **`PwaService`**: Reactive signals `isOnline()`, `canInstall()`, `hasUpdate()`. Methods `promptInstall(): Promise<boolean>`, `applyUpdate(): void`.
- **`ThemeService`**: Signals `mode()` ('light' | 'dark' | 'system'), `isDark()`. Methods `setTheme()`, `toggleTheme()`.
- **`PwaToastService`**: Toast trigger methods `success()`, `error()`, `warning()`, `info()`, `dismiss()`.

---

## 📄 License
MIT
