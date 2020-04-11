(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/admin/admin.component */ "./src/app/admin/containers/admin/admin.component.ts");
/* harmony import */ var _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users-list/users-list.component */ "./src/app/admin/components/users-list/users-list.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/admin/components/user/user.component.ts");
/* harmony import */ var _store_admin_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/admin.reducer */ "./src/app/admin/store/admin.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _store_admin_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/admin.effects */ "./src/app/admin/store/admin.effects.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user-detail/user-detail.component */ "./src/app/admin/components/user-detail/user-detail.component.ts");
















class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["CollapseModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["CardsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["BadgeModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["IconsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('admin', _store_admin_reducer__WEBPACK_IMPORTED_MODULE_6__["adminReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_store_admin_effects__WEBPACK_IMPORTED_MODULE_9__["AdminEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__["UsersListComponent"], _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"], _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["CollapseModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["CardsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["BadgeModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["IconsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__["UsersListComponent"], _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"], _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["CollapseModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["CardsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["BadgeModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["IconsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('admin', _store_admin_reducer__WEBPACK_IMPORTED_MODULE_6__["adminReducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_store_admin_effects__WEBPACK_IMPORTED_MODULE_9__["AdminEffects"]])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin/components/user-detail/user-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/user-detail/user-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _shared_components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/projects-list/projects-list.component */ "./src/app/shared/components/projects-list/projects-list.component.ts");





function UserDetailComponent_mdb_card_0_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r94.user.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserDetailComponent_mdb_card_0_mdb_badge_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-badge", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_mdb_card_0_mdb_badge_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-badge", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_mdb_card_0_mdb_badge_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-badge", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_mdb_card_0_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_mdb_card_0_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r102.onAddAdmin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add admin privileges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_mdb_card_0_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_mdb_card_0_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r104.onRemoveAdmin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove admin privileges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_mdb_card_0_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserDetailComponent_mdb_card_0_app_projects_list_29_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-projects-list", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("projectDeleted", function UserDetailComponent_mdb_card_0_app_projects_list_29_Template_app_projects_list_projectDeleted_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r106.onProjectDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editable", false)("projects", ctx_r101.projects);
} }
function UserDetailComponent_mdb_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_mdb_card_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r108.closeDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mdb-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Back to user list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserDetailComponent_mdb_card_0_img_9_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserDetailComponent_mdb_card_0_mdb_badge_15_Template, 2, 0, "mdb-badge", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserDetailComponent_mdb_card_0_mdb_badge_16_Template, 2, 0, "mdb-badge", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserDetailComponent_mdb_card_0_mdb_badge_18_Template, 2, 0, "mdb-badge", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UserDetailComponent_mdb_card_0_button_20_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UserDetailComponent_mdb_card_0_button_21_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserDetailComponent_mdb_card_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.loadProjects(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Load user projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserDetailComponent_mdb_card_0_div_28_Template, 4, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UserDetailComponent_mdb_card_0_app_projects_list_29_Template, 1, 2, "app-projects-list", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.user.photoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r93.user.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r93.user.isOnline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.user.isOnline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.user.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r93.user.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.user.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.userProjectsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r93.userProjectsLoading && ctx_r93.projects);
} }
class UserDetailComponent {
    constructor() {
        this.detailsClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectsLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    closeDetails() {
        this.detailsClosed.emit();
    }
    loadProjects() {
        this.projectsLoad.emit();
    }
    onProjectDelete(project) {
        this.projectDeleted.emit(project);
    }
    onAddAdmin() {
        this.addAdmin.emit(this.user);
    }
    onRemoveAdmin() {
        this.removeAdmin.emit(this.user);
    }
}
UserDetailComponent.ɵfac = function UserDetailComponent_Factory(t) { return new (t || UserDetailComponent)(); };
UserDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDetailComponent, selectors: [["app-user-detail"]], inputs: { user: "user", projects: "projects", userProjectsLoading: "userProjectsLoading" }, outputs: { detailsClosed: "detailsClosed", projectsLoad: "projectsLoad", projectDeleted: "projectDeleted", addAdmin: "addAdmin", removeAdmin: "removeAdmin" }, decls: 1, vars: 1, consts: [["class", "mb-4", 4, "ngIf"], [1, "mb-4"], [1, "py-4"], [1, "mb-5", "back-button", 3, "click"], ["fas", "", "icon", "arrow-left", 1, "mr-2"], [1, "d-flex", "flex-row", "justify-content-between", "flex-wrap"], [1, "d-flex", "flex-row"], [1, "mr-4"], ["height", "90", "width", "90", "class", "rounded-circle z-depth-0", "alt", "avatar image", 3, "src", 4, "ngIf"], [1, "pt-2"], [1, "mr-2"], ["color", "red", 4, "ngIf"], ["color", "green", 4, "ngIf"], ["color", "purple", 4, "ngIf"], [1, "mt-3"], ["mdbBtn", "", "outline", "true", "color", "red", 3, "click", 4, "ngIf"], [1, "my-5"], [1, "d-flex", "flex-row", "align-items-center"], [1, "mr-3"], ["mdbBtn", "", "color", "primary", "size", "sm", 3, "click"], ["class", "d-flex justify-content-center align-items-center", "style", "margin-top: 50px", 4, "ngIf"], [3, "editable", "projects", "projectDeleted", 4, "ngIf"], ["height", "90", "width", "90", "alt", "avatar image", 1, "rounded-circle", "z-depth-0", 3, "src"], ["color", "red"], ["color", "green"], ["color", "purple"], ["mdbBtn", "", "outline", "true", "color", "red", 3, "click"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "margin-top", "50px"], ["role", "status", 1, "spinner-grow", "text-primary", 2, "width", "4rem", "height", "4rem"], [1, "sr-only"], [3, "editable", "projects", "projectDeleted"]], template: function UserDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserDetailComponent_mdb_card_0_Template, 31, 9, "mdb-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["FasDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBadgeComponent"], _shared_components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsListComponent"]], styles: [".back-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 1.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWRreWFib3Utc2hhbWFsYWgvY29kZS9jbG91ZGl4aWEvc3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn0iLCIuYmFjay1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-detail',
                templateUrl: './user-detail.component.html',
                styleUrls: ['./user-detail.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], projects: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userProjectsLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], detailsClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], projectsLoad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], projectDeleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], addAdmin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeAdmin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/admin/components/user/user.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/components/user/user.component.ts ***!
  \*********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");




function UserComponent_mdb_card_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-badge", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_mdb_card_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-badge", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_mdb_card_0_mdb_badge_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-badge", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_mdb_card_0_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r84.user.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserComponent_mdb_card_0_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_mdb_card_0_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r87.removeAdminPrivileges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove admin privileges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_mdb_card_0_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_mdb_card_0_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r89.addAdminPrivileges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add admin privileges");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_mdb_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-card-body", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserComponent_mdb_card_0_span_3_Template, 3, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserComponent_mdb_card_0_span_4_Template, 3, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserComponent_mdb_card_0_mdb_badge_6_Template, 2, 0, "mdb-badge", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mdb-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserComponent_mdb_card_0_img_9_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserComponent_mdb_card_0_button_13_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserComponent_mdb_card_0_button_14_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_mdb_card_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.selectUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Manage content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r80.user.isOnline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r80.user.isOnline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r80.user.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r80.user.photoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r80.user.displayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r80.user.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r80.user.isAdmin);
} }
class UserComponent {
    constructor() {
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    selectUser() {
        this.userSelected.emit(this.user);
    }
    addAdminPrivileges() {
        this.addAdmin.emit(this.user);
    }
    removeAdminPrivileges() {
        this.removeAdmin.emit(this.user);
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], inputs: { user: "user" }, outputs: { userSelected: "userSelected", addAdmin: "addAdmin", removeAdmin: "removeAdmin" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "text-center", "py-4"], ["class", "mr-2 float-left", 4, "ngIf"], [1, "float-left"], ["color", "purple", 4, "ngIf"], ["fas", "", "icon", "ellipsis-v", 1, "float-right", "grey-text"], [1, "mt-5"], ["height", "90", "width", "90", "class", "rounded-circle z-depth-0", "alt", "avatar image", 3, "src", 4, "ngIf"], [1, "mt-3"], [1, "d-flex", "flex-column"], ["class", "mt-3", "mdbBtn", "", "color", "danger", "size", "sm", 3, "click", 4, "ngIf"], ["mdbBtn", "", "color", "primary", "size", "sm", 1, "mt-2", 3, "click"], [1, "mr-2", "float-left"], ["color", "red"], ["color", "green"], ["color", "purple"], ["height", "90", "width", "90", "alt", "avatar image", 1, "rounded-circle", "z-depth-0", 3, "src"], ["mdbBtn", "", "color", "danger", "size", "sm", 1, "mt-3", 3, "click"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserComponent_mdb_card_0_Template, 17, 7, "mdb-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["FasDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBadgeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], addAdmin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeAdmin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/admin/components/users-list/users-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/users-list/users-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.component */ "./src/app/admin/components/user/user.component.ts");




function UsersListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-user", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("userSelected", function UsersListComponent_div_1_Template_app_user_userSelected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.onUserSelected($event); })("addAdmin", function UsersListComponent_div_1_Template_app_user_addAdmin_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r78.onAddAdmin($event); })("removeAdmin", function UsersListComponent_div_1_Template_app_user_removeAdmin_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.onRemoveAdmin($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", user_r75);
} }
class UsersListComponent {
    constructor() {
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onUserSelected(user) {
        this.userSelected.emit(user);
    }
    onAddAdmin(user) {
        this.addAdmin.emit(user);
    }
    onRemoveAdmin(user) {
        this.removeAdmin.emit(user);
    }
    trackByFn(index) {
        return index;
    }
}
UsersListComponent.ɵfac = function UsersListComponent_Factory(t) { return new (t || UsersListComponent)(); };
UsersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersListComponent, selectors: [["app-users-list"]], inputs: { users: "users" }, outputs: { userSelected: "userSelected", addAdmin: "addAdmin", removeAdmin: "removeAdmin" }, decls: 2, vars: 2, consts: [[1, "users-list", "d-flex", "flex-wrap"], ["class", "user", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "user"], [3, "user", "userSelected", "addAdmin", "removeAdmin"]], template: function UsersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersListComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users)("ngForTrackBy", ctx.trackByFn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]], styles: [".users-list[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  justify-content: center;\n}\n\n.user[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 1rem;\n}\n\n@media (min-width: 768px) {\n  .user[_ngcontent-%COMP%] {\n    width: calc(50% - 2rem);\n  }\n\n  .users-list[_ngcontent-%COMP%] {\n    justify-content: normal;\n  }\n}\n\n@media (min-width: 992px) {\n  .user[_ngcontent-%COMP%] {\n    width: calc(33.3333% - 2rem);\n  }\n}\n\n@media (min-width: 1200px) {\n  .user[_ngcontent-%COMP%] {\n    width: calc(25% - 3rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWRreWFib3Utc2hhbWFsYWgvY29kZS9jbG91ZGl4aWEvc3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy91c2Vycy1saXN0L3VzZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDSSx1QkFBQTtFQ0NKOztFREVBO0lBQ0ksdUJBQUE7RUNDSjtBQUNGOztBREVBO0VBQ0U7SUFDSSw0QkFBQTtFQ0FKO0FBQ0Y7O0FER0E7RUFDRTtJQUNJLHVCQUFBO0VDREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJzLWxpc3Qge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnVzZXIge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDFyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAudXNlciB7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAycmVtKTtcbiAgfVxuXG4gIC51c2Vycy1saXN0IHtcbiAgICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAudXNlciB7XG4gICAgICB3aWR0aDogY2FsYygzMy4zMzMzJSAtIDJyZW0pO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnVzZXIge1xuICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gM3JlbSk7XG4gIH1cbn0iLCIudXNlcnMtbGlzdCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udXNlciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC51c2VyIHtcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAycmVtKTtcbiAgfVxuXG4gIC51c2Vycy1saXN0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC51c2VyIHtcbiAgICB3aWR0aDogY2FsYygzMy4zMzMzJSAtIDJyZW0pO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC51c2VyIHtcbiAgICB3aWR0aDogY2FsYygyNSUgLSAzcmVtKTtcbiAgfVxufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users-list',
                templateUrl: './users-list.component.html',
                styleUrls: ['./users-list.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { users: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], userSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], addAdmin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeAdmin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/admin/containers/admin/admin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/containers/admin/admin.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/admin.actions */ "./src/app/admin/store/admin.actions.ts");
/* harmony import */ var _store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/admin.selectors */ "./src/app/admin/store/admin.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/users-list/users-list.component */ "./src/app/admin/components/users-list/users-list.component.ts");
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/user-detail/user-detail.component */ "./src/app/admin/components/user-detail/user-detail.component.ts");













function AdminComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminComponent_div_7_app_users_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-users-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("userSelected", function AdminComponent_div_7_app_users_list_1_Template_app_users_list_userSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.onUserSelect($event); })("addAdmin", function AdminComponent_div_7_app_users_list_1_Template_app_users_list_addAdmin_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.addAdminPrivileges($event); })("removeAdmin", function AdminComponent_div_7_app_users_list_1_Template_app_users_list_removeAdmin_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.removeAdminPrivileges($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("users", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r36.users$));
} }
function AdminComponent_div_7_app_user_detail_2_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-user-detail", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("detailsClosed", function AdminComponent_div_7_app_user_detail_2_Template_app_user_detail_detailsClosed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.onDetailsClose(); })("projectsLoad", function AdminComponent_div_7_app_user_detail_2_Template_app_user_detail_projectsLoad_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.onProjectsLoad(); })("projectDeleted", function AdminComponent_div_7_app_user_detail_2_Template_app_user_detail_projectDeleted_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.onProjectDelete($event); })("addAdmin", function AdminComponent_div_7_app_user_detail_2_Template_app_user_detail_addAdmin_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.addAdminPrivileges($event); })("removeAdmin", function AdminComponent_div_7_app_user_detail_2_Template_app_user_detail_removeAdmin_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.removeAdminPrivileges($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r37.selectedUser$))("projects", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r37.userProjects$))("userProjectsLoading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx_r37.userProjectsLoading$));
} }
function AdminComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_div_7_app_users_list_1_Template, 2, 3, "app-users-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_div_7_app_user_detail_2_Template, 4, 9, "app-user-detail", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r35.selectedUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.selectedUser);
} }
class AdminComponent {
    constructor(store, modalService) {
        this.store = store;
        this.modalService = modalService;
        this.modalConfig = {
            class: 'modal-dialog-centered'
        };
    }
    ngOnInit() {
        this.users$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getUsersList"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((users) => {
            if (!users || (users && users.length === 0)) {
                this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["GetUsersList"]());
            }
            return users;
        }));
        this.usersListLoading$ = this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getUsersListLoading"]);
        this.userProjectsLoading$ = this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getUserProjectsLoading"]);
    }
    onUserSelect(user) {
        this.uid = user.uid;
        this.selectedUser = user;
        this.selectedUser$ = this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getSelectedUser"], user.uid);
        this.userProjects$ = this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getUserProjects"], user.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(projects => {
            if (projects && projects.length !== 0) {
                return projects;
            }
            else {
                return null;
            }
        }));
    }
    onProjectsLoad() {
        this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["GetUserProjects"]({ uid: this.uid }));
    }
    onDetailsClose() {
        this.selectedUser = null;
    }
    openProjectConfirmModal(project) {
        this.modalRef = this.modalService.show(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], this.modalConfig);
        this.modalRef.content.confirmation
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe((confirmation) => {
            if (confirmation) {
                this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUserProject"]({
                    userId: this.selectedUser.key,
                    projectId: project.key
                }));
            }
        });
    }
    onProjectDelete(project) {
        this.openProjectConfirmModal(project);
    }
    addAdminPrivileges(user) {
        this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AddAdminPrivileges"]({ userId: user.key }));
    }
    removeAdminPrivileges(user) {
        this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveAdminPrivileges"]({ userId: user.key }));
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBModalService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 9, vars: 6, consts: [[1, "white", "px-4", "section-header"], [1, "grey-text", "pt-3"], ["class", "d-flex justify-content-center align-items-center", "style", "margin-top: 300px", 4, "ngIf"], ["class", "container-fluid mt-3 pb-5", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "margin-top", "300px"], ["role", "status", 1, "spinner-grow", "text-primary", 2, "width", "4rem", "height", "4rem"], [1, "sr-only"], [1, "container-fluid", "mt-3", "pb-5"], [3, "users", "userSelected", "addAdmin", "removeAdmin", 4, "ngIf"], [3, "user", "projects", "userProjectsLoading", "detailsClosed", "projectsLoad", "projectDeleted", "addAdmin", "removeAdmin", 4, "ngIf"], [3, "users", "userSelected", "addAdmin", "removeAdmin"], [3, "user", "projects", "userProjectsLoading", "detailsClosed", "projectsLoad", "projectDeleted", "addAdmin", "removeAdmin"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Change settings for every user in your application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminComponent_div_5_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminComponent_div_7_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.usersListLoading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.usersListLoading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_8__["UsersListComponent"], _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_9__["UserDetailComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbnRhaW5lcnMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/guard/admin.guard.ts":
/*!********************************************!*\
  !*** ./src/app/admin/guard/admin.guard.ts ***!
  \********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/admin/services/admin.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










class AdminGuard {
    constructor(router, adminService, afAuth) {
        this.router = router;
        this.adminService = adminService;
        this.afAuth = afAuth;
    }
    canActivate() {
        return this.afAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((user) => {
            if (!user) {
                this.router.navigateByUrl('/login');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
            }
            return this.adminService.checkAdminRole(user.uid)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((isAdmin) => {
                if (isAdmin) {
                    return true;
                }
                else {
                    this.router.navigateByUrl('');
                    return false;
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => {
                this.router.navigateByUrl('');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
            }));
        }));
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/services/admin.service.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/services/admin.service.ts ***!
  \*************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class AdminService {
    constructor(db) {
        this.db = db;
        this.selectedUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.selectedUser$ = this.selectedUser.asObservable();
    }
    getUsersList() {
        const usersRef = this.db.list('users');
        return usersRef.snapshotChanges();
    }
    getUserProjects(uid) {
        const projectsRef = this.db.list('projects/' + uid);
        return projectsRef.snapshotChanges();
    }
    checkAdminRole(uid) {
        return this.db.object('admins/' + uid).valueChanges();
    }
    deleteUserProject(uid, projectId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.db.object(`projects/${uid}/` + projectId).remove());
    }
    addAdminPrivileges(uid) {
        const adminsRef = this.db.object('admins/' + uid);
        this.db.object('users/' + uid).update({ isAdmin: true });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(adminsRef.set(true));
    }
    removeAdminPrivileges(uid) {
        this.db.object('users/' + uid).update({ isAdmin: false });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.db.object('admins/' + uid).remove());
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/store/admin.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/store/admin.actions.ts ***!
  \**********************************************/
/*! exports provided: AdminActionTypes, GetUsersList, UsersListFetched, GetUserProjects, DeleteUserProject, UserProjectsLoaded, AddAdminPrivileges, RemoveAdminPrivileges, AdminError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminActionTypes", function() { return AdminActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsersList", function() { return GetUsersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListFetched", function() { return UsersListFetched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserProjects", function() { return GetUserProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserProject", function() { return DeleteUserProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProjectsLoaded", function() { return UserProjectsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminPrivileges", function() { return AddAdminPrivileges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveAdminPrivileges", function() { return RemoveAdminPrivileges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminError", function() { return AdminError; });
var AdminActionTypes;
(function (AdminActionTypes) {
    AdminActionTypes["GET_USERS_LIST"] = "[Admin] Get Users List";
    AdminActionTypes["USERS_LIST_FETCHED"] = "[Admin] Users list fetched";
    AdminActionTypes["GET_USER_PROJECTS"] = "[Admin] Get user projects";
    AdminActionTypes["USERS_PROJECTS_LOADED"] = "[Admin] User projects loaded";
    AdminActionTypes["DELETE_USER_PROJECT"] = "[Admin] Delete user project";
    AdminActionTypes["ADD_ADMIN_PRIVILEGES"] = "[Admin] Add admin privileges";
    AdminActionTypes["REMOVE_ADMIN_PRIVILEGES"] = "[Admin] Remove admin privileges";
    AdminActionTypes["ADMIN_ERROR"] = "[Admin] Error";
})(AdminActionTypes || (AdminActionTypes = {}));
class GetUsersList {
    constructor() {
        this.type = AdminActionTypes.GET_USERS_LIST;
    }
}
class UsersListFetched {
    constructor(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.USERS_LIST_FETCHED;
    }
}
class GetUserProjects {
    constructor(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.GET_USER_PROJECTS;
    }
}
class DeleteUserProject {
    constructor(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.DELETE_USER_PROJECT;
    }
}
class UserProjectsLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.USERS_PROJECTS_LOADED;
    }
}
class AddAdminPrivileges {
    constructor(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.ADD_ADMIN_PRIVILEGES;
    }
}
class RemoveAdminPrivileges {
    constructor(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.REMOVE_ADMIN_PRIVILEGES;
    }
}
class AdminError {
    constructor(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.ADMIN_ERROR;
    }
}


/***/ }),

/***/ "./src/app/admin/store/admin.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/store/admin.effects.ts ***!
  \**********************************************/
/*! exports provided: AdminEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEffects", function() { return AdminEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../store/admin.actions */ "./src/app/admin/store/admin.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/admin/services/admin.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









class AdminEffects {
    constructor(actions$, adminService) {
        this.actions$ = actions$;
        this.adminService = adminService;
        this.getUsersList$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].GET_USERS_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.adminService.getUsersList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((users) => {
            const usersList = users.map((res) => {
                const key = res.payload.key;
                const user = res.payload.val();
                return {
                    key: key,
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    providerId: user.providerId,
                    photoUrl: user.photoUrl,
                    isNewUser: user.isNewUser,
                    isAdmin: user.isAdmin,
                    isOnline: user.isOnline
                };
            });
            return (new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["UsersListFetched"]({ usersList }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error }))))));
        this.getUserProjects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].GET_USER_PROJECTS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((payload) => this.adminService.getUserProjects(payload.uid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            const projectsData = data.map((res) => {
                const key = res.payload.key;
                const project = res.payload.val();
                return {
                    key: key || null,
                    title: project.title || null,
                    description: project.description || null,
                    photoUrl: project.photoUrl || null
                };
            });
            return (new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["UserProjectsLoaded"]({ uid: payload.uid, userProjects: projectsData }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error }))))));
        this.deleteUserProject$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].DELETE_USER_PROJECT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((payload) => this.adminService.deleteUserProject(payload.userId, payload.projectId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error }))))));
        this.addAdminPrivileges$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].ADD_ADMIN_PRIVILEGES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((payload) => this.adminService.addAdminPrivileges(payload.userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error }))))));
        this.removeAdminPrivileges$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].REMOVE_ADMIN_PRIVILEGES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((payload) => this.adminService.removeAdminPrivileges(payload.userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error }))))));
    }
}
AdminEffects.ɵfac = function AdminEffects_Factory(t) { return new (t || AdminEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"])); };
AdminEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminEffects, factory: AdminEffects.ɵfac });
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "getUsersList$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", Object)
], AdminEffects.prototype, "getUserProjects$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], AdminEffects.prototype, "deleteUserProject$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], AdminEffects.prototype, "addAdminPrivileges$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], AdminEffects.prototype, "removeAdminPrivileges$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }]; }, { getUsersList$: [], getUserProjects$: [], deleteUserProject$: [], addAdminPrivileges$: [], removeAdminPrivileges$: [] }); })();


