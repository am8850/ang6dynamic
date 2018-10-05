import { NgModule } from '@angular/core';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { Pr4Component } from './pr4.component';

@NgModule({
    declarations: [
        Pr4Component,
    ],
    imports: [
        DynamicComponentLoaderModule.forChild(Pr4Component),
    ],
})
export class Pr4Module { }
