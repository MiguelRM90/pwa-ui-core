import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
const _c0 = [[["", "kpi-badge", ""], ["", "kpi-icon", ""]], [["", "kpi-footer", ""]]];
const _c1 = ["[kpi-badge], [kpi-icon]", "[kpi-footer]"];
function PwaKpiCardComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span", 5);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.unit());
} }
function PwaKpiCardComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.description());
} }
export class PwaKpiCardComponent {
    label = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    value = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    unit = input('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "unit" }] : /* istanbul ignore next */ []));
    description = input('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "description" }] : /* istanbul ignore next */ []));
    static ɵfac = function PwaKpiCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PwaKpiCardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PwaKpiCardComponent, selectors: [["pwa-kpi-card"]], inputs: { label: [1, "label"], value: [1, "value"], unit: [1, "unit"], description: [1, "description"] }, ngContentSelectors: _c1, decls: 12, vars: 4, consts: [[1, "pwa-card", "pwa-kpi-card"], [1, "pwa-kpi-card__top"], [1, "pwa-kpi-card__label"], [1, "pwa-kpi-card__main"], [1, "pwa-kpi-card__value"], [1, "pwa-kpi-card__unit"], [1, "pwa-kpi-card__desc"], [1, "pwa-kpi-card__footer"]], template: function PwaKpiCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
            i0.ɵɵtext(3);
            i0.ɵɵdomElementEnd();
            i0.ɵɵprojection(4);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(5, "div", 3)(6, "span", 4);
            i0.ɵɵtext(7);
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(8, PwaKpiCardComponent_Conditional_8_Template, 2, 1, "span", 5);
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(9, PwaKpiCardComponent_Conditional_9_Template, 2, 1, "p", 6);
            i0.ɵɵdomElementStart(10, "div", 7);
            i0.ɵɵprojection(11, 1);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.label());
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.value());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.unit() ? 8 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.description() ? 9 : -1);
        } }, dependencies: [CommonModule], styles: ["[_nghost-%COMP%] {\n      display: block;\n    }\n    .pwa-kpi-card[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      height: 100%;\n    }\n    .pwa-kpi-card__top[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 0.5rem;\n      margin-bottom: 0.5rem;\n    }\n    .pwa-kpi-card__label[_ngcontent-%COMP%] {\n      font-size: var(--%NS%pwa-text-xs);\n      font-weight: 700;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n      color: var(--%NS%pwa-text-secondary);\n    }\n    .pwa-kpi-card__main[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: baseline;\n      gap: 0.375rem;\n      margin: 0.25rem 0;\n      flex-wrap: wrap;\n    }\n    .pwa-kpi-card__value[_ngcontent-%COMP%] {\n      font-size: var(--%NS%pwa-text-3xl);\n      font-weight: 900;\n      color: var(--%NS%pwa-text-primary);\n      letter-spacing: -0.03em;\n      font-feature-settings: var(--%NS%pwa-font-features);\n      line-height: 1.1;\n    }\n    .pwa-kpi-card__unit[_ngcontent-%COMP%] {\n      font-size: var(--%NS%pwa-text-xs);\n      color: var(--%NS%pwa-text-muted);\n      font-weight: 600;\n    }\n    .pwa-kpi-card__desc[_ngcontent-%COMP%] {\n      margin: 0.375rem 0 0 0;\n      font-size: var(--%NS%pwa-text-xs);\n      color: var(--%NS%pwa-text-secondary);\n      line-height: 1.4;\n    }\n    .pwa-kpi-card__footer[_ngcontent-%COMP%]:not(:empty) {\n      margin-top: 0.75rem;\n      padding-top: 0.75rem;\n      border-top: 1px solid var(--%NS%pwa-border);\n      font-size: var(--%NS%pwa-text-xs);\n      color: var(--%NS%pwa-text-secondary);\n    }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PwaKpiCardComponent, [{
        type: Component,
        args: [{ selector: 'pwa-kpi-card', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="pwa-card pwa-kpi-card">
      <div class="pwa-kpi-card__top">
        <span class="pwa-kpi-card__label">{{ label() }}</span>
        <ng-content select="[kpi-badge], [kpi-icon]"></ng-content>
      </div>

      <div class="pwa-kpi-card__main">
        <span class="pwa-kpi-card__value">{{ value() }}</span>
        @if (unit()) {
          <span class="pwa-kpi-card__unit">{{ unit() }}</span>
        }
      </div>

      @if (description()) {
        <p class="pwa-kpi-card__desc">{{ description() }}</p>
      }

      <div class="pwa-kpi-card__footer">
        <ng-content select="[kpi-footer]"></ng-content>
      </div>
    </div>
  `, styles: ["\n    :host {\n      display: block;\n    }\n    .pwa-kpi-card {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      height: 100%;\n    }\n    .pwa-kpi-card__top {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 0.5rem;\n      margin-bottom: 0.5rem;\n    }\n    .pwa-kpi-card__label {\n      font-size: var(--pwa-text-xs);\n      font-weight: 700;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n      color: var(--pwa-text-secondary);\n    }\n    .pwa-kpi-card__main {\n      display: flex;\n      align-items: baseline;\n      gap: 0.375rem;\n      margin: 0.25rem 0;\n      flex-wrap: wrap;\n    }\n    .pwa-kpi-card__value {\n      font-size: var(--pwa-text-3xl);\n      font-weight: 900;\n      color: var(--pwa-text-primary);\n      letter-spacing: -0.03em;\n      font-feature-settings: var(--pwa-font-features);\n      line-height: 1.1;\n    }\n    .pwa-kpi-card__unit {\n      font-size: var(--pwa-text-xs);\n      color: var(--pwa-text-muted);\n      font-weight: 600;\n    }\n    .pwa-kpi-card__desc {\n      margin: 0.375rem 0 0 0;\n      font-size: var(--pwa-text-xs);\n      color: var(--pwa-text-secondary);\n      line-height: 1.4;\n    }\n    .pwa-kpi-card__footer:not(:empty) {\n      margin-top: 0.75rem;\n      padding-top: 0.75rem;\n      border-top: 1px solid var(--pwa-border);\n      font-size: var(--pwa-text-xs);\n      color: var(--pwa-text-secondary);\n    }\n  "] }]
    }], null, { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: true }] }], value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: true }] }], unit: [{ type: i0.Input, args: [{ isSignal: true, alias: "unit", required: false }] }], description: [{ type: i0.Input, args: [{ isSignal: true, alias: "description", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PwaKpiCardComponent, { className: "PwaKpiCardComponent", filePath: "components/kpi-card/pwa-kpi-card.component.ts", lineNumber: 91 }); })();
//# sourceMappingURL=pwa-kpi-card.component.js.map