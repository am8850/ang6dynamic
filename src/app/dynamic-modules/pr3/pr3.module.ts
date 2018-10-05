import { NgModule } from '@angular/core';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { Pr3Component } from './pr3.component';

@NgModule({
    declarations: [
        Pr3Component,
    ],
    imports: [
        DynamicComponentLoaderModule.forChild(Pr3Component),
    ],
})
export class Pr3Module { }
