# pwa-ui-core

Librería centralizada de **Design Tokens**, **CSS semántico nativo** y **componentes Standalone de Angular** para aplicaciones web progresivas (PWA).

Elimina la dependencia de Tailwind CSS en favor de CSS moderno, limpio y ligero, optimizado para interfaces móviles táctiles y rendimiento PWA sin sobreingeniería.

---

## 📦 Instalación e Integración

### 1. Importación de Estilos y Tokens en tu PWA (`styles.css`)

Puedes importar los tokens individuales o el bundle completo:

```css
/* Opción recomendada: Bundle completo (Tokens + Reset PWA + Clases + Utilidades) */
@import "pwa-ui-core/styles";

/* O bien, importar por capas: */
@import "pwa-ui-core/tokens";
@import "pwa-ui-core/styles/reset";
@import "pwa-ui-core/styles/components";
@import "pwa-ui-core/styles/utilities";
```

### 2. Personalización del Color de Marca de tu App

Cada PWA puede personalizar su color de marca en su `:root` sin alterar el resto del sistema de diseño:

```css
/* En el styles.css de tu PWA: */
:root {
  /* Ejemplo: DipWise (Sky) */
  --pwa-brand-500: #0284c7;
  --pwa-brand-600: #0369a1;

  /* Ejemplo: Spanish Mortgage Planner (Indigo) */
  /* --pwa-brand-500: #4f46e5; */
  /* --pwa-brand-600: #4338ca; */

  /* Ejemplo: BleepSync (Emerald) */
  /* --pwa-brand-500: #10b981; */
  /* --pwa-brand-600: #059669; */
}
```

---

## 🎨 Design Tokens (Variables CSS)

- **Superficies**: `--pwa-bg-canvas`, `--pwa-bg-surface`, `--pwa-bg-card`, `--pwa-bg-card-hover`, `--pwa-bg-subtle`, `--pwa-bg-input`.
- **Textos**: `--pwa-text-primary`, `--pwa-text-secondary`, `--pwa-text-muted`, `--pwa-text-inverse`.
- **Bordes**: `--pwa-border`, `--pwa-border-strong`, `--pwa-border-subtle`.
- **Estados**: `--pwa-success`, `--pwa-warning`, `--pwa-danger`, `--pwa-info` (con sus variantes `-soft` y `-text`).
- **Radios**: `--pwa-radius-sm` (8px), `--pwa-radius-md` (12px), `--pwa-radius-lg` (16px), `--pwa-radius-xl` (24px), `--pwa-radius-full` (9999px).
- **Tipografía**: `--pwa-font-sans`, `--pwa-font-mono`, y `--pwa-font-features` (incluye números tabulares `tnum`).

---

## 🧩 Clases CSS Semánticas (Zero-Tailwind)

| Elemento | Clases disponibles |
| :--- | :--- |
| **Botones** | `.pwa-btn`, `.pwa-btn--primary`, `.pwa-btn--secondary`, `.pwa-btn--danger`, `.pwa-btn--ghost`, `.pwa-btn--soft`, `.pwa-btn--sm`, `.pwa-btn--lg`, `.pwa-btn--icon`, `.pwa-btn--chip` |
| **Tarjetas** | `.pwa-card`, `.pwa-card--interactive`, `.pwa-card--subtle` |
| **Formularios** | `.pwa-input-group`, `.pwa-label`, `.pwa-input`, `.pwa-select`, `.pwa-textarea`, `.pwa-slider` |
| **Badges** | `.pwa-badge`, `.pwa-badge--success`, `.pwa-badge--warning`, `.pwa-badge--danger`, `.pwa-badge--info`, `.pwa-badge-dot`, `.pwa-badge-dot--pulse` |
| **Contenedores** | `.pwa-container`, `.pwa-container--narrow`, `.pwa-grid-kpis`, `.pwa-grid-2` |
| **Tablas PWA** | `.pwa-table-container`, `.pwa-table` |

---

## ⚡ Componentes Standalone Angular (`ChangeDetectionStrategy.OnPush`)

Todos los componentes son Standalone y pueden importarse individualmente:

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

---

## 🛠️ Servicios Core

- **`PwaService`**: Signals `isOnline()`, `canInstall()`, `hasUpdate()`. Métodos `promptInstall(): Promise<boolean>`, `applyUpdate(): void`.
- **`ThemeService`**: Signals `mode()` ('light' | 'dark' | 'system'), `isDark()`. Métodos `setTheme()`, `toggleTheme()`.
- **`PwaToastService`**: Métodos `success()`, `error()`, `warning()`, `info()`, `dismiss()`.

---

## 📄 Licencia
MIT
