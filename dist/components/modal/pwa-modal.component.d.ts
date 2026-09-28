import * as i0 from "@angular/core";
export declare class PwaModalComponent {
    readonly isOpen: import("@angular/core").InputSignal<boolean>;
    readonly title: import("@angular/core").InputSignal<string>;
    readonly subtitle: import("@angular/core").InputSignal<string>;
    readonly maxWidth: import("@angular/core").InputSignal<string>;
    readonly closeOnBackdrop: import("@angular/core").InputSignal<boolean>;
    readonly close: import("@angular/core").OutputEmitterRef<void>;
    onEscape(): void;
    onBackdropClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PwaModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PwaModalComponent, "pwa-modal", never, { "isOpen": { "alias": "isOpen"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "subtitle": { "alias": "subtitle"; "required": false; "isSignal": true; }; "maxWidth": { "alias": "maxWidth"; "required": false; "isSignal": true; }; "closeOnBackdrop": { "alias": "closeOnBackdrop"; "required": false; "isSignal": true; }; }, { "close": "close"; }, never, ["[modal-icon]", "*", "[modal-footer]"], true, never>;
}
//# sourceMappingURL=pwa-modal.component.d.ts.map