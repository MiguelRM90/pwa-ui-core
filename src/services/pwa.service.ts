import { Injectable, inject, signal, OnDestroy } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs';
import { BeforeInstallPromptEvent } from '../models/pwa.model.js';

@Injectable({
  providedIn: 'root',
})
export class PwaService implements OnDestroy {
  private readonly swUpdate = inject(SwUpdate, { optional: true });

  readonly isOnline = signal<boolean>(
    typeof navigator !== 'undefined' && 'onLine' in navigator ? navigator.onLine : true
  );
  readonly canInstall = signal<boolean>(false);
  readonly hasUpdate = signal<boolean>(false);

  private deferredPrompt: BeforeInstallPromptEvent | null = null;
  private readonly onlineHandler: () => void;
  private readonly offlineHandler: () => void;
  private readonly beforeInstallHandler: (e: Event) => void;
  private readonly appInstalledHandler: () => void;

  constructor() {
    this.onlineHandler = () => this.isOnline.set(true);
    this.offlineHandler = () => this.isOnline.set(false);

    this.beforeInstallHandler = (e: Event) => {
      e.preventDefault();
      this.deferredPrompt = e as BeforeInstallPromptEvent;
      this.canInstall.set(true);
    };

    this.appInstalledHandler = () => {
      this.canInstall.set(false);
      this.deferredPrompt = null;
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('online', this.onlineHandler);
      window.addEventListener('offline', this.offlineHandler);
      window.addEventListener('beforeinstallprompt', this.beforeInstallHandler);
      window.addEventListener('appinstalled', this.appInstalledHandler);
    }

    this.initServiceWorkerUpdateListener();
  }

  private initServiceWorkerUpdateListener(): void {
    if (this.swUpdate && this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates
        .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
        .subscribe(() => {
          this.hasUpdate.set(true);
        });
    }
  }

  async promptInstall(): Promise<boolean> {
    if (!this.deferredPrompt) {
      return false;
    }

    await this.deferredPrompt.prompt();
    const choice = await this.deferredPrompt.userChoice;
    this.canInstall.set(false);
    this.deferredPrompt = null;
    return choice.outcome === 'accepted';
  }

  applyUpdate(): void {
    if (this.swUpdate && this.swUpdate.isEnabled) {
      this.swUpdate.activateUpdate().then(() => {
        if (typeof document !== 'undefined') {
          document.location.reload();
        }
      });
    } else if (typeof document !== 'undefined') {
      document.location.reload();
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('online', this.onlineHandler);
      window.removeEventListener('offline', this.offlineHandler);
      window.removeEventListener('beforeinstallprompt', this.beforeInstallHandler);
      window.removeEventListener('appinstalled', this.appInstalledHandler);
    }
  }
}
