import { OnDestroy } from '@angular/core';
import { ThemeMode } from '../models/theme.model.js';
import * as i0 from "@angular/core";
export declare class ThemeService implements OnDestroy {
    readonly mode: import("@angular/core").WritableSignal<ThemeMode>;
    readonly isDark: import("@angular/core").WritableSignal<boolean>;
    private mediaQueryList;
    private readonly mediaListener;
    constructor();
    private getInitialMode;
    setTheme(newMode: ThemeMode): void;
    toggleTheme(): void;
    private applyTheme;
    private applyDarkState;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
//# sourceMappingURL=theme.service.d.ts.map