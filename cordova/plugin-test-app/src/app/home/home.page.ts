import {Component} from '@angular/core';
import {PluginDemo} from './PluginDemo';
import {PluginDemo2} from './PluginDemo2';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    inputValue: string = 'native toast test!';

    constructor(public pluginDemo: PluginDemo,
                public pluginDemo2: PluginDemo2) {

    }


    nativeToast() {
        // 方法1
        // (window as any).cordova.plugins.PluginDemo.coolMethod(this.inputValue, (x) => {
        //   console.log(x);
        // }, (x) => {
        //   console.log(x);
        // });
        //
        // 方法2
        this.pluginDemo.coolMethod(this.inputValue).subscribe((data) => {
                alert('execute successfully');
            },
            (error => {
                console.log(error);
            }));

        // 方法3
        // this.pluginDemo2.getCoolMethod(this.inputValue).then(
        //     data => {
        //         alert('execute successfully');
        //     },
        //     error => {
        //         console.log(error);
        //     }
        // );

    }

}
