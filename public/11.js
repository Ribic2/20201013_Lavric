(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/Admin/VideoPanel.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/pages/Admin/VideoPanel.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Service_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Service/Api */ "./resources/js/App/Service/Api.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "VideoPanel.vue",
  components: {
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      Videos: [],
      Headers: [{
        text: 'Id',
        value: 'id'
      }, {
        text: 'VideoTitle',
        value: 'videoTitle'
      }, {
        text: 'Video description',
        value: 'videoDescription'
      }, {
        text: 'Video link',
        value: 'videoLink'
      }, {
        text: 'Delete',
        value: 'delete',
        sortable: false
      }, {
        text: 'Edit',
        value: 'edit',
        sortable: false
      }]
    };
  },
  methods: {
    getVideos: function getVideos() {
      var _this = this;

      _Service_Api__WEBPACK_IMPORTED_MODULE_0__["default"].getVideos().then(function (response) {
        _this.Videos = response.data.response;
      });
    }
  },
  mounted: function mounted() {
    this.getVideos();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/Admin/VideoPanel.vue?vue&type=template&id=52062000&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/pages/Admin/VideoPanel.vue?vue&type=template&id=52062000&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-row",
    [
      _c(
        "v-col",
        { attrs: { cols: "12" } },
        [
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: {
              items: _vm.Videos,
              headers: _vm.Headers,
              "item-key": "name"
            },
            scopedSlots: _vm._u([
              {
                key: "body",
                fn: function(props) {
                  return [
                    _c("draggable", {
                      attrs: { list: props.items, tag: "tbody" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "body",
                            fn: function(props) {
                              return [
                                _c(
                                  "draggable",
                                  {
                                    attrs: { list: props.items, tag: "tbody" }
                                  },
                                  _vm._l(_vm.Videos, function(user) {
                                    return _c("tr", [
                                      _c(
                                        "td",
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "page__grab-icon",
                                              attrs: { small: "" }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        mdi-arrow-all\n                                    "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(" " + _vm._s(user.id) + " ")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c(
                                            "v-icon",
                                            { attrs: { small: "" } },
                                            [
                                              _vm._v(
                                                "\n                                        mdi-pencil\n                                    "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ])
                                  }),
                                  0
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    })
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/App/pages/Admin/VideoPanel.vue":
/*!*****************************************************!*\
  !*** ./resources/js/App/pages/Admin/VideoPanel.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoPanel_vue_vue_type_template_id_52062000_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPanel.vue?vue&type=template&id=52062000&scoped=true& */ "./resources/js/App/pages/Admin/VideoPanel.vue?vue&type=template&id=52062000&scoped=true&");
/* harmony import */ var _VideoPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoPanel.vue?vue&type=script&lang=js& */ "./resources/js/App/pages/Admin/VideoPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VideoPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoPanel_vue_vue_type_template_id_52062000_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VideoPanel_vue_vue_type_template_id_52062000_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "52062000",
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VCol"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__["VDataTable"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/App/pages/Admin/VideoPanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/App/pages/Admin/VideoPanel.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/App/pages/Admin/VideoPanel.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/Admin/VideoPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/App/pages/Admin/VideoPanel.vue?vue&type=template&id=52062000&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/App/pages/Admin/VideoPanel.vue?vue&type=template&id=52062000&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPanel_vue_vue_type_template_id_52062000_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPanel.vue?vue&type=template&id=52062000&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/Admin/VideoPanel.vue?vue&type=template&id=52062000&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPanel_vue_vue_type_template_id_52062000_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPanel_vue_vue_type_template_id_52062000_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);