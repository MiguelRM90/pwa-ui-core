import { Component, ChangeDetectionStrategy, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaService } from '../../services/pwa.service.js';

@Component({
  selector: 'pwa-update-banner',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (pwa.hasUpdate()) {
      <div class="pwa-update-banner">
        <span>{{ message() }}</span>
        <button
          type="button"
          class="pwa-btn pwa-btn--sm pwa-update-banner__btn"
          (click)="pwa.applyUpdate()"
        >
          {{ buttonText() }}
        </button>
      </div>
    }
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
    .pwa-update-banner {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      padding: 0.5rem 1rem;
      background-color: var(--pwa-brand-600);
      color: #ffffff;
      font-size: var(--pwa-text-xs);
      font-weight: 500;
      text-align: center;
    }
    .pwa-update-banner__btn {
      background-color: #ffffff;
      color: var(--pwa-brand-600);
      font-weight: 700;
      border: none;
    }
    .pwa-update-banner__btn:hover {
      background-color: var(--pwa-slate-100);
    }
  `],
})
export class PwaUpdateBannerComponent {
  readonly pwa = inject(PwaService);

  readonly message = input<string>(
    'A new version is available with calculation and performance improvements.'
  );
  readonly buttonText = input<string>('Update now');
}
