import { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PwaService implements OnDestroy {
    private readonly swUpdate;
    readonly isOnline: import("@angular/core").WritableSignal<boolean>;
    readonly canInstall: import("@angular/core").WritableSignal<boolean>;
    readonly hasUpdate: import("@angular/core").WritableSignal<boolean>;
    private deferredPrompt;
    private readonly onlineHandler;
    private readonly offlineHandler;
    private readonly beforeInstallHandler;
    private readonly appInstalledHandler;
    constructor();
    private initServiceWorkerUpdateListener;
    promptInstall(): Promise<boolean>;
    applyUpdate(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PwaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PwaService>;
}
//# sourceMappingURL=pwa.service.d.ts.map