/***/ }),

/***/ "./src/app/admin/store/admin.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/store/admin.reducer.ts ***!
  \**********************************************/
/*! exports provided: adminReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminReducer", function() { return adminReducer; });
/* harmony import */ var _admin_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.state */ "./src/app/admin/store/admin.state.ts");
/* harmony import */ var _admin_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.actions */ "./src/app/admin/store/admin.actions.ts");


function adminReducer(state = _admin_state__WEBPACK_IMPORTED_MODULE_0__["adminInitialState"], action) {
    switch (action.type) {
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].GET_USERS_LIST: {
            return Object.assign({}, state, {
                usersListLoading: true
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].USERS_LIST_FETCHED: {
            return Object.assign({}, state, {
                usersList: action.payload.usersList,
                usersListLoading: false
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].GET_USER_PROJECTS: {
            return Object.assign({}, state, {
                userProjectsLoading: true
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].USERS_PROJECTS_LOADED: {
            return Object.assign({}, state, {
                userProjects: Object.assign(Object.assign({}, state.userProjects), { [action.payload.uid]: action.payload.userProjects }),
                userProjectsLoading: false
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].ADMIN_ERROR: {
            return Object.assign({}, state, {
                error: action.payload.error
            });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/admin/store/admin.selectors.ts":
/*!************************************************!*\
  !*** ./src/app/admin/store/admin.selectors.ts ***!
  \************************************************/
/*! exports provided: getAdminState, getUsersList, getUsersListLoading, getSelectedUser, getUserProjects, getUserProjectsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminState", function() { return getAdminState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersList", function() { return getUsersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersListLoading", function() { return getUsersListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedUser", function() { return getSelectedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProjects", function() { return getUserProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProjectsLoading", function() { return getUserProjectsLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const getAdminState = (state) => state.admin;
const getUsersList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, admin => admin.usersList);
const getUsersListLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, admin => admin.usersListLoading);
const getSelectedUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUsersList, (usersList, uid) => usersList.filter((user) => user.uid === uid)[0]);
const getUserProjects = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, (admin, uid) => {
    if (admin.userProjects.hasOwnProperty(uid)) {
        return admin.userProjects[uid];
    }
    else {
        return null;
    }
});
const getUserProjectsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, admin => admin.userProjectsLoading);


/***/ }),

/***/ "./src/app/admin/store/admin.state.ts":
/*!********************************************!*\
  !*** ./src/app/admin/store/admin.state.ts ***!
  \********************************************/
/*! exports provided: adminInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminInitialState", function() { return adminInitialState; });
const adminInitialState = {
    usersList: [],
    usersListLoading: false,
    userProjects: {},
    userProjectsLoading: false,
    error: null
};


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/components/register/register.component */ "./src/app/auth/components/register/register.component.ts");
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/guards/auth.guard */ "./src/app/auth/guards/auth.guard.ts");
/* harmony import */ var _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/page-not-found/page-not-found.component */ "./src/app/core/page-not-found/page-not-found.component.ts");
/* harmony import */ var _admin_containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/containers/admin/admin.component */ "./src/app/admin/containers/admin/admin.component.ts");
/* harmony import */ var _admin_guard_admin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/guard/admin.guard */ "./src/app/admin/guard/admin.guard.ts");










const routes = [
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | marketplace-marketplace-module */ "marketplace-marketplace-module").then(__webpack_require__.bind(null, /*! ./marketplace/marketplace.module */ "./src/app/marketplace/marketplace.module.ts")).then(m => m.MarketplaceModule) },
    { path: 'projects', loadChildren: () => __webpack_require__.e(/*! import() | projects-projects-module */ "projects-projects-module").then(__webpack_require__.bind(null, /*! ./projects/projects.module */ "./src/app/projects/projects.module.ts")).then(m => m.ProjectsModule), canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'profile', loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/profile/profile.module.ts")).then(m => m.ProfileModule), canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'admin-panel', component: _admin_containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], canActivate: [_admin_guard_admin_guard__WEBPACK_IMPORTED_MODULE_7__["AdminGuard"]] },
    { path: 'register', component: _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'login', component: _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '**', component: _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










class AppComponent {
    constructor(store) {
        this.store = store;
        this.title = 'app';
    }
    ngOnInit() {
        this.user$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]);
        this.isLoggedIn$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoggedIn"]);
        this.isLoading$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoading"]);
        this.isAdmin$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsAdmin"]);
    }
    onLogout(user) {
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LogoutRequested"]({ user }));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 12, consts: [[3, "user", "isLoggedIn", "isLoading", "isAdmin", "logout"], [1, "app-footer", "footer-absolute"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("logout", function AppComponent_Template_app_header_logout_1_listener($event) { return ctx.onLogout($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.user$))("isLoggedIn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx.isLoggedIn$))("isLoading", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.isLoading$))("isAdmin", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, ctx.isAdmin$));
    } }, directives: [_core_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_18__["ModalModule"].forRoot(),
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_17__["AdminModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_7__["reducers"], {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                },
                metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_7__["metaReducers"]
            }),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument() : [],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_18__["ModalModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_17__["AdminModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_18__["ModalModule"].forRoot(),
                    _admin_admin_module__WEBPACK_IMPORTED_MODULE_17__["AdminModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_7__["reducers"], {
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictActionImmutability: true
                        },
                        metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_7__["metaReducers"]
                    }),
                    !_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument() : [],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([])
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/auth.reducer */ "./src/app/auth/store/auth.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _store_auth_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/auth.effects */ "./src/app/auth/store/auth.effects.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/auth/components/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");















