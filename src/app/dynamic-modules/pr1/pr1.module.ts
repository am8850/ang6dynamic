import { NgModule } from '@angular/core';
import { DynamicComponentLoaderModule } from '../../dynamic-component-loader/dynamic-component-loader.module';
import { Pr1Component } from './pr1.component';

@NgModule({
    declarations: [
        Pr1Component,
    ],
    imports: [
        DynamicComponentLoaderModule.forChild(Pr1Component),
    ],
})
export class Pr1Module { }
