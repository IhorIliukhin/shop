import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config-model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionService {

  private configuration!: ConfigModel;

  getConfig(): ConfigModel {
    return this.configuration;
  }

  setConfig(config: Partial<ConfigModel>): void {
    this.configuration = {...this.configuration, ...config};
  }

  setConfigProperty(key: keyof ConfigModel, value: string): void {
    this.configuration[key] = value;
  }
}
