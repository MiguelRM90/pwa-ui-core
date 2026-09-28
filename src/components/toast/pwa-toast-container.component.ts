import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaToastService } from '../../services/toast.service.js';
import { ToastMessage } from '../../models/toast.model.js';

@Component({
  selector: 'pwa-toast-container',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pwa-toast-container" aria-live="polite">
      @for (toast of toastService.toasts(); track toast.id) {
        <div class="pwa-toast" [ngClass]="getToastVariantClass(toast)">
          <!-- Status Icon -->
          <div class="pwa-toast__icon">
            @if (toast.type === 'success') {
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            } @else if (toast.type === 'error') {
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            } @else if (toast.type === 'warning') {
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            } @else {
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          </div>

          <!-- Content: Title & Message -->
          <div class="pwa-toast__content">
            <h4 class="pwa-toast__title">{{ toast.title }}</h4>
            @if (toast.message) {
              <p class="pwa-toast__message">{{ toast.message }}</p>
            }
          </div>

          <!-- Dismiss Button -->
          <button
            type="button"
            class="pwa-toast__close"
            (click)="toastService.dismiss(toast.id)"
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      }
    </div>
  `,
  styles: [`
    :host {
      display: contents;
    }
    .pwa-toast-container {
      position: fixed;
      bottom: 1rem;
      right: 1rem;
      z-index: 60;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 24rem;
      width: calc(100% - 2rem);
      pointer-events: none;
    }
    .pwa-toast {
      pointer-events: auto;
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      padding: 0.875rem 1rem;
      border-radius: var(--pwa-radius-lg);
      background-color: var(--pwa-bg-surface);
      border: 1px solid var(--pwa-border);
      box-shadow: var(--pwa-shadow-xl), var(--pwa-border-glow);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      animation: pwa-fade-in 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .pwa-toast--success {
      border-left: 4px solid var(--pwa-success);
    }
    .pwa-toast--success .pwa-toast__icon {
      color: var(--pwa-success);
    }
    .pwa-toast--error {
      border-left: 4px solid var(--pwa-danger);
    }
    .pwa-toast--error .pwa-toast__icon {
      color: var(--pwa-danger);
    }
    .pwa-toast--warning {
      border-left: 4px solid var(--pwa-warning);
    }
    .pwa-toast--warning .pwa-toast__icon {
      color: var(--pwa-warning);
    }
    .pwa-toast--info {
      border-left: 4px solid var(--pwa-info);
    }
    .pwa-toast--info .pwa-toast__icon {
      color: var(--pwa-info);
    }
    .pwa-toast__icon {
      flex-shrink: 0;
      width: 1.25rem;
      height: 1.25rem;
      margin-top: 0.125rem;
    }
    .pwa-toast__content {
      flex: 1;
      min-width: 0;
    }
    .pwa-toast__title {
      margin: 0;
      font-size: var(--pwa-text-sm);
      font-weight: 700;
      color: var(--pwa-text-primary);
    }
    .pwa-toast__message {
      margin: 0.25rem 0 0 0;
      font-size: var(--pwa-text-xs);
      color: var(--pwa-text-secondary);
      line-height: 1.4;
      word-break: break-word;
    }
    .pwa-toast__close {
      background: transparent;
      border: none;
      color: var(--pwa-text-muted);
      cursor: pointer;
      padding: 0.25rem;
      font-size: 0.875rem;
      line-height: 1;
      transition: color 0.15s ease;
    }
    .pwa-toast__close:hover {
      color: var(--pwa-text-primary);
    }
  `],
})
export class PwaToastContainerComponent {
  readonly toastService = inject(PwaToastService);

  getToastVariantClass(toast: ToastMessage): string {
    return `pwa-toast--${toast.type}`;
  }
}
