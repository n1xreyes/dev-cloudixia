(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "./src/app/projects/containers/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/projects/containers/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_projects_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../store/projects.actions */ "./src/app/projects/store/projects.actions.ts");
/* harmony import */ var _store_projects_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/projects.selectors */ "./src/app/projects/store/projects.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _shared_components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/project-modal/project-modal.component */ "./src/app/shared/components/project-modal/project-modal.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
/* harmony import */ var _shared_components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/projects-list/projects-list.component */ "./src/app/shared/components/projects-list/projects-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















function ProjectsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProjectsComponent {
    constructor(store, modalService, afAuth) {
        this.store = store;
        this.modalService = modalService;
        this.afAuth = afAuth;
        this.modalConfig = {
            class: 'modal-dialog-centered'
        };
    }
    ngOnInit() {
        this.isLoading$ = this.store.select(_store_projects_selectors__WEBPACK_IMPORTED_MODULE_4__["getAllLoaded"]);
        this.projects$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_projects_selectors__WEBPACK_IMPORTED_MODULE_4__["getProjects"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((projects) => {
            if (this.user && !projects) {
                this.store.dispatch(new _store_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectsQuery"]());
            }
            return projects;
        }));
    }
    get user() {
        return this.afAuth.auth.currentUser;
    }
    openAddProjectModal() {
        this.modalRef = this.modalService.show(_shared_components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProjectModalComponent"], this.modalConfig);
        this.modalRef.content.heading = 'Add new project';
        this.modalRef.content.projectData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((projectData) => {
            this.store.dispatch(new _store_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectAdded"]({ project: projectData }));
        });
    }
    openEditProjectModal(project) {
        this.modalRef = this.modalService.show(_shared_components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProjectModalComponent"], this.modalConfig);
        this.modalRef.content.heading = 'Edit project';
        const projectCopy = Object.assign({}, project);
        this.modalRef.content.project = projectCopy;
        this.modalRef.content.projectData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((projectData) => {
            this.store.dispatch(new _store_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectEdited"]({ project: projectData }));
        });
    }
    openConfirmModal(project) {
        this.modalRef = this.modalService.show(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], this.modalConfig);
        this.modalRef.content.confirmation.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe((confirmation) => {
            if (confirmation) {
                this.store.dispatch(new _store_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectDeleted"]({ project }));
            }
        });
    }
    onProjectDelete(project) {
        this.openConfirmModal(project);
    }
    onProjectEdit(project) {
        this.openEditProjectModal(project);
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 13, vars: 6, consts: [[1, "white", "px-4", "section-header"], [1, "grey-text", "pt-3"], [1, "container-fluid", "pb-5"], [1, "py-5"], ["mdbBtn", "", "color", "primary", 1, "ml-3", 3, "click"], [3, "projects", "projectDeleted", "projectEdited"], ["class", "d-flex justify-content-center align-items-center", "style", "margin-top: 200px", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "margin-top", "200px"], ["role", "status", 1, "spinner-grow", "text-primary", 2, "width", "4rem", "height", "4rem"], [1, "sr-only"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Projects list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Manage your services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_7_listener() { return ctx.openAddProjectModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add new project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-projects-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("projectDeleted", function ProjectsComponent_Template_app_projects_list_projectDeleted_9_listener($event) { return ctx.onProjectDelete($event); })("projectEdited", function ProjectsComponent_Template_app_projects_list_projectEdited_9_listener($event) { return ctx.onProjectEdit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectsComponent_div_11_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projects", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 2, ctx.projects$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, ctx.isLoading$));
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbBtnDirective"], _shared_components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL2NvbnRhaW5lcnMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalService"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "./src/app/projects/projects-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/projects/projects-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _containers_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/projects.component */ "./src/app/projects/containers/projects.component.ts");





const routes = [
    { path: '', component: _containers_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"] }
];
class ProjectsRoutingModule {
}
ProjectsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectsRoutingModule });
ProjectsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectsRoutingModule_Factory(t) { return new (t || ProjectsRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/projects/projects.module.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _containers_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/projects.component */ "./src/app/projects/containers/projects.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _store_projects_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/projects.reducer */ "./src/app/projects/store/projects.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _store_projects_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/projects.effects */ "./src/app/projects/store/projects.effects.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/projects/projects-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");















class ProjectsModule {
}
ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectsModule });
ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectsModule_Factory(t) { return new (t || ProjectsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            _projects_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProjectsRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["InputsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["IconsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["CardsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('projects', _store_projects_reducer__WEBPACK_IMPORTED_MODULE_6__["projectsReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_projects_effects__WEBPACK_IMPORTED_MODULE_8__["ProjectsEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsModule, { declarations: [_containers_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
        _projects_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProjectsRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["InputsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["IconsModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["CardsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsFeatureModule"]], exports: [_containers_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                    _projects_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProjectsRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["InputsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["IconsModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["CardsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('projects', _store_projects_reducer__WEBPACK_IMPORTED_MODULE_6__["projectsReducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_projects_effects__WEBPACK_IMPORTED_MODULE_8__["ProjectsEffects"]])
                ],
                declarations: [_containers_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]],
                exports: [_containers_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/projects/services/projects.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/projects/services/projects.service.ts ***!
  \*******************************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");








class ProjectsService {
    constructor(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].firebase.databaseURL;
    }
    get userId() {
        if (this.afAuth.auth.currentUser) {
            return this.afAuth.auth.currentUser.uid;
        }
    }
    add(project, userId) {
        const projects = this.db.list(`projects/${userId}`);
        return projects.push(project);
    }
    addProjects(projects) {
        const userId = this.userId;
        projects.forEach((project) => {
            this.db.list(`projects/${userId}`).push(project);
        });
    }
    get(userId) {
        return this.db.list(`projects/${userId}`).snapshotChanges();
    }
    update(project, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.db.object(`projects/${userId}/` + project.key)
            .update({
            title: project.title,
            description: project.description,
            photoUrl: project.photoUrl
        }));
    }
    delete(project, userId) {
        return this.db.object(`projects/${userId}/` + project.key).remove();
    }
    getAllProjects() {
        return this.db.list('projects').snapshotChanges();
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"])); };
ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "./src/app/projects/store/projects.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/projects/store/projects.actions.ts ***!
  \****************************************************/
/*! exports provided: ProjectsActionTypes, ProjectsQuery, ProjectsQueryAll, ProjectsLoaded, ProjectAdded, ProjectEdited, ProjectDeleted, ProjectsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsActionTypes", function() { return ProjectsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsQuery", function() { return ProjectsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsQueryAll", function() { return ProjectsQueryAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsLoaded", function() { return ProjectsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectAdded", function() { return ProjectAdded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEdited", function() { return ProjectEdited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDeleted", function() { return ProjectDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsError", function() { return ProjectsError; });
var ProjectsActionTypes;
(function (ProjectsActionTypes) {
    ProjectsActionTypes["PROJECTS_QUERY"] = "[Projects] Projects query";
    ProjectsActionTypes["PROJECTS_QUERY_ALL"] = "[Projects] Projects query all";
    ProjectsActionTypes["PROJECTS_LOADED"] = "[Projects] Projects loaded";
    ProjectsActionTypes["PROJECT_ADDED"] = "[Projects] Project added";
    ProjectsActionTypes["PROJECT_EDITED"] = "[Projects] Project edited";
    ProjectsActionTypes["PROJECT_DELETED"] = "[Projects] Project deleted";
    ProjectsActionTypes["PROJECTS_ERROR"] = "[Projects] Projects error";
})(ProjectsActionTypes || (ProjectsActionTypes = {}));
class ProjectsQuery {
    constructor() {
        this.type = ProjectsActionTypes.PROJECTS_QUERY;
    }
}
class ProjectsQueryAll {
    constructor() {
        this.type = ProjectsActionTypes.PROJECTS_QUERY_ALL;
    }
}
class ProjectsLoaded {
    constructor(payload) {
        this.payload = payload;
        this.type = ProjectsActionTypes.PROJECTS_LOADED;
    }
}
class ProjectAdded {
    constructor(payload) {
        this.payload = payload;
        this.type = ProjectsActionTypes.PROJECT_ADDED;
    }
}
class ProjectEdited {
    constructor(payload) {
        this.payload = payload;
        this.type = ProjectsActionTypes.PROJECT_EDITED;
    }
}
class ProjectDeleted {
    constructor(payload) {
        this.payload = payload;
        this.type = ProjectsActionTypes.PROJECT_DELETED;
    }
}
class ProjectsError {
    constructor(payload) {
        this.payload = payload;
        this.type = ProjectsActionTypes.PROJECTS_ERROR;
    }
}


/***/ }),

/***/ "./src/app/projects/store/projects.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/projects/store/projects.effects.ts ***!
  \****************************************************/
/*! exports provided: ProjectsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsEffects", function() { return ProjectsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _projects_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.actions */ "./src/app/projects/store/projects.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/projects.service */ "./src/app/projects/services/projects.service.ts");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













class ProjectsEffects {
    constructor(actions$, projectsService, store) {
        this.actions$ = actions$;
        this.projectsService = projectsService;
        this.store = store;
        this.query$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsActionTypes"].PROJECTS_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([, user]) => {
            return this.projectsService.get(user.uid)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
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
                return (new _projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsLoaded"]({ projects: projectsData }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsError"]({ error }))));
        }));
        this.queryAll$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsActionTypes"].PROJECTS_QUERY_ALL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([]) => {
            return this.projectsService.getAllProjects()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                const projectsData = [];
                data.map((res) => {
                    const userKey = res.payload.key;
                    const userProjects = res.payload.val();
                    for (var prop in userProjects) {
                        if (Object.prototype.hasOwnProperty.call(userProjects, prop)) {
                            projectsData.push({
                                key: prop || userKey || null,
                                title: userProjects[prop].title || null,
                                description: userProjects[prop].description || null,
                                photoUrl: userProjects[prop].photoUrl || null
                            });
                        }
                    }
                });
                return (new _projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsLoaded"]({ projects: projectsData }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsError"]({ error }))));
        }));
        this.added$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsActionTypes"].PROJECT_ADDED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([payload, user]) => this.projectsService.add(payload.project, user.uid)));
        this.delete$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsActionTypes"].PROJECT_DELETED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([payload, user]) => this.projectsService.delete(payload.project, user.uid)));
        this.edit$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsActionTypes"].PROJECT_EDITED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([payload, user]) => this.projectsService.update(payload.project, user.uid)));
    }
}
ProjectsEffects.ɵfac = function ProjectsEffects_Factory(t) { return new (t || ProjectsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
ProjectsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectsEffects, factory: ProjectsEffects.ɵfac });
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", Object)
], ProjectsEffects.prototype, "query$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
    __metadata("design:type", Object)
], ProjectsEffects.prototype, "queryAll$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], ProjectsEffects.prototype, "added$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], ProjectsEffects.prototype, "delete$", void 0);
__decorate([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
    __metadata("design:type", Object)
], ProjectsEffects.prototype, "edit$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, { query$: [], queryAll$: [], added$: [], delete$: [], edit$: [] }); })();


/***/ }),

