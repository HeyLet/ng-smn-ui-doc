import {Component, AfterViewInit, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {UiToolbarService} from 'ng-smn-ui';
import {RegionService} from '../../core/region.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['../../home/home.component.scss', './card.component.scss']
})
export class CardComponent implements AfterViewInit, OnInit {
    codes: any[];
    region: any;

    constructor(private toolbarService: UiToolbarService, private titleService: Title, private regionService: RegionService) {
        this.regionService.change.subscribe(region => {
            this.region = region;
            this.ngOnInit();
        });
        this.codes = [];
    }

    ngOnInit() {
        this.region = this.regionService.get();
        this.codes[0] = `<ui-card></ui-card>`;
        this.codes[1] = `<ui-card>
        <ui-card-title>Lorem ipsum</ui-card-title>
    </ui-card>`;
        this.codes[2] = `<ui-card>
        <ui-card-title>Lorem ipsum</ui-card-title>
        <ui-card-subtitle>Dolor sit amet</ui-card-subtitle>
    </ui-card>`;
        this.codes[3] = `<ui-card>
        <ui-card-title>Lorem ipsum</ui-card-title>
        <ui-card-subtitle>Dolor sit amet</ui-card-subtitle>
        <ui-card-content>
            Consectetur adipisicing elit. Accusamus aperiam deserunt dolore expedita fugit illum, minus
            nihil obcaecati pariatur porro quibusdam tempore totam ut. Deleniti iusto nulla sint sunt totam?
        </ui-card-content>
    </ui-card>`;
        this.codes[4] = `<ui-card>
        <ui-card-title>Lorem ipsum</ui-card-title>
        <ui-card-subtitle>Dolor sit amet</ui-card-subtitle>
        <ui-card-content>
            Consectetur adipisicing elit. Accusamus aperiam deserunt dolore expedita fugit illum, minus
            nihil obcaecati pariatur porro quibusdam tempore totam ut. Deleniti iusto nulla sint sunt totam?
        </ui-card-content>
        <div class="ui-button-container cover">
            <button class="ui-button flat" uiRipple>Secondary</button>
            <button class="ui-button flat primary" uiRipple>Action</button>
        </div>
    </ui-card>`;
        this.codes[5] = `<ui-card>
        <ui-card-title>Lorem ipsum</ui-card-title>
        <ui-card-subtitle>Dolor sit amet</ui-card-subtitle>
        <ui-card-content>
            Consectetur adipisicing elit. Accusamus aperiam deserunt dolore expedita fugit illum, minus
            nihil obcaecati pariatur porro quibusdam tempore totam ut. Deleniti iusto nulla sint sunt totam?
        </ui-card-content>
        <div class="ui-button-container cover align-left">
            <button class="ui-button flat primary" uiRipple>Action</button>
            <button class="ui-button flat" uiRipple>Secondary</button>
        </div>
    </ui-card>`;
        this.codes[6] = `<ui-card>
        <img src="${this.region.card.imageLink}" class="responsive">
        <ui-card-title>Lorem ipsum</ui-card-title>
        <ui-card-subtitle>Dolor sit amet</ui-card-subtitle>
        <ui-card-content>
            Consectetur adipisicing elit. Accusamus aperiam deserunt dolore expedita fugit illum, minus
            nihil obcaecati pariatur porro quibusdam tempore totam ut. Deleniti iusto nulla sint sunt totam?
        </ui-card-content>
        <div class="ui-button-container cover align-left">
            <button class="ui-button flat primary" uiRipple>Action</button>
            <button class="ui-button flat" uiRipple>Secondary</button>
        </div>
    </ui-card>`;
    }

    ngAfterViewInit() {
        this.titleService.setTitle('Card');
        this.toolbarService.set('Card');
    }
}
