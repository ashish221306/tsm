function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/task-view/task-view.component */
    "./src/app/pages/task-view/task-view.component.ts");
    /* harmony import */


    var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/new-list/new-list.component */
    "./src/app/pages/new-list/new-list.component.ts");
    /* harmony import */


    var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/new-task/new-task.component */
    "./src/app/pages/new-task/new-task.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'lists',
      pathMatch: 'full'
    }, {
      path: 'lists',
      component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_2__["TaskViewComponent"]
    }, {
      path: 'lists/:listId',
      component: _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_2__["TaskViewComponent"]
    }, {
      path: 'new-list',
      component: _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_3__["NewListComponent"]
    }, {
      path: 'lists/:listId/new-task',
      component: _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_4__["NewTaskComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Task Manager';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 10,
      vars: 0,
      consts: [[1, "text-center", "info"], [1, "container-fluid"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "task manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "copyright \xA92020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Task Manager | ashishtech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".info[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  background: #000;\n  color: #f1f1f1;\n  padding: 10px;\n  text-shadow: -2px 3px 2px red;\n}\n\nfooter[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #000;\n  color: #f1f1f1;\n  text-align: center;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXHRlY2hhbHR1bVxcYW5ndWxhclxcdGFzay1tYW5hZ2VyXFxmcm9udGVuZDEvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csZ0JBQUE7RUFDQyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFBYyxnQkFBQTtFQUFpQixjQUFBO0VBQWUsa0JBQUE7RUFBbUIsZ0JBQUE7QUNNckUiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3tcclxuICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIHRleHQtc2hhZG93OiAtMnB4IDNweCAycHggcmVkO1xyXG59XHJcbmZvb3RlcntcclxuICAgIHBhZGRpbmc6IDEwcHg7YmFja2dyb3VuZDogIzAwMDtjb2xvcjogI2YxZjFmMTt0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luLXRvcDogMjBweDtcclxuICAgIFxyXG59IiwiLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2YxZjFmMTtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1zaGFkb3c6IC0ycHggM3B4IDJweCByZWQ7XG59XG5cbmZvb3RlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/task-view/task-view.component */
    "./src/app/pages/task-view/task-view.component.ts");
    /* harmony import */


    var _task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./task.service */
    "./src/app/task.service.ts");
    /* harmony import */


    var _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/new-list/new-list.component */
    "./src/app/pages/new-list/new-list.component.ts");
    /* harmony import */


    var _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/new-task/new-task.component */
    "./src/app/pages/new-task/new-task.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__["TaskViewComponent"], _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_7__["NewListComponent"], _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__["NewTaskComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__["TaskViewComponent"], _pages_new_list_new_list_component__WEBPACK_IMPORTED_MODULE_7__["NewListComponent"], _pages_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__["NewTaskComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/new-list/new-list.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/new-list/new-list.component.ts ***!
    \******************************************************/

  /*! exports provided: NewListComponent */

  /***/
  function srcAppPagesNewListNewListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewListComponent", function () {
      return NewListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/task.service */
    "./src/app/task.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NewListComponent = /*#__PURE__*/function () {
      function NewListComponent(taskService, router) {
        _classCallCheck(this, NewListComponent);

        this.taskService = taskService;
        this.router = router;
      }

      _createClass(NewListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addList",
        value: function addList(value) {
          var _this = this;

          if (!value) {
            alert('please write your list title');
            return;
          } else if (value.length < 3) {
            alert('title should be atleat of 3 letters ');
            return;
          }

          this.taskService.createList(value).subscribe(function (list) {
            return _this.router.navigate(['/lists', list._id]);
          });
        }
      }]);

      return NewListComponent;
    }();

    NewListComponent.ɵfac = function NewListComponent_Factory(t) {
      return new (t || NewListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NewListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewListComponent,
      selectors: [["app-new-list"]],
      decls: 10,
      vars: 0,
      consts: [[1, "centered-content"], [1, "modal-box", "form-group"], [1, "title"], ["type", "text", "placeholder", "ENter list name", 1, "form-control", "has-background-light"], ["listInput", ""], ["routerLink", "/", 1, "btn", "btn-primary"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]],
      template: function NewListComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create a New List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewListComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.addList(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".centered-content[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #f1f1f1;\n}\n\n.modal-box.form-group[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 10px;\n  margin: auto;\n  width: 400px;\n  box-shadow: 5px 5px 8px 4px rgba(0, 0, 0, 0.7), -5px -5px 8px 4px rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3LWxpc3QvRjpcXHRlY2hhbHR1bVxcYW5ndWxhclxcdGFzay1tYW5hZ2VyXFxmcm9udGVuZDEvc3JjXFxhcHBcXHBhZ2VzXFxuZXctbGlzdFxcbmV3LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25ldy1saXN0L25ldy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWtCLFVBQUE7RUFBVSxZQUFBO0FDRzVCOztBREZBO0VBQUssV0FBQTtBQ01MOztBRE5rQjtFQUFLLFdBQUE7QUNVdkI7O0FEVEE7RUFBRyxjQUFBO0FDYUg7O0FEWkE7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQWEsWUFBQTtFQUNiLG9GQUFBO0FDZUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXctbGlzdC9uZXctbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZC1jb250ZW50e3dpZHRoOjgwJTttYXJnaW46YXV0b31cclxuLmJ0bnttYXJnaW46IDVweDt9LmJ0bnttYXJnaW46IDVweDt9XHJcbmgze2NvbG9yOiAjZjFmMWYxO31cclxuLm1vZGFsLWJveC5mb3JtLWdyb3Vwe1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogYXV0bzt3aWR0aDogNDAwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDhweCA0cHggcmdiYSgwLDAsMCwwLjcpLC01cHggLTVweCA4cHggNHB4IHJnYmEoMCwwLDAsMC4zKTtcclxufSIsIi5jZW50ZXJlZC1jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5idG4ge1xuICBtYXJnaW46IDVweDtcbn1cblxuaDMge1xuICBjb2xvcjogI2YxZjFmMTtcbn1cblxuLm1vZGFsLWJveC5mb3JtLWdyb3VwIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNDAwcHg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNyksIC01cHggLTVweCA4cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-list',
          templateUrl: './new-list.component.html',
          styleUrls: ['./new-list.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/new-task/new-task.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/new-task/new-task.component.ts ***!
    \******************************************************/

  /*! exports provided: NewTaskComponent */

  /***/
  function srcAppPagesNewTaskNewTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function () {
      return NewTaskComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/task.service */
    "./src/app/task.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NewTaskComponent = /*#__PURE__*/function () {
      function NewTaskComponent(taskService, router, route) {
        var _this2 = this;

        _classCallCheck(this, NewTaskComponent);

        this.taskService = taskService;
        this.router = router;
        this.route = route;
        this.route.params.subscribe(function (params) {
          return _this2.listId = params.listId;
        });
      }

      _createClass(NewTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addTask",
        value: function addTask(value) {
          var _this3 = this;

          if (!value) {
            alert('please write your task title');
            return;
          } else if (value.length < 3) {
            alert('title should be atleat of 3 letters ');
            return;
          }

          this.taskService.createTask(this.listId, value).subscribe(function (task) {
            _this3.router.navigate(['../'], {
              relativeTo: _this3.route
            });

            console.log(task);
          });
        }
      }]);

      return NewTaskComponent;
    }();

    NewTaskComponent.ɵfac = function NewTaskComponent_Factory(t) {
      return new (t || NewTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    NewTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewTaskComponent,
      selectors: [["app-new-task"]],
      decls: 10,
      vars: 0,
      consts: [[1, "centered-content"], [1, "modal-box", "form-group"], [1, "title"], ["type", "text", "placeholder", "ENter list name", "required", "", 1, "form-control", "has-background-light"], ["taskInput", ""], ["routerLink", "../", 1, "btn", "btn-primary"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"]],
      template: function NewTaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create a New Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewTaskComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            return ctx.addTask(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".btn[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #f1f1f1;\n}\n\n.modal-box.form-group[_ngcontent-%COMP%] {\n  border: 1px solid #ce1717;\n  padding: 20px;\n  border-radius: 20px;\n  margin: auto;\n  width: 400px;\n  box-shadow: 5px 5px 8px 4px rgba(0, 0, 0, 0.7), -5px -5px 8px 4px rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3LXRhc2svRjpcXHRlY2hhbHR1bVxcYW5ndWxhclxcdGFzay1tYW5hZ2VyXFxmcm9udGVuZDEvc3JjXFxhcHBcXHBhZ2VzXFxuZXctdGFza1xcbmV3LXRhc2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25ldy10YXNrL25ldy10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUssV0FBQTtBQ0VMOztBRERBO0VBQUcsY0FBQTtBQ0tIOztBREpBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQWEsWUFBQTtFQUNiLG9GQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXctdGFzay9uZXctdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG57bWFyZ2luOiA1cHg7fVxyXG5oM3tjb2xvcjogI2YxZjFmMTt9XHJcbi5tb2RhbC1ib3guZm9ybS1ncm91cHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDYsIDIzLCAyMyk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bzt3aWR0aDogNDAwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDhweCA0cHggcmdiYSgwLDAsMCwwLjcpLC01cHggLTVweCA4cHggNHB4IHJnYmEoMCwwLDAsMC4zKTtcclxufSIsIi5idG4ge1xuICBtYXJnaW46IDVweDtcbn1cblxuaDMge1xuICBjb2xvcjogI2YxZjFmMTtcbn1cblxuLm1vZGFsLWJveC5mb3JtLWdyb3VwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlMTcxNztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNDAwcHg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNyksIC01cHggLTVweCA4cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-task',
          templateUrl: './new-task.component.html',
          styleUrls: ['./new-task.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/task-view/task-view.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/task-view/task-view.component.ts ***!
    \********************************************************/

  /*! exports provided: TaskViewComponent */

  /***/
  function srcAppPagesTaskViewTaskViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskViewComponent", function () {
      return TaskViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/task.service */
    "./src/app/task.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["/lists", a1];
    };

    function TaskViewComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskViewComponent_a_6_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var list_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.deleteList(list_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, list_r3._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", list_r3.title, " ");
      }
    }

    function TaskViewComponent_b_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No task in this list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TaskViewComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskViewComponent_div_14_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var task_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onTaskClick(task_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskViewComponent_div_14_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var task_r6 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.deleteTask(task_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "X");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var task_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete", task_r6.completed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r6.title, " ");
      }
    }

    var TaskViewComponent = /*#__PURE__*/function () {
      function TaskViewComponent(taskService, route, router) {
        _classCallCheck(this, TaskViewComponent);

        this.taskService = taskService;
        this.route = route;
        this.router = router;
        this.lists = [];
        this.tasks = [];
      }

      _createClass(TaskViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.taskService.getLists().subscribe(function (lists) {
            return _this4.lists = lists;
          });
          this.route.params.subscribe(function (params) {
            _this4.listId = params.listId;
            console.log(_this4.listId);
            if (!_this4.listId) return;

            _this4.taskService.getTasks(_this4.listId).subscribe(function (tasks) {
              _this4.tasks = tasks; //for no task in the list

              if (tasks.length == 0) {
                _this4.taskLength = false;
              } else {
                _this4.taskLength = true;
              } //


              console.log('this is tasks:' + _this4.tasks);
            });
          });
        }
      }, {
        key: "onTaskClick",
        value: function onTaskClick(task) {
          this.taskService.setCompleted(this.listId, task).subscribe(function () {
            return task.completed = !task.completed;
          });
          console.log(this.listId);
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(task) {
          var _this5 = this;

          console.log(task);
          this.taskService.deleteTask(this.listId, task._id).subscribe(function (task) {
            return _this5.tasks = _this5.tasks.filter(function (t) {
              return t._id != task._id;
            });
          });
        }
      }, {
        key: "deleteList",
        value: function deleteList(list) {
          var _this6 = this;

          this.taskService.deleteList(list._id).subscribe(function () {
            return _this6.lists = _this6.lists.filter(function (l) {
              return l._id != list._id;
            });
          });
        }
      }, {
        key: "addTaskClick",
        value: function addTaskClick() {
          if (!this.listId) {
            alert('Please Select a List to Add Task');
            console.log(this.listId);
            return;
          }

          this.router.navigate(['./new-task'], {
            relativeTo: this.route
          });
        }
      }]);

      return TaskViewComponent;
    }();

    TaskViewComponent.ɵfac = function TaskViewComponent_Factory(t) {
      return new (t || TaskViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    TaskViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TaskViewComponent,
      selectors: [["app-task-view"]],
      decls: 17,
      vars: 3,
      consts: [[1, "centered-content", "pd"], [1, "task-manager-container"], [1, "sidebar"], [1, "title", "has-text-primary"], [1, "list-menu"], ["class", "list-menu-item", "routerLinkActive", "is-active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLink", "/new-list", 1, "listbtn", "btn", "btn-primary", "btn-rounded-corner"], [1, "task-list-container"], ["style", "color: #f1f1f1;", 4, "ngIf"], [1, "taskview"], ["class", "task", 3, "complete", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "add-button", 3, "click"], ["routerLinkActive", "is-active", 1, "list-menu-item", 3, "routerLink"], [1, "white-text"], ["title", "delete", 1, "btn-danger", "pull-right", "task-delete", "btn-rounded-corner", 3, "click"], [2, "color", "#f1f1f1"], [1, "task", 3, "click"]],
      template: function TaskViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lists ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskViewComponent_a_6_Template, 5, 4, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Tasks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskViewComponent_b_12_Template, 2, 0, "b", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TaskViewComponent_div_14_Template, 5, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskViewComponent_Template_button_click_15_listener() {
            return ctx.addTaskClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Add task ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lists);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.taskLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Lato&display=swap\");\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  background: linear-gradient(blue, green);\n  background-size: cover;\n  background-position: center;\n  font-family: roboto, \"sans-serif\";\n}\n.centered-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.white-text[_ngcontent-%COMP%] {\n  color: #f1f1f1;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #100a1d;\n  border-left: 1px solid #ddd;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: l #f1f1f1;\n  border-radius: 20px;\n}\n.task-manager-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  max-width: 900px;\n  max-height: 500px;\n}\n.listbtn[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n  background: #201d1d;\n  padding: 42px;\n  border-radius: 8px 0px 0px 8px;\n}\n.sidebar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], h1[_ngcontent-%COMP%] {\n  color: #f1f1f1;\n  border-bottom: 2px solid green;\n}\n.task-list-container[_ngcontent-%COMP%] {\n  background: #110f0f;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  overflow: auto;\n  padding: 42px;\n  border-radius: 0px 8px 8px 0px;\n}\n.taskview[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n  margin-bottom: 20px;\n}\n.task-list-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #f1f1f1;\n}\n.list-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n  margin-bottom: 20px;\n  flex-grow: 1;\n  height: 100%;\n  overflow: auto;\n}\n.list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 15px;\n  border-radius: 5px;\n  width: 100%;\n  margin-bottom: 5px;\n}\n.list-menu[_ngcontent-%COMP%]   .list-menu-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  width: 100%;\n}\n.list-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #100a1d;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: linear-gradient(#f1f1f1, #000);\n  border-radius: 20px;\n}\n.task[_ngcontent-%COMP%] {\n  height: 50px;\n  padding: 15px 20px;\n  margin-top: 10px;\n  border-radius: 5px;\n  transition: box-shadow 0.5s ease, transform 0.3s ease;\n}\n.task[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.taskview[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #100a1d;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: linear-gradient(#f1f1f1, #000);\n  border-radius: 20px;\n}\n.circle-add-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 35px;\n  right: 35px;\n  height: 50px;\n  width: 50px;\n  border: none;\n  border-radius: 50%;\n}\n.add-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 35px;\n  right: 35px;\n  border: none;\n  border-radius: 5px;\n}\n.btn-rounded-corner[_ngcontent-%COMP%] {\n  border-radius: 25px;\n}\n.task[_ngcontent-%COMP%] {\n  background: #201d1d;\n  box-sizing: border-box;\n}\n.task[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n.task[_ngcontent-%COMP%]:hover {\n  border: 1px solid #726c6c;\n}\n.completed[_ngcontent-%COMP%] {\n  background: green;\n}\n.pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.task-delete[_ngcontent-%COMP%] {\n  padding: 0px 5px;\n}\n.task-delete[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.has-background-light[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n}\n.is-primary[_ngcontent-%COMP%] {\n  background: #276dd7;\n}\n.is-active[_ngcontent-%COMP%] {\n  background: #000;\n}\n@media screen and (max-width: 600px) {\n  .sidebar[_ngcontent-%COMP%] {\n    padding: 5px;\n    border: none;\n    outline: none;\n    width: 50%;\n  }\n\n  .task-list-container[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 5px;\n    border: none;\n    outline: none;\n  }\n\n  .task-manager-container[_ngcontent-%COMP%] {\n    padding: 0;\n    margin: 0;\n  }\n\n  .list-menu[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    padding-top: 4px;\n    overflow: auto;\n  }\n\n  .list-menu-item[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n  }\n\n  .task[_ngcontent-%COMP%] {\n    margin: 5px;\n    padding: 5px;\n  }\n\n  .add-button[_ngcontent-%COMP%] {\n    bottom: 5px;\n    right: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFzay12aWV3L0Y6XFx0ZWNoYWx0dW1cXGFuZ3VsYXJcXHRhc2stbWFuYWdlclxcZnJvbnRlbmQxL3NyY1xcbWFpbi5zY3NzIiwic3JjL2FwcC9wYWdlcy90YXNrLXZpZXcvdGFzay12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90YXNrLXZpZXcvRjpcXHRlY2hhbHR1bVxcYW5ndWxhclxcdGFzay1tYW5hZ2VyXFxmcm9udGVuZDEvc3JjXFxhcHBcXHBhZ2VzXFx0YXNrLXZpZXdcXHRhc2stdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RUFBQTtBQVVSO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0FDUko7QURjQTtFQUNFLGFBQUE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNYSjtBRGNBO0VBQVksY0FBQTtBQ1ZaO0FEWUE7RUFBcUIsVUFBQTtBQ1JyQjtBRFVBO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtBQ1BKO0FEU0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FDTko7QUNoQ0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEbUNKO0FDaENBO0VBQVMsZ0JBQUE7QURvQ1Q7QUNuQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFHQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QURvQ0o7QUNqQ0E7RUFBZSxjQUFBO0VBQWUsOEJBQUE7QURzQzlCO0FDbkNBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0FEcUNKO0FDbkNBO0VBQVUsY0FBQTtFQUFlLFlBQUE7RUFBYSxtQkFBQTtBRHlDdEM7QUN2Q0E7RUFBNEIsY0FBQTtBRDJDNUI7QUN6Q0E7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFnQkosY0FBQTtBRDRCQTtBQzFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7QUQyQ0o7QUMxQ0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBRDRDUjtBQ3RDQTtFQUErQixVQUFBO0FEMEMvQjtBQ3hDQTtFQUNJLG1CQUFBO0FEMkNKO0FDeENBO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtBRDJDSjtBQ3hDQTtFQUVJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxxREFBQTtBRHlDSjtBQ3RDQTtFQUNJLGVBQUE7QUR5Q0o7QUN2Q0E7RUFBOEIsVUFBQTtBRDJDOUI7QUN6Q0E7RUFDSSxtQkFBQTtBRDRDSjtBQ3pDQTtFQUNJLDBDQUFBO0VBQ0EsbUJBQUE7QUQ0Q0o7QUN6Q0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUQ0Q0o7QUN4Q0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEMkNKO0FDekNBO0VBQ0ksbUJBQUE7QUQ0Q0o7QUMxQ0E7RUFJSSxtQkFBQTtFQUNBLHNCQUFBO0FEMENKO0FDOUNJO0VBQ0ksV0FBQTtBRGdEUjtBQzFDQTtFQUNJLHlCQUFBO0FENkNKO0FDM0NBO0VBQ0ksaUJBQUE7QUQ4Q0o7QUM1Q0E7RUFDSSxZQUFBO0FEK0NKO0FDN0NBO0VBQ0ksZ0JBQUE7QURnREo7QUM5Q0E7RUFDQSxVQUFBO0FEaURBO0FDL0NBO0VBQ0ksbUJGM0lHO0FDNkxQO0FDaERBO0VBQVksbUJGaEpOO0FDb01OO0FDbERBO0VBQ0ksZ0JBQUE7QURxREo7QUNsREE7RUFDSTtJQUNJLFlBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7RURxRE47O0VDbkRFO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFRHNETjs7RUNwREU7SUFFSSxVQUFBO0lBQ0EsU0FBQTtFRHNETjs7RUNwREU7SUFDSSxTQUFBO0lBQVUsVUFBQTtJQUFXLGdCQUFBO0lBQWlCLGNBQUE7RUQwRDVDOztFQ3ZERTtJQUNJLFNBQUE7SUFBVSxVQUFBO0lBQVcsa0JBQUE7RUQ0RDNCOztFQzNERTtJQUNJLFdBQUE7SUFBVyxZQUFBO0VEK0RqQjs7RUM3REU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtFRGdFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFzay12aWV3L3Rhc2stdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwJyk7XHJcbiR0dXJxdW9pc2U6IzQ0ZGRkMDtcclxuJGJsdWU6IzI3NmRkNztcclxuJGRhcmstYmx1ZTojMTk4NWU0O1xyXG4kZGFuZ2VyOiNlMjdlN2U7XHJcbiRsaWdodDojZjRmNGY0O1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6J051bml0bycsJ3NhbnMtc2VyaWYnO1xyXG4kcHJpbWFyeTokYmx1ZTtcclxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOjJweDtcclxuXHJcbmh0bWwsYm9keXtcclxubWFyZ2luOiAwO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoYmx1ZSxncmVlbik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bywnc2Fucy1zZXJpZic7XHJcbiAgXHJcbiAgICBcclxuICBcclxufVxyXG5cclxuLmNlbnRlcmVkLWNvbnRlbnR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG59XHJcbi53aGl0ZS10ZXh0e2NvbG9yOiAjZjFmMWYxO31cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge3dpZHRoOjBweH1cclxuICAgICAgICBcclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFja3tcclxuICAgIGJhY2tncm91bmQ6IzEwMGExZDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZH1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XHJcbiAgICBiYWNrZ3JvdW5kOmwjZjFmMWYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpdGRoOjYwMHB4KXtcclxuICAgIFxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwXCIpO1xuaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGJsdWUsIGdyZWVuKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBmb250LWZhbWlseTogcm9ib3RvLCBcInNhbnMtc2VyaWZcIjtcbn1cblxuLmNlbnRlcmVkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLndoaXRlLXRleHQge1xuICBjb2xvcjogI2YxZjFmMTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjMTAwYTFkO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGQ7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiBsICNmMWYxZjE7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi50YXNrLW1hbmFnZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5saXN0YnRuIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnNpZGViYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjAxZDFkO1xuICBwYWRkaW5nOiA0MnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHggMHB4IDBweCA4cHg7XG59XG5cbi5zaWRlYmFyIGgxLCBoMSB7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JlZW47XG59XG5cbi50YXNrLWxpc3QtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzExMGYwZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiA0MnB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggOHB4IDhweCAwcHg7XG59XG5cbi50YXNrdmlldyB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50YXNrLWxpc3QtY29udGFpbmVyIC50aXRsZSB7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4ubGlzdC1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZmxleC1ncm93OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmxpc3QtbWVudSAubGlzdC1tZW51LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5saXN0LW1lbnUgLmxpc3QtbWVudS1pdGVtIHAge1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5saXN0LW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDRweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICMxMDBhMWQ7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2YxZjFmMSwgIzAwMCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi50YXNrIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi50YXNrID4gcCA+IHNwYW46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrdmlldzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogIzEwMGExZDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZjFmMWYxLCAjMDAwKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmNpcmNsZS1hZGQtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDM1cHg7XG4gIHJpZ2h0OiAzNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmFkZC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMzVweDtcbiAgcmlnaHQ6IDM1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnRuLXJvdW5kZWQtY29ybmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnRhc2sge1xuICBiYWNrZ3JvdW5kOiAjMjAxZDFkO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnRhc2sgcCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4udGFzazpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MjZjNmM7XG59XG5cbi5jb21wbGV0ZWQge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbn1cblxuLnB1bGwtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50YXNrLWRlbGV0ZSB7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG59XG5cbi50YXNrLWRlbGV0ZTpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5oYXMtYmFja2dyb3VuZC1saWdodCB7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG59XG5cbi5pcy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzI3NmRkNztcbn1cblxuLmlzLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gIC50YXNrLWxpc3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIC50YXNrLW1hbmFnZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5saXN0LW1lbnUge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAubGlzdC1tZW51LWl0ZW0ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxuXG4gIC50YXNrIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuICAuYWRkLWJ1dHRvbiB7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9tYWluLnNjc3MnO1xyXG4udGFzay1tYW5hZ2VyLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgXHJcbn1cclxuLmxpc3RidG57bWFyZ2luLXRvcDogMTZweDt9XHJcbi5zaWRlYmFye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBcclxuICAgIFxyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyMDFkMWQ7XHJcbiAgICBwYWRkaW5nOiA0MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDBweCAwcHggOHB4O1xyXG59XHJcblxyXG4uc2lkZWJhciBoMSxoMXtjb2xvcjogI2YxZjFmMTtib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JlZW47fVxyXG5cclxuXHJcbi50YXNrLWxpc3QtY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogIzExMGYwZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDQycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggOHB4IDhweCAwcHg7XHJcbn1cclxuLnRhc2t2aWV3e292ZXJmbG93OiBhdXRvO2hlaWdodDogMTAwJTttYXJnaW4tYm90dG9tOiAyMHB4O31cclxuXHJcbi50YXNrLWxpc3QtY29udGFpbmVyIC50aXRsZXtjb2xvcjogI2YxZjFmMTt9XHJcblxyXG4ubGlzdC1tZW51e1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuLmxpc3QtbWVudS1pdGVte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxub3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmxpc3QtbWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge3dpZHRoOjRweDt9XHJcbiAgICAgICAgXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kOiMxMDBhMWQ7XHJcbiAgICB9XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoI2YxZjFmMSwjMDAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxufVxyXG5cclxuLnRhc2t7XHJcbiAgICBcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246Ym94LXNoYWRvdyAuNXMgZWFzZSwgdHJhbnNmb3JtIC4zcyBlYXNlO1xyXG4gICAgXHJcbn1cclxuLnRhc2s+cD5zcGFuOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50YXNrdmlldzo6LXdlYmtpdC1zY3JvbGxiYXIge3dpZHRoOjRweDt9XHJcbiAgICAgICAgXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XHJcbiAgICBiYWNrZ3JvdW5kOiMxMDBhMWQ7XHJcbiAgICB9XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoI2YxZjFmMSwjMDAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxufVxyXG5cclxuLmNpcmNsZS1hZGQtYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAzNXB4O1xyXG4gICAgcmlnaHQ6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbn1cclxuXHJcbi5hZGQtYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAzNXB4O1xyXG4gICAgcmlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmJ0bi1yb3VuZGVkLWNvcm5lcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLnRhc2t7XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgYmFja2dyb3VuZDogIzIwMWQxZDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBcclxufVxyXG4udGFzazpob3ZlcntcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmdiKDExNCwgMTA4LCAxMDgpXHJcbn1cclxuLmNvbXBsZXRlZHtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG59XHJcbi5wdWxsLXJpZ2h0e1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbn1cclxuLnRhc2stZGVsZXRle1xyXG4gICAgcGFkZGluZzogMHB4IDVweDtcclxufVxyXG4udGFzay1kZWxldGU6aG92ZXJ7XHJcbmNvbG9yOiByZWQ7XHJcbn1cclxuLmhhcy1iYWNrZ3JvdW5kLWxpZ2h0e1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0O1xyXG59XHJcbi5pcy1wcmltYXJ5e2JhY2tncm91bmQ6ICRwcmltYXJ5O31cclxuXHJcbi5pcy1hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAgIC5zaWRlYmFye1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgLnRhc2stbGlzdC1jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudGFzay1tYW5hZ2VyLWNvbnRhaW5lcntcclxuICAgICAgIFxyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmxpc3QtbWVudXtcclxuICAgICAgICBtYXJnaW46IDA7cGFkZGluZzogMDtwYWRkaW5nLXRvcDogNHB4O292ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0LW1lbnUtaXRlbXtcclxuICAgICAgICBtYXJnaW46IDA7cGFkZGluZzogMDtvdmVyZmxvdy14OiBoaWRkZW47ICAgIH1cclxuICAgIC50YXNre1xyXG4gICAgICAgIG1hcmdpbjo1cHg7cGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgLmFkZC1idXR0b257XHJcbiAgICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-task-view',
          templateUrl: './task-view.component.html',
          styleUrls: ['./task-view.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/task.service.ts":
  /*!*********************************!*\
    !*** ./src/app/task.service.ts ***!
    \*********************************/

  /*! exports provided: TaskService */

  /***/
  function srcAppTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskService", function () {
      return TaskService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _web_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./web.service */
    "./src/app/web.service.ts");

    var TaskService = /*#__PURE__*/function () {
      function TaskService(webService) {
        _classCallCheck(this, TaskService);

        this.webService = webService;
      }

      _createClass(TaskService, [{
        key: "getLists",
        value: function getLists() {
          return this.webService.get('lists');
        }
      }, {
        key: "createList",
        value: function createList(title) {
          return this.webService.post('lists', {
            title: title
          });
        }
      }, {
        key: "getTasks",
        value: function getTasks(listId) {
          return this.webService.get("lists/".concat(listId, "/tasks"));
        }
      }, {
        key: "createTask",
        value: function createTask(listId, title) {
          return this.webService.post("lists/".concat(listId, "/tasks"), {
            title: title
          });
        }
      }, {
        key: "deleteList",
        value: function deleteList(listId) {
          return this.webService["delete"]("lists/".concat(listId));
        }
      }, {
        key: "deleteTask",
        value: function deleteTask(listId, taskId) {
          return this.webService["delete"]("lists/".concat(listId, "/tasks/").concat(taskId));
        }
      }, {
        key: "setCompleted",
        value: function setCompleted(listId, task) {
          return this.webService.patch("lists/".concat(listId, "/tasks/").concat(task._id), {
            completed: !task.completed
          });
        }
      }]);

      return TaskService;
    }();

    TaskService.ɵfac = function TaskService_Factory(t) {
      return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_service__WEBPACK_IMPORTED_MODULE_1__["WebService"]));
    };

    TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TaskService,
      factory: TaskService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _web_service__WEBPACK_IMPORTED_MODULE_1__["WebService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/web.service.ts":
  /*!********************************!*\
    !*** ./src/app/web.service.ts ***!
    \********************************/

  /*! exports provided: WebService */

  /***/
  function srcAppWebServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebService", function () {
      return WebService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var WebService = /*#__PURE__*/function () {
      function WebService(http) {
        _classCallCheck(this, WebService);

        this.http = http;
        this.ROOT_URL = 'http://localhost:3000';
      }

      _createClass(WebService, [{
        key: "get",
        value: function get(uri) {
          return this.http.get("".concat(this.ROOT_URL, "/").concat(uri));
        }
      }, {
        key: "post",
        value: function post(uri, payload) {
          return this.http.post("".concat(this.ROOT_URL, "/").concat(uri), payload);
        }
      }, {
        key: "patch",
        value: function patch(uri, payload) {
          return this.http.patch("".concat(this.ROOT_URL, "/").concat(uri), payload);
        }
      }, {
        key: "delete",
        value: function _delete(uri) {
          return this.http["delete"]("".concat(this.ROOT_URL, "/").concat(uri));
        }
      }]);

      return WebService;
    }();

    WebService.ɵfac = function WebService_Factory(t) {
      return new (t || WebService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    WebService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WebService,
      factory: WebService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\techaltum\angular\task-manager\frontend1\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map