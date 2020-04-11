(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marketplace-marketplace-module"],{

/***/ "./src/app/marketplace/listing-details/listing-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/marketplace/listing-details/listing-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingDetailsComponent", function() { return ListingDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _marketplace_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../marketplace-service.service */ "./src/app/marketplace/marketplace-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");








const _c0 = function () { return ["/"]; };
function ListingDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListingDetailsComponent_div_0_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Continue ($5.90)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r63.listing.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r63.listing.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r63.listing.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
} }
function ListingDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ListingDetailsComponent {
    constructor(_route, marketplaceService) {
        this._route = _route;
        this.marketplaceService = marketplaceService;
        this.isLoading = true;
        this._route.params.subscribe(params => {
            this.marketplaceService.getListing(params.id).subscribe(payload => {
                this.listing = payload.payload.val();
                this.isLoading = false;
            });
        });
    }
    ngOnInit() {
    }
}
ListingDetailsComponent.ɵfac = function ListingDetailsComponent_Factory(t) { return new (t || ListingDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_marketplace_service_service__WEBPACK_IMPORTED_MODULE_2__["MarketplaceService"])); };
ListingDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListingDetailsComponent, selectors: [["app-listing-details"]], decls: 2, vars: 2, consts: [["class", "white px-4 section-header", 4, "ngIf"], ["class", "d-flex justify-content-center align-items-center", "style", "margin-top: 200px", 4, "ngIf"], [1, "white", "px-4", "section-header"], [1, "row", "mb-3"], [1, "col-md-12"], ["alt", "Card image cap", 1, "img-fluid", "list-detail-img", 3, "src"], [1, "pt-3"], [1, "text-left"], ["mdbBtn", "", "color", "secondary", "mdbWavesEffect", "", 3, "routerLink"], ["mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "margin-top", "200px"], ["role", "status", 1, "spinner-grow", "text-primary", 2, "width", "4rem", "height", "4rem"], [1, "sr-only"]], template: function ListingDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListingDetailsComponent_div_0_Template, 15, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListingDetailsComponent_div_1_Template, 4, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["WavesDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmtldHBsYWNlL2xpc3RpbmctZGV0YWlscy9saXN0aW5nLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListingDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listing-details',
                templateUrl: './listing-details.component.html',
                styleUrls: ['./listing-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _marketplace_service_service__WEBPACK_IMPORTED_MODULE_2__["MarketplaceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/marketplace/listing-overview-card/listing-overview-card.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/marketplace/listing-overview-card/listing-overview-card.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListingOverviewCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingOverviewCardComponent", function() { return ListingOverviewCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ListingOverviewCardComponent_mdb_card_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mdb-card-img", 3);
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r69.listing.photoUrl);
} }
const _c0 = function (a0) { return [a0]; };
class ListingOverviewCardComponent {
    constructor() {
    }
    ngOnInit() {
        this.price = this.getPrice();
    }
    log(text) {
        console.log(text);
    }
    // will this be an async call?
    getListingUser() {
        return Math.floor((Math.random() * 1000) + 1) > 50 ? 'Sedky' : 'Rami';
    }
    // will this be an async call?
    getPrice() {
        return '' + Math.floor((Math.random() * 1000) + 1) + '.' + Math.floor((Math.random() * 100));
    }
    onViewClick() {
        console.log();
    }
}
ListingOverviewCardComponent.ɵfac = function ListingOverviewCardComponent_Factory(t) { return new (t || ListingOverviewCardComponent)(); };
ListingOverviewCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListingOverviewCardComponent, selectors: [["app-listing-overview-card"]], inputs: { listing: "listing" }, decls: 14, vars: 10, consts: [[3, "routerLink"], ["alt", "Card image cap", "class", "waves-light", "mdbWavesEffect", "", 3, "src", 4, "ngIf"], [1, "text-right"], ["alt", "Card image cap", "mdbWavesEffect", "", 1, "waves-light", 3, "src"]], template: function ListingOverviewCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListingOverviewCardComponent_mdb_card_img_2_Template, 1, 1, "mdb-card-img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mdb-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mdb-card-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "/listing/" + ctx.listing.key));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listing.photoUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, "/listing/" + ctx.listing.key));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.listing.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.listing.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx.price, "");
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardTitleComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardTextComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardImageComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["WavesDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmtldHBsYWNlL2xpc3Rpbmctb3ZlcnZpZXctY2FyZC9saXN0aW5nLW92ZXJ2aWV3LWNhcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListingOverviewCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-listing-overview-card',
                templateUrl: './listing-overview-card.component.html',
                styleUrls: ['./listing-overview-card.component.css']
            }]
    }], function () { return []; }, { listing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/marketplace/marketplace-listing/marketplace-listing.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/marketplace/marketplace-listing/marketplace-listing.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MarketplaceListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceListingComponent", function() { return MarketplaceListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _listing_overview_card_listing_overview_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listing-overview-card/listing-overview-card.component */ "./src/app/marketplace/listing-overview-card/listing-overview-card.component.ts");




function MarketplaceListingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-listing-overview-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listing_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listing", listing_r68);
} }
class MarketplaceListingComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MarketplaceListingComponent.ɵfac = function MarketplaceListingComponent_Factory(t) { return new (t || MarketplaceListingComponent)(); };
MarketplaceListingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarketplaceListingComponent, selectors: [["app-marketplace-listing"]], inputs: { listings: "listings" }, decls: 2, vars: 1, consts: [[1, "marketplace-list", "d-flex", "flex-wrap", "fadeIn", "animated"], ["class", "listing", 4, "ngFor", "ngForOf"], [1, "listing"], [3, "listing"]], template: function MarketplaceListingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MarketplaceListingComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listings);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _listing_overview_card_listing_overview_card_component__WEBPACK_IMPORTED_MODULE_2__["ListingOverviewCardComponent"]], styles: [".marketplace-list[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    justify-content: center;\n}\n\n.listing[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 1rem;\n}\n\n@media (min-width: 768px) {\n    .listing[_ngcontent-%COMP%] {\n        width: calc(50% - 2rem);\n    }\n\n    .marketplace-list[_ngcontent-%COMP%] {\n        justify-content: normal;\n    }\n}\n\n@media (min-width: 992px) {\n    .listing[_ngcontent-%COMP%] {\n        width: calc(33.3333% - 2rem);\n    }\n}\n\n@media (min-width: 1200px) {\n    .listing[_ngcontent-%COMP%] {\n        width: calc(25% - 3rem);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya2V0cGxhY2UvbWFya2V0cGxhY2UtbGlzdGluZy9tYXJrZXRwbGFjZS1saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSw0QkFBNEI7SUFDaEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tYXJrZXRwbGFjZS9tYXJrZXRwbGFjZS1saXN0aW5nL21hcmtldHBsYWNlLWxpc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJrZXRwbGFjZS1saXN0IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubGlzdGluZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDFyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5saXN0aW5nIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMnJlbSk7XG4gICAgfVxuXG4gICAgLm1hcmtldHBsYWNlLWxpc3Qge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5saXN0aW5nIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMzMuMzMzMyUgLSAycmVtKTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAubGlzdGluZyB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDNyZW0pO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarketplaceListingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-marketplace-listing',
                templateUrl: './marketplace-listing.component.html',
                styleUrls: ['./marketplace-listing.component.css']
            }]
    }], function () { return []; }, { listings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/marketplace/marketplace-routing.ts":
/*!****************************************************!*\
  !*** ./src/app/marketplace/marketplace-routing.ts ***!
  \****************************************************/
/*! exports provided: MarketplaceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceRoutingModule", function() { return MarketplaceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _marketplace_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marketplace.component */ "./src/app/marketplace/marketplace.component.ts");
/* harmony import */ var _listing_details_listing_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing-details/listing-details.component */ "./src/app/marketplace/listing-details/listing-details.component.ts");






