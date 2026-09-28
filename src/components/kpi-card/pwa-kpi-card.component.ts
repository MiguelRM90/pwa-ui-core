import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pwa-kpi-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pwa-kpi-card.component.html',
  styles: [`
    :host {
      display: block;
    }
    .pwa-kpi-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
    .pwa-kpi-card__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }
    .pwa-kpi-card__label {
      font-size: var(--pwa-text-xs);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--pwa-text-secondary);
    }
    .pwa-kpi-card__main {
      display: flex;
      align-items: baseline;
      gap: 0.375rem;
      margin: 0.25rem 0;
      flex-wrap: wrap;
    }
    .pwa-kpi-card__value {
      font-size: var(--pwa-text-3xl);
      font-weight: 900;
      color: var(--pwa-text-primary);
      letter-spacing: -0.03em;
      font-feature-settings: var(--pwa-font-features);
      line-height: 1.1;
    }
    .pwa-kpi-card__unit {
      font-size: var(--pwa-text-xs);
      color: var(--pwa-text-muted);
      font-weight: 600;
    }
    .pwa-kpi-card__desc {
      margin: 0.375rem 0 0 0;
      font-size: var(--pwa-text-xs);
      color: var(--pwa-text-secondary);
      line-height: 1.4;
    }
    .pwa-kpi-card__footer:not(:empty) {
      margin-top: 0.75rem;
      padding-top: 0.75rem;
      border-top: 1px solid var(--pwa-border);
      font-size: var(--pwa-text-xs);
      color: var(--pwa-text-secondary);
    }
  `],
})
export class PwaKpiCardComponent {
  readonly label = input.required<string>();
  readonly value = input.required<string | number>();
  readonly unit = input<string>('');
  readonly description = input<string>('');
}
