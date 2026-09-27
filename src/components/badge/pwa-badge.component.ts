import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type PwaBadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

@Component({
  selector: 'pwa-badge',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="pwa-badge" [ngClass]="badgeClass()">
      @if (showDot()) {
        <span class="pwa-badge-dot" [class.pwa-badge-dot--pulse]="pulseDot()"></span>
      }
      @if (label()) {
        <span>{{ label() }}</span>
      }
      <ng-content></ng-content>
    </span>
  `,
  styles: [`
    :host {
      display: inline-flex;
    }
    .pwa-badge--neutral {
      background-color: var(--pwa-bg-subtle);
      color: var(--pwa-text-secondary);
      border-color: var(--pwa-border);
    }
  `],
})
export class PwaBadgeComponent {
  readonly variant = input<PwaBadgeVariant>('info');
  readonly label = input<string>('');
  readonly showDot = input<boolean>(false);
  readonly pulseDot = input<boolean>(false);

  badgeClass(): string {
    switch (this.variant()) {
      case 'success':
        return 'pwa-badge--success';
      case 'warning':
        return 'pwa-badge--warning';
      case 'danger':
        return 'pwa-badge--danger';
      case 'neutral':
        return 'pwa-badge--neutral';
      case 'info':
      default:
        return 'pwa-badge--info';
    }
  }
}
