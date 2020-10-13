(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/Components/responseDialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/Components/responseDialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "responseDialog.vue"
});

/***/ }),

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
/* harmony import */ var _Components_responseDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/responseDialog */ "./resources/js/App/Components/responseDialog.vue");
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
  components: {
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_1___default.a,
    responseDialog: _Components_responseDialog__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  name: "VideoPanel.vue",
  data: function data() {
    return {
      Videos: [],
      Headers: [{
        text: 'VideoTitle',
        value: 'videoTitle',
        sortable: false
      }, {
        text: 'Video description',
        value: 'videoDescription',
        sortable: false
      }, {
        text: 'Video link',
        value: 'videoLink',
        sortable: false
      }, {
        text: 'Delete',
        value: 'delete',
        sortable: false
      }, {
        text: 'Edit',
        value: 'edit',
        sortable: false
      }],
      dialog: false,
      // edit
      videoTitle: '',
      videoDescription: '',
      videoLink: '',
      // Add image
      videoImage: null,
      newVideoTitle: '',
      newVideoDescription: '',
      newVideoLink: '',
      newVideoApiTitle: ''
    };
  },
  methods: {
    getVideos: function getVideos() {
      var _this = this;

      _Service_Api__WEBPACK_IMPORTED_MODULE_0__["default"].getVideos().then(function (response) {
        _this.Videos = response.data.response;
      });
    },
    onEnd: function onEnd(evt) {
      var oldIndex = evt.oldIndex + 1;
      var newIndex = evt.newIndex + 1;
      _Service_Api__WEBPACK_IMPORTED_MODULE_0__["default"].changeVideoSequence(oldIndex, newIndex);
    },
    // Delete item
    deleteItem: function deleteItem(id) {
      var _this2 = this;

      _Service_Api__WEBPACK_IMPORTED_MODULE_0__["default"].deleteVideo(id).then(function (response) {
        _this2.getVideos();

        _this2.$store.state.response = true;
        _this2.$store.state.responseColor = "green";
        _this2.$store.state.responseText = response.data.response;
        _this2.$store.state.responseIcon = "mdi-thumb-up";
      })["catch"](function (err) {
        _this2.getVideos();

        _this2.$store.state.response = true;
        _this2.$store.state.responseColor = "red";
        _this2.$store.state.responseText = err.response.data.message;
        _this2.$store.state.responseIcon = "mdi-thumb-down";
      });
    },
    // Edit video
    editVideo: function editVideo(video) {
      this.videoDescription = video.videoDescription;
      this.videoLink = video.videoLink;
      this.videoTitle = video.videoTitle;
      this.id = video.id;
    },
    // Updates video
    updateVideo: function updateVideo(id) {
      var _this3 = this;

      _Service_Api__WEBPACK_IMPORTED_MODULE_0__["default"].modifyVideo(id, this.videoTitle, this.videoDescription, this.videoLink).then(function (response) {
        _this3.$store.state.response = true;
        _this3.$store.state.responseColor = "green";
        _this3.$store.state.responseText = response.data.response;
        _this3.$store.state.responseIcon = "mdi-thumb-up";

        _this3.getVideos();
      })["catch"](function (err) {
        _this3.getVideos();

        _this3.$store.state.response = true;
        _this3.$store.state.responseColor = "red";
        _this3.$store.state.responseText = err.response.data.message;
        _this3.$store.state.responseIcon = "mdi-thumb-down";
      });
    },
    // Adds new items
    addItem: function addItem() {
      var _this4 = this;

      var data = new FormData();
      data.append('image', this.videoImage);
      data.append('videoTitle', this.newVideoTitle);
      data.append('videoDescription', this.newVideoDescription);
      data.append('videoApiTitle', this.newVideoApiTitle);
      data.append('videoLink', this.newVideoLink);
      _Service_Api__WEBPACK_IMPORTED_MODULE_0__["default"].addVideo(data).then(function (response) {
        _this4.$store.state.response = true;
        _this4.$store.state.responseColor = "green";
        _this4.$store.state.responseText = response.data.response;
        _this4.$store.state.responseIcon = "mdi-thumb-up";

        _this4.getVideos();
      })["catch"](function (err) {
        _this4.getVideos();

        _this4.$store.state.response = true;
        _this4.$store.state.responseColor = "red";
        _this4.$store.state.responseText = err.response.data.message;
        _this4.$store.state.responseIcon = "mdi-thumb-down";
      });
    }
  },
  mounted: function mounted() {
    this.getVideos();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/Components/responseDialog.vue?vue&type=template&id=25115ac6&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/Components/responseDialog.vue?vue&type=template&id=25115ac6&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { width: "300" },
      model: {
        value: _vm.$store.state.response,
        callback: function($$v) {
          _vm.$set(_vm.$store.state, "response", $$v)
        },
        expression: "$store.state.response"
      }
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            [
              _c(
                "v-icon",
                {
                  staticClass: "ma-auto",
                  attrs: { size: "100", color: _vm.$store.state.responseColor }
                },
                [
                  _vm._v(
                    _vm._s(_vm.$store.state.responseIcon) + "\n            "
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", { staticClass: "text-center" }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.$store.state.responseText) +
                "\n        "
            )
          ])
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
                key: "top",
                fn: function() {
                  return [
                    _c(
                      "v-toolbar",
                      { attrs: { flat: "", color: "white" } },
                      [
                        _c("v-toolbar-title", [_vm._v("Video panel")]),
                        _vm._v(" "),
                        _c("v-divider", {
                          staticClass: "mx-4",
                          attrs: { inset: "", vertical: "" }
                        }),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-dialog",
                          {
                            attrs: { "max-width": "500px" },
                            scopedSlots: _vm._u([
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var on = ref.on
                                  var attrs = ref.attrs
                                  return [
                                    _c(
                                      "v-btn",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            staticClass: "mb-2",
                                            attrs: {
                                              color: "primary",
                                              dark: ""
                                            }
                                          },
                                          "v-btn",
                                          attrs,
                                          false
                                        ),
                                        on
                                      ),
                                      [
                                        _vm._v(
                                          "New Item\n                            "
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ])
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "v-card",
                              [
                                _c("v-card-title", [
                                  _c("span", { staticClass: "headline" }, [
                                    _vm._v("Add new item")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-form",
                                  { staticClass: "pa-5" },
                                  [
                                    _c("v-text-field", {
                                      attrs: { label: "Video title" },
                                      model: {
                                        value: _vm.newVideoTitle,
                                        callback: function($$v) {
                                          _vm.newVideoTitle = $$v
                                        },
                                        expression: "newVideoTitle"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-text-field", {
                                      attrs: { label: "Video description" },
                                      model: {
                                        value: _vm.newVideoDescription,
                                        callback: function($$v) {
                                          _vm.newVideoDescription = $$v
                                        },
                                        expression: "newVideoDescription"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-text-field", {
                                      attrs: { label: "Video link" },
                                      model: {
                                        value: _vm.newVideoLink,
                                        callback: function($$v) {
                                          _vm.newVideoLink = $$v
                                        },
                                        expression: "newVideoLink"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-text-field", {
                                      attrs: { label: "Video API title" },
                                      model: {
                                        value: _vm.newVideoApiTitle,
                                        callback: function($$v) {
                                          _vm.newVideoApiTitle = $$v
                                        },
                                        expression: "newVideoApiTitle"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-file-input", {
                                      attrs: {
                                        "show-size": "",
                                        label: "Image",
                                        type: "file"
                                      },
                                      model: {
                                        value: _vm.videoImage,
                                        callback: function($$v) {
                                          _vm.videoImage = $$v
                                        },
                                        expression: "videoImage"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { color: "primary", block: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.addItem()
                                          }
                                        }
                                      },
                                      [_vm._v("Add")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                },
                proxy: true
              },
              {
                key: "body",
                fn: function(items) {
                  return [
                    _c(
                      "draggable",
                      { attrs: { tag: "tbody" }, on: { end: _vm.onEnd } },
                      _vm._l(_vm.Videos, function(item, index) {
                        return _c(
                          "tr",
                          { key: index, staticClass: "sortable" },
                          [
                            _c("td", [_vm._v(" " + _vm._s(item.videoTitle))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(" " + _vm._s(item.videoDescription))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(" " + _vm._s(item.videoLink))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { icon: "", color: "red" },
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteItem(item.id)
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("mdi-delete")])],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "v-dialog",
                                  {
                                    attrs: { "max-width": "500px" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-btn",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      attrs: {
                                                        dark: "",
                                                        icon: "",
                                                        color: "green"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.editVideo(
                                                            item
                                                          )
                                                        }
                                                      }
                                                    },
                                                    "v-btn",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                ),
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("mdi-pencil-outline")
                                                  ])
                                                ],
                                                1
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  },
                                  [
                                    _vm._v(" "),
                                    _c(
                                      "v-card",
                                      [
                                        _c("v-card-title", [_vm._v("Edit")]),
                                        _vm._v(" "),
                                        _c(
                                          "v-form",
                                          { staticClass: "pa-5" },
                                          [
                                            _c("v-text-field", {
                                              attrs: { label: "Video title" },
                                              model: {
                                                value: _vm.videoTitle,
                                                callback: function($$v) {
                                                  _vm.videoTitle = $$v
                                                },
                                                expression: "videoTitle"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("v-textarea", {
                                              attrs: {
                                                "no-resize": "",
                                                value: "test",
                                                label: "Video description"
                                              },
                                              model: {
                                                value: _vm.videoDescription,
                                                callback: function($$v) {
                                                  _vm.videoDescription = $$v
                                                },
                                                expression: "videoDescription"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("v-text-field", {
                                              attrs: { label: "Video link" },
                                              model: {
                                                value: _vm.videoLink,
                                                callback: function($$v) {
                                                  _vm.videoLink = $$v
                                                },
                                                expression: "videoLink"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass: "font-weight-bold",
                                                attrs: {
                                                  color: "primary",
                                                  block: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.updateVideo(
                                                      item.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "Update video\n                                        "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        )
                      }),
                      0
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("response-dialog")
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

/***/ "./resources/js/App/Components/responseDialog.vue":
/*!********************************************************!*\
  !*** ./resources/js/App/Components/responseDialog.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _responseDialog_vue_vue_type_template_id_25115ac6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responseDialog.vue?vue&type=template&id=25115ac6&scoped=true& */ "./resources/js/App/Components/responseDialog.vue?vue&type=template&id=25115ac6&scoped=true&");
/* harmony import */ var _responseDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responseDialog.vue?vue&type=script&lang=js& */ "./resources/js/App/Components/responseDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _responseDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _responseDialog_vue_vue_type_template_id_25115ac6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _responseDialog_vue_vue_type_template_id_25115ac6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "25115ac6",
  null
  
)

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_5__["VDialog"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/App/Components/responseDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/App/Components/responseDialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/App/Components/responseDialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_responseDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./responseDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/Components/responseDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_responseDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/App/Components/responseDialog.vue?vue&type=template&id=25115ac6&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/App/Components/responseDialog.vue?vue&type=template&id=25115ac6&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_responseDialog_vue_vue_type_template_id_25115ac6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./responseDialog.vue?vue&type=template&id=25115ac6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/Components/responseDialog.vue?vue&type=template&id=25115ac6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_responseDialog_vue_vue_type_template_id_25115ac6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_responseDialog_vue_vue_type_template_id_25115ac6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





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

















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_10__["VFileInput"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_14__["VTextarea"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__["VToolbarTitle"]})


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