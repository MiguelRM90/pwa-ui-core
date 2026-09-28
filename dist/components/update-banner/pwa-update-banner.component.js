import { Component, ChangeDetectionStrategy, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaService } from '../../services/pwa.service.js';
import * as i0 from "@angular/core";
function PwaUpdateBannerComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 0)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "button", 1);
    i0.ɵɵdomListener("click", function PwaUpdateBannerComponent_Conditional_0_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.pwa.applyUpdate()); });
    i0.ɵɵtext(4);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.message());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.buttonText(), " ");
} }
export class PwaUpdateBannerComponent {
    pwa = inject(PwaService);
    message = input('A new version is available with calculation and performance improvements.', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    buttonText = input('Update now', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "buttonText" }] : /* istanbul ignore next */ []));
    static ɵfac = function PwaUpdateBannerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PwaUpdateBannerComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PwaUpdateBannerComponent, selectors: [["pwa-update-banner"]], inputs: { message: [1, "message"], buttonText: [1, "buttonText"] }, decls: 1, vars: 1, consts: [[1, "pwa-update-banner"], ["type", "button", 1, "pwa-btn", "pwa-btn--sm", "pwa-update-banner__btn", 3, "click"]], template: function PwaUpdateBannerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, PwaUpdateBannerComponent_Conditional_0_Template, 5, 2, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.pwa.hasUpdate() ? 0 : -1);
        } }, dependencies: [CommonModule], styles: ["[_nghost-%COMP%] {\n      display: block;\n      width: 100%;\n    }\n    .pwa-update-banner[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 0.75rem;\n      padding: 0.5rem 1rem;\n      background-color: var(--%NS%pwa-brand-600);\n      color: #ffffff;\n      font-size: var(--%NS%pwa-text-xs);\n      font-weight: 500;\n      text-align: center;\n    }\n    .pwa-update-banner__btn[_ngcontent-%COMP%] {\n      background-color: #ffffff;\n      color: var(--%NS%pwa-brand-600);\n      font-weight: 700;\n      border: none;\n    }\n    .pwa-update-banner__btn[_ngcontent-%COMP%]:hover {\n      background-color: var(--%NS%pwa-slate-100);\n    }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PwaUpdateBannerComponent, [{
        type: Component,
        args: [{ selector: 'pwa-update-banner', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (pwa.hasUpdate()) {\n  <div class=\"pwa-update-banner\">\n    <span>{{ message() }}</span>\n    <button\n      type=\"button\"\n      class=\"pwa-btn pwa-btn--sm pwa-update-banner__btn\"\n      (click)=\"pwa.applyUpdate()\"\n    >\n      {{ buttonText() }}\n    </button>\n  </div>\n}\n", styles: ["\n    :host {\n      display: block;\n      width: 100%;\n    }\n    .pwa-update-banner {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 0.75rem;\n      padding: 0.5rem 1rem;\n      background-color: var(--pwa-brand-600);\n      color: #ffffff;\n      font-size: var(--pwa-text-xs);\n      font-weight: 500;\n      text-align: center;\n    }\n    .pwa-update-banner__btn {\n      background-color: #ffffff;\n      color: var(--pwa-brand-600);\n      font-weight: 700;\n      border: none;\n    }\n    .pwa-update-banner__btn:hover {\n      background-color: var(--pwa-slate-100);\n    }\n  "] }]
    }], null, { message: [{ type: i0.Input, args: [{ isSignal: true, alias: "message", required: false }] }], buttonText: [{ type: i0.Input, args: [{ isSignal: true, alias: "buttonText", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PwaUpdateBannerComponent, { className: "PwaUpdateBannerComponent", filePath: "components/update-banner/pwa-update-banner.component.ts", lineNumber: 39 }); })();
//# sourceMappingURL=pwa-update-banner.component.js.map