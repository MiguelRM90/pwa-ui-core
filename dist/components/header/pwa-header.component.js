import { Component, ChangeDetectionStrategy, input, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaService } from '../../services/pwa.service.js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = [[["", "header-logo", ""]], [["", "header-actions", ""]]];
const _c1 = ["[header-logo]", "[header-actions]"];
function PwaHeaderComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 12);
    i0.ɵɵlistener("click", function PwaHeaderComponent_Conditional_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.pwa.applyUpdate()); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.updateMessage());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.updateButtonText(), " ");
} }
function PwaHeaderComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.badgeText());
} }
function PwaHeaderComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.subtitle());
} }
function PwaHeaderComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "span", 13);
    i0.ɵɵelementStart(2, "span", 14);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.pwa.isOnline() ? "pwa-badge--success" : "pwa-badge--danger")("title", ctx_r1.pwa.isOnline() ? "Connected to internet" : "Offline mode - Local data storage active");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("pwa-badge-dot--pulse", ctx_r1.pwa.isOnline());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.pwa.isOnline() ? "Online" : "Offline");
} }
function PwaHeaderComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function PwaHeaderComponent_Conditional_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onInstallPrompt()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 16);
    i0.ɵɵelement(2, "path", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 18);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.installButtonText());
} }
export class PwaHeaderComponent {
    pwa = inject(PwaService);
    title = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    subtitle = input('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "subtitle" }] : /* istanbul ignore next */ []));
    badgeText = input('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "badgeText" }] : /* istanbul ignore next */ []));
    showNetworkStatus = input(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "showNetworkStatus" }] : /* istanbul ignore next */ []));
    showInstallButton = input(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "showInstallButton" }] : /* istanbul ignore next */ []));
    showUpdateBanner = input(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "showUpdateBanner" }] : /* istanbul ignore next */ []));
    installButtonText = input('Install App', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "installButtonText" }] : /* istanbul ignore next */ []));
    updateMessage = input('A new version is available.', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "updateMessage" }] : /* istanbul ignore next */ []));
    updateButtonText = input('Update', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "updateButtonText" }] : /* istanbul ignore next */ []));
    installed = output();
    async onInstallPrompt() {
        const success = await this.pwa.promptInstall();
        this.installed.emit(success);
    }
    static ɵfac = function PwaHeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PwaHeaderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PwaHeaderComponent, selectors: [["pwa-header"]], inputs: { title: [1, "title"], subtitle: [1, "subtitle"], badgeText: [1, "badgeText"], showNetworkStatus: [1, "showNetworkStatus"], showInstallButton: [1, "showInstallButton"], showUpdateBanner: [1, "showUpdateBanner"], installButtonText: [1, "installButtonText"], updateMessage: [1, "updateMessage"], updateButtonText: [1, "updateButtonText"] }, outputs: { installed: "installed" }, ngContentSelectors: _c1, decls: 15, vars: 6, consts: [[1, "pwa-header"], [1, "pwa-header__banner"], [1, "pwa-container", "pwa-header__inner"], [1, "pwa-header__brand"], [1, "pwa-header__titles"], [1, "pwa-header__title-row"], [1, "pwa-header__title"], [1, "pwa-badge", "pwa-badge--info"], [1, "pwa-header__subtitle"], [1, "pwa-header__actions"], [1, "pwa-badge", 3, "ngClass", "title"], ["type", "button", "title", "Install app to your home screen", 1, "pwa-btn", "pwa-btn--primary", "pwa-btn--sm"], ["type", "button", 1, "pwa-btn", "pwa-btn--primary", "pwa-btn--sm", 3, "click"], [1, "pwa-badge-dot"], [1, "pwa-header__network-text"], ["type", "button", "title", "Install app to your home screen", 1, "pwa-btn", "pwa-btn--primary", "pwa-btn--sm", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "pwa-header__icon"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"], [1, "pwa-header__btn-label"]], template: function PwaHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "header", 0);
            i0.ɵɵconditionalCreate(1, PwaHeaderComponent_Conditional_1_Template, 5, 2, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3);
            i0.ɵɵprojection(4);
            i0.ɵɵelementStart(5, "div", 4)(6, "div", 5)(7, "h1", 6);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(9, PwaHeaderComponent_Conditional_9_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(10, PwaHeaderComponent_Conditional_10_Template, 2, 1, "p", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 9);
            i0.ɵɵconditionalCreate(12, PwaHeaderComponent_Conditional_12_Template, 4, 5, "div", 10);
            i0.ɵɵconditionalCreate(13, PwaHeaderComponent_Conditional_13_Template, 5, 1, "button", 11);
            i0.ɵɵprojection(14, 1);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showUpdateBanner() && ctx.pwa.hasUpdate() ? 1 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.title());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.badgeText() ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.subtitle() ? 10 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showNetworkStatus() ? 12 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showInstallButton() && ctx.pwa.canInstall() ? 13 : -1);
        } }, dependencies: [CommonModule, i1.NgClass], styles: ["[_nghost-%COMP%] {\n      display: block;\n      width: 100%;\n    }\n    .pwa-header[_ngcontent-%COMP%] {\n      position: sticky;\n      top: 0;\n      z-index: 40;\n      background-color: color-mix(in srgb, var(--%NS%pwa-bg-surface) 88%, transparent);\n      backdrop-filter: blur(12px);\n      -webkit-backdrop-filter: blur(12px);\n      border-bottom: 1px solid var(--%NS%pwa-border);\n      transition: background-color 0.2s ease, border-color 0.2s ease;\n    }\n    .pwa-header__banner[_ngcontent-%COMP%] {\n      background-color: var(--%NS%pwa-brand-600);\n      color: #ffffff;\n      padding: 0.5rem 1rem;\n      font-size: var(--%NS%pwa-text-xs);\n      font-weight: 500;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 0.75rem;\n    }\n    .pwa-header__inner[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      height: 4rem;\n      gap: 1rem;\n    }\n    .pwa-header__brand[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 0.75rem;\n      min-width: 0;\n    }\n    .pwa-header__titles[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      min-width: 0;\n    }\n    .pwa-header__title-row[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n    }\n    .pwa-header__title[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: var(--%NS%pwa-text-base);\n      font-weight: 800;\n      color: var(--%NS%pwa-text-primary);\n      letter-spacing: -0.02em;\n      white-space: nowrap;\n    }\n    .pwa-header__subtitle[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: var(--%NS%pwa-text-xs);\n      color: var(--%NS%pwa-text-secondary);\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    .pwa-header__actions[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n      flex-shrink: 0;\n    }\n    .pwa-header__icon[_ngcontent-%COMP%] {\n      width: 1rem;\n      height: 1rem;\n    }\n    @media (max-width: 640px) {\n      .pwa-header__subtitle[_ngcontent-%COMP%], \n   .pwa-header__btn-label[_ngcontent-%COMP%], \n   .pwa-header__network-text[_ngcontent-%COMP%] {\n        display: none;\n      }\n    }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PwaHeaderComponent, [{
        type: Component,
        args: [{ selector: 'pwa-header', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<header class=\"pwa-header\">\n  <!-- PWA Update Banner -->\n  @if (showUpdateBanner() && pwa.hasUpdate()) {\n    <div class=\"pwa-header__banner\">\n      <span>{{ updateMessage() }}</span>\n      <button type=\"button\" class=\"pwa-btn pwa-btn--primary pwa-btn--sm\" (click)=\"pwa.applyUpdate()\">\n        {{ updateButtonText() }}\n      </button>\n    </div>\n  }\n\n  <div class=\"pwa-container pwa-header__inner\">\n    <!-- Logo and Branding -->\n    <div class=\"pwa-header__brand\">\n      <ng-content select=\"[header-logo]\"></ng-content>\n      <div class=\"pwa-header__titles\">\n        <div class=\"pwa-header__title-row\">\n          <h1 class=\"pwa-header__title\">{{ title() }}</h1>\n          @if (badgeText()) {\n            <span class=\"pwa-badge pwa-badge--info\">{{ badgeText() }}</span>\n          }\n        </div>\n        @if (subtitle()) {\n          <p class=\"pwa-header__subtitle\">{{ subtitle() }}</p>\n        }\n      </div>\n    </div>\n\n    <!-- Right Side Actions & Indicators -->\n    <div class=\"pwa-header__actions\">\n      <!-- Online/Offline Network Status -->\n      @if (showNetworkStatus()) {\n        <div\n          class=\"pwa-badge\"\n          [ngClass]=\"pwa.isOnline() ? 'pwa-badge--success' : 'pwa-badge--danger'\"\n          [title]=\"pwa.isOnline() ? 'Connected to internet' : 'Offline mode - Local data storage active'\"\n        >\n          <span class=\"pwa-badge-dot\" [class.pwa-badge-dot--pulse]=\"pwa.isOnline()\"></span>\n          <span class=\"pwa-header__network-text\">{{ pwa.isOnline() ? 'Online' : 'Offline' }}</span>\n        </div>\n      }\n\n      <!-- PWA Installation Button -->\n      @if (showInstallButton() && pwa.canInstall()) {\n        <button\n          type=\"button\"\n          class=\"pwa-btn pwa-btn--primary pwa-btn--sm\"\n          (click)=\"onInstallPrompt()\"\n          title=\"Install app to your home screen\"\n        >\n          <svg class=\"pwa-header__icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4\" />\n          </svg>\n          <span class=\"pwa-header__btn-label\">{{ installButtonText() }}</span>\n        </button>\n      }\n\n      <ng-content select=\"[header-actions]\"></ng-content>\n    </div>\n  </div>\n</header>\n", styles: ["\n    :host {\n      display: block;\n      width: 100%;\n    }\n    .pwa-header {\n      position: sticky;\n      top: 0;\n      z-index: 40;\n      background-color: color-mix(in srgb, var(--pwa-bg-surface) 88%, transparent);\n      backdrop-filter: blur(12px);\n      -webkit-backdrop-filter: blur(12px);\n      border-bottom: 1px solid var(--pwa-border);\n      transition: background-color 0.2s ease, border-color 0.2s ease;\n    }\n    .pwa-header__banner {\n      background-color: var(--pwa-brand-600);\n      color: #ffffff;\n      padding: 0.5rem 1rem;\n      font-size: var(--pwa-text-xs);\n      font-weight: 500;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 0.75rem;\n    }\n    .pwa-header__inner {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      height: 4rem;\n      gap: 1rem;\n    }\n    .pwa-header__brand {\n      display: flex;\n      align-items: center;\n      gap: 0.75rem;\n      min-width: 0;\n    }\n    .pwa-header__titles {\n      display: flex;\n      flex-direction: column;\n      min-width: 0;\n    }\n    .pwa-header__title-row {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n    }\n    .pwa-header__title {\n      margin: 0;\n      font-size: var(--pwa-text-base);\n      font-weight: 800;\n      color: var(--pwa-text-primary);\n      letter-spacing: -0.02em;\n      white-space: nowrap;\n    }\n    .pwa-header__subtitle {\n      margin: 0;\n      font-size: var(--pwa-text-xs);\n      color: var(--pwa-text-secondary);\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    .pwa-header__actions {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n      flex-shrink: 0;\n    }\n    .pwa-header__icon {\n      width: 1rem;\n      height: 1rem;\n    }\n    @media (max-width: 640px) {\n      .pwa-header__subtitle,\n      .pwa-header__btn-label,\n      .pwa-header__network-text {\n        display: none;\n      }\n    }\n  "] }]
    }], null, { title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: true }] }], subtitle: [{ type: i0.Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }], badgeText: [{ type: i0.Input, args: [{ isSignal: true, alias: "badgeText", required: false }] }], showNetworkStatus: [{ type: i0.Input, args: [{ isSignal: true, alias: "showNetworkStatus", required: false }] }], showInstallButton: [{ type: i0.Input, args: [{ isSignal: true, alias: "showInstallButton", required: false }] }], showUpdateBanner: [{ type: i0.Input, args: [{ isSignal: true, alias: "showUpdateBanner", required: false }] }], installButtonText: [{ type: i0.Input, args: [{ isSignal: true, alias: "installButtonText", required: false }] }], updateMessage: [{ type: i0.Input, args: [{ isSignal: true, alias: "updateMessage", required: false }] }], updateButtonText: [{ type: i0.Input, args: [{ isSignal: true, alias: "updateButtonText", required: false }] }], installed: [{ type: i0.Output, args: ["installed"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PwaHeaderComponent, { className: "PwaHeaderComponent", filePath: "components/header/pwa-header.component.ts", lineNumber: 95 }); })();
//# sourceMappingURL=pwa-header.component.js.map