import { Component, OnInit, ViewContainerRef } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { ItemDetailModalComponent } from "./item-detail-modal.component";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(
        private itemService: ItemService,
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef,
        private router: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    onItemTap(item: Item) {
        this.modalService.showModal(ItemDetailModalComponent, { viewContainerRef: this.vcRef, fullscreen: true, context: { id: item.id } })
            .then(_ => {
                // First time navigation works briefly before navigating back to ItemsComponent
                // Second time navigation works as expected
                this.router.navigateByUrl(`/item/${item.id}`);

                // Workaround
                // setTimeout(_ => this.router.navigateByUrl(`/item/${item.id}`));
            });
    }
}