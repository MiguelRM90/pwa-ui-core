import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaToastService } from '../../services/toast.service.js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _forTrack0 = ($index, $item) => $item.id;
function PwaToastContainerComponent_For_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 8);
    i0.ɵɵelementEnd();
} }
function PwaToastContainerComponent_For_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 9);
    i0.ɵɵelementEnd();
} }
function PwaToastContainerComponent_For_2_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 10);
    i0.ɵɵelementEnd();
} }
function PwaToastContainerComponent_For_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 11);
    i0.ɵɵelementEnd();
} }
function PwaToastContainerComponent_For_2_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const toast_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(toast_r2.message);
} }
function PwaToastContainerComponent_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵconditionalCreate(2, PwaToastContainerComponent_For_2_Conditional_2_Template, 2, 0, ":svg:svg", 3)(3, PwaToastContainerComponent_For_2_Conditional_3_Template, 2, 0, ":svg:svg", 3)(4, PwaToastContainerComponent_For_2_Conditional_4_Template, 2, 0, ":svg:svg", 3)(5, PwaToastContainerComponent_For_2_Conditional_5_Template, 2, 0, ":svg:svg", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 4)(7, "h4", 5);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(9, PwaToastContainerComponent_For_2_Conditional_9_Template, 2, 1, "p", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 7);
    i0.ɵɵlistener("click", function PwaToastContainerComponent_For_2_Template_button_click_10_listener() { const toast_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toastService.dismiss(toast_r2.id)); });
    i0.ɵɵtext(11, " \u2715 ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.getToastVariantClass(toast_r2));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(toast_r2.type === "success" ? 2 : toast_r2.type === "error" ? 3 : toast_r2.type === "warning" ? 4 : 5);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(toast_r2.title);
    i0.ɵɵadvance();
    i0.ɵɵconditional(toast_r2.message ? 9 : -1);
} }
export class PwaToastContainerComponent {
    toastService = inject(PwaToastService);
    getToastVariantClass(toast) {
        return `pwa-toast--${toast.type}`;
    }
    static ɵfac = function PwaToastContainerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PwaToastContainerComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PwaToastContainerComponent, selectors: [["pwa-toast-container"]], decls: 3, vars: 0, consts: [["aria-live", "polite", 1, "pwa-toast-container"], [1, "pwa-toast", 3, "ngClass"], [1, "pwa-toast__icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], [1, "pwa-toast__content"], [1, "pwa-toast__title"], [1, "pwa-toast__message"], ["type", "button", "aria-label", "Close notification", 1, "pwa-toast__close", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"]], template: function PwaToastContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵrepeaterCreate(1, PwaToastContainerComponent_For_2_Template, 12, 4, "div", 1, _forTrack0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.toastService.toasts());
        } }, dependencies: [CommonModule, i1.NgClass], styles: ["[_nghost-%COMP%] {\n      display: contents;\n    }\n    .pwa-toast-container[_ngcontent-%COMP%] {\n      position: fixed;\n      bottom: 1rem;\n      right: 1rem;\n      z-index: 60;\n      display: flex;\n      flex-direction: column;\n      gap: 0.5rem;\n      max-width: 24rem;\n      width: calc(100% - 2rem);\n      pointer-events: none;\n    }\n    .pwa-toast[_ngcontent-%COMP%] {\n      pointer-events: auto;\n      display: flex;\n      align-items: flex-start;\n      gap: 0.75rem;\n      padding: 0.875rem 1rem;\n      border-radius: var(--%NS%pwa-radius-lg);\n      background-color: var(--%NS%pwa-bg-surface);\n      border: 1px solid var(--%NS%pwa-border);\n      box-shadow: var(--%NS%pwa-shadow-xl), var(--%NS%pwa-border-glow);\n      backdrop-filter: blur(8px);\n      -webkit-backdrop-filter: blur(8px);\n      animation: pwa-fade-in 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n    }\n    .pwa-toast--success[_ngcontent-%COMP%] {\n      border-left: 4px solid var(--%NS%pwa-success);\n    }\n    .pwa-toast--success[_ngcontent-%COMP%]   .pwa-toast__icon[_ngcontent-%COMP%] {\n      color: var(--%NS%pwa-success);\n    }\n    .pwa-toast--error[_ngcontent-%COMP%] {\n      border-left: 4px solid var(--%NS%pwa-danger);\n    }\n    .pwa-toast--error[_ngcontent-%COMP%]   .pwa-toast__icon[_ngcontent-%COMP%] {\n      color: var(--%NS%pwa-danger);\n    }\n    .pwa-toast--warning[_ngcontent-%COMP%] {\n      border-left: 4px solid var(--%NS%pwa-warning);\n    }\n    .pwa-toast--warning[_ngcontent-%COMP%]   .pwa-toast__icon[_ngcontent-%COMP%] {\n      color: var(--%NS%pwa-warning);\n    }\n    .pwa-toast--info[_ngcontent-%COMP%] {\n      border-left: 4px solid var(--%NS%pwa-info);\n    }\n    .pwa-toast--info[_ngcontent-%COMP%]   .pwa-toast__icon[_ngcontent-%COMP%] {\n      color: var(--%NS%pwa-info);\n    }\n    .pwa-toast__icon[_ngcontent-%COMP%] {\n      flex-shrink: 0;\n      width: 1.25rem;\n      height: 1.25rem;\n      margin-top: 0.125rem;\n    }\n    .pwa-toast__content[_ngcontent-%COMP%] {\n      flex: 1;\n      min-width: 0;\n    }\n    .pwa-toast__title[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: var(--%NS%pwa-text-sm);\n      font-weight: 700;\n      color: var(--%NS%pwa-text-primary);\n    }\n    .pwa-toast__message[_ngcontent-%COMP%] {\n      margin: 0.25rem 0 0 0;\n      font-size: var(--%NS%pwa-text-xs);\n      color: var(--%NS%pwa-text-secondary);\n      line-height: 1.4;\n      word-break: break-word;\n    }\n    .pwa-toast__close[_ngcontent-%COMP%] {\n      background: transparent;\n      border: none;\n      color: var(--%NS%pwa-text-muted);\n      cursor: pointer;\n      padding: 0.25rem;\n      font-size: 0.875rem;\n      line-height: 1;\n      transition: color 0.15s ease;\n    }\n    .pwa-toast__close[_ngcontent-%COMP%]:hover {\n      color: var(--%NS%pwa-text-primary);\n    }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PwaToastContainerComponent, [{
        type: Component,
        args: [{ selector: 'pwa-toast-container', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"pwa-toast-container\" aria-live=\"polite\">\n      @for (toast of toastService.toasts(); track toast.id) {\n        <div class=\"pwa-toast\" [ngClass]=\"getToastVariantClass(toast)\">\n          <!-- Status Icon -->\n          <div class=\"pwa-toast__icon\">\n            @if (toast.type === 'success') {\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5 13l4 4L19 7\" />\n              </svg>\n            } @else if (toast.type === 'error') {\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\" />\n              </svg>\n            } @else if (toast.type === 'warning') {\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z\" />\n              </svg>\n            } @else {\n              <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\" />\n              </svg>\n            }\n          </div>\n\n          <!-- Content: Title & Message -->\n          <div class=\"pwa-toast__content\">\n            <h4 class=\"pwa-toast__title\">{{ toast.title }}</h4>\n            @if (toast.message) {\n              <p class=\"pwa-toast__message\">{{ toast.message }}</p>\n            }\n          </div>\n\n          <!-- Dismiss Button -->\n          <button\n            type=\"button\"\n            class=\"pwa-toast__close\"\n            (click)=\"toastService.dismiss(toast.id)\"\n            aria-label=\"Close notification\"\n          >\n            \u2715\n          </button>\n        </div>\n      }\n    </div>", styles: ["\n    :host {\n      display: contents;\n    }\n    .pwa-toast-container {\n      position: fixed;\n      bottom: 1rem;\n      right: 1rem;\n      z-index: 60;\n      display: flex;\n      flex-direction: column;\n      gap: 0.5rem;\n      max-width: 24rem;\n      width: calc(100% - 2rem);\n      pointer-events: none;\n    }\n    .pwa-toast {\n      pointer-events: auto;\n      display: flex;\n      align-items: flex-start;\n      gap: 0.75rem;\n      padding: 0.875rem 1rem;\n      border-radius: var(--pwa-radius-lg);\n      background-color: var(--pwa-bg-surface);\n      border: 1px solid var(--pwa-border);\n      box-shadow: var(--pwa-shadow-xl), var(--pwa-border-glow);\n      backdrop-filter: blur(8px);\n      -webkit-backdrop-filter: blur(8px);\n      animation: pwa-fade-in 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n    }\n    .pwa-toast--success {\n      border-left: 4px solid var(--pwa-success);\n    }\n    .pwa-toast--success .pwa-toast__icon {\n      color: var(--pwa-success);\n    }\n    .pwa-toast--error {\n      border-left: 4px solid var(--pwa-danger);\n    }\n    .pwa-toast--error .pwa-toast__icon {\n      color: var(--pwa-danger);\n    }\n    .pwa-toast--warning {\n      border-left: 4px solid var(--pwa-warning);\n    }\n    .pwa-toast--warning .pwa-toast__icon {\n      color: var(--pwa-warning);\n    }\n    .pwa-toast--info {\n      border-left: 4px solid var(--pwa-info);\n    }\n    .pwa-toast--info .pwa-toast__icon {\n      color: var(--pwa-info);\n    }\n    .pwa-toast__icon {\n      flex-shrink: 0;\n      width: 1.25rem;\n      height: 1.25rem;\n      margin-top: 0.125rem;\n    }\n    .pwa-toast__content {\n      flex: 1;\n      min-width: 0;\n    }\n    .pwa-toast__title {\n      margin: 0;\n      font-size: var(--pwa-text-sm);\n      font-weight: 700;\n      color: var(--pwa-text-primary);\n    }\n    .pwa-toast__message {\n      margin: 0.25rem 0 0 0;\n      font-size: var(--pwa-text-xs);\n      color: var(--pwa-text-secondary);\n      line-height: 1.4;\n      word-break: break-word;\n    }\n    .pwa-toast__close {\n      background: transparent;\n      border: none;\n      color: var(--pwa-text-muted);\n      cursor: pointer;\n      padding: 0.25rem;\n      font-size: 0.875rem;\n      line-height: 1;\n      transition: color 0.15s ease;\n    }\n    .pwa-toast__close:hover {\n      color: var(--pwa-text-primary);\n    }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PwaToastContainerComponent, { className: "PwaToastContainerComponent", filePath: "components/toast-container/pwa-toast-container.component.ts", lineNumber: 104 }); })();
//# sourceMappingURL=pwa-toast-container.component.js.map