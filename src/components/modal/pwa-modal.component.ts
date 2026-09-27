import { Component, ChangeDetectionStrategy, HostListener, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pwa-modal',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (isOpen()) {
      <div
        class="pwa-modal-backdrop"
        (click)="onBackdropClick($event)"
        role="dialog"
        aria-modal="true"
        [attr.aria-label]="title()"
        tabindex="-1"
      >
        <div class="pwa-modal" [style.max-width]="maxWidth()" (click)="$event.stopPropagation()">
          <!-- Cabecera del Modal -->
          <header class="pwa-modal__header">
            <div class="pwa-modal__title-box">
              <ng-content select="[modal-icon]"></ng-content>
              <div>
                @if (title()) {
                  <h2 class="pwa-modal__title">{{ title() }}</h2>
                }
                @if (subtitle()) {
                  <p class="pwa-modal__subtitle">{{ subtitle() }}</p>
                }
              </div>
            </div>
            <button
              type="button"
              class="pwa-btn pwa-btn--ghost pwa-btn--icon"
              (click)="close.emit()"
              aria-label="Cerrar ventana emergente"
            >
              <svg class="pwa-modal__close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          <!-- Cuerpo Scrollable -->
          <div class="pwa-modal__body">
            <ng-content></ng-content>
          </div>

          <!-- Pie del Modal -->
          <footer class="pwa-modal__footer">
            <ng-content select="[modal-footer]"></ng-content>
          </footer>
        </div>
      </div>
    }
  `,
  styles: [`
    :host {
      display: contents;
    }
    .pwa-modal-backdrop {
      position: fixed;
      inset: 0;
      z-index: 50;
      background-color: var(--pwa-bg-backdrop);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      animation: pwa-fade-in 0.15s ease-out;
    }
    .pwa-modal {
      width: 100%;
      max-height: 92vh;
      display: flex;
      flex-direction: column;
      background-color: var(--pwa-bg-surface);
      border: 1px solid var(--pwa-border);
      border-radius: var(--pwa-radius-xl);
      box-shadow: var(--pwa-shadow-xl), var(--pwa-border-glow);
      overflow: hidden;
    }
    .pwa-modal__header {
      padding: 1.25rem 1.5rem;
      border-bottom: 1px solid var(--pwa-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-shrink: 0;
      background-color: color-mix(in srgb, var(--pwa-bg-surface) 95%, transparent);
    }
    .pwa-modal__title-box {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      min-width: 0;
    }
    .pwa-modal__title {
      margin: 0;
      font-size: var(--pwa-text-base);
      font-weight: 700;
      color: var(--pwa-text-primary);
    }
    .pwa-modal__subtitle {
      margin: 0.25rem 0 0 0;
      font-size: var(--pwa-text-xs);
      color: var(--pwa-text-secondary);
    }
    .pwa-modal__close-icon {
      width: 1.125rem;
      height: 1.125rem;
    }
    .pwa-modal__body {
      padding: 1.5rem;
      overflow-y: auto;
      flex: 1;
    }
    .pwa-modal__footer {
      padding: 1rem 1.5rem;
      border-top: 1px solid var(--pwa-border);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.75rem;
      flex-shrink: 0;
      background-color: var(--pwa-bg-subtle);
    }
    .pwa-modal__footer:empty {
      display: none;
    }
  `],
})
export class PwaModalComponent {
  readonly isOpen = input<boolean>(false);
  readonly title = input<string>('');
  readonly subtitle = input<string>('');
  readonly maxWidth = input<string>('36rem');
  readonly closeOnBackdrop = input<boolean>(true);

  readonly close = output<void>();

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.isOpen()) {
      this.close.emit();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if (this.closeOnBackdrop() && event.target === event.currentTarget) {
      this.close.emit();
    }
  }
}
