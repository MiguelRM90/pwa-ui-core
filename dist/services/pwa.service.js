import { Injectable, inject, signal } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { filter } from 'rxjs';
import * as i0 from "@angular/core";
export class PwaService {
    swUpdate = inject(SwUpdate, { optional: true });
    isOnline = signal(typeof navigator !== 'undefined' && 'onLine' in navigator ? navigator.onLine : true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isOnline" }] : /* istanbul ignore next */ []));
    canInstall = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "canInstall" }] : /* istanbul ignore next */ []));
    hasUpdate = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "hasUpdate" }] : /* istanbul ignore next */ []));
    deferredPrompt = null;
    onlineHandler;
    offlineHandler;
    beforeInstallHandler;
    appInstalledHandler;
    constructor() {
        this.onlineHandler = () => this.isOnline.set(true);
        this.offlineHandler = () => this.isOnline.set(false);
        this.beforeInstallHandler = (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.canInstall.set(true);
        };
        this.appInstalledHandler = () => {
            this.canInstall.set(false);
            this.deferredPrompt = null;
        };
        if (typeof window !== 'undefined') {
            window.addEventListener('online', this.onlineHandler);
            window.addEventListener('offline', this.offlineHandler);
            window.addEventListener('beforeinstallprompt', this.beforeInstallHandler);
            window.addEventListener('appinstalled', this.appInstalledHandler);
        }
        this.initServiceWorkerUpdateListener();
    }
    initServiceWorkerUpdateListener() {
        if (this.swUpdate && this.swUpdate.isEnabled) {
            this.swUpdate.versionUpdates
                .pipe(filter((evt) => evt.type === 'VERSION_READY'))
                .subscribe(() => {
                this.hasUpdate.set(true);
            });
        }
    }
    async promptInstall() {
        if (!this.deferredPrompt) {
            return false;
        }
        await this.deferredPrompt.prompt();
        const choice = await this.deferredPrompt.userChoice;
        this.canInstall.set(false);
        this.deferredPrompt = null;
        return choice.outcome === 'accepted';
    }
    applyUpdate() {
        if (this.swUpdate && this.swUpdate.isEnabled) {
            this.swUpdate.activateUpdate().then(() => {
                if (typeof document !== 'undefined') {
                    document.location.reload();
                }
            });
        }
        else if (typeof document !== 'undefined') {
            document.location.reload();
        }
    }
    ngOnDestroy() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('online', this.onlineHandler);
            window.removeEventListener('offline', this.offlineHandler);
            window.removeEventListener('beforeinstallprompt', this.beforeInstallHandler);
            window.removeEventListener('appinstalled', this.appInstalledHandler);
        }
    }
    static ɵfac = function PwaService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PwaService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PwaService, factory: PwaService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PwaService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [], null); })();
//# sourceMappingURL=pwa.service.js.map