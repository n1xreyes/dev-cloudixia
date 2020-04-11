function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"], {
  /***/
  "./src/app/projects/containers/projects.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/projects/containers/projects.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsContainersProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_projects_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../store/projects.actions */
    "./src/app/projects/store/projects.actions.ts");
    /* harmony import */


    var _store_projects_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../store/projects.selectors */
    "./src/app/projects/store/projects.selectors.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/components/confirm-modal/confirm-modal.component */
    "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
    /* harmony import */


    var _shared_components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/components/project-modal/project-modal.component */
    "./src/app/shared/components/project-modal/project-modal.component.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");
    /* harmony import */


    var _shared_components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/components/projects-list/projects-list.component */
    "./src/app/shared/components/projects-list/projects-list.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProjectsComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(store, modalService, afAuth) {
        _classCallCheck(this, ProjectsComponent);

        this.store = store;
        this.modalService = modalService;
        this.afAuth = afAuth;
        this.modalConfig = {
          "class": 'modal-dialog-centered'
        };
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.isLoading$ = this.store.select(_store_projects_selectors__WEBPACK_IMPORTED_MODULE_4__["getAllLoaded"]);
          this.projects$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_projects_selectors__WEBPACK_IMPORTED_MODULE_4__["getProjects"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (projects) {
            if (_this.user && !projects) {
              _this.store.dispatch(new _store_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectsQuery"]());
            }

            return projects;
          }));
        }
      }, {
        key: "openAddProjectModal",
        value: function openAddProjectModal() {
          var _this2 = this;

          this.modalRef = this.modalService.show(_shared_components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProjectModalComponent"], this.modalConfig);
          this.modalRef.content.heading = 'Add new project';
          this.modalRef.content.projectData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (projectData) {
            _this2.store.dispatch(new _store_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectAdded"]({
              project: projectData
            }));
          });
        }
      }, {
        key: "openEditProjectModal",
        value: function openEditProjectModal(project) {
          var _this3 = this;

          this.modalRef = this.modalService.show(_shared_components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_7__["ProjectModalComponent"], this.modalConfig);
          this.modalRef.content.heading = 'Edit project';
          var projectCopy = Object.assign({}, project);
          this.modalRef.content.project = projectCopy;
          this.modalRef.content.projectData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (projectData) {
            _this3.store.dispatch(new _store_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectEdited"]({
              project: projectData
            }));
          });
        }
      }, {
        key: "openConfirmModal",
        value: function openConfirmModal(project) {
          var _this4 = this;

          this.modalRef = this.modalService.show(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], this.modalConfig);
          this.modalRef.content.confirmation.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (confirmation) {
            if (confirmation) {
              _this4.store.dispatch(new _store_projects_actions__WEBPACK_IMPORTED_MODULE_3__["ProjectDeleted"]({
                project: project
              }));
            }
          });
        }
      }, {
        key: "onProjectDelete",
        value: function onProjectDelete(project) {
          this.openConfirmModal(project);
        }
      }, {
        key: "onProjectEdit",
        value: function onProjectEdit(project) {
          this.openEditProjectModal(project);
        }
      }, {
        key: "user",
        get: function get() {
          return this.afAuth.auth.currentUser;
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
      return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]));
    };

    ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsComponent,
      selectors: [["app-projects"]],
      decls: 13,
      vars: 6,
      consts: [[1, "white", "px-4", "section-header"], [1, "grey-text", "pt-3"], [1, "container-fluid", "pb-5"], [1, "py-5"], ["mdbBtn", "", "color", "primary", 1, "ml-3", 3, "click"], [3, "projects", "projectDeleted", "projectEdited"], ["class", "d-flex justify-content-center align-items-center", "style", "margin-top: 200px", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "margin-top", "200px"], ["role", "status", 1, "spinner-grow", "text-primary", 2, "width", "4rem", "height", "4rem"], [1, "sr-only"]],
      template: function ProjectsComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_7_listener() {
            return ctx.openAddProjectModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add new project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-projects-list", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("projectDeleted", function ProjectsComponent_Template_app_projects_list_projectDeleted_9_listener($event) {
            return ctx.onProjectDelete($event);
          })("projectEdited", function ProjectsComponent_Template_app_projects_list_projectEdited_9_listener($event) {
            return ctx.onProjectEdit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectsComponent_div_11_Template, 4, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projects", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 2, ctx.projects$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, ctx.isLoading$));
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbBtnDirective"], _shared_components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL2NvbnRhaW5lcnMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-projects',
          templateUrl: './projects.component.html',
          styleUrls: ['./projects.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }, {
          type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/projects/projects-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProjectsRoutingModule */

  /***/
  function srcAppProjectsProjectsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function () {
      return ProjectsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _containers_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./containers/projects.component */
    "./src/app/projects/containers/projects.component.ts");

    var routes = [{
      path: '',
      component: _containers_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]
    }];

    var ProjectsRoutingModule = function ProjectsRoutingModule() {
      _classCallCheck(this, ProjectsRoutingModule);
    };

    ProjectsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProjectsRoutingModule
    });
    ProjectsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProjectsRoutingModule_Factory(t) {
        return new (t || ProjectsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/projects.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/projects/projects.module.ts ***!
    \*********************************************/

  /*! exports provided: ProjectsModule */

  /***/
  function srcAppProjectsProjectsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsModule", function () {
      return ProjectsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _containers_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./containers/projects.component */
    "./src/app/projects/containers/projects.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _store_projects_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store/projects.reducer */
    "./src/app/projects/store/projects.reducer.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _store_projects_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./store/projects.effects */
    "./src/app/projects/store/projects.effects.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _projects_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./projects-routing.module */
    "./src/app/projects/projects-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ProjectsModule = function ProjectsModule() {
      _classCallCheck(this, ProjectsModule);
    };

    ProjectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProjectsModule
    });
    ProjectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProjectsModule_Factory(t) {
        return new (t || ProjectsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProjectsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["InputsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["IconsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["CardsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('projects', _store_projects_reducer__WEBPACK_IMPORTED_MODULE_6__["projectsReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_projects_effects__WEBPACK_IMPORTED_MODULE_8__["ProjectsEffects"]])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectsModule, {
        declarations: [_containers_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProjectsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["InputsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["IconsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["CardsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsFeatureModule"]],
        exports: [_containers_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProjectsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["InputsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["IconsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["CardsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('projects', _store_projects_reducer__WEBPACK_IMPORTED_MODULE_6__["projectsReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_projects_effects__WEBPACK_IMPORTED_MODULE_8__["ProjectsEffects"]])],
          declarations: [_containers_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]],
          exports: [_containers_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/services/projects.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/projects/services/projects.service.ts ***!
    \*******************************************************/

  /*! exports provided: ProjectsService */

  /***/
  function srcAppProjectsServicesProjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsService", function () {
      return ProjectsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/database/es2015/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/auth/es2015/index.js");

    var ProjectsService = /*#__PURE__*/function () {
      function ProjectsService(db, afAuth) {
        _classCallCheck(this, ProjectsService);

        this.db = db;
        this.afAuth = afAuth;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].firebase.databaseURL;
      }

      _createClass(ProjectsService, [{
        key: "add",
        value: function add(project, userId) {
          var projects = this.db.list("projects/".concat(userId));
          return projects.push(project);
        }
      }, {
        key: "addProjects",
        value: function addProjects(projects) {
          var _this5 = this;

          var userId = this.userId;
          projects.forEach(function (project) {
            _this5.db.list("projects/".concat(userId)).push(project);
          });
        }
      }, {
        key: "get",
        value: function get(userId) {
          return this.db.list("projects/".concat(userId)).snapshotChanges();
        }
      }, {
        key: "update",
        value: function update(project, userId) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.db.object("projects/".concat(userId, "/") + project.key).update({
            title: project.title,
            description: project.description,
            photoUrl: project.photoUrl
          }));
        }
      }, {
        key: "delete",
        value: function _delete(project, userId) {
          return this.db.object("projects/".concat(userId, "/") + project.key).remove();
        }
      }, {
        key: "getAllProjects",
        value: function getAllProjects() {
          return this.db.list('projects').snapshotChanges();
        }
      }, {
        key: "userId",
        get: function get() {
          if (this.afAuth.auth.currentUser) {
            return this.afAuth.auth.currentUser.uid;
          }
        }
      }]);

      return ProjectsService;
    }();

    ProjectsService.ɵfac = function ProjectsService_Factory(t) {
      return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]));
    };

    ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProjectsService,
      factory: ProjectsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/projects/store/projects.actions.ts":
  /*!****************************************************!*\
    !*** ./src/app/projects/store/projects.actions.ts ***!
    \****************************************************/

  /*! exports provided: ProjectsActionTypes, ProjectsQuery, ProjectsQueryAll, ProjectsLoaded, ProjectAdded, ProjectEdited, ProjectDeleted, ProjectsError */

  /***/
  function srcAppProjectsStoreProjectsActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsActionTypes", function () {
      return ProjectsActionTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsQuery", function () {
      return ProjectsQuery;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsQueryAll", function () {
      return ProjectsQueryAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsLoaded", function () {
      return ProjectsLoaded;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectAdded", function () {
      return ProjectAdded;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectEdited", function () {
      return ProjectEdited;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectDeleted", function () {
      return ProjectDeleted;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsError", function () {
      return ProjectsError;
    });

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

    var ProjectsQuery = function ProjectsQuery() {
      _classCallCheck(this, ProjectsQuery);

      this.type = ProjectsActionTypes.PROJECTS_QUERY;
    };

    var ProjectsQueryAll = function ProjectsQueryAll() {
      _classCallCheck(this, ProjectsQueryAll);

      this.type = ProjectsActionTypes.PROJECTS_QUERY_ALL;
    };

    var ProjectsLoaded = function ProjectsLoaded(payload) {
      _classCallCheck(this, ProjectsLoaded);

      this.payload = payload;
      this.type = ProjectsActionTypes.PROJECTS_LOADED;
    };

    var ProjectAdded = function ProjectAdded(payload) {
      _classCallCheck(this, ProjectAdded);

      this.payload = payload;
      this.type = ProjectsActionTypes.PROJECT_ADDED;
    };

    var ProjectEdited = function ProjectEdited(payload) {
      _classCallCheck(this, ProjectEdited);

      this.payload = payload;
      this.type = ProjectsActionTypes.PROJECT_EDITED;
    };

    var ProjectDeleted = function ProjectDeleted(payload) {
      _classCallCheck(this, ProjectDeleted);

      this.payload = payload;
      this.type = ProjectsActionTypes.PROJECT_DELETED;
    };

    var ProjectsError = function ProjectsError(payload) {
      _classCallCheck(this, ProjectsError);

      this.payload = payload;
      this.type = ProjectsActionTypes.PROJECTS_ERROR;
    };
    /***/

  },

  /***/
  "./src/app/projects/store/projects.effects.ts":
  /*!****************************************************!*\
    !*** ./src/app/projects/store/projects.effects.ts ***!
    \****************************************************/

  /*! exports provided: ProjectsEffects */

  /***/
  function srcAppProjectsStoreProjectsEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsEffects", function () {
      return ProjectsEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _projects_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./projects.actions */
    "./src/app/projects/store/projects.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/projects.service */
    "./src/app/projects/services/projects.service.ts");
    /* harmony import */


    var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../auth/store/auth.selectors */
    "./src/app/auth/store/auth.selectors.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var ProjectsEffects = function ProjectsEffects(actions$, projectsService, store) {
      var _this6 = this;

      _classCallCheck(this, ProjectsEffects);

      this.actions$ = actions$;
      this.projectsService = projectsService;
      this.store = store;
      this.query$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsActionTypes"].PROJECTS_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            user = _ref2[1];

        return _this6.projectsService.get(user.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
          var projectsData = data.map(function (res) {
            var key = res.payload.key;
            var project = res.payload.val();
            return {
              key: key || null,
              title: project.title || null,
              description: project.description || null,
              photoUrl: project.photoUrl || null
            };
          });
          return new _projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsLoaded"]({
            projects: projectsData
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsError"]({
            error: error
          }));
        }));
      }));
      this.queryAll$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsActionTypes"].PROJECTS_QUERY_ALL), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_ref3) {
        var _ref4 = _toArray(_ref3);

        return _this6.projectsService.getAllProjects().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
          var projectsData = [];
          data.map(function (res) {
            var userKey = res.payload.key;
            var userProjects = res.payload.val();

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
          return new _projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsLoaded"]({
            projects: projectsData
          });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsError"]({
            error: error
          }));
        }));
      }));
      this.added$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsActionTypes"].PROJECT_ADDED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) {
        return action.payload;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            payload = _ref6[0],
            user = _ref6[1];

        return _this6.projectsService.add(payload.project, user.uid);
      }));
      this.delete$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsActionTypes"].PROJECT_DELETED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) {
        return action.payload;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            payload = _ref8[0],
            user = _ref8[1];

        return _this6.projectsService["delete"](payload.project, user.uid);
      }));
      this.edit$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_projects_actions__WEBPACK_IMPORTED_MODULE_2__["ProjectsActionTypes"].PROJECT_EDITED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) {
        return action.payload;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
            payload = _ref10[0],
            user = _ref10[1];

        return _this6.projectsService.update(payload.project, user.uid);
      }));
    };

    ProjectsEffects.ɵfac = function ProjectsEffects_Factory(t) {
      return new (t || ProjectsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
    };

    ProjectsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProjectsEffects,
      factory: ProjectsEffects.ɵfac
    });

    __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(), __metadata("design:type", Object)], ProjectsEffects.prototype, "query$", void 0);

    __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(), __metadata("design:type", Object)], ProjectsEffects.prototype, "queryAll$", void 0);

    __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({
      dispatch: false
    }), __metadata("design:type", Object)], ProjectsEffects.prototype, "added$", void 0);

    __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({
      dispatch: false
    }), __metadata("design:type", Object)], ProjectsEffects.prototype, "delete$", void 0);

    __decorate([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({
      dispatch: false
    }), __metadata("design:type", Object)], ProjectsEffects.prototype, "edit$", void 0);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _services_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectsService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      }, {
        query$: [],
        queryAll$: [],
        added$: [],
        delete$: [],
        edit$: []
      });
    })();
    /***/

  },

  /***/
  "./src/app/projects/store/projects.reducer.ts":
  /*!****************************************************!*\
    !*** ./src/app/projects/store/projects.reducer.ts ***!
    \****************************************************/

  /*! exports provided: projectsReducer */

  /***/
  function srcAppProjectsStoreProjectsReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "projectsReducer", function () {
      return projectsReducer;
    });
    /* harmony import */


    var _projects_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./projects.actions */
    "./src/app/projects/store/projects.actions.ts");
    /* harmony import */


    var _projects_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./projects.state */
    "./src/app/projects/store/projects.state.ts");

    function projectsReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _projects_state__WEBPACK_IMPORTED_MODULE_1__["projectsInitialState"];
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _projects_actions__WEBPACK_IMPORTED_MODULE_0__["ProjectsActionTypes"].PROJECTS_QUERY_ALL:
          {
            return Object.assign({}, state, {
              loading: true
            });
          }

        case _projects_actions__WEBPACK_IMPORTED_MODULE_0__["ProjectsActionTypes"].PROJECTS_QUERY:
          {
            return Object.assign({}, state, {
              loading: true
            });
          }

        case _projects_actions__WEBPACK_IMPORTED_MODULE_0__["ProjectsActionTypes"].PROJECTS_LOADED:
          {
            return Object.assign({}, state, {
              projects: action.payload.projects,
              loading: false
            });
          }

        case _projects_actions__WEBPACK_IMPORTED_MODULE_0__["ProjectsActionTypes"].PROJECTS_ERROR:
          {
            return Object.assign({}, state, {
              loading: false,
              error: action.payload.error
            });
          }

        default:
          return state;
      }
    }
    /***/

  },

  /***/
  "./src/app/projects/store/projects.selectors.ts":
  /*!******************************************************!*\
    !*** ./src/app/projects/store/projects.selectors.ts ***!
    \******************************************************/

  /*! exports provided: getProjectsState, getProjects, getAllLoaded, getError */

  /***/
  function srcAppProjectsStoreProjectsSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getProjectsState", function () {
      return getProjectsState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getProjects", function () {
      return getProjects;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAllLoaded", function () {
      return getAllLoaded;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getError", function () {
      return getError;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var getProjectsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('projects');
    var getProjects = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProjectsState, function (projects) {
      return projects.projects;
    });
    var getAllLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProjectsState, function (projects) {
      return projects.loading;
    });
    var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProjectsState, function (projects) {
      return projects.error;
    });
    /***/
  },

  /***/
  "./src/app/projects/store/projects.state.ts":
  /*!**************************************************!*\
    !*** ./src/app/projects/store/projects.state.ts ***!
    \**************************************************/

  /*! exports provided: projectsInitialState */

  /***/
  function srcAppProjectsStoreProjectsStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "projectsInitialState", function () {
      return projectsInitialState;
    });

    var projectsInitialState = {
      projects: null,
      loading: false,
      error: null
    };
    /***/
  }
}]);
//# sourceMappingURL=projects-projects-module-es5.js.map