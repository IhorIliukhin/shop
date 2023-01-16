import { InjectionToken } from "@angular/core";

export class LocalStorageService {
    
    setItem(prop: string, value: string) {
        localStorage.setItem(prop, value);
    }

    getItem(item: string) {
        localStorage.getItem(item);
    }

    removeItem(item: string) {
        localStorage.removeItem(item);
    }

    clearAll() {
        localStorage.clear();
    }
}

export const localStorageServiceToken = new InjectionToken<LocalStorageService>('localStorage');
