import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PluginDemo {
    coolMethod(arg0) {
        return new Observable(subscriber  => {
            (window as any).cordova.plugins.PluginDemo.coolMethod(arg0,
                (data: any) => {
                    subscriber .next(data);
                    if (data === 'complete') {
                        subscriber .complete();
                    }
                },
                (error: any) => {
                    subscriber .error(error);
                }
            );
        });
    }
}
