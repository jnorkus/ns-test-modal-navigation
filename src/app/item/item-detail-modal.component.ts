import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail-modal.component.html",
})
export class ItemDetailModalComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private params: ModalDialogParams
    ) { }

    ngOnInit(): void {
        const id = +this.params.context.id;
        this.item = this.itemService.getItem(id);
    }

    onCloseTap() {
        this.params.closeCallback();
    }
}
