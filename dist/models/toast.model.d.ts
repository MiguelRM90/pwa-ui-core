export type ToastType = 'success' | 'error' | 'warning' | 'info';
export interface ToastMessage {
    id: string;
    title: string;
    message?: string;
    type: ToastType;
    durationMs?: number;
}
//# sourceMappingURL=toast.model.d.ts.map