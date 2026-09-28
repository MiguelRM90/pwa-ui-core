import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
function PwaBadgeComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("pwa-badge-dot--pulse", ctx_r0.pulseDot());
} }
function PwaBadgeComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.label());
} }
export class PwaBadgeComponent {
    variant = input('info', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    label = input('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    showDot = input(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "showDot" }] : /* istanbul ignore next */ []));
    pulseDot = input(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "pulseDot" }] : /* istanbul ignore next */ []));
    badgeClass() {
        switch (this.variant()) {
            case 'success':
                return 'pwa-badge--success';
            case 'warning':
                return 'pwa-badge--warning';
            case 'danger':
                return 'pwa-badge--danger';
            case 'neutral':
                return 'pwa-badge--neutral';
            case 'info':
            default:
                return 'pwa-badge--info';
        }
    }
    static ɵfac = function PwaBadgeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PwaBadgeComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PwaBadgeComponent, selectors: [["pwa-badge"]], inputs: { variant: [1, "variant"], label: [1, "label"], showDot: [1, "showDot"], pulseDot: [1, "pulseDot"] }, ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[1, "pwa-badge", 3, "ngClass"], [1, "pwa-badge-dot", 3, "pwa-badge-dot--pulse"], [1, "pwa-badge-dot"]], template: function PwaBadgeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵconditionalCreate(1, PwaBadgeComponent_Conditional_1_Template, 1, 2, "span", 1);
            i0.ɵɵconditionalCreate(2, PwaBadgeComponent_Conditional_2_Template, 2, 1, "span");
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.badgeClass());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showDot() ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.label() ? 2 : -1);
        } }, dependencies: [CommonModule, i1.NgClass], styles: ["[_nghost-%COMP%] {\n      display: inline-flex;\n    }\n    .pwa-badge--neutral[_ngcontent-%COMP%] {\n      background-color: var(--%NS%pwa-bg-subtle);\n      color: var(--%NS%pwa-text-secondary);\n      border-color: var(--%NS%pwa-border);\n    }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PwaBadgeComponent, [{
        type: Component,
        args: [{ selector: 'pwa-badge', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<span class=\"pwa-badge\" [ngClass]=\"badgeClass()\">\n  @if (showDot()) {\n    <span class=\"pwa-badge-dot\" [class.pwa-badge-dot--pulse]=\"pulseDot()\"></span>\n  }\n  @if (label()) {\n    <span>{{ label() }}</span>\n  }\n  <ng-content></ng-content>\n</span>\n", styles: ["\n    :host {\n      display: inline-flex;\n    }\n    .pwa-badge--neutral {\n      background-color: var(--pwa-bg-subtle);\n      color: var(--pwa-text-secondary);\n      border-color: var(--pwa-border);\n    }\n  "] }]
    }], null, { variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], showDot: [{ type: i0.Input, args: [{ isSignal: true, alias: "showDot", required: false }] }], pulseDot: [{ type: i0.Input, args: [{ isSignal: true, alias: "pulseDot", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PwaBadgeComponent, { className: "PwaBadgeComponent", filePath: "components/badge/pwa-badge.component.ts", lineNumber: 23 }); })();
//# sourceMappingURL=pwa-badge.component.js.map