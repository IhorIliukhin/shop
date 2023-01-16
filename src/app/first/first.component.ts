import { ChangeDetectionStrategy, Component, Inject, Optional } from '@angular/core';
import { ConfigOptionService } from '../core/services/config-option.service';

import { info, InfoModel, INFORMATION } from '../core/services/constant.service';
import { generatedString, GeneratorService } from '../core/services/generator';
import { GeneratorFactory } from '../core/services/generator.factory';
import { LocalStorageService, localStorageServiceToken } from '../core/services/local-storage.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  providers: [
    GeneratorService,
    { provide: INFORMATION, useValue: info },
    { 
      provide: generatedString, 
      useFactory: GeneratorFactory(10), 
      deps: [GeneratorService]
    },
    { 
      provide: localStorageServiceToken,
      useValue: new LocalStorageService()
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstComponent {

  constructor(
    @Optional() public configService: ConfigOptionService,
    @Optional() @Inject(INFORMATION) public info: InfoModel,
    @Optional() @Inject(generatedString) public generator: string,
    @Optional() public generatorService: GeneratorService,
    @Optional() @Inject(localStorageServiceToken) public localStorageService: LocalStorageService
  ) {}


  test() {
    this.localStorageService.setItem('x', 'y');
    this.configService.setConfig({id: '1', login: 'John', email: 'i@i.com'});
    this.configService.setConfigProperty('id', '2');
    this.configService.setConfigProperty('login', 'Smith');
    this.configService.setConfigProperty('email', 'y@y.com');
  }

}
