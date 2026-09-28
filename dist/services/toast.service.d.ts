import { ToastMessage } from '../models/toast.model.js';
import * as i0 from "@angular/core";
export declare class PwaToastService {
    readonly toasts: import("@angular/core").WritableSignal<ToastMessage[]>;
    private readonly timers;
    show(toast: Omit<ToastMessage, 'id'>): string;
    success(title: string, message?: string, durationMs?: number): string;
    error(title: string, message?: string, durationMs?: number): string;
    warning(title: string, message?: string, durationMs?: number): string;
    info(title: string, message?: string, durationMs?: number): string;
    dismiss(id: string): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PwaToastService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PwaToastService>;
}
//# sourceMappingURL=toast.service.d.ts.map