import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
function PwaNumericSliderComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span", 3);
    i0.ɵɵtext(1, "\u2139\uFE0F");
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵdomProperty("title", ctx_r0.hint());
} }
function PwaNumericSliderComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span", 6);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.prefix());
} }
function PwaNumericSliderComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span", 8);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.suffix());
} }
function PwaNumericSliderComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 9)(1, "input", 10);
    i0.ɵɵdomListener("input", function PwaNumericSliderComponent_Conditional_12_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onSliderChange($event)); });
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(2, "div", 11)(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵdomElementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵdomProperty("min", ctx_r0.min())("max", ctx_r0.max())("step", ctx_r0.step())("value", ctx_r0.value());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.minDisplay());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.maxDisplay());
} }
export class PwaNumericSliderComponent {
    label = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    value = input.required(/* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    min = input(0, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "min" }] : /* istanbul ignore next */ []));
    max = input(1000000, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "max" }] : /* istanbul ignore next */ []));
    step = input(1, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "step" }] : /* istanbul ignore next */ []));
    unit = input('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "unit" }] : /* istanbul ignore next */ []));
    prefix = input('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "prefix" }] : /* istanbul ignore next */ []));
    suffix = input('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "suffix" }] : /* istanbul ignore next */ []));
    hint = input('', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "hint" }] : /* istanbul ignore next */ []));
    showSlider = input(true, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "showSlider" }] : /* istanbul ignore next */ []));
    locale = input('es-ES', /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "locale" }] : /* istanbul ignore next */ []));
    valueChange = output();
    onInputChange(event) {
        const target = event.target;
        const num = parseFloat(target.value);
        if (!isNaN(num)) {
            this.valueChange.emit(num);
        }
    }
    onSliderChange(event) {
        const target = event.target;
        const num = parseFloat(target.value);
        if (!isNaN(num)) {
            this.valueChange.emit(num);
        }
    }
    formattedDisplay() {
        const val = this.value() || 0;
        if (this.unit() === '€') {
            return new Intl.NumberFormat(this.locale(), {
                style: 'currency',
                currency: 'EUR',
                maximumFractionDigits: 0,
            }).format(val);
        }
        if (this.unit() === '%') {
            return `${val.toFixed(2)} %`;
        }
        return this.unit() ? `${val} ${this.unit()}` : `${val}`;
    }
    minDisplay() {
        return this.unit() === '€'
            ? `${this.min().toLocaleString(this.locale())} €`
            : `${this.min()} ${this.unit()}`.trim();
    }
    maxDisplay() {
        return this.unit() === '€'
            ? `${this.max().toLocaleString(this.locale())} €`
            : `${this.max()} ${this.unit()}`.trim();
    }
    static ɵfac = function PwaNumericSliderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PwaNumericSliderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PwaNumericSliderComponent, selectors: [["pwa-numeric-slider"]], inputs: { label: [1, "label"], value: [1, "value"], min: [1, "min"], max: [1, "max"], step: [1, "step"], unit: [1, "unit"], prefix: [1, "prefix"], suffix: [1, "suffix"], hint: [1, "hint"], showSlider: [1, "showSlider"], locale: [1, "locale"] }, outputs: { valueChange: "valueChange" }, decls: 13, vars: 14, consts: [[1, "pwa-input-group"], [1, "pwa-numeric-slider__top"], [1, "pwa-label"], [1, "pwa-numeric-slider__hint-icon", 3, "title"], [1, "pwa-numeric-slider__formatted-value"], [1, "pwa-numeric-slider__input-wrapper"], [1, "pwa-numeric-slider__affix", "pwa-numeric-slider__affix--prefix"], ["type", "number", 1, "pwa-input", 3, "input", "min", "max", "step", "value"], [1, "pwa-numeric-slider__affix", "pwa-numeric-slider__affix--suffix"], [1, "pwa-numeric-slider__slider-row"], ["type", "range", 1, "pwa-slider", 3, "input", "min", "max", "step", "value"], [1, "pwa-numeric-slider__min-max"]], template: function PwaNumericSliderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 1)(2, "label", 2)(3, "span");
            i0.ɵɵtext(4);
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(5, PwaNumericSliderComponent_Conditional_5_Template, 2, 1, "span", 3);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(6, "span", 4);
            i0.ɵɵtext(7);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(8, "div", 5);
            i0.ɵɵconditionalCreate(9, PwaNumericSliderComponent_Conditional_9_Template, 2, 1, "span", 6);
            i0.ɵɵdomElementStart(10, "input", 7);
            i0.ɵɵdomListener("input", function PwaNumericSliderComponent_Template_input_input_10_listener($event) { return ctx.onInputChange($event); });
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(11, PwaNumericSliderComponent_Conditional_11_Template, 2, 1, "span", 8);
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(12, PwaNumericSliderComponent_Conditional_12_Template, 7, 6, "div", 9);
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.label());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.hint() ? 5 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.formattedDisplay(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.prefix() ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("padding-left", ctx.prefix() ? "2rem" : null)("padding-right", ctx.suffix() ? "2rem" : null);
            i0.ɵɵdomProperty("min", ctx.min())("max", ctx.max())("step", ctx.step())("value", ctx.value());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.suffix() ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showSlider() ? 12 : -1);
        } }, dependencies: [CommonModule, FormsModule], styles: ["[_nghost-%COMP%] {\n      display: block;\n      width: 100%;\n    }\n    .pwa-numeric-slider__top[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 0.5rem;\n    }\n    .pwa-numeric-slider__hint-icon[_ngcontent-%COMP%] {\n      cursor: help;\n      font-size: 0.75rem;\n      margin-left: 0.25rem;\n      opacity: 0.7;\n    }\n    .pwa-numeric-slider__formatted-value[_ngcontent-%COMP%] {\n      font-size: var(--%NS%pwa-text-xs);\n      font-weight: 600;\n      color: var(--%NS%pwa-text-secondary);\n      font-feature-settings: var(--%NS%pwa-font-features);\n    }\n    .pwa-numeric-slider__input-wrapper[_ngcontent-%COMP%] {\n      position: relative;\n      display: flex;\n      align-items: center;\n      width: 100%;\n    }\n    .pwa-numeric-slider__affix[_ngcontent-%COMP%] {\n      position: absolute;\n      font-size: var(--%NS%pwa-text-sm);\n      font-weight: 500;\n      color: var(--%NS%pwa-text-muted);\n      user-select: none;\n      pointer-events: none;\n    }\n    .pwa-numeric-slider__affix--prefix[_ngcontent-%COMP%] {\n      left: 0.75rem;\n    }\n    .pwa-numeric-slider__affix--suffix[_ngcontent-%COMP%] {\n      right: 0.75rem;\n    }\n    .pwa-numeric-slider__slider-row[_ngcontent-%COMP%] {\n      margin-top: 0.25rem;\n      display: flex;\n      flex-direction: column;\n      gap: 0.25rem;\n    }\n    .pwa-numeric-slider__min-max[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      font-size: var(--%NS%pwa-text-2xs);\n      color: var(--%NS%pwa-text-muted);\n      font-feature-settings: var(--%NS%pwa-font-features);\n    }"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PwaNumericSliderComponent, [{
        type: Component,
        args: [{ selector: 'pwa-numeric-slider', standalone: true, imports: [CommonModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"pwa-input-group\">\n  <!-- Label & Formatted Value Row -->\n  <div class=\"pwa-numeric-slider__top\">\n    <label class=\"pwa-label\">\n      <span>{{ label() }}</span>\n      @if (hint()) {\n        <span class=\"pwa-numeric-slider__hint-icon\" [title]=\"hint()\">\u2139\uFE0F</span>\n      }\n    </label>\n    <span class=\"pwa-numeric-slider__formatted-value\">\n      {{ formattedDisplay() }}\n    </span>\n  </div>\n\n  <!-- Numeric Input with Prefix / Suffix -->\n  <div class=\"pwa-numeric-slider__input-wrapper\">\n    @if (prefix()) {\n      <span class=\"pwa-numeric-slider__affix pwa-numeric-slider__affix--prefix\">{{ prefix() }}</span>\n    }\n\n    <input\n      type=\"number\"\n      class=\"pwa-input\"\n      [min]=\"min()\"\n      [max]=\"max()\"\n      [step]=\"step()\"\n      [value]=\"value()\"\n      (input)=\"onInputChange($event)\"\n      [style.padding-left]=\"prefix() ? '2rem' : null\"\n      [style.padding-right]=\"suffix() ? '2rem' : null\"\n    />\n\n    @if (suffix()) {\n      <span class=\"pwa-numeric-slider__affix pwa-numeric-slider__affix--suffix\">{{ suffix() }}</span>\n    }\n  </div>\n\n  <!-- Range Slider -->\n  @if (showSlider()) {\n    <div class=\"pwa-numeric-slider__slider-row\">\n      <input\n        type=\"range\"\n        class=\"pwa-slider\"\n        [min]=\"min()\"\n        [max]=\"max()\"\n        [step]=\"step()\"\n        [value]=\"value()\"\n        (input)=\"onSliderChange($event)\"\n      />\n      <div class=\"pwa-numeric-slider__min-max\">\n        <span>{{ minDisplay() }}</span>\n        <span>{{ maxDisplay() }}</span>\n      </div>\n    </div>\n  }\n</div>\n", styles: ["\n    :host {\n      display: block;\n      width: 100%;\n    }\n    .pwa-numeric-slider__top {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 0.5rem;\n    }\n    .pwa-numeric-slider__hint-icon {\n      cursor: help;\n      font-size: 0.75rem;\n      margin-left: 0.25rem;\n      opacity: 0.7;\n    }\n    .pwa-numeric-slider__formatted-value {\n      font-size: var(--pwa-text-xs);\n      font-weight: 600;\n      color: var(--pwa-text-secondary);\n      font-feature-settings: var(--pwa-font-features);\n    }\n    .pwa-numeric-slider__input-wrapper {\n      position: relative;\n      display: flex;\n      align-items: center;\n      width: 100%;\n    }\n    .pwa-numeric-slider__affix {\n      position: absolute;\n      font-size: var(--pwa-text-sm);\n      font-weight: 500;\n      color: var(--pwa-text-muted);\n      user-select: none;\n      pointer-events: none;\n    }\n    .pwa-numeric-slider__affix--prefix {\n      left: 0.75rem;\n    }\n    .pwa-numeric-slider__affix--suffix {\n      right: 0.75rem;\n    }\n    .pwa-numeric-slider__slider-row {\n      margin-top: 0.25rem;\n      display: flex;\n      flex-direction: column;\n      gap: 0.25rem;\n    }\n    .pwa-numeric-slider__min-max {\n      display: flex;\n      justify-content: space-between;\n      font-size: var(--pwa-text-2xs);\n      color: var(--pwa-text-muted);\n      font-feature-settings: var(--pwa-font-features);\n    }\n  "] }]
    }], null, { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: true }] }], value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: true }] }], min: [{ type: i0.Input, args: [{ isSignal: true, alias: "min", required: false }] }], max: [{ type: i0.Input, args: [{ isSignal: true, alias: "max", required: false }] }], step: [{ type: i0.Input, args: [{ isSignal: true, alias: "step", required: false }] }], unit: [{ type: i0.Input, args: [{ isSignal: true, alias: "unit", required: false }] }], prefix: [{ type: i0.Input, args: [{ isSignal: true, alias: "prefix", required: false }] }], suffix: [{ type: i0.Input, args: [{ isSignal: true, alias: "suffix", required: false }] }], hint: [{ type: i0.Input, args: [{ isSignal: true, alias: "hint", required: false }] }], showSlider: [{ type: i0.Input, args: [{ isSignal: true, alias: "showSlider", required: false }] }], locale: [{ type: i0.Input, args: [{ isSignal: true, alias: "locale", required: false }] }], valueChange: [{ type: i0.Output, args: ["valueChange"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PwaNumericSliderComponent, { className: "PwaNumericSliderComponent", filePath: "components/numeric-slider/pwa-numeric-slider.component.ts", lineNumber: 69 }); })();
//# sourceMappingURL=pwa-numeric-slider.component.js.map