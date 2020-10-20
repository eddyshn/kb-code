import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Cordova, CordovaOptions, IonicNativePlugin, Plugin, wrap } from '@ionic-native/core';

// todo-
// @Plugin({
//     pluginName: 'PluginDemo',
//     plugin: 'cordova.plugin.plugindemo',
//     pluginRef: 'cordova.plugin.plugindemo',
//     repo: 'https://github.com/eddyshn/cordova-plugin-demo.git',
//     platforms: ['Android'],
// })

@Injectable({
    providedIn: 'root'
})

export class PluginDemo2  extends IonicNativePlugin{
    //
    // @Cordova({
    //     successIndex: 1,
    //     errorIndex: 2,
    // })
    getCoolMethod(arg0: string): Promise<string> {
        return ;
    }
}
