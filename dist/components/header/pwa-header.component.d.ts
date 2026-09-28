import { PwaService } from '../../services/pwa.service.js';
import * as i0 from "@angular/core";
export declare class PwaHeaderComponent {
    readonly pwa: PwaService;
    readonly title: import("@angular/core").InputSignal<string>;
    readonly subtitle: import("@angular/core").InputSignal<string>;
    readonly badgeText: import("@angular/core").InputSignal<string>;
    readonly showNetworkStatus: import("@angular/core").InputSignal<boolean>;
    readonly showInstallButton: import("@angular/core").InputSignal<boolean>;
    readonly showUpdateBanner: import("@angular/core").InputSignal<boolean>;
    readonly installButtonText: import("@angular/core").InputSignal<string>;
    readonly updateMessage: import("@angular/core").InputSignal<string>;
    readonly updateButtonText: import("@angular/core").InputSignal<string>;
    readonly installed: import("@angular/core").OutputEmitterRef<boolean>;
    onInstallPrompt(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PwaHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PwaHeaderComponent, "pwa-header", never, { "title": { "alias": "title"; "required": true; "isSignal": true; }; "subtitle": { "alias": "subtitle"; "required": false; "isSignal": true; }; "badgeText": { "alias": "badgeText"; "required": false; "isSignal": true; }; "showNetworkStatus": { "alias": "showNetworkStatus"; "required": false; "isSignal": true; }; "showInstallButton": { "alias": "showInstallButton"; "required": false; "isSignal": true; }; "showUpdateBanner": { "alias": "showUpdateBanner"; "required": false; "isSignal": true; }; "installButtonText": { "alias": "installButtonText"; "required": false; "isSignal": true; }; "updateMessage": { "alias": "updateMessage"; "required": false; "isSignal": true; }; "updateButtonText": { "alias": "updateButtonText"; "required": false; "isSignal": true; }; }, { "installed": "installed"; }, never, ["[header-logo]", "[header-actions]"], true, never>;
}
//# sourceMappingURL=pwa-header.component.d.ts.map