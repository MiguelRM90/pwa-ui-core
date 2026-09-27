import { Injectable, signal } from '@angular/core';
import { ToastMessage, ToastType } from '../models/toast.model';

@Injectable({
  providedIn: 'root',
})
export class PwaToastService {
  readonly toasts = signal<ToastMessage[]>([]);
  private readonly timers = new Map<string, ReturnType<typeof setTimeout>>();

  show(toast: Omit<ToastMessage, 'id'>): string {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const fullToast: ToastMessage = {
      ...toast,
      id,
      durationMs: toast.durationMs ?? 4000,
    };

    this.toasts.update((current) => [...current, fullToast]);

    if (fullToast.durationMs && fullToast.durationMs > 0) {
      const timer = setTimeout(() => {
        this.dismiss(id);
      }, fullToast.durationMs);
      this.timers.set(id, timer);
    }

    return id;
  }

  success(title: string, message?: string, durationMs = 4000): string {
    return this.show({ title, message, type: 'success', durationMs });
  }

  error(title: string, message?: string, durationMs = 6000): string {
    return this.show({ title, message, type: 'error', durationMs });
  }

  warning(title: string, message?: string, durationMs = 5000): string {
    return this.show({ title, message, type: 'warning', durationMs });
  }

  info(title: string, message?: string, durationMs = 4000): string {
    return this.show({ title, message, type: 'info', durationMs });
  }

  dismiss(id: string): void {
    const timer = this.timers.get(id);
    if (timer) {
      clearTimeout(timer);
      this.timers.delete(id);
    }
    this.toasts.update((current) => current.filter((t) => t.id !== id));
  }

  clear(): void {
    for (const timer of this.timers.values()) {
      clearTimeout(timer);
    }
    this.timers.clear();
    this.toasts.set([]);
  }
}