class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["InputsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["InputUtilitiesModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["ButtonsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["CardsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["WavesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["IconsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('auth', _store_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["authReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_auth_effects__WEBPACK_IMPORTED_MODULE_5__["AuthEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["InputsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["InputUtilitiesModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["ButtonsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["CardsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["WavesModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["IconsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"]], exports: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["InputsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["InputUtilitiesModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["ButtonsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["CardsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["WavesModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["IconsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('auth', _store_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["authReducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_auth_effects__WEBPACK_IMPORTED_MODULE_5__["AuthEffects"]])
                ],
                declarations: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]],
                exports: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
                providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");












function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r33 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r33, " ");
} }
function LoginComponent_mdb_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mdb_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.error$ = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["getError"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((error) => {
            if (error && (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')) {
                return 'Invalid login or password';
            }
            else {
                return null;
            }
        }));
    }
    get email() { return this.loginForm.get('email'); }
    get password() { return this.loginForm.get('password'); }
    onLogin() {
        if (this.loginForm.valid) {
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LoginRequested"](this.loginForm.value));
        }
    }
    onGoogleLogin(authProvider) {
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SocialLogin"]({ authProvider }));
    }
    onFacebookLogin(authProvider) {
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SocialLogin"]({ authProvider }));
    }
    onTwitterLogin(authProvider) {
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SocialLogin"]({ authProvider }));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 36, vars: 8, consts: [[1, "container-fluid", "full-page-container"], [1, "row", "h-100", "justify-content-center", "align-items-center"], [1, "col-lg-4", "col-sm-8", "animated", "fadeIn"], [1, "z-depth-2"], [1, "white", "text-center", "py-4"], [1, "px-lg-5", "pt-0"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "text-center", 2, "color", "#757575", 3, "formGroup"], [1, "md-form"], ["mdbValidate", "", "type", "email", "id", "email", "formControlName", "email", "mdbInput", "", 1, "form-control", 3, "validateSuccess"], ["for", "email"], [4, "ngIf"], ["mdbValidate", "", "type", "password", "id", "password", "formControlName", "password", "mdbInput", "", 1, "form-control", 3, "validateSuccess"], ["for", "password"], ["mdbBtn", "", "color", "primary", "block", "true", "mdbWavesEffect", "", "type", "submit", 1, "my-4", "waves-effect", "z-depth-0", 3, "click"], ["routerLink", "/register"], ["type", "button", 1, "mr-4", 3, "click"], ["fab", "", "icon", "facebook-f"], ["fab", "", "icon", "twitter"], ["type", "button", 3, "click"], ["fab", "", "icon", "google-plus-g"], ["role", "alert", 1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mdb-card-body", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_mdb_error_16_Template, 2, 0, "mdb-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_mdb_error_21_Template, 2, 0, "mdb-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Not a member? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "or log in with:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_30_listener() { return ctx.onFacebookLogin("facebook"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mdb-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_32_listener() { return ctx.onTwitterLogin("twitter"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mdb-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_34_listener() { return ctx.onGoogleLogin("google"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mdb-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, ctx.error$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validateSuccess", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email && ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validateSuccess", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password && ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbValidateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbInput"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["FabDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbErrorDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/components/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");












function RegisterComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r29 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r29, " ");
} }
function RegisterComponent_mdb_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_mdb_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_mdb_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
        this.error$ = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["getError"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((error) => {
            if (error) {
                if (error.code === 'auth/weak-password') {
                    return error.message;
                }
                else if (error.code === 'auth/email-already-in-use') {
                    return 'User with this email address already exist';
                }
            }
            else {
                return null;
            }
        }));
    }
    get email() { return this.registerForm.get('email'); }
    get password() { return this.registerForm.get('password'); }
    onRegister() {
        const username = this.registerForm.value.username;
        const email = this.registerForm.value.email;
        const password = this.registerForm.value.password;
        if (this.registerForm.valid) {
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["RegisterRequested"]({ username, email, password }));
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 33, vars: 9, consts: [[1, "container-fluid", "full-page-container"], [1, "row", "h-100", "justify-content-center", "align-items-center"], [1, "col-lg-4", "col-sm-8", "animated", "fadeIn"], [1, "z-depth-2"], [1, "text-center", "py-4"], [1, "px-lg-5", "pt-0"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "text-center", 2, "color", "#757575", 3, "formGroup"], [1, "md-form"], ["type", "text", "id", "username", "formControlName", "username", "mdbInput", "", 1, "form-control"], ["for", "username"], ["mdbValidate", "", "type", "email", "id", "email", "formControlName", "email", "mdbInput", "", 1, "form-control", 3, "validateSuccess"], ["for", "email"], [4, "ngIf"], ["mdbValidate", "", "type", "password", "id", "password", "formControlName", "password", "mdbInput", "", 1, "form-control", 3, "validateSuccess"], ["for", "password"], ["mdbBtn", "", "color", "primary", "block", "true", "mdbWavesEffect", "", "type", "submit", 1, "my-4", "waves-effect", "z-depth-0", 3, "click"], ["routerLink", "/login"], ["role", "alert", 1, "alert", "alert-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mdb-card-body", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegisterComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegisterComponent_mdb_error_20_Template, 2, 0, "mdb-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterComponent_mdb_error_25_Template, 2, 0, "mdb-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RegisterComponent_mdb_error_26_Template, 2, 0, "mdb-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_27_listener() { return ctx.onRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx.error$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validateSuccess", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email && ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validateSuccess", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password && ctx.password.invalid && ctx.password.errors && ctx.password.errors.required && (ctx.password.dirty || ctx.password.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password && ctx.password.invalid && ctx.password.errors && ctx.password.errors.minlength && (ctx.password.dirty || ctx.password.touched));
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbInput"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbValidateDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["WavesDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MdbErrorDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/auth/services/auth.service.ts");








class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    getUser() {
        return this.authService.getAuthState();
    }
    canActivate() {
        return this.getUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((user) => {
            if (!user) {
                this.router.navigateByUrl('/login');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => {
            this.router.navigateByUrl('/login');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");








class AuthService {
    constructor(afAuth, db) {
        this.afAuth = afAuth;
        this.db = db;
    }
    register(email, password) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
    }
    //update firebase auth
    updateProfile(displayName, photoUrl) {
        const userProfile = this.afAuth.auth.currentUser;
        if (userProfile) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(userProfile.updateProfile({ displayName: displayName, photoURL: photoUrl }));
        }
    }
    login(email, password) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.signInWithEmailAndPassword(email, password));
    }
    socialLogin(authProvider) {
        let provider;
        if (authProvider === 'google') {
            provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
        }
        if (authProvider === 'facebook') {
            provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider();
        }
        if (authProvider === 'twitter') {
            provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].TwitterAuthProvider();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.signInWithPopup(provider));
    }
    logout(uid) {
        this.updateOnlineStatus(uid, false);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.signOut());
    }
    // update user in db
    saveUser(user) {
        const users = this.db.object('users/' + user.uid);
        return users.set(user);
    }
    // get user in DB
    getDBUser(uid) {
        return this.db.object('users/' + uid).valueChanges();
    }
    updateOnlineStatus(uid, status) {
        if (status) {
            this.db.database.ref().child('users/' + uid).onDisconnect().update({ isOnline: false });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.db.object('users/' + uid).update({ isOnline: status }));
    }
    checkUserRole(uid) {
        return this.db.object('admins/' + uid).valueChanges();
    }
    getAuthState() {
        return this.afAuth.authState;
    }
    getCurrentUser() {
        return this.afAuth.auth.currentUser;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/store/auth.actions.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.actions.ts ***!
  \********************************************/
/*! exports provided: AuthActionTypes, RegisterRequested, RegisterCompleted, RegisterFailed, UpdateProfile, UpdateProfileSuccess, LoginRequested, LoginSuccess, LoginFailed, SocialLogin, LogoutRequested, LogoutCompleted, SaveUser, UpdateOnlineStatus, CheckUserRole, UpdateUserRole, GetUser, GetUserDetails, AuthError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRequested", function() { return RegisterRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCompleted", function() { return RegisterCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFailed", function() { return RegisterFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfile", function() { return UpdateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileSuccess", function() { return UpdateProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequested", function() { return LoginRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFailed", function() { return LoginFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLogin", function() { return SocialLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutRequested", function() { return LogoutRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutCompleted", function() { return LogoutCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveUser", function() { return SaveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOnlineStatus", function() { return UpdateOnlineStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckUserRole", function() { return CheckUserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserRole", function() { return UpdateUserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUser", function() { return GetUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserDetails", function() { return GetUserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthError", function() { return AuthError; });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["REGISTER_REQUESTED"] = "[Auth] REGISTER Requested";
    AuthActionTypes["REGISTER_COMPLETED"] = "[Auth] REGISTER Completed";
    AuthActionTypes["REGISTER_FAILED"] = "[Auth] REGISTER Failed";
    AuthActionTypes["UPDATE_PROFILE"] = "[Auth] Update profile";
    AuthActionTypes["UPDATE_PROFILE_SUCCESS"] = "[Auth] Update profile success";
    AuthActionTypes["LOGIN_REQUESTED"] = "[Auth] LOGIN Requested";
    AuthActionTypes["LOGIN_SUCCESS"] = "[Auth] LOGIN Success";
    AuthActionTypes["LOGIN_FAILED"] = "[Auth] LOGIN Failed";
    AuthActionTypes["SOCIAL_LOGIN"] = "[Auth] Social media login";
    AuthActionTypes["LOGOUT_REQUESTED"] = "[Auth] LOGOUT requested";
    AuthActionTypes["LOGOUT_COMPLETED"] = "[Auth] LOGOUT completed";
    AuthActionTypes["SAVE_USER"] = "[Auth] Save user";
    AuthActionTypes["UPDATE_ONLINE_STATUS"] = "[Auth] Update online status";
    AuthActionTypes["CHECK_USER_ROLE"] = "[Auth] Check user role";
    AuthActionTypes["UPDATE_USER_ROLE"] = "[Auth] Update user role";
    AuthActionTypes["GET_USER"] = "[Auth] GET User";
    AuthActionTypes["GET_USER_DETAILS"] = "[Auth] GET User Details";
    AuthActionTypes["AUTH_ERROR"] = "[Auth] Error";
})(AuthActionTypes || (AuthActionTypes = {}));
class RegisterRequested {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.REGISTER_REQUESTED;
    }
}
class RegisterCompleted {
    constructor() {
        this.type = AuthActionTypes.REGISTER_COMPLETED;
    }
}
class RegisterFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.REGISTER_FAILED;
    }
}
class UpdateProfile {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_PROFILE;
    }
}
class UpdateProfileSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_PROFILE_SUCCESS;
    }
}
class LoginRequested {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_REQUESTED;
    }
}
class LoginSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_SUCCESS;
    }
}
class LoginFailed {
    constructor() {
        this.type = AuthActionTypes.LOGIN_FAILED;
    }
}
class SocialLogin {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SOCIAL_LOGIN;
    }
}
class LogoutRequested {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGOUT_REQUESTED;
    }
}
class LogoutCompleted {
    constructor() {
        this.type = AuthActionTypes.LOGOUT_COMPLETED;
    }
}
class SaveUser {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SAVE_USER;
    }
}
class UpdateOnlineStatus {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_ONLINE_STATUS;
    }
}
class CheckUserRole {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.CHECK_USER_ROLE;
    }
}
class UpdateUserRole {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_USER_ROLE;
    }
}
class GetUser {
    constructor() {
        this.type = AuthActionTypes.GET_USER;
    }
}
class GetUserDetails {
    constructor(uid) {
        this.uid = uid;
        this.type = AuthActionTypes.GET_USER_DETAILS;
    }
}
class AuthError {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.AUTH_ERROR;
    }
}


/***/ }),

/***/ "./src/app/auth/store/auth.effects.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.effects.ts ***!
  \********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _shared_services_gravatar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/gravatar.service */ "./src/app/shared/services/gravatar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













class AuthEffects {
    constructor(actions$, authService, gravatarService, router) {
        this.actions$ = actions$;
        this.authService = authService;
        this.gravatarService = gravatarService;
        this.router = router;
        this.registerAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].REGISTER_REQUESTED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(payload => this.authService.register(payload.email, payload.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            const gravatarUrl = this.gravatarService.getUserGravatar(res.user.email);
            const user = {
                uid: res.user.uid,
                displayName: payload.username || res.user.displayName,
                email: res.user.email,
                providerId: res.additionalUserInfo.providerId,
                photoUrl: res.user.photoURL || gravatarUrl,
                isNewUser: res.additionalUserInfo.isNewUser,
                isAdmin: false,
                isOnline: true
            };
            return user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((user) => {
            return [
                new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["RegisterCompleted"](),
                new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginSuccess"]({ user }),
                new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateProfile"]({ user }),
                new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["SaveUser"]({ user })
            ];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => { this.router.navigateByUrl(''); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error }))))));
        this.saveUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].SAVE_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((payload) => this.authService.saveUser(payload.user)));
        this.updateOnlineStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].UPDATE_ONLINE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((payload) => this.authService.updateOnlineStatus(payload.uid, payload.status)));
        this.checkUserRole$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].CHECK_USER_ROLE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((payload) => this.authService.checkUserRole(payload.uid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((isAdmin) => {
            return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateUserRole"]({ isAdmin });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error }))))));
        // we update firebase first, and then the database
        this.updateProfile$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].UPDATE_PROFILE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((payload) => this.authService.updateProfile(payload.user.displayName, payload.user.photoUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => {
            var _a, _b, _c, _d, _e;
            const currentUser = this.authService.getCurrentUser();
            const updatedUser = {
                uid: currentUser.uid || null,
                displayName: currentUser.displayName || null,
                email: currentUser.email || null,
                providerId: currentUser.providerData[0].providerId || null,
                photoUrl: currentUser.photoURL || null,
                phoneNumber: (_a = payload.user) === null || _a === void 0 ? void 0 : _a.phoneNumber,
                country: (_b = payload.user) === null || _b === void 0 ? void 0 : _b.country,
                street: (_c = payload.user) === null || _c === void 0 ? void 0 : _c.street,
                city: (_d = payload.user) === null || _d === void 0 ? void 0 : _d.city,
                province: (_e = payload.user) === null || _e === void 0 ? void 0 : _e.province,
            };
            return updatedUser;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((updatedUser) => {
            return [
                new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["SaveUser"]({ user: updatedUser }),
                new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateProfileSuccess"]({ user: updatedUser })
            ];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"](error))))));
        this.loginAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].LOGIN_REQUESTED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(payload => this.authService.login(payload.email, payload.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            const user = {
                uid: res.user.uid,
                displayName: res.user.displayName,
                email: res.user.email,
                providerId: res.additionalUserInfo.providerId,
                photoUrl: res.user.photoURL,
                isNewUser: res.additionalUserInfo.isNewUser
            };
            return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginSuccess"]({ user });
        }), 
        /*         switchMap( (user: any) => {
                  if (user.isNewUser) {
                    return [
                      new auth.LoginSuccess({ user }),
                      new auth.SaveUser( { uid: user.uid, name: user.displayName }),
                      new auth.CheckUserRole( {uid: user.uid })
                    ];
                  } else {
                    return [ new auth.LoginSuccess( {user }), new auth.CheckUserRole({ uid: user.uid })];
                  }
                }), */
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.router.navigateByUrl('')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error }))))));
        this.loginSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].LOGIN_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((payload) => {
            return [
                new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["GetUserDetails"](payload.user.uid),
                new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateOnlineStatus"]({ uid: payload.user.uid, status: true }),
                new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["CheckUserRole"]({ uid: payload.user.uid })
            ];
        }));
        this.socialLogin$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].SOCIAL_LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(payload => this.authService.socialLogin(payload.authProvider)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((res) => {
            const user = {
                uid: res.user.uid,
                displayName: res.user.displayName,
                email: res.user.email,
                providerId: res.additionalUserInfo.providerId,
                photoUrl: res.user.photoURL,
                isNewUser: res.additionalUserInfo.isNewUser
            };
            return user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((user) => {
            if (user.isNewUser) {
                return [
                    new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginSuccess"]({ user }),
                    new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["SaveUser"]({ user }),
                    new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["CheckUserRole"]({ uid: user.uid })
                ];
            }
            else {
                return [new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginSuccess"]({ user }), new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["CheckUserRole"]({ uid: user.uid })];
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.router.navigateByUrl('')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error }));
        }))));
        this.logoutAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].LOGOUT_REQUESTED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((payload) => this.authService.logout(payload.user.uid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => (new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LogoutCompleted"]())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.router.navigateByUrl('')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error }));
        }))));
        this.getUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].GET_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => this.authService.getAuthState()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((authData) => {
            if (authData) {
                const user = {
                    uid: authData.uid,
                    displayName: authData.displayName,
                    email: authData.email,
                    providerId: authData.providerData[0].providerId,
                    photoUrl: authData.photoURL,
                };
                return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginSuccess"]({ user });
            }
            else {
                return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginFailed"]();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error }))))));
        this.getUserDetails$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].GET_USER_DETAILS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((payload) => this.authService.getDBUser(payload.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(userDetails => {
            const currentUser = this.authService.getCurrentUser();
            const updatedUser = {
                uid: currentUser.uid || null,
                displayName: currentUser.displayName || null,
                email: currentUser.email || null,
                providerId: currentUser.providerData[0].providerId || null,
                photoUrl: currentUser.photoURL || null,
                phoneNumber: userDetails.phoneNumber,
                country: userDetails.country,
                street: userDetails.street,
                city: userDetails.city,
                province: userDetails.province,
            };
            return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateProfileSuccess"]({ user: updatedUser });
        }))));
        this.init$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(() => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["GetUser"]());
        });
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_gravatar_service__WEBPACK_IMPORTED_MODULE_7__["GravatarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "registerAction$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], AuthEffects.prototype, "saveUser$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], AuthEffects.prototype, "updateOnlineStatus$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "checkUserRole$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "updateProfile$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "loginAction$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "loginSuccess$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "socialLogin$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "logoutAction$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "getUser$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", Object)
], AuthEffects.prototype, "getUserDetails$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], AuthEffects.prototype, "init$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _shared_services_gravatar_service__WEBPACK_IMPORTED_MODULE_7__["GravatarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { registerAction$: [], saveUser$: [], updateOnlineStatus$: [], checkUserRole$: [], updateProfile$: [], loginAction$: [], loginSuccess$: [], socialLogin$: [], logoutAction$: [], getUser$: [], getUserDetails$: [], init$: [] }); })();


/***/ }),

