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
    //ev.preventDefault();
    console.log('DROPPED!!');
    alert('Dropped');
  }

  dragstart(ev: any) {
    //ev.preventDefault();
    console.log('DRAG STARTED!');
    //alert('Drag started');
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