/***/ "./src/app/projects/store/projects.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/projects/store/projects.reducer.ts ***!
  \****************************************************/
/*! exports provided: projectsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsReducer", function() { return projectsReducer; });
/* harmony import */ var _projects_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.actions */ "./src/app/projects/store/projects.actions.ts");
/* harmony import */ var _projects_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.state */ "./src/app/projects/store/projects.state.ts");


function projectsReducer(state = _projects_state__WEBPACK_IMPORTED_MODULE_1__["projectsInitialState"], action) {
    switch (action.type) {
        case _projects_actions__WEBPACK_IMPORTED_MODULE_0__["ProjectsActionTypes"].PROJECTS_QUERY_ALL: {
            return Object.assign({}, state, {
                loading: true,
            });
        }
        case _projects_actions__WEBPACK_IMPORTED_MODULE_0__["ProjectsActionTypes"].PROJECTS_QUERY: {
            return Object.assign({}, state, {
                loading: true,
            });
        }
        case _projects_actions__WEBPACK_IMPORTED_MODULE_0__["ProjectsActionTypes"].PROJECTS_LOADED: {
            return Object.assign({}, state, {
                projects: action.payload.projects,
                loading: false,
            });
        }
        case _projects_actions__WEBPACK_IMPORTED_MODULE_0__["ProjectsActionTypes"].PROJECTS_ERROR: {
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

/***/ "./src/app/projects/store/projects.selectors.ts":
/*!******************************************************!*\
  !*** ./src/app/projects/store/projects.selectors.ts ***!
  \******************************************************/
/*! exports provided: getProjectsState, getProjects, getAllLoaded, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectsState", function() { return getProjectsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjects", function() { return getProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllLoaded", function() { return getAllLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const getProjectsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('projects');
const getProjects = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProjectsState, projects => projects.projects);
const getAllLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProjectsState, projects => projects.loading);
const getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProjectsState, projects => projects.error);


/***/ }),

/***/ "./src/app/projects/store/projects.state.ts":
/*!**************************************************!*\
  !*** ./src/app/projects/store/projects.state.ts ***!
  \**************************************************/
/*! exports provided: projectsInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsInitialState", function() { return projectsInitialState; });
const projectsInitialState = {
    projects: null,
    loading: false,
    error: null
};


/***/ })

}]);
//# sourceMappingURL=projects-projects-module-es2015.js.map