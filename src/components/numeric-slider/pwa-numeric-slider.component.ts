import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'pwa-numeric-slider',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pwa-input-group">
      <!-- Label & Formatted Value Row -->
      <div class="pwa-numeric-slider__top">
        <label class="pwa-label">
          <span>{{ label() }}</span>
          @if (hint()) {
            <span class="pwa-numeric-slider__hint-icon" [title]="hint()">ℹ️</span>
          }
        </label>
        <span class="pwa-numeric-slider__formatted-value">
          {{ formattedDisplay() }}
        </span>
      </div>

      <!-- Numeric Input with Prefix / Suffix -->
      <div class="pwa-numeric-slider__input-wrapper">
        @if (prefix()) {
          <span class="pwa-numeric-slider__affix pwa-numeric-slider__affix--prefix">{{ prefix() }}</span>
        }

        <input
          type="number"
          class="pwa-input"
          [min]="min()"
          [max]="max()"
          [step]="step()"
          [value]="value()"
          (input)="onInputChange($event)"
          [style.padding-left]="prefix() ? '2rem' : null"
          [style.padding-right]="suffix() ? '2rem' : null"
        />

        @if (suffix()) {
          <span class="pwa-numeric-slider__affix pwa-numeric-slider__affix--suffix">{{ suffix() }}</span>
        }
      </div>

      <!-- Range Slider -->
      @if (showSlider()) {
        <div class="pwa-numeric-slider__slider-row">
          <input
            type="range"
            class="pwa-slider"
            [min]="min()"
            [max]="max()"
            [step]="step()"
            [value]="value()"
            (input)="onSliderChange($event)"
          />
          <div class="pwa-numeric-slider__min-max">
            <span>{{ minDisplay() }}</span>
            <span>{{ maxDisplay() }}</span>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
    .pwa-numeric-slider__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }
    .pwa-numeric-slider__hint-icon {
      cursor: help;
      font-size: 0.75rem;
      margin-left: 0.25rem;
      opacity: 0.7;
    }
    .pwa-numeric-slider__formatted-value {
      font-size: var(--pwa-text-xs);
      font-weight: 600;
      color: var(--pwa-text-secondary);
      font-feature-settings: var(--pwa-font-features);
    }
    .pwa-numeric-slider__input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
    }
    .pwa-numeric-slider__affix {
      position: absolute;
      font-size: var(--pwa-text-sm);
      font-weight: 500;
      color: var(--pwa-text-muted);
      user-select: none;
      pointer-events: none;
    }
    .pwa-numeric-slider__affix--prefix {
      left: 0.75rem;
    }
    .pwa-numeric-slider__affix--suffix {
      right: 0.75rem;
    }
    .pwa-numeric-slider__slider-row {
      margin-top: 0.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    .pwa-numeric-slider__min-max {
      display: flex;
      justify-content: space-between;
      font-size: var(--pwa-text-2xs);
      color: var(--pwa-text-muted);
      font-feature-settings: var(--pwa-font-features);
    }
  `],
})
export class PwaNumericSliderComponent {
  readonly label = input.required<string>();
  readonly value = input.required<number>();
  readonly min = input<number>(0);
  readonly max = input<number>(1000000);
  readonly step = input<number>(1);
  readonly unit = input<string>('');
  readonly prefix = input<string>('');
  readonly suffix = input<string>('');
  readonly hint = input<string>('');
  readonly showSlider = input<boolean>(true);
  readonly locale = input<string>('es-ES');

  readonly valueChange = output<number>();

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const num = parseFloat(target.value);
    if (!isNaN(num)) {
      this.valueChange.emit(num);
    }
  }

  onSliderChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const num = parseFloat(target.value);
    if (!isNaN(num)) {
      this.valueChange.emit(num);
    }
  }

  formattedDisplay(): string {
    const val = this.value() || 0;
    if (this.unit() === '€') {
      return new Intl.NumberFormat(this.locale(), {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
      }).format(val);
    }
    if (this.unit() === '%') {
      return `${val.toFixed(2)} %`;
    }
    return this.unit() ? `${val} ${this.unit()}` : `${val}`;
  }

  minDisplay(): string {
    return this.unit() === '€'
      ? `${this.min().toLocaleString(this.locale())} €`
      : `${this.min()} ${this.unit()}`.trim();
  }

  maxDisplay(): string {
    return this.unit() === '€'
      ? `${this.max().toLocaleString(this.locale())} €`
      : `${this.max()} ${this.unit()}`.trim();
  }
}