const routes = [
    { path: '', component: _marketplace_component__WEBPACK_IMPORTED_MODULE_2__["MarketplaceComponent"] },
    { path: 'listing/:id', component: _listing_details_listing_details_component__WEBPACK_IMPORTED_MODULE_3__["ListingDetailsComponent"] }
];
class MarketplaceRoutingModule {
}
MarketplaceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MarketplaceRoutingModule });
MarketplaceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MarketplaceRoutingModule_Factory(t) { return new (t || MarketplaceRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MarketplaceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarketplaceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/marketplace/marketplace-service.service.ts":
/*!************************************************************!*\
  !*** ./src/app/marketplace/marketplace-service.service.ts ***!
  \************************************************************/
/*! exports provided: MarketplaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceService", function() { return MarketplaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class MarketplaceService {
    constructor(db) {
        this.db = db;
        this.PREFIX = 'listings';
    }
    add(listing, listingKey) {
        const listings = this.db.database.ref(`${this.PREFIX}`).child(`${listingKey}`);
        return listings.set(listing);
    }
    update(project, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.db.object(`${this.PREFIX}/${userId}/` + project.key)
            .update({
            title: project.title,
            description: project.description,
            photoUrl: project.photoUrl
        }));
    }
    delete(listing) {
        return this.db.object(`${this.PREFIX}/${listing.key}`).remove();
    }
    getListing(listingId) {
        return this.db.object(`${this.PREFIX}/${listingId}`).snapshotChanges();
    }
    // to replace with algolia
    getAllListings() {
        return this.db.list(this.PREFIX).snapshotChanges();
    }
}
MarketplaceService.ɵfac = function MarketplaceService_Factory(t) { return new (t || MarketplaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"])); };
MarketplaceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MarketplaceService, factory: MarketplaceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarketplaceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "./src/app/marketplace/marketplace.component.ts":
/*!******************************************************!*\
  !*** ./src/app/marketplace/marketplace.component.ts ***!
  \******************************************************/
/*! exports provided: MarketplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceComponent", function() { return MarketplaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_marketplace_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/marketplace.actions */ "./src/app/marketplace/store/marketplace.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_marketplace_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/marketplace.selectors */ "./src/app/marketplace/store/marketplace.selectors.ts");
/* harmony import */ var _marketplace_listing_marketplace_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marketplace-listing/marketplace-listing.component */ "./src/app/marketplace/marketplace-listing/marketplace-listing.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function MarketplaceComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MarketplaceComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.isLoading$ = this.store.select(_store_marketplace_selectors__WEBPACK_IMPORTED_MODULE_4__["getAllLoaded"]);
        this.projects$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_marketplace_selectors__WEBPACK_IMPORTED_MODULE_4__["getProjects"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((projects) => {
            if (!projects) {
                this.store.dispatch(new _store_marketplace_actions__WEBPACK_IMPORTED_MODULE_1__["MarketplaceQueryAll"]());
            }
            return projects;
        }));
    }
}
MarketplaceComponent.ɵfac = function MarketplaceComponent_Factory(t) { return new (t || MarketplaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
MarketplaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarketplaceComponent, selectors: [["app-marketplace"]], decls: 11, vars: 6, consts: [[1, "white", "px-4", "section-header"], [1, "pt-3"], [1, "container-fluid", "pb-5"], [1, "py-5"], [3, "listings"], ["class", "d-flex justify-content-center align-items-center", "style", "margin-top: 200px", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "margin-top", "200px"], ["role", "status", 1, "spinner-grow", "text-primary", 2, "width", "4rem", "height", "4rem"], [1, "sr-only"]], template: function MarketplaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Marketplace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hire a professional today! Find The Perfect Freelance Services For Your Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-marketplace-listing", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MarketplaceComponent_div_9_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listings", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.projects$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.isLoading$));
    } }, directives: [_marketplace_listing_marketplace_listing_component__WEBPACK_IMPORTED_MODULE_5__["MarketplaceListingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmtldHBsYWNlL21hcmtldHBsYWNlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarketplaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-marketplace',
                templateUrl: './marketplace.component.html',
                styleUrls: ['./marketplace.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/marketplace/marketplace.module.ts":
/*!***************************************************!*\
  !*** ./src/app/marketplace/marketplace.module.ts ***!
  \***************************************************/
/*! exports provided: MarketplaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceModule", function() { return MarketplaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _marketplace_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marketplace.component */ "./src/app/marketplace/marketplace.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _store_marketplace_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/marketplace.reducer */ "./src/app/marketplace/store/marketplace.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _store_marketplace_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/marketplace.effects */ "./src/app/marketplace/store/marketplace.effects.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _marketplace_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./marketplace-routing */ "./src/app/marketplace/marketplace-routing.ts");
/* harmony import */ var _marketplace_listing_marketplace_listing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./marketplace-listing/marketplace-listing.component */ "./src/app/marketplace/marketplace-listing/marketplace-listing.component.ts");
/* harmony import */ var _listing_overview_card_listing_overview_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./listing-overview-card/listing-overview-card.component */ "./src/app/marketplace/listing-overview-card/listing-overview-card.component.ts");
/* harmony import */ var _listing_details_listing_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./listing-details/listing-details.component */ "./src/app/marketplace/listing-details/listing-details.component.ts");


















