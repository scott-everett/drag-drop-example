import { Component } from '@angular/core';

/**
 * @title Basic Drag&Drop
 */
@Component({
  selector: 'cdk-drag-drop-overview-example',
  templateUrl: 'cdk-drag-drop-overview-example.html',
  styleUrls: ['cdk-drag-drop-overview-example.css'],
})
export class CdkDragDropOverviewExample {
  drop(ev: any) {
    ev.preventDefault();
    console.log('DROPPED!!');
    console.log(ev);
    console.log(`page x ${ev.pageX}`);
    console.log(`page y ${ev.pageY}`);
  }

  dragstart(ev: any) {
    console.log('DRAG STARTED!');
    console.log(ev);
    console.log(`page x ${ev.pageX}`);
    console.log(`page y ${ev.pageY}`);
  }

  allowDrop(ev: any) {
    ev.preventDefault();
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
