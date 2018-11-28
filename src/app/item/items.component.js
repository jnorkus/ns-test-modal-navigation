"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var item_detail_modal_component_1 = require("./item-detail-modal.component");
var router_1 = require("nativescript-angular/router");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService, modalService, vcRef, router) {
        this.itemService = itemService;
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.router = router;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.prototype.onItemTap = function (item) {
        var _this = this;
        this.modalService.showModal(item_detail_modal_component_1.ItemDetailModalComponent, { viewContainerRef: this.vcRef, fullscreen: true, context: { id: item.id } })
            .then(function (_) {
            // First time navigation works briefly before navigating back to ItemsComponent
            // Second time navigation works as expected
            _this.router.navigateByUrl("/item/" + item.id);
            // Workaround
            // setTimeout(_ => this.router.navigateByUrl(`/item/${item.id}`));
        });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            router_1.RouterExtensions])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBR3BFLCtDQUE2QztBQUU3QyxrRUFBdUU7QUFDdkUsNkVBQXlFO0FBQ3pFLHNEQUErRDtBQU8vRDtJQUdJLDRJQUE0STtJQUM1SSxpSEFBaUg7SUFDakgsd0JBQ1ksV0FBd0IsRUFDeEIsWUFBZ0MsRUFDaEMsS0FBdUIsRUFDdkIsTUFBd0I7UUFIeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQ2hDLENBQUM7SUFFTCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxrQ0FBUyxHQUFULFVBQVUsSUFBVTtRQUFwQixpQkFVQztRQVRHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHNEQUF3QixFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQzthQUM5SCxJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ0gsK0VBQStFO1lBQy9FLDJDQUEyQztZQUMzQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFTLElBQUksQ0FBQyxFQUFJLENBQUMsQ0FBQztZQUU5QyxhQUFhO1lBQ2Isa0VBQWtFO1FBQ3RFLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQTFCUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQU8yQiwwQkFBVztZQUNWLGlDQUFrQjtZQUN6Qix1QkFBZ0I7WUFDZix5QkFBZ0I7T0FUM0IsY0FBYyxDQTJCMUI7SUFBRCxxQkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcbmltcG9ydCB7IEl0ZW1EZXRhaWxNb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0tZGV0YWlsLW1vZGFsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW1zOiBJdGVtW107XG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGl0ZW06IEl0ZW0pIHtcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKEl0ZW1EZXRhaWxNb2RhbENvbXBvbmVudCwgeyB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLCBmdWxsc2NyZWVuOiB0cnVlLCBjb250ZXh0OiB7IGlkOiBpdGVtLmlkIH0gfSlcbiAgICAgICAgICAgIC50aGVuKF8gPT4ge1xuICAgICAgICAgICAgICAgIC8vIEZpcnN0IHRpbWUgbmF2aWdhdGlvbiB3b3JrcyBicmllZmx5IGJlZm9yZSBuYXZpZ2F0aW5nIGJhY2sgdG8gSXRlbXNDb21wb25lbnRcbiAgICAgICAgICAgICAgICAvLyBTZWNvbmQgdGltZSBuYXZpZ2F0aW9uIHdvcmtzIGFzIGV4cGVjdGVkXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChgL2l0ZW0vJHtpdGVtLmlkfWApO1xuXG4gICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZFxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoXyA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGAvaXRlbS8ke2l0ZW0uaWR9YCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==