class MarketplaceModule {
}
MarketplaceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MarketplaceModule });
MarketplaceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MarketplaceModule_Factory(t) { return new (t || MarketplaceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _marketplace_routing__WEBPACK_IMPORTED_MODULE_11__["MarketplaceRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["InputsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["IconsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["CardsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('marketplace', _store_marketplace_reducer__WEBPACK_IMPORTED_MODULE_6__["marketplaceReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_marketplace_effects__WEBPACK_IMPORTED_MODULE_8__["MarketplaceEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MarketplaceModule, { declarations: [_marketplace_component__WEBPACK_IMPORTED_MODULE_2__["MarketplaceComponent"], _marketplace_listing_marketplace_listing_component__WEBPACK_IMPORTED_MODULE_12__["MarketplaceListingComponent"], _listing_overview_card_listing_overview_card_component__WEBPACK_IMPORTED_MODULE_13__["ListingOverviewCardComponent"], _listing_details_listing_details_component__WEBPACK_IMPORTED_MODULE_14__["ListingDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _marketplace_routing__WEBPACK_IMPORTED_MODULE_11__["MarketplaceRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["InputsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["IconsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["CardsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsFeatureModule"]], exports: [_marketplace_component__WEBPACK_IMPORTED_MODULE_2__["MarketplaceComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarketplaceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _marketplace_routing__WEBPACK_IMPORTED_MODULE_11__["MarketplaceRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["InputsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["IconsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["CardsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('marketplace', _store_marketplace_reducer__WEBPACK_IMPORTED_MODULE_6__["marketplaceReducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_marketplace_effects__WEBPACK_IMPORTED_MODULE_8__["MarketplaceEffects"]])
                ],
                declarations: [_marketplace_component__WEBPACK_IMPORTED_MODULE_2__["MarketplaceComponent"], _marketplace_listing_marketplace_listing_component__WEBPACK_IMPORTED_MODULE_12__["MarketplaceListingComponent"], _listing_overview_card_listing_overview_card_component__WEBPACK_IMPORTED_MODULE_13__["ListingOverviewCardComponent"], _listing_details_listing_details_component__WEBPACK_IMPORTED_MODULE_14__["ListingDetailsComponent"]],
                exports: [_marketplace_component__WEBPACK_IMPORTED_MODULE_2__["MarketplaceComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/marketplace/store/marketplace.effects.ts":
/*!**********************************************************!*\
  !*** ./src/app/marketplace/store/marketplace.effects.ts ***!
  \**********************************************************/
/*! exports provided: MarketplaceEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceEffects", function() { return MarketplaceEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _marketplace_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marketplace.actions */ "./src/app/marketplace/store/marketplace.actions.ts");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var _marketplace_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../marketplace-service.service */ "./src/app/marketplace/marketplace-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













class MarketplaceEffects {
    constructor(actions$, marketplaceService, store) {
        this.actions$ = actions$;
        this.marketplaceService = marketplaceService;
        this.store = store;
        this.marketplaceQuery$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_marketplace_actions__WEBPACK_IMPORTED_MODULE_5__["MarketplaceActionTypes"].MARKETPLACE_QUERY_ALL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_6__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([]) => {
            return this.marketplaceService.getAllListings()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
                const projectsData = [];
                data.map((res) => {
                    const projectKey = res.payload.key;
                    const project = res.payload.val();
                    projectsData.push({
                        key: projectKey || null,
                        title: project.title || undefined,
                        description: project.description || undefined,
                        photoUrl: project.photoUrl || undefined
                    });
                });
                return (new _marketplace_actions__WEBPACK_IMPORTED_MODULE_5__["MarketplaceLoaded"]({ projects: projectsData }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _marketplace_actions__WEBPACK_IMPORTED_MODULE_5__["MarketplaceError"]({ error }))));
        }));
    }
}
MarketplaceEffects.ɵfac = function MarketplaceEffects_Factory(t) { return new (t || MarketplaceEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_marketplace_service_service__WEBPACK_IMPORTED_MODULE_7__["MarketplaceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
MarketplaceEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MarketplaceEffects, factory: MarketplaceEffects.ɵfac });
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", Object)
], MarketplaceEffects.prototype, "marketplaceQuery$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarketplaceEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _marketplace_service_service__WEBPACK_IMPORTED_MODULE_7__["MarketplaceService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { marketplaceQuery$: [] }); })();


/***/ }),

/***/ "./src/app/marketplace/store/marketplace.selectors.ts":
/*!************************************************************!*\
  !*** ./src/app/marketplace/store/marketplace.selectors.ts ***!
  \************************************************************/
/*! exports provided: getProjectsState, getProjects, getAllLoaded, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectsState", function() { return getProjectsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjects", function() { return getProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLoaded", function() { return getAllLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const getProjectsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('marketplace');
const getProjects = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProjectsState, marketplace => marketplace.projects);
const getAllLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProjectsState, marketplace => marketplace.loading);
const getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProjectsState, marketplace => marketplace.error);


/***/ })

}]);
//# sourceMappingURL=marketplace-marketplace-module-es2015.js.map