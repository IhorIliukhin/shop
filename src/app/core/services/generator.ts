import { Injectable, InjectionToken } from '@angular/core';
import { getNewID } from './gen-id.generator';

@Injectable()
export class GeneratorService {

    generate(n: number): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < n; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        return result;
    }
    
    getNewID = getNewID;
}

export const generatedString = new InjectionToken<GeneratorService>('randomSequence');