'use strict';



function __$styleInject(css) {
    if (!css) return;

    if (typeof window == 'undefined') return;
    var style = document.createElement('style');
    style.setAttribute('media', 'screen');

    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutPropertiesLoose = require('@babel/runtime/helpers/objectWithoutPropertiesLoose');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var React = require('react');
var t = require('prop-types');
var Cropper = require('react-easy-crop');
var LocaleReceiver = require('antd/lib/locale-provider/LocaleReceiver');
var Modal = require('antd/lib/modal');
var Slider = require('antd/lib/slider');
var imageCompression = require('browser-image-compression');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutPropertiesLoose__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutPropertiesLoose);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var t__default = /*#__PURE__*/_interopDefaultLegacy(t);
var Cropper__default = /*#__PURE__*/_interopDefaultLegacy(Cropper);
var LocaleReceiver__default = /*#__PURE__*/_interopDefaultLegacy(LocaleReceiver);
var Modal__default = /*#__PURE__*/_interopDefaultLegacy(Modal);
var Slider__default = /*#__PURE__*/_interopDefaultLegacy(Slider);
var imageCompression__default = /*#__PURE__*/_interopDefaultLegacy(imageCompression);

__$styleInject(".antd-img-crop-modal .ant-modal-body {\n  padding-bottom: 16px;\n}\n.antd-img-crop-modal .antd-img-crop-container {\n  position: relative;\n  width: 100%;\n  height: 40vh;\n  margin-bottom: 16px;\n}\n.antd-img-crop-modal .antd-img-crop-control {\n  display: flex;\n  align-items: center;\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.antd-img-crop-modal .antd-img-crop-control button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 34px;\n  height: 34px;\n  padding: 0;\n  font-style: normal;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n}\n.antd-img-crop-modal .antd-img-crop-control button[disabled] {\n  cursor: default;\n}\n.antd-img-crop-modal .antd-img-crop-control.zoom button {\n  font-size: 18px;\n}\n.antd-img-crop-modal .antd-img-crop-control.rotate button {\n  font-size: 16px;\n}\n.antd-img-crop-modal .antd-img-crop-control.rotate button:first-of-type {\n  transform: rotate(-20deg);\n}\n.antd-img-crop-modal .antd-img-crop-control.rotate button:last-of-type {\n  transform: rotate(20deg);\n}\n.antd-img-crop-modal .antd-img-crop-control .ant-slider {\n  flex: 1;\n  margin: 0 8px;\n}\n");

var pkg = 'antd-img-crop';

var noop = function noop() {};

