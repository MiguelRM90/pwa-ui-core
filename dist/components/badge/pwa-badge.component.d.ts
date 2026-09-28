import * as i0 from "@angular/core";
export type PwaBadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export declare class PwaBadgeComponent {
    readonly variant: import("@angular/core").InputSignal<PwaBadgeVariant>;
    readonly label: import("@angular/core").InputSignal<string>;
    readonly showDot: import("@angular/core").InputSignal<boolean>;
    readonly pulseDot: import("@angular/core").InputSignal<boolean>;
    badgeClass(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PwaBadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PwaBadgeComponent, "pwa-badge", never, { "variant": { "alias": "variant"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "showDot": { "alias": "showDot"; "required": false; "isSignal": true; }; "pulseDot": { "alias": "pulseDot"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
//# sourceMappingURL=pwa-badge.component.d.ts.map