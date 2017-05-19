/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

document.writeln("<!DOCTYPE html>");
document.writeln("<html lang=\"en\">");
document.writeln("");
document.writeln("<head>");
document.writeln("    <meta charset=\"UTF-8\">");
document.writeln("    <meta content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\" name=\"viewport\" />");
document.writeln("    <title>尾部模块</title>");
document.writeln("    <link rel=\"stylesheet\" href=\" css/foot.css\" />");
document.writeln("</head>");
document.writeln("");
document.writeln("<body>");
document.writeln("    <footer>");
document.writeln("        <div class=\"footer_detail\">");
document.writeln("            <div class=\"footer_detail_top\">");
document.writeln("                <div class=\"footer_detail_top_left\">");
document.writeln("                    <p>合作伙伴</p>");
document.writeln("                    <div class=\"footer_detail_top_left_icon\">");
document.writeln("                        <img src=\" images/hf/parternerLogo_01.png\">");
document.writeln("                        <img src=\" images/hf/parternerLogo_02.png\">");
document.writeln("                        <img src=\" images/hf/parternerLogo_03.png\">");
document.writeln("                        <img src=\" images/hf/parternerLogo_04.png\">");
document.writeln("                        <img src=\" images/hf/parternerLogo_05.png\">");
document.writeln("                        <span>更多</span>");
document.writeln("                    </div>");
document.writeln("                </div>");
document.writeln("                <div class=\"footer_detail_top_right\">");
document.writeln("                    <p>易臻云旗下平台微信公众号</p>");
document.writeln("                    <div class=\"footer_detail_top_right_icon\">");
document.writeln("                        <img src=\" images/hf/QRCode_CONBA (1).jpg\">");
document.writeln("                        <img src=\" images/hf/QRCode_CONBA (2).jpg\">");
document.writeln("                        <img src=\" images/hf/QRCode_CONBA.jpg\">");
document.writeln("                    </div>");
document.writeln("                    <p class=\"right_item\">");
document.writeln("                        <span>易臻云视界中心</span><span>浙医四院易臻云药房</span><span>易臻云康恩贝</span>");
document.writeln("                    </p>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("            <hr>");
document.writeln("            <div class=\"footer_detail_bottom\">");
document.writeln("                <div class=\"bottom_left\">");
document.writeln("                    <img src=\" images/hf/e-care_logo.png\">");
document.writeln("                </div>");
document.writeln("                <div class=\"bottom_middle\">");
document.writeln("                    <span>关于我们</span><span>|</span>");
document.writeln("                    <span>加入我们</span><span>|</span>");
document.writeln("                    <span>下载app</span><span>|</span>");
document.writeln("                    <span>隐私政策</span>");
document.writeln("                </div>");
document.writeln("                <div class=\"bottom_right\">");
document.writeln("                    <span>服务电话：4009260916</span>");
document.writeln("                    <span>公司地址：杭州市西湖区西园四路2号浙大创新院</span>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("        </div>");
document.writeln("        <div class=\"icp\"><span>©浙江易臻云医院管理有限公司&nbsp;|&nbsp;浙ICP备16014009号</span></div>");
document.writeln("    </footer>");
document.writeln("    <script src=\" js/jquery.js\"></script>");
document.writeln("</body>");
document.writeln("");
document.writeln("</html>");
document.writeln("");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

document.writeln("<!DOCTYPE html>");
document.writeln("<html lang=\"en\">");
document.writeln("");
document.writeln("<head>");
document.writeln("    <meta charset=\"UTF-8\">");
document.writeln("    <meta content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\" name=\"viewport\" />");
document.writeln("    <title>尾部模块</title>");
document.writeln("    <link rel=\"stylesheet\" href=\" css/head.css\" />");
document.writeln("</head>");
document.writeln("");
document.writeln("<body>");
document.writeln("    <header>");
document.writeln("        <nav>");
document.writeln("            <div class=\"logo\">");
document.writeln("                <img src=\" images/hf/e-care_logo.png\">");
document.writeln("            </div>");
document.writeln("            <ul class=\"list\">");
document.writeln("                <li>");
document.writeln("                    <a href=\"\">首页</a>");
document.writeln("                </li>");
document.writeln("                <li>");
document.writeln("                    <a href=\"\">易臻云介绍</a>");
document.writeln("                </li>");
document.writeln("                <li class=\"drug_mes\">");
document.writeln("                    <a href=\"\">药品信息服务</a>");
document.writeln("                </li>");
document.writeln("                <li>");
document.writeln("                    <a href=\"\">合作伙伴</a>");
document.writeln("                </li>");
document.writeln("                <li>");
document.writeln("                    <a href=\"\">联系我们</a>");
document.writeln("                </li>");
document.writeln("                <li>");
document.writeln("                    <a href=\"\">登陆/注册</a>");
document.writeln("                </li>");
document.writeln("            </ul>");
document.writeln("            <div class=\"logo_r\">");
document.writeln("                <img src=\" images/hf/icon_more.png\">");
document.writeln("            </div>");
document.writeln("        </nav>");
document.writeln("        <ul class=\"mes\">");
document.writeln("            <li>");
document.writeln("                <a href=\"\">招标信息</a>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("                <a href=\"\">招商信息</a>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("                <a href=\"\">药品信息</a>");
document.writeln("            </li>");
document.writeln("        </ul>");
document.writeln("        <ul class=\"tab_c\">");
document.writeln("            <li>");
document.writeln("                <a href=\"\">首页</a>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("                <a href=\"\">易臻云介绍</a>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("                <a href=\"\">药品信息服务</a>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("                <a href=\"\">合作伙伴</a>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("                <a href=\"\">联系我们</a>");
document.writeln("            </li>");
document.writeln("            <li>");
document.writeln("                <a href=\"\">登陆/注册</a>");
document.writeln("            </li>");
document.writeln("        </ul>");
document.writeln("    </header>");
document.writeln("    <script src=\" js/jquery.js\"></script>");
document.writeln("    <script src=\" js/headswitch.js\"></script>");
document.writeln("</body>");
document.writeln("");
document.writeln("</html>");
document.writeln("");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(1);

/***/ })
/******/ ]);