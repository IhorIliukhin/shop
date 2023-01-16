import { InjectionToken } from "@angular/core";

export interface InfoModel {
    App: string;
    Ver: string;
    API_URL: string;
}

export const info = {
    App: 'TaskManager',
    Ver: '1.0',
    API_URL: 'http://...',
}
export const INFORMATION = new InjectionToken<InfoModel>('info')