var MEDIA_CLASS = pkg + "-media";
var ZOOM_STEP = 0.1;
var MIN_ROTATE = 0;
var MAX_ROTATE = 360;
var ROTATE_STEP = 1;
var EasyCrop = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var src = props.src,
      aspect = props.aspect,
      shape = props.shape,
      grid = props.grid,
      hasZoom = props.hasZoom,
      zoomVal = props.zoomVal,
      rotateVal = props.rotateVal,
      setZoomVal = props.setZoomVal,
      setRotateVal = props.setRotateVal,
      minZoom = props.minZoom,
      maxZoom = props.maxZoom,
      onComplete = props.onComplete,
      cropperProps = props.cropperProps;

  var _useState = React.useState({
    x: 0,
    y: 0
  }),
      crop = _useState[0],
      setCrop = _useState[1];

  var _useState2 = React.useState({
    width: 0,
    height: 0
  }),
      cropSize = _useState2[0],
      setCropSize = _useState2[1];

  var onCropComplete = React.useCallback(function (croppedArea, croppedAreaPixels) {
    onComplete(croppedAreaPixels);
  }, [onComplete]);
  var onMediaLoaded = React.useCallback(function (mediaSize) {
    var width = mediaSize.width,
        height = mediaSize.height;
    var ratioWidth = height * aspect;

    if (width > ratioWidth) {
      setCropSize({
        width: ratioWidth,
        height: height
      });
    } else {
      setCropSize({
        width: width,
        height: width / aspect
      });
    }
  }, [aspect]);
  return /*#__PURE__*/React__default['default'].createElement(Cropper__default['default'], Object.assign({}, cropperProps, {
    ref: ref,
    image: src,
    crop: crop,
    cropSize: cropSize,
    onCropChange: setCrop,
    aspect: aspect,
    cropShape: shape,
    showGrid: grid,
    zoomWithScroll: hasZoom,
    zoom: zoomVal,
    rotation: rotateVal,
    onZoomChange: setZoomVal,
    onRotationChange: setRotateVal,
    minZoom: minZoom,
    maxZoom: maxZoom,
    onCropComplete: onCropComplete,
    onMediaLoaded: onMediaLoaded,
    classes: {
      containerClassName: pkg + "-container",
      mediaClassName: MEDIA_CLASS
    }
  }));
});
EasyCrop.propTypes = {
  src: t__default['default'].string,
  aspect: t__default['default'].number,
  shape: t__default['default'].string,
  grid: t__default['default'].bool,
  hasZoom: t__default['default'].bool,
  zoomVal: t__default['default'].number,
  rotateVal: t__default['default'].number,
  setZoomVal: t__default['default'].func,
  setRotateVal: t__default['default'].func,
  minZoom: t__default['default'].number,
  maxZoom: t__default['default'].number,
  onComplete: t__default['default'].func,
  cropperProps: t__default['default'].object
};
var ImgCrop = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var aspect = props.aspect,
      shape = props.shape,
      grid = props.grid,
      quality = props.quality,
      zoom = props.zoom,
      rotate = props.rotate,
      minZoom = props.minZoom,
      maxZoom = props.maxZoom,
      fillColor = props.fillColor,
      modalTitle = props.modalTitle,
      modalWidth = props.modalWidth,
      modalOk = props.modalOk,
      modalCancel = props.modalCancel,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? Infinity : _props$maxWidth,
      _props$maxSize = props.maxSize,
      maxSize = _props$maxSize === void 0 ? Infinity : _props$maxSize,
      beforeCrop = props.beforeCrop,
      children = props.children,
      cropperProps = props.cropperProps;
  var hasZoom = zoom === true;
  var hasRotate = rotate === true;

  var _useState3 = React.useState(''),
      src = _useState3[0],
      setSrc = _useState3[1];

  var _useState4 = React.useState(1),
      zoomVal = _useState4[0],
      setZoomVal = _useState4[1];

  var _useState5 = React.useState(0),
      rotateVal = _useState5[0],
      setRotateVal = _useState5[1];

  var beforeUploadRef = React.useRef();
  var fileRef = React.useRef();
  var resolveRef = React.useRef(noop);
  var rejectRef = React.useRef(noop);
  var cropPixelsRef = React.useRef();
  /**
   * Upload
   */

  var renderUpload = React.useCallback(function () {
    var upload = Array.isArray(children) ? children[0] : children;

    var _upload$props = upload.props,
        beforeUpload = _upload$props.beforeUpload,
        accept = _upload$props.accept,
        restUploadProps = _objectWithoutPropertiesLoose__default['default'](_upload$props, ["beforeUpload", "accept"]);

    beforeUploadRef.current = beforeUpload;
    return _extends__default['default']({}, upload, {
      props: _extends__default['default']({}, restUploadProps, {
        accept: accept || 'image/*',
        beforeUpload: function beforeUpload(file, fileList) {
          return new Promise( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee(resolve, reject) {
              var reader;
              return _regeneratorRuntime__default['default'].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(beforeCrop && !beforeCrop(file, fileList))) {
                        _context.next = 3;
                        break;
                      }

                      reject();
                      return _context.abrupt("return");

                    case 3:
                      fileRef.current = file;
                      resolveRef.current = resolve;
                      rejectRef.current = reject;
                      reader = new FileReader();
                      reader.addEventListener('load', function () {
                        setSrc(reader.result);
                      });
                      reader.readAsDataURL(file);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }());
        }
      })
    });
  }, [beforeCrop, children]);
  /**
   * EasyCrop
   */

  var onComplete = React.useCallback(function (croppedAreaPixels) {
    cropPixelsRef.current = croppedAreaPixels;
  }, []);
  /**
   * Controls
   */

  var isMinZoom = zoomVal - ZOOM_STEP < minZoom;
  var isMaxZoom = zoomVal + ZOOM_STEP > maxZoom;
  var isMinRotate = rotateVal === MIN_ROTATE;
  var isMaxRotate = rotateVal === MAX_ROTATE;
  var subZoomVal = React.useCallback(function () {
    if (!isMinZoom) setZoomVal(zoomVal - ZOOM_STEP);
  }, [isMinZoom, zoomVal]);
  var addZoomVal = React.useCallback(function () {
    if (!isMaxZoom) setZoomVal(zoomVal + ZOOM_STEP);
  }, [isMaxZoom, zoomVal]);
  var subRotateVal = React.useCallback(function () {
    if (!isMinRotate) setRotateVal(rotateVal - ROTATE_STEP);
  }, [isMinRotate, rotateVal]);
  var addRotateVal = React.useCallback(function () {
    if (!isMaxRotate) setRotateVal(rotateVal + ROTATE_STEP);
  }, [isMaxRotate, rotateVal]);
  /**
   * Modal
   */

  var modalProps = React.useMemo(function () {
    var obj = {
      width: modalWidth,
      okText: modalOk,
      cancelText: modalCancel
    };
    Object.keys(obj).forEach(function (key) {
      if (!obj[key]) delete obj[key];
    });
    return obj;
  }, [modalCancel, modalOk, modalWidth]);
  var onClose = React.useCallback(function () {
    setSrc('');
    setZoomVal(1);
    setRotateVal(0);
  }, []);
  var onOk = React.useCallback( /*#__PURE__*/_asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee3() {
    var naturalImg, _naturalImg, naturalWidth, naturalHeight, nfile, rate, options, newFile, createImg, canvas, ctx, maxLen, halfMax, left, top, maxImgData, _cropPixelsRef$curren, width, height, x, y, _fileRef$current, type, name, uid;

    return _regeneratorRuntime__default['default'].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            onClose();
            naturalImg = document.querySelector("." + MEDIA_CLASS);
            _naturalImg = naturalImg, naturalWidth = _naturalImg.naturalWidth, naturalHeight = _naturalImg.naturalHeight;
            _context3.next = 5;
            return fetch(naturalImg.src).then(function (res) {
              return res.blob();
            });

          case 5:
            nfile = _context3.sent;
            rate = 1; // resize before crop

            if (!(naturalHeight > maxWidth || naturalWidth > maxWidth || nfile.size > maxSize)) {
              _context3.next = 19;
              break;
            }

            options = {
              maxSizeMB: maxSize / 1000,
              maxWidthOrHeight: maxWidth,
              onProgress: function onProgress(p) {
                console.log('** compress image: ', p + '%');
              }
            };
            _context3.next = 11;
            return imageCompression__default['default'](nfile, options);

          case 11:
            newFile = _context3.sent;

            createImg = function createImg() {
              return new Promise(function (resolve) {
                var img = document.createElement("img");
                img.src = URL.createObjectURL(newFile);

                img.onload = function () {
                  resolve(img);
                };
              });
            };

            _context3.next = 15;
            return createImg();

          case 15:
            naturalImg = _context3.sent;
            rate = naturalImg.naturalWidth / naturalWidth;
            naturalWidth = naturalImg.naturalWidth;
            naturalHeight = naturalImg.naturalHeight;

          case 19:
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d'); // create a max canvas to cover the source image after rotated

            maxLen = Math.sqrt(Math.pow(naturalWidth, 2) + Math.pow(naturalHeight, 2));
            canvas.width = maxLen;
            canvas.height = maxLen; // rotate the image

            if (hasRotate && rotateVal > 0 && rotateVal < 360) {
              halfMax = maxLen / 2;
              ctx.translate(halfMax, halfMax);
              ctx.rotate(rotateVal * Math.PI / 180);
              ctx.translate(-halfMax, -halfMax);
            }

            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height); // draw the source image in the center of the max canvas

            left = (maxLen - naturalWidth) / 2;
            top = (maxLen - naturalHeight) / 2;
            ctx.drawImage(naturalImg, left, top); // shrink the max canvas to the crop area size, then align two center points

            maxImgData = ctx.getImageData(0, 0, maxLen, maxLen);
            _cropPixelsRef$curren = cropPixelsRef.current, width = _cropPixelsRef$curren.width, height = _cropPixelsRef$curren.height, x = _cropPixelsRef$curren.x, y = _cropPixelsRef$curren.y;
            canvas.width = width * rate;
            canvas.height = height * rate;
            ctx.putImageData(maxImgData, Math.round(-left - x * rate), Math.round(-top - y * rate)); // get the new image

            _fileRef$current = fileRef.current, type = _fileRef$current.type, name = _fileRef$current.name, uid = _fileRef$current.uid;
            canvas.toBlob( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator__default['default']( /*#__PURE__*/_regeneratorRuntime__default['default'].mark(function _callee2(blob) {
                var newFile, res, passedFile, _type;

                return _regeneratorRuntime__default['default'].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        newFile = new File([blob], name, {
                          type: type
                        });
                        newFile.uid = uid;

                        if (!(typeof beforeUploadRef.current !== 'function')) {
                          _context2.next = 4;
                          break;
                        }

                        return _context2.abrupt("return", resolveRef.current(newFile));

                      case 4:
                        res = beforeUploadRef.current(newFile, [newFile]);

                        if (!(typeof res !== 'boolean' && !res)) {
                          _context2.next = 8;
                          break;
                        }

                        console.error('beforeUpload must return a boolean or Promise');
                        return _context2.abrupt("return");

                      case 8:
                        if (!(res === true)) {
                          _context2.next = 10;
                          break;
                        }

                        return _context2.abrupt("return", resolveRef.current(newFile));

                      case 10:
                        if (!(res === false)) {
                          _context2.next = 12;
                          break;
                        }

                        return _context2.abrupt("return", rejectRef.current('not upload'));

                      case 12:
                        if (!(res && typeof res.then === 'function')) {
                          _context2.next = 25;
                          break;
                        }

                        _context2.prev = 13;
                        _context2.next = 16;
                        return res;

                      case 16:
                        passedFile = _context2.sent;
                        _type = Object.prototype.toString.call(passedFile);
                        if (_type === '[object File]' || _type === '[object Blob]') newFile = passedFile;
                        resolveRef.current(newFile);
                        _context2.next = 25;
                        break;

                      case 22:
                        _context2.prev = 22;
                        _context2.t0 = _context2["catch"](13);
                        rejectRef.current(_context2.t0);

                      case 25:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[13, 22]]);
              }));

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }(), type, quality);

          case 37:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), [hasRotate, onClose, quality, rotateVal]);

  var renderComponent = function renderComponent(titleOfModal) {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, renderUpload(), src && /*#__PURE__*/React__default['default'].createElement(Modal__default['default'], Object.assign({
      visible: true,
      wrapClassName: pkg + "-modal",
      title: titleOfModal,
      onOk: onOk,
      onCancel: onClose,
      maskClosable: false,
      destroyOnClose: true
    }, modalProps), /*#__PURE__*/React__default['default'].createElement(EasyCrop, {
      ref: ref,
      src: src,
      aspect: aspect,
      shape: shape,
      grid: grid,
      hasZoom: hasZoom,
      zoomVal: zoomVal,
      rotateVal: rotateVal,
      setZoomVal: setZoomVal,
      setRotateVal: setRotateVal,
      minZoom: minZoom,
      maxZoom: maxZoom,
      onComplete: onComplete,
      cropperProps: cropperProps
    }), hasZoom && /*#__PURE__*/React__default['default'].createElement("div", {
      className: pkg + "-control zoom"
    }, /*#__PURE__*/React__default['default'].createElement("button", {
      onClick: subZoomVal,
      disabled: isMinZoom
    }, "\uFF0D"), /*#__PURE__*/React__default['default'].createElement(Slider__default['default'], {
      min: minZoom,
      max: maxZoom,
      step: ZOOM_STEP,
      value: zoomVal,
      onChange: setZoomVal
    }), /*#__PURE__*/React__default['default'].createElement("button", {
      onClick: addZoomVal,
      disabled: isMaxZoom
    }, "\uFF0B")), hasRotate && /*#__PURE__*/React__default['default'].createElement("div", {
      className: pkg + "-control rotate"
    }, /*#__PURE__*/React__default['default'].createElement("button", {
      onClick: subRotateVal,
      disabled: isMinRotate
    }, "\u21BA"), /*#__PURE__*/React__default['default'].createElement(Slider__default['default'], {
      min: MIN_ROTATE,
      max: MAX_ROTATE,
      step: ROTATE_STEP,
      value: rotateVal,
      onChange: setRotateVal
    }), /*#__PURE__*/React__default['default'].createElement("button", {
      onClick: addRotateVal,
      disabled: isMaxRotate
    }, "\u21BB"))));
  };

  if (modalTitle) return renderComponent(modalTitle);
  return /*#__PURE__*/React__default['default'].createElement(LocaleReceiver__default['default'], null, function (locale, localeCode) {
    return renderComponent(localeCode === 'zh-cn' ? '编辑图片' : 'Edit image');
  });
});
ImgCrop.propTypes = {
  aspect: t__default['default'].number,
  shape: t__default['default'].oneOf(['rect', 'round']),
  grid: t__default['default'].bool,
  quality: t__default['default'].number,
  zoom: t__default['default'].bool,
  rotate: t__default['default'].bool,
  minZoom: t__default['default'].number,
  maxZoom: t__default['default'].number,
  fillColor: t__default['default'].string,
  modalTitle: t__default['default'].string,
  modalWidth: t__default['default'].oneOfType([t__default['default'].number, t__default['default'].string]),
  modalOk: t__default['default'].string,
  modalCancel: t__default['default'].string,
  beforeCrop: t__default['default'].func,
  cropperProps: t__default['default'].object,
  children: t__default['default'].node
};
ImgCrop.defaultProps = {
  aspect: 1,
  shape: 'rect',
  grid: false,
  quality: 0.4,
  zoom: true,
  rotate: false,
  minZoom: 1,
  maxZoom: 3,
  fillColor: 'white'
};

module.exports = ImgCrop;
