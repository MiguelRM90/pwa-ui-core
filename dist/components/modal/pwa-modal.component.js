import { Component, ChangeDetectionStrategy, HostListener, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
const _c0 = [[["", "modal-icon", ""]], "*", [["", "modal-footer", ""]]];
const _c1 = ["[modal-icon]", "*", "[modal-footer]"];
function PwaModalComponent_Conditional_0_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "h2", 5);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.title());
} }
function PwaModalComponent_Conditional_0_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.subtitle());
} }
function PwaModalComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 1);
    i0.ɵɵdomListener("click", function PwaModalComponent_Conditional_0_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onBackdropClick($event)); });
    i0.ɵɵdomElementStart(1, "div", 2);
    i0.ɵɵdomListener("click", function PwaModalComponent_Conditional_0_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵdomElementStart(2, "header", 3)(3, "div", 4);
    i0.ɵɵprojection(4);
    i0.ɵɵdomElementStart(5, "div");
    i0.ɵɵconditionalCreate(6, PwaModalComponent_Conditional_0_Conditional_6_Template, 2, 1, "h2", 5);
    i0.ɵɵconditionalCreate(7, PwaModalComponent_Conditional_0_Conditional_7_Template, 2, 1, "p", 6);
    i0.ɵɵdomElementEnd()();
    i0.ɵɵdomElementStart(8, "button", 7);
    i0.ɵɵdomListener("click", function PwaModalComponent_Conditional_0_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close.emit()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵdomElementStart(9, "svg", 8);
    i0.ɵɵdomElement(10, "path", 9);
    i0.ɵɵdomElementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵdomElementStart(11, "div", 10);
    i0.ɵɵprojection(12, 1);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(13, "footer", 11);
    i0.ɵɵprojection(14, 2);
    i0.ɵɵdomElementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", ctx_r1.title());
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("max-width", ctx_r1.maxWidth());
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r1.title() ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.subtitle() ? 7 : -1);
} }
export class PwaModalComponent {
    isOpen = input(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "isOpen" }] : /* istanbul ignore next */ []));
    title = input('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    subtitle = input('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "subtitle" }] : /* istanbul ignore next */ []));
    maxWidth = input('36rem', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "maxWidth" }] : /* istanbul ignore next */ []));
    closeOnBackdrop = input(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "closeOnBackdrop" }] : /* istanbul ignore next */ []));
    close = output();
    onEscape() {
        if (this.isOpen()) {
            this.close.emit();
        }
    }
    onBackdropClick(event) {
        if (this.closeOnBackdrop() && event.target === event.currentTarget) {
            this.close.emit();
        }
    }
    static ɵfac = function PwaModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PwaModalComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PwaModalComponent, selectors: [["pwa-modal"]], hostBindings: function PwaModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function PwaModalComponent_keydown_escape_HostBindingHandler() { return ctx.onEscape(); }, i0.ɵɵresolveWindow);
        } }, inputs: { isOpen: [1, "isOpen"], title: [1, "title"], subtitle: [1, "subtitle"], maxWidth: [1, "maxWidth"], closeOnBackdrop: [1, "closeOnBackdrop"] }, outputs: { close: "close" }, ngContentSelectors: _c1, decls: 1, vars: 1, consts: [["role", "dialog", "aria-modal", "true", "tabindex", "-1", 1, "pwa-modal-backdrop"], ["role", "dialog", "aria-modal", "true", "tabindex", "-1", 1, "pwa-modal-backdrop", 3, "click"], [1, "pwa-modal", 3, "click"], [1, "pwa-modal__header"], [1, "pwa-modal__title-box"], [1, "pwa-modal__title"], [1, "pwa-modal__subtitle"], ["type", "button", "aria-label", "Close dialog", 1, "pwa-btn", "pwa-btn--ghost", "pwa-btn--icon", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "pwa-modal__close-icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "pwa-modal__body"], [1, "pwa-modal__footer"]], template: function PwaModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵconditionalCreate(0, PwaModalComponent_Conditional_0_Template, 15, 5, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.isOpen() ? 0 : -1);
        } }, dependencies: [CommonModule], styles: ["[_nghost-%COMP%] {\n      display: contents;\n    }\n    .pwa-modal-backdrop[_ngcontent-%COMP%] {\n      position: fixed;\n      inset: 0;\n      z-index: 50;\n      background-color: var(--%NS%pwa-bg-backdrop);\n      backdrop-filter: blur(4px);\n      -webkit-backdrop-filter: blur(4px);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 1rem;\n      animation: pwa-fade-in 0.15s ease-out;\n    }\n    .pwa-modal[_ngcontent-%COMP%] {\n      width: 100%;\n      max-height: 92vh;\n      display: flex;\n      flex-direction: column;\n      background-color: var(--%NS%pwa-bg-surface);\n      border: 1px solid var(--%NS%pwa-border);\n      border-radius: var(--%NS%pwa-radius-xl);\n      box-shadow: var(--%NS%pwa-shadow-xl), var(--%NS%pwa-border-glow);\n      overflow: hidden;\n    }\n    .pwa-modal__header[_ngcontent-%COMP%] {\n      padding: 1.25rem 1.5rem;\n      border-bottom: 1px solid var(--%NS%pwa-border);\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 1rem;\n      flex-shrink: 0;\n      background-color: color-mix(in srgb, var(--%NS%pwa-bg-surface) 95%, transparent);\n    }\n    .pwa-modal__title-box[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 0.75rem;\n      min-width: 0;\n    }\n    .pwa-modal__title[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: var(--%NS%pwa-text-base);\n      font-weight: 700;\n      color: var(--%NS%pwa-text-primary);\n    }\n    .pwa-modal__subtitle[_ngcontent-%COMP%] {\n      margin: 0.25rem 0 0 0;\n      font-size: var(--%NS%pwa-text-xs);\n      color: var(--%NS%pwa-text-secondary);\n    }\n    .pwa-modal__close-icon[_ngcontent-%COMP%] {\n      width: 1.125rem;\n      height: 1.125rem;\n    }\n    .pwa-modal__body[_ngcontent-%COMP%] {\n      padding: 1.5rem;\n      overflow-y: auto;\n      flex: 1;\n    }\n    .pwa-modal__footer[_ngcontent-%COMP%] {\n      padding: 1rem 1.5rem;\n      border-top: 1px solid var(--%NS%pwa-border);\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      gap: 0.75rem;\n      flex-shrink: 0;\n      background-color: var(--%NS%pwa-bg-subtle);\n    }\n    .pwa-modal__footer[_ngcontent-%COMP%]:empty {\n      display: none;\n    }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PwaModalComponent, [{
        type: Component,
        args: [{ selector: 'pwa-modal', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    @if (isOpen()) {
      <div
        class="pwa-modal-backdrop"
        (click)="onBackdropClick($event)"
        role="dialog"
        aria-modal="true"
        [attr.aria-label]="title()"
        tabindex="-1"
      >
        <div class="pwa-modal" [style.max-width]="maxWidth()" (click)="$event.stopPropagation()">
          <!-- Modal Header -->
          <header class="pwa-modal__header">
            <div class="pwa-modal__title-box">
              <ng-content select="[modal-icon]"></ng-content>
              <div>
                @if (title()) {
                  <h2 class="pwa-modal__title">{{ title() }}</h2>
                }
                @if (subtitle()) {
                  <p class="pwa-modal__subtitle">{{ subtitle() }}</p>
                }
              </div>
            </div>
            <button
              type="button"
              class="pwa-btn pwa-btn--ghost pwa-btn--icon"
              (click)="close.emit()"
              aria-label="Close dialog"
            >
              <svg class="pwa-modal__close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          <!-- Scrollable Body -->
          <div class="pwa-modal__body">
            <ng-content></ng-content>
          </div>

          <!-- Modal Footer -->
          <footer class="pwa-modal__footer">
            <ng-content select="[modal-footer]"></ng-content>
          </footer>
        </div>
      </div>
    }
  `, styles: ["\n    :host {\n      display: contents;\n    }\n    .pwa-modal-backdrop {\n      position: fixed;\n      inset: 0;\n      z-index: 50;\n      background-color: var(--pwa-bg-backdrop);\n      backdrop-filter: blur(4px);\n      -webkit-backdrop-filter: blur(4px);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 1rem;\n      animation: pwa-fade-in 0.15s ease-out;\n    }\n    .pwa-modal {\n      width: 100%;\n      max-height: 92vh;\n      display: flex;\n      flex-direction: column;\n      background-color: var(--pwa-bg-surface);\n      border: 1px solid var(--pwa-border);\n      border-radius: var(--pwa-radius-xl);\n      box-shadow: var(--pwa-shadow-xl), var(--pwa-border-glow);\n      overflow: hidden;\n    }\n    .pwa-modal__header {\n      padding: 1.25rem 1.5rem;\n      border-bottom: 1px solid var(--pwa-border);\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 1rem;\n      flex-shrink: 0;\n      background-color: color-mix(in srgb, var(--pwa-bg-surface) 95%, transparent);\n    }\n    .pwa-modal__title-box {\n      display: flex;\n      align-items: center;\n      gap: 0.75rem;\n      min-width: 0;\n    }\n    .pwa-modal__title {\n      margin: 0;\n      font-size: var(--pwa-text-base);\n      font-weight: 700;\n      color: var(--pwa-text-primary);\n    }\n    .pwa-modal__subtitle {\n      margin: 0.25rem 0 0 0;\n      font-size: var(--pwa-text-xs);\n      color: var(--pwa-text-secondary);\n    }\n    .pwa-modal__close-icon {\n      width: 1.125rem;\n      height: 1.125rem;\n    }\n    .pwa-modal__body {\n      padding: 1.5rem;\n      overflow-y: auto;\n      flex: 1;\n    }\n    .pwa-modal__footer {\n      padding: 1rem 1.5rem;\n      border-top: 1px solid var(--pwa-border);\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      gap: 0.75rem;\n      flex-shrink: 0;\n      background-color: var(--pwa-bg-subtle);\n    }\n    .pwa-modal__footer:empty {\n      display: none;\n    }\n  "] }]
    }], null, { isOpen: [{ type: i0.Input, args: [{ isSignal: true, alias: "isOpen", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], subtitle: [{ type: i0.Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }], maxWidth: [{ type: i0.Input, args: [{ isSignal: true, alias: "maxWidth", required: false }] }], closeOnBackdrop: [{ type: i0.Input, args: [{ isSignal: true, alias: "closeOnBackdrop", required: false }] }], close: [{ type: i0.Output, args: ["close"] }], onEscape: [{
            type: HostListener,
            args: ['window:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PwaModalComponent, { className: "PwaModalComponent", filePath: "components/modal/pwa-modal.component.ts", lineNumber: 137 }); })();
//# sourceMappingURL=pwa-modal.component.js.map