/***/ "./src/app/auth/store/auth.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.state */ "./src/app/auth/store/auth.state.ts");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/store/auth.actions.ts");


function authReducer(state = _auth_state__WEBPACK_IMPORTED_MODULE_0__["authInitialState"], action) {
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGIN_SUCCESS: {
            return Object.assign({}, state, {
                user: action.payload.user,
                isLoggedIn: true,
                isLoading: false,
                error: null
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].UPDATE_PROFILE_SUCCESS: {
            return Object.assign({}, state, {
                user: action.payload.user,
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].UPDATE_USER_ROLE: {
            return Object.assign({}, state, {
                isAdmin: action.payload.isAdmin
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGIN_FAILED: {
            return Object.assign({}, state, {
                user: null,
                isLoading: false,
                isLoggedIn: false
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].AUTH_ERROR: {
            return Object.assign({}, state, {
                error: action.payload.error
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGOUT_COMPLETED: {
            return Object.assign({}, state, {
                user: null,
                isLoading: false,
                isLoggedIn: false
            });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/auth/store/auth.selectors.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/store/auth.selectors.ts ***!
  \**********************************************/
/*! exports provided: getAuthState, getUser, getIsLoggedIn, getIsLoading, getIsAdmin, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthState", function() { return getAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoggedIn", function() { return getIsLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAdmin", function() { return getIsAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const getAuthState = (state) => state.auth;
const getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, auth => auth.user);
const getIsLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, auth => auth.isLoggedIn);
const getIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, auth => auth.isLoading);
const getIsAdmin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, auth => auth.isAdmin);
const getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, auth => auth.error);


/***/ }),

/***/ "./src/app/auth/store/auth.state.ts":
/*!******************************************!*\
  !*** ./src/app/auth/store/auth.state.ts ***!
  \******************************************/
/*! exports provided: authInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInitialState", function() { return authInitialState; });
const authInitialState = {
    user: null,
    isAdmin: false,
    isLoggedIn: false,
    isLoading: true,
    error: null
};


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/core/dashboard/dashboard.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/core/page-not-found/page-not-found.component.ts");










class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["IconsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"].forRoot(),
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["CardsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["IconsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["CardsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["IconsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"].forRoot(),
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["CardsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"]
                ],
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class DashboardComponent {
    constructor() {
        this.projects = [
            {
                title: 'Project 1',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                photoUrl: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg'
            },
            {
                title: 'Project 2',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                photoUrl: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(98).jpg'
            },
            {
                title: 'Project 3',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                photoUrl: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(99).jpg'
            },
            {
                title: 'Project 4',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                photoUrl: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(95).jpg'
            }
        ];
    }
    ngOnInit() { }
    ngOnDestroy() {
        if (this.projectsSub) {
            this.projectsSub.unsubscribe();
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 1, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "footer-copyright", "text-center", "text-white", "py-3", "primary-color-dark", "darken-2"], ["href", "https:/sedky.ca/", 1, "text-white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A9 2020 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cloudixia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function () { return { exact: true }; };
function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Marketplace");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_8_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Listings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_9_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Admin panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_10_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Become a Seller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_10_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_10_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_11_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r16.user.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HeaderComponent_ul_11_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.user.displayName);
} }
function HeaderComponent_ul_11_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anonymous user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_11_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ul_11_div_4_div_1_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_ul_11_div_4_div_2_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_11_div_4_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r0.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_11_div_4_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); ctx_r22.onLogout(); return _r0.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.user.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.user.displayName);
} }
function HeaderComponent_ul_11_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_ul_11_img_3_Template, 1, 1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_ul_11_div_4_Template, 8, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_11_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); ctx_r23.onLogout(); return _r0.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.user.photoUrl);
} }
class HeaderComponent {
    constructor() {
        this.logout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onLogout() {
        this.logout.emit(this.user);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { user: "user", isLoggedIn: "isLoggedIn", isLoading: "isLoading", isAdmin: "isAdmin" }, outputs: { logout: "logout" }, decls: 12, vars: 6, consts: [["SideClass", "navbar navbar-expand-lg navbar-light white justify-content-between", 3, "containerInside"], ["navbar", ""], ["routerLink", "/", 1, "navbar-brand"], ["src", "../../../favicon.ico", "height", "30", "alt", ""], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", 4, "ngIf"], ["class", "navbar-nav", 4, "ngIf"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", "mdbWavesEffect", "", 1, "nav-link", "waves-light", 3, "routerLinkActiveOptions", "click"], [1, "sr-only"], ["routerLink", "/projects", "routerLinkActive", "active", "mdbWavesEffect", "", 1, "nav-link", "waves-light", 3, "click"], ["routerLink", "/admin-panel", "routerLinkActive", "active", "mdbWavesEffect", "", 1, "nav-link", "waves-light", 3, "click"], [1, "navbar-nav"], [1, "nav-item", "waves-light"], ["routerLink", "/register", "mdbWavesEffect", "", 1, "nav-link", "waves-light", 3, "click"], ["routerLink", "/login", "mdbWavesEffect", "", 1, "nav-link", "waves-light", 3, "click"], ["routerLink", "/register", "mdbWavesEffect", "", 1, "nav-link", "btn-primary", "waves-light", 2, "color", "white", 3, "click"], ["mdbDropdown", "", 1, "nav-link", "waves-light", "dropdown", "avatar", "p-0", "avatar-dropdown"], ["mdbDropdownToggle", "", "mdbWavesEffect", "", "type", "button", "mdbWavesEffect", "", 1, "nav-link", "waves-light"], ["height", "35", "width", "35", "class", "rounded-circle z-depth-0", "alt", "avatar image", 3, "src", 4, "ngIf"], ["class", "dropdown-menu dropdown-menu-right dropdown-primary", "role", "menu", 4, "dropdownMenu"], [1, "nav-item", "waves-light", "logout-button"], ["mdbWavesEffect", "", 1, "nav-link", "waves-light", 3, "click"], ["height", "35", "width", "35", "alt", "avatar image", 1, "rounded-circle", "z-depth-0", 3, "src"], ["role", "menu", 1, "dropdown-menu", "dropdown-menu-right", "dropdown-primary"], ["class", "text-center py-2 px-2", 4, "ngIf"], [1, "divider", "dropdown-divider"], ["routerLink", "/profile", "mdbWavesEffect", "", 1, "dropdown-item", "text-center", "waves-light", 3, "click"], ["mdbWavesEffect", "", 1, "dropdown-item", "text-center", "waves-light", 3, "click"], [1, "text-center", "py-2", "px-2"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-navbar", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-navbar-brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 5, 2, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_ul_10_Template, 10, 0, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_ul_11_Template, 8, 1, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerInside", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && !ctx.isLoading && ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && !ctx.isLoading);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["LogoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["LinksComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["BsDropdownDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["BsDropdownToggleDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["BsDropdownMenuDirective"]], styles: [".nav-link.active[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\n\n.logout-button[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.avatar-dropdown[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media (max-width: 992px) {\n  .avatar-dropdown[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .logout-button[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWRreWFib3Utc2hhbWFsYWgvY29kZS9jbG91ZGl4aWEvc3JjL2FwcC9jb3JlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGFBQUE7RUNDRjs7RURFQTtJQUNFLGNBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi5sb2dvdXQtYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmF2YXRhci1kcm9wZG93biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmF2YXRhci1kcm9wZG93biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5sb2dvdXQtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSIsIi5uYXYtbGluay5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG4ubG9nb3V0LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hdmF0YXItZHJvcGRvd24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hdmF0YXItZHJvcGRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubG9nb3V0LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return []; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLoggedIn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAdmin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], logout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/page-not-found/page-not-found.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageNotFoundComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 10, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-8"], ["src", "https://mdbootstrap.com/img/Marketing/other/logo/logo-mdb-angular-small.png", "alt", "Error 404", 1, "img-fluid"], [1, "h2-responsive", "mt-3", "mb-2"], [1, "col-md-4"], ["src", "https://mdbootstrap.com/img/Others/grafika404-bf.png", "alt", "Error 404", 1, "img-fluid"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "404. That's an error.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The requested URL was not found on this server.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".row[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 55%;\n  transform: translate(-50%, -50%);\n}\n\n.full[_ngcontent-%COMP%] {\n  min-height: 40rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWRreWFib3Utc2hhbWFsYWgvY29kZS9jbG91ZGl4aWEvc3JjL2FwcC9jb3JlL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxnQ0FBQTtBQ0NKOztBREdFO0VBQ0UsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDU1JTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgXG4gIFxuICAuZnVsbCB7XG4gICAgbWluLWhlaWdodDogNDByZW07XG4gIH0iLCIucm93IHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1NSU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5mdWxsIHtcbiAgbWluLWhlaWdodDogNDByZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/marketplace/store/marketplace.actions.ts":
/*!**********************************************************!*\
  !*** ./src/app/marketplace/store/marketplace.actions.ts ***!
  \**********************************************************/
/*! exports provided: MarketplaceActionTypes, MarketplaceQueryAll, MarketplaceLoaded, MarketplaceAdded, MarketplaceError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceActionTypes", function() { return MarketplaceActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceQueryAll", function() { return MarketplaceQueryAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceLoaded", function() { return MarketplaceLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceAdded", function() { return MarketplaceAdded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceError", function() { return MarketplaceError; });
var MarketplaceActionTypes;
(function (MarketplaceActionTypes) {
    MarketplaceActionTypes["MARKETPLACE_QUERY_ALL"] = "[Marketplace] Marketplace query all";
    MarketplaceActionTypes["MARKETPLACE_ADDED"] = "[Marketplace] Marketplace added one";
    MarketplaceActionTypes["MARKETPLACE_LOADED"] = "[Marketplace] Marketplace loaded";
    MarketplaceActionTypes["MARKETPLACE_ERROR"] = "[Marketplace] Marketplace error";
})(MarketplaceActionTypes || (MarketplaceActionTypes = {}));
class MarketplaceQueryAll {
    constructor() {
        this.type = MarketplaceActionTypes.MARKETPLACE_QUERY_ALL;
    }
}
class MarketplaceLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = MarketplaceActionTypes.MARKETPLACE_LOADED;
    }
}
class MarketplaceAdded {
    constructor(payload) {
        this.payload = payload;
        this.type = MarketplaceActionTypes.MARKETPLACE_ADDED;
    }
}
class MarketplaceError {
    constructor(payload) {
        this.payload = payload;
        this.type = MarketplaceActionTypes.MARKETPLACE_ERROR;
    }
}


/***/ }),

/***/ "./src/app/marketplace/store/marketplace.reducer.ts":
/*!**********************************************************!*\
  !*** ./src/app/marketplace/store/marketplace.reducer.ts ***!
  \**********************************************************/
/*! exports provided: marketplaceReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marketplaceReducer", function() { return marketplaceReducer; });
/* harmony import */ var _marketplace_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marketplace.actions */ "./src/app/marketplace/store/marketplace.actions.ts");
/* harmony import */ var _marketplace_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marketplace.state */ "./src/app/marketplace/store/marketplace.state.ts");


function marketplaceReducer(state = _marketplace_state__WEBPACK_IMPORTED_MODULE_1__["marketplaceInitialState"], action) {
    switch (action.type) {
        case _marketplace_actions__WEBPACK_IMPORTED_MODULE_0__["MarketplaceActionTypes"].MARKETPLACE_QUERY_ALL: {
            return Object.assign({}, state, {
                loading: true,
            });
        }
        case _marketplace_actions__WEBPACK_IMPORTED_MODULE_0__["MarketplaceActionTypes"].MARKETPLACE_LOADED: {
            return Object.assign({}, state, {
                projects: action.payload.projects,
                loading: false,
            });
        }
        case _marketplace_actions__WEBPACK_IMPORTED_MODULE_0__["MarketplaceActionTypes"].MARKETPLACE_ERROR: {
            return Object.assign({}, state, {
                loading: false,
                error: action.payload.error
            });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/marketplace/store/marketplace.state.ts":
/*!********************************************************!*\
  !*** ./src/app/marketplace/store/marketplace.state.ts ***!
  \********************************************************/
/*! exports provided: marketplaceInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marketplaceInitialState", function() { return marketplaceInitialState; });
const marketplaceInitialState = {
    projects: null,
    loading: false,
    error: null
};


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, clearState, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearState", function() { return clearState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/store/auth.reducer */ "./src/app/auth/store/auth.reducer.ts");
/* harmony import */ var _admin_store_admin_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/store/admin.reducer */ "./src/app/admin/store/admin.reducer.ts");
/* harmony import */ var _marketplace_store_marketplace_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../marketplace/store/marketplace.reducer */ "./src/app/marketplace/store/marketplace.reducer.ts");



const reducers = {
    auth: _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["authReducer"],
    admin: _admin_store_admin_reducer__WEBPACK_IMPORTED_MODULE_1__["adminReducer"],
    marketplace: _marketplace_store_marketplace_reducer__WEBPACK_IMPORTED_MODULE_2__["marketplaceReducer"]
};
function clearState(reducer) {
    return function (state, action) {
        if (action.type === '[Auth] LOGOUT completed') {
            state = undefined;
        }
        return reducer(state, action);
    };
}
const metaReducers = [clearState];


/***/ }),

/***/ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/confirm-modal/confirm-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class ConfirmModalComponent {
    constructor(modalRef) {
        this.modalRef = modalRef;
        this.confirmation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
    }
    onDelete() {
        this.confirmation.next(true);
        this.modalRef.hide();
    }
}
ConfirmModalComponent.ɵfac = function ConfirmModalComponent_Factory(t) { return new (t || ConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalRef"])); };
ConfirmModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmModalComponent, selectors: [["app-confirm-modal"]], decls: 15, vars: 0, consts: [[1, "modal-content"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], ["id", "myModalLabel", 1, "modal-title", "w-100"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "mdbBtn", "", "color", "white", "aria-label", "Close", "mdbWavesEffect", "", 1, "black-text", "waves-light", 3, "click"], ["type", "button", "mdbBtn", "", "color", "red", "mdbWavesEffect", "", 1, "waves-light", 3, "click"]], template: function ConfirmModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_2_listener() { return ctx.modalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Are you sure you want to delete this item?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_11_listener() { return ctx.modalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_Template_button_click_13_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbBtnDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-modal',
                templateUrl: './confirm-modal.component.html',
                styleUrls: ['./confirm-modal.component.scss']
            }]
    }], function () { return [{ type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/project-modal/project-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/project-modal/project-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProjectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModalComponent", function() { return ProjectModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = ["projectForm"];
function ProjectModalComponent_mdb_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectModalComponent_mdb_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProjectModalComponent {
    constructor(modalRef) {
        this.modalRef = modalRef;
        this.projectData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.project = {};
    }
    ngOnInit() {
    }
    onSave() {
        if (this.projectForm.valid) {
            this.projectData.next(this.project);
            this.modalRef.hide();
        }
        else {
            const controls = this.projectForm.controls;
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
        }
    }
}
ProjectModalComponent.ɵfac = function ProjectModalComponent_Factory(t) { return new (t || ProjectModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalRef"])); };
ProjectModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectModalComponent, selectors: [["app-project-modal"]], viewQuery: function ProjectModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.projectForm = _t.first);
    } }, decls: 31, vars: 8, consts: [[1, "modal-content"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], ["id", "myModalLabel", 1, "modal-title", "w-100"], [1, "modal-body"], ["projectForm", "ngForm"], [1, "md-form"], ["type", "text", "name", "title", "mdbInput", "", "mdbValidate", "", "required", "", 1, "form-control", 3, "ngModel", "validateSuccess", "ngModelChange"], ["title", "ngModel"], ["for", "title"], [4, "ngIf"], ["type", "text", "id", "description", "name", "description", "mdbInput", "", "mdbValidate", "", "required", "", 1, "md-textarea", "form-control", 3, "ngModel", "validateSuccess", "ngModelChange"], ["description", "ngModel"], ["for", "description"], ["type", "text", "id", "photo", "name", "photoUrl", "mdbInput", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "photo"], [1, "modal-footer"], ["type", "button", "mdbBtn", "", "color", "white", "aria-label", "Close", "mdbWavesEffect", "", 1, "black-text", "waves-light", 3, "click"], ["type", "button", "mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 1, "relative", "waves-light", 3, "click"]], template: function ProjectModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectModalComponent_Template_button_click_2_listener() { return ctx.modalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectModalComponent_Template_input_ngModelChange_11_listener($event) { return ctx.project.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectModalComponent_mdb_error_15_Template, 2, 0, "mdb-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectModalComponent_Template_textarea_ngModelChange_17_listener($event) { return ctx.project.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectModalComponent_mdb_error_21_Template, 2, 0, "mdb-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectModalComponent_Template_input_ngModelChange_23_listener($event) { return ctx.project.photoUrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Photo URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectModalComponent_Template_button_click_27_listener() { return ctx.modalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectModalComponent_Template_button_click_29_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Save!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.project.title)("validateSuccess", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r50 && _r50.invalid && (_r50.dirty || _r50.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.project.description)("validateSuccess", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r52 && _r52.invalid && (_r52.dirty || _r52.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.project.photoUrl);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbInput"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbValidateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbErrorDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2plY3QtbW9kYWwvcHJvamVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-modal',
                templateUrl: './project-modal.component.html',
                styleUrls: ['./project-modal.component.scss']
            }]
    }], function () { return [{ type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalRef"] }]; }, { projectForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['projectForm', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/project/project.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/project/project.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ProjectComponent_mdb_card_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mdb-card-img", 4);
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r54.project.photoUrl);
} }
function ProjectComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.onEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProjectComponent {
    constructor() {
        this.editable = true;
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onDelete() {
        this.deleted.emit(this.project);
    }
    onEdit() {
        this.edited.emit(this.project);
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], inputs: { project: "project", editable: "editable" }, outputs: { deleted: "deleted", edited: "edited" }, decls: 12, vars: 4, consts: [["alt", "Card image cap", "class", "waves-light", "mdbWavesEffect", "", 3, "src", 4, "ngIf"], [1, "text-left"], ["mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 3, "click", 4, "ngIf"], ["mdbBtn", "", "mdbWavesEffect", "", 1, "red", "lighten-1", "white-text", 3, "click"], ["alt", "Card image cap", "mdbWavesEffect", "", 1, "waves-light", 3, "src"], ["mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 3, "click"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectComponent_mdb_card_img_1_Template, 1, 1, "mdb-card-img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdb-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mdb-card-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectComponent_a_9_Template, 2, 0, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_a_click_10_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.photoUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editable);
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardTitleComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardTextComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardImageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], edited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/projects-list/projects-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/projects-list/projects-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProjectsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function() { return ProjectsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project/project.component */ "./src/app/shared/components/project/project.component.ts");




function ProjectsListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-project", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleted", function ProjectsListComponent_div_1_Template_app_project_deleted_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.onProjectDelete($event); })("edited", function ProjectsListComponent_div_1_Template_app_project_edited_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.onProjectEdit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r59 = ctx.$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", project_r59)("editable", ctx_r58.editable);
} }
class ProjectsListComponent {
    constructor() {
        this.editable = true;
        this.projectDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onProjectDelete(project) {
        this.projectDeleted.emit(project);
    }
    onProjectEdit(project) {
        this.projectEdited.emit(project);
    }
    trackByFunction(index) {
        return index;
    }
}
ProjectsListComponent.ɵfac = function ProjectsListComponent_Factory(t) { return new (t || ProjectsListComponent)(); };
ProjectsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsListComponent, selectors: [["app-projects-list"]], inputs: { projects: "projects", editable: "editable" }, outputs: { projectDeleted: "projectDeleted", projectEdited: "projectEdited" }, decls: 2, vars: 2, consts: [[1, "projects-list", "d-flex", "flex-wrap", "fadeIn", "animated"], ["class", "project", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "project"], [3, "project", "editable", "deleted", "edited"]], template: function ProjectsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsListComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects)("ngForTrackBy", ctx.trackByFunction);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"]], styles: [".projects-list[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  justify-content: center;\n}\n\n.project[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 1rem;\n}\n\n@media (min-width: 768px) {\n  .project[_ngcontent-%COMP%] {\n    width: calc(50% - 2rem);\n  }\n\n  .projects-list[_ngcontent-%COMP%] {\n    justify-content: normal;\n  }\n}\n\n@media (min-width: 992px) {\n  .project[_ngcontent-%COMP%] {\n    width: calc(33.3333% - 2rem);\n  }\n}\n\n@media (min-width: 1200px) {\n  .project[_ngcontent-%COMP%] {\n    width: calc(25% - 3rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWRreWFib3Utc2hhbWFsYWgvY29kZS9jbG91ZGl4aWEvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9qZWN0cy1saXN0L3Byb2plY3RzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2plY3RzLWxpc3QvcHJvamVjdHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLHVCQUFBO0VDQ047O0VERUU7SUFDSSx1QkFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSTtJQUNJLDRCQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJO0lBQ0ksdUJBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvamVjdHMtbGlzdC9wcm9qZWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3RzLWxpc3Qge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0IHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnByb2plY3Qge1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAycmVtKTtcbiAgICB9XG5cbiAgICAucHJvamVjdHMtbGlzdCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLnByb2plY3Qge1xuICAgICAgICB3aWR0aDogY2FsYygzMy4zMzMzJSAtIDJyZW0pO1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC5wcm9qZWN0IHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gM3JlbSk7XG4gICAgfVxufSIsIi5wcm9qZWN0cy1saXN0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnByb2plY3Qge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDJyZW0pO1xuICB9XG5cbiAgLnByb2plY3RzLWxpc3Qge1xuICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnByb2plY3Qge1xuICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMlIC0gMnJlbSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnByb2plY3Qge1xuICAgIHdpZHRoOiBjYWxjKDI1JSAtIDNyZW0pO1xuICB9XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects-list',
                templateUrl: './projects-list.component.html',
                styleUrls: ['./projects-list.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { projects: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], projectDeleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], projectEdited: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/services/gravatar.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/gravatar.service.ts ***!
  \*****************************************************/
/*! exports provided: GravatarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GravatarService", function() { return GravatarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_1__);



class GravatarService {
    constructor() {
    }
    getUserGravatar(email) {
        if (email) {
            return `https://www.gravatar.com/avatar/${md5__WEBPACK_IMPORTED_MODULE_1__(email)}`;
        }
    }
}
GravatarService.ɵfac = function GravatarService_Factory(t) { return new (t || GravatarService)(); };
GravatarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GravatarService, factory: GravatarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GravatarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/project-modal/project-modal.component */ "./src/app/shared/components/project-modal/project-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/project/project.component */ "./src/app/shared/components/project/project.component.ts");
/* harmony import */ var _components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects-list/projects-list.component */ "./src/app/shared/components/projects-list/projects-list.component.ts");









class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["InputsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["InputUtilitiesModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["IconsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CardsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"],
        _components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_4__["ProjectModalComponent"],
        _components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsListComponent"],
        _components_project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["InputsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["InputUtilitiesModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["IconsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CardsModule"]], exports: [_components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsListComponent"], _components_project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"],
                    _components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_4__["ProjectModalComponent"],
                    _components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsListComponent"],
                    _components_project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["InputsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["InputUtilitiesModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["IconsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CardsModule"]
                ],
                exports: [_components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsListComponent"], _components_project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"]],
                providers: [],
                entryComponents: [
                    _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"],
                    _components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_4__["ProjectModalComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAQVu7JXpG-u5LDYeltF8DyOpn-agZaJp8",
        authDomain: "bloopky.firebaseapp.com",
        databaseURL: "https://bloopky.firebaseio.com",
        projectId: "bloopky",
        storageBucket: "bloopky.appspot.com",
        messagingSenderId: "849578959436",
        appId: "1:849578959436:web:b8f8144560a29629d48ae9",
        measurementId: "G-BX1MCQ199J"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sedkyabou-shamalah/code/cloudixia/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map