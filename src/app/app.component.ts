import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material';

import { DynamicComponentLoader } from './dynamic-component-loader/dynamic-component-loader.service';
import { DialogComponent } from './dynamic-modules/dialog/dialog.component';
import { MessageComponent } from './dynamic-modules/message/message.component';
import { Pr1Component } from './dynamic-modules/pr1/pr1.component';
import { Pr2Component } from './dynamic-modules/pr2/pr2.component';
import { Pr3Component } from './dynamic-modules/pr3/pr3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  @ViewChild('testOutlet', { read: ViewContainerRef }) testOutlet: ViewContainerRef;

  constructor(
    private dynamicComponentLoader: DynamicComponentLoader,
    private dialog: MatDialog,
  ) {
  }

  private loadDynamic<T>(componetName: string): any {
    return this.dynamicComponentLoader
      .getComponentFactory<T>(componetName)
      .subscribe(componentFactory => {
        const ref = this.testOutlet.createComponent(componentFactory);
        ref.changeDetectorRef.detectChanges();
      }, error => {
        console.warn(error);
      });
  }

  pr1Load() {
    this.loadDynamic<Pr1Component>('pr1');
  }

  pr2Load() {
    this.loadDynamic<Pr1Component>('pr2');
  }

  pr3Load() {
    this.loadDynamic<Pr1Component>('pr3');
  }

  pr4Load() {
    this.loadDynamic<Pr1Component>('pr4');
  }

  loadComponent() {
    this.loadDynamic<MessageComponent>('message');
  }

  showDialog() {
    this.dialog.open(DialogComponent);
  }
}
