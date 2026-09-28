import * as i0 from "@angular/core";
export declare class PwaNumericSliderComponent {
    readonly label: import("@angular/core").InputSignal<string>;
    readonly value: import("@angular/core").InputSignal<number>;
    readonly min: import("@angular/core").InputSignal<number>;
    readonly max: import("@angular/core").InputSignal<number>;
    readonly step: import("@angular/core").InputSignal<number>;
    readonly unit: import("@angular/core").InputSignal<string>;
    readonly prefix: import("@angular/core").InputSignal<string>;
    readonly suffix: import("@angular/core").InputSignal<string>;
    readonly hint: import("@angular/core").InputSignal<string>;
    readonly showSlider: import("@angular/core").InputSignal<boolean>;
    readonly locale: import("@angular/core").InputSignal<string>;
    readonly valueChange: import("@angular/core").OutputEmitterRef<number>;
    onInputChange(event: Event): void;
    onSliderChange(event: Event): void;
    formattedDisplay(): string;
    minDisplay(): string;
    maxDisplay(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PwaNumericSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PwaNumericSliderComponent, "pwa-numeric-slider", never, { "label": { "alias": "label"; "required": true; "isSignal": true; }; "value": { "alias": "value"; "required": true; "isSignal": true; }; "min": { "alias": "min"; "required": false; "isSignal": true; }; "max": { "alias": "max"; "required": false; "isSignal": true; }; "step": { "alias": "step"; "required": false; "isSignal": true; }; "unit": { "alias": "unit"; "required": false; "isSignal": true; }; "prefix": { "alias": "prefix"; "required": false; "isSignal": true; }; "suffix": { "alias": "suffix"; "required": false; "isSignal": true; }; "hint": { "alias": "hint"; "required": false; "isSignal": true; }; "showSlider": { "alias": "showSlider"; "required": false; "isSignal": true; }; "locale": { "alias": "locale"; "required": false; "isSignal": true; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}
//# sourceMappingURL=pwa-numeric-slider.component.d.ts.map