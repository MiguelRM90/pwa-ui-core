import { Component, ChangeDetectionStrategy, input, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaService } from '../../services/pwa.service.js';

@Component({
  selector: 'pwa-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pwa-header.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
    .pwa-header {
      position: sticky;
      top: 0;
      z-index: 40;
      background-color: color-mix(in srgb, var(--pwa-bg-surface) 88%, transparent);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--pwa-border);
      transition: background-color 0.2s ease, border-color 0.2s ease;
    }
    .pwa-header__banner {
      background-color: var(--pwa-brand-600);
      color: #ffffff;
      padding: 0.5rem 1rem;
      font-size: var(--pwa-text-xs);
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
    }
    .pwa-header__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 4rem;
      gap: 1rem;
    }
    .pwa-header__brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      min-width: 0;
    }
    .pwa-header__titles {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .pwa-header__title-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .pwa-header__title {
      margin: 0;
      font-size: var(--pwa-text-base);
      font-weight: 800;
      color: var(--pwa-text-primary);
      letter-spacing: -0.02em;
      white-space: nowrap;
    }
    .pwa-header__subtitle {
      margin: 0;
      font-size: var(--pwa-text-xs);
      color: var(--pwa-text-secondary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .pwa-header__actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-shrink: 0;
    }
    .pwa-header__icon {
      width: 1rem;
      height: 1rem;
    }
    @media (max-width: 640px) {
      .pwa-header__subtitle,
      .pwa-header__btn-label,
      .pwa-header__network-text {
        display: none;
      }
    }
  `],
})
export class PwaHeaderComponent {
  readonly pwa = inject(PwaService);

  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly badgeText = input<string>('');
  readonly showNetworkStatus = input<boolean>(true);
  readonly showInstallButton = input<boolean>(true);
  readonly showUpdateBanner = input<boolean>(true);
  readonly installButtonText = input<string>('Install App');
  readonly updateMessage = input<string>('A new version is available.');
  readonly updateButtonText = input<string>('Update');

  readonly installed = output<boolean>();

  async onInstallPrompt(): Promise<void> {
    const success = await this.pwa.promptInstall();
    this.installed.emit(success);
  }
}
