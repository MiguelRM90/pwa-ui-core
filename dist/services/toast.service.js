import { Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class PwaToastService {
    toasts = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "toasts" }] : /* istanbul ignore next */ []));
    timers = new Map();
    show(toast) {
        const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
        const fullToast = {
            ...toast,
            id,
            durationMs: toast.durationMs ?? 4000,
        };
        this.toasts.update((current) => [...current, fullToast]);
        if (fullToast.durationMs && fullToast.durationMs > 0) {
            const timer = setTimeout(() => {
                this.dismiss(id);
            }, fullToast.durationMs);
            this.timers.set(id, timer);
        }
        return id;
    }
    success(title, message, durationMs = 4000) {
        return this.show({ title, message, type: 'success', durationMs });
    }
    error(title, message, durationMs = 6000) {
        return this.show({ title, message, type: 'error', durationMs });
    }
    warning(title, message, durationMs = 5000) {
        return this.show({ title, message, type: 'warning', durationMs });
    }
    info(title, message, durationMs = 4000) {
        return this.show({ title, message, type: 'info', durationMs });
    }
    dismiss(id) {
        const timer = this.timers.get(id);
        if (timer) {
            clearTimeout(timer);
            this.timers.delete(id);
        }
        this.toasts.update((current) => current.filter((t) => t.id !== id));
    }
    clear() {
        for (const timer of this.timers.values()) {
            clearTimeout(timer);
        }
        this.timers.clear();
        this.toasts.set([]);
    }
    static ɵfac = function PwaToastService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PwaToastService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PwaToastService, factory: PwaToastService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PwaToastService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=toast.service.js.map