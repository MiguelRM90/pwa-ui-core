import { Injectable, signal, OnDestroy } from '@angular/core';
import { ThemeMode } from '../models/theme.model.js';

const STORAGE_KEY = 'pwa_ui_theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService implements OnDestroy {
  readonly mode = signal<ThemeMode>(this.getInitialMode());
  readonly isDark = signal<boolean>(false);

  private mediaQueryList: MediaQueryList | null = null;
  private readonly mediaListener: (e: MediaQueryListEvent) => void;

  constructor() {
    this.mediaListener = (e: MediaQueryListEvent) => {
      if (this.mode() === 'system') {
        this.applyDarkState(e.matches);
      }
    };

    if (typeof window !== 'undefined' && window.matchMedia) {
      this.mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
      this.mediaQueryList.addEventListener('change', this.mediaListener);
    }

    this.applyTheme(this.mode());
  }

  private getInitialMode(): ThemeMode {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
      if (stored === 'light' || stored === 'dark' || stored === 'system') {
        return stored;
      }
    }
    return 'system';
  }

  setTheme(newMode: ThemeMode): void {
    this.mode.set(newMode);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newMode);
    }
    this.applyTheme(newMode);
  }

  toggleTheme(): void {
    const nextMode: ThemeMode = this.isDark() ? 'light' : 'dark';
    this.setTheme(nextMode);
  }

  private applyTheme(mode: ThemeMode): void {
    let shouldBeDark = false;
    if (mode === 'dark') {
      shouldBeDark = true;
    } else if (mode === 'light') {
      shouldBeDark = false;
    } else if (this.mediaQueryList) {
      shouldBeDark = this.mediaQueryList.matches;
    }

    this.applyDarkState(shouldBeDark);
  }

  private applyDarkState(dark: boolean): void {
    this.isDark.set(dark);
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (dark) {
        root.classList.add('dark');
        root.classList.remove('light');
        root.setAttribute('data-theme', 'dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
        root.setAttribute('data-theme', 'light');
        root.style.colorScheme = 'light';
      }
    }
  }

  ngOnDestroy(): void {
    if (this.mediaQueryList) {
      this.mediaQueryList.removeEventListener('change', this.mediaListener);
    }
  }
}
