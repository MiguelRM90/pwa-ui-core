import { Component, ChangeDetectionStrategy, input, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaService } from '../../services/pwa.service.js';

@Component({
  selector: 'pwa-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="pwa-header">
      <!-- PWA Update Banner -->
      @if (showUpdateBanner() && pwa.hasUpdate()) {
        <div class="pwa-header__banner">
          <span>{{ updateMessage() }}</span>
          <button type="button" class="pwa-btn pwa-btn--primary pwa-btn--sm" (click)="pwa.applyUpdate()">
            {{ updateButtonText() }}
          </button>
        </div>
      }

      <div class="pwa-container pwa-header__inner">
        <!-- Logo and Branding -->
        <div class="pwa-header__brand">
          <ng-content select="[header-logo]"></ng-content>
          <div class="pwa-header__titles">
            <div class="pwa-header__title-row">
              <h1 class="pwa-header__title">{{ title() }}</h1>
              @if (badgeText()) {
                <span class="pwa-badge pwa-badge--info">{{ badgeText() }}</span>
              }
            </div>
            @if (subtitle()) {
              <p class="pwa-header__subtitle">{{ subtitle() }}</p>
            }
          </div>
        </div>

        <!-- Right Side Actions & Indicators -->
        <div class="pwa-header__actions">
          <!-- Online/Offline Network Status -->
          @if (showNetworkStatus()) {
            <div
              class="pwa-badge"
              [ngClass]="pwa.isOnline() ? 'pwa-badge--success' : 'pwa-badge--danger'"
              [title]="pwa.isOnline() ? 'Connected to internet' : 'Offline mode - Local data storage active'"
            >
              <span class="pwa-badge-dot" [class.pwa-badge-dot--pulse]="pwa.isOnline()"></span>
              <span class="pwa-header__network-text">{{ pwa.isOnline() ? 'Online' : 'Offline' }}</span>
            </div>
          }

          <!-- PWA Installation Button -->
          @if (showInstallButton() && pwa.canInstall()) {
            <button
              type="button"
              class="pwa-btn pwa-btn--primary pwa-btn--sm"
              (click)="onInstallPrompt()"
              title="Install app to your home screen"
            >
              <svg class="pwa-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span class="pwa-header__btn-label">{{ installButtonText() }}</span>
            </button>
          }

          <ng-content select="[header-actions]"></ng-content>
        </div>
      </div>
    </header>
  `,
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
