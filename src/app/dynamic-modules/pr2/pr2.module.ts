import { NgModule } from '@angular/core';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { Pr2Component } from './pr2.component';

@NgModule({
    declarations: [
        Pr2Component,
    ],
    imports: [
        DynamicComponentLoaderModule.forChild(Pr2Component),
    ],
})
export class Pr2Module { }
