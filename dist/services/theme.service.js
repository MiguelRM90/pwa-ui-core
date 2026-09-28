import { Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
const STORAGE_KEY = 'pwa_ui_theme';
export class ThemeService {
    mode = signal(this.getInitialMode(), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "mode" }] : /* istanbul ignore next */ []));
    isDark = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isDark" }] : /* istanbul ignore next */ []));
    mediaQueryList = null;
    mediaListener;
    constructor() {
        this.mediaListener = (e) => {
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
    getInitialMode() {
        if (typeof localStorage !== 'undefined') {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored === 'light' || stored === 'dark' || stored === 'system') {
                return stored;
            }
        }
        return 'system';
    }
    setTheme(newMode) {
        this.mode.set(newMode);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, newMode);
        }
        this.applyTheme(newMode);
    }
    toggleTheme() {
        const nextMode = this.isDark() ? 'light' : 'dark';
        this.setTheme(nextMode);
    }
    applyTheme(mode) {
        let shouldBeDark = false;
        if (mode === 'dark') {
            shouldBeDark = true;
        }
        else if (mode === 'light') {
            shouldBeDark = false;
        }
        else if (this.mediaQueryList) {
            shouldBeDark = this.mediaQueryList.matches;
        }
        this.applyDarkState(shouldBeDark);
    }
    applyDarkState(dark) {
        this.isDark.set(dark);
        if (typeof document !== 'undefined') {
            const root = document.documentElement;
            if (dark) {
                root.classList.add('dark');
                root.classList.remove('light');
                root.setAttribute('data-theme', 'dark');
                root.style.colorScheme = 'dark';
            }
            else {
                root.classList.remove('dark');
                root.classList.add('light');
                root.setAttribute('data-theme', 'light');
                root.style.colorScheme = 'light';
            }
        }
    }
    ngOnDestroy() {
        if (this.mediaQueryList) {
            this.mediaQueryList.removeEventListener('change', this.mediaListener);
        }
    }
    static ɵfac = function ThemeService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ThemeService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [], null); })();
//# sourceMappingURL=theme.service.js.map