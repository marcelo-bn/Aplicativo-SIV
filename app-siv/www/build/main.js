webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BombaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bomba_bomba__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BombaPage = /** @class */ (function () {
    function BombaPage(navCtrl, bombaProvider) {
        this.navCtrl = navCtrl;
        this.bombaProvider = bombaProvider;
    }
    BombaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.bombaProvider.getInfo().subscribe(function (info) {
            _this.info = info;
            _this.info = _this.info.lista_vasos;
            _this.vaso1 = _this.info[0];
            _this.vaso2 = _this.info[1];
        });
    };
    BombaPage.prototype.acionaBomba = function (idVaso) {
        if (idVaso == 1) {
            this.bombaProvider.putBomba(idVaso, this.tempoBomba1);
            this.tempoBomba1 = "";
        }
        else {
            this.bombaProvider.putBomba(idVaso, this.tempoBomba2);
            this.tempoBomba2 = "";
        }
    };
    BombaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bomba',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/bomba/bomba.html"*/'<!--\n  Generated template for the SettingsPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">Bomba</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngIf="vaso1" id="cardspec">\n    <h1>Vaso 1</h1>  \n    <h2>O último acionamento ocorreu em: <strong>{{vaso1["ultimaBomba"]}}</strong></h2>\n    <ion-input max="10" min= "1" type="number" text-center [(ngModel)]="tempoBomba1" placeholder="Insira o tempo de funcionamento da bomba" id="placeholderSpec"></ion-input>\n    <div style="text-align: center">\n      <button id="buttonBomba" ion-button (click)="acionaBomba(1)">Acionar</button>\n    </div>\n  </ion-card>\n\n  <ion-card *ngIf="vaso2" id="cardspec">\n    <h1>Vaso 2</h1>  \n    <h2>O último acionamento ocorreu em: <strong>{{vaso2["ultimaBomba"]}}</strong></h2>\n    <ion-input max="10" min= "1" type="number" text-center [(ngModel)]="tempoBomba2" placeholder="Insira o tempo de funcionamento da bomba" id="placeholderSpec"></ion-input>\n    <div style="text-align: center">\n      <button id="buttonBomba" ion-button (click)="acionaBomba(2)">Acionar</button>\n    </div>\n  </ion-card>\n  \n  \n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/bomba/bomba.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_bomba_bomba__["a" /* BombaProvider */]])
    ], BombaPage);
    return BombaPage;
}());

//# sourceMappingURL=bomba.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vaso_vaso__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alterar_vegetal_alterar_vegetal__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__criar_vegetal_criar_vegetal__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, vegetalProvider, vasoProvider) {
        this.navCtrl = navCtrl;
        this.vegetalProvider = vegetalProvider;
        this.vasoProvider = vasoProvider;
    }
    // Método PUT Vegetal
    CadastroPage.prototype.alterarVegetalPagina = function (vegetal) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__alterar_vegetal_alterar_vegetal__["a" /* AlterarVegetalPage */], { vegetal: vegetal });
    };
    // Método POST Vegetal
    CadastroPage.prototype.criarVegetalPagina = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__criar_vegetal_criar_vegetal__["a" /* CriarVegetalPage */]);
    };
    // Método PUT
    // alteraVasoPagina(vaso){
    //this.navCtrl.push(AlteraVasoPage, {vaso: vaso})
    //}
    CadastroPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.vegetalProvider.getVegetal().subscribe(function (info) {
            _this.vegetais = info;
            _this.vegetais = _this.vegetais.lista_vegetais;
        });
        this.vasoProvider.getVaso().subscribe(function (info) {
            _this.vasos = info;
            _this.vasos = _this.vasos.lista_vasos;
        });
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/cadastro/cadastro.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">\n      Cadastrar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row>\n\n    <ion-col id="colSpec">\n      <h4>Vegetais</h4>\n      <ion-card>\n       <ion-item *ngFor="let item of vegetais">\n        <ion-label>{{item.nome}}</ion-label>\n        <button ion-button outline item-end (click)="alterarVegetalPagina(item)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n       </ion-item>\n      </ion-card>\n    </ion-col>\n\n    <ion-col id="colSpec">\n      <h4>Vasos</h4>\n      <ion-card>\n       <ion-item *ngFor="let item of vasos">\n        <ion-label>Vaso {{item.id}}: {{item.vegetal}}</ion-label>\n        <button ion-button outline item-end (click)="alterarVasoPagina(item)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n       </ion-item>\n      </ion-card>\n    </ion-col>\n\n  </ion-row>\n  \n  <br>\n\n  <div style="text-align: center;">\n    <button id="buttonBomba" ion-button (click)="criarVegetalPagina()">NOVO VEGETAL</button>\n  </div>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/cadastro/cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__["a" /* VegetalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__["a" /* VegetalProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_vaso_vaso__["a" /* VasoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_vaso_vaso__["a" /* VasoProvider */]) === "function" && _c || Object])
    ], CadastroPage);
    return CadastroPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_informacao_informacao__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InformacaoPage = /** @class */ (function () {
    function InformacaoPage(navCtrl, informacaoProvider) {
        this.navCtrl = navCtrl;
        this.informacaoProvider = informacaoProvider;
    }
    InformacaoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.informacaoProvider.getInfo().subscribe(function (info) {
            _this.info = info;
            _this.info = _this.info.lista_info;
            console.log(_this.info);
        });
    };
    InformacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-informacao',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/informacao/informacao.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">Informação</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <table id="tabelaspec">\n   \n    <tr>\n      <th>Vaso</th>\n      <th>Vegetal</th>\n      <th>Temp.</th>\n      <th>Umidade</th>\n      <th>Data</th>\n    </tr>\n    <ng-container *ngFor="let item of info">\n      <tr>\n        <td>{{item.idVaso}}</td>\n        <td>{{item.nomeVegetal}}</td>\n        <td>{{item.temperatura}}</td>\n        <td>{{item.umidade}}</td>\n        <td>{{item.data}}</td>\n      </tr>\n    </ng-container>\n  </table> \n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/informacao/informacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_informacao_informacao__["a" /* InformacaoProvider */]])
    ], InformacaoPage);
    return InformacaoPage;
}());

//# sourceMappingURL=informacao.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alterar-vaso/alterar-vaso.module": [
		290,
		10
	],
	"../pages/alterar-vegetal/alterar-vegetal.module": [
		288,
		9
	],
	"../pages/bomba/bomba.module": [
		285,
		2
	],
	"../pages/criar-vegetal/criar-vegetal.module": [
		292,
		0
	],
	"../pages/informacao/informacao.module": [
		287,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BombaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BombaProvider = /** @class */ (function () {
    function BombaProvider(http) {
        this.http = http;
    }
    BombaProvider.prototype.getInfo = function () {
        return this.http.get('http://localhost:5000/vaso');
    };
    BombaProvider.prototype.putBomba = function (idVaso, tempoBomba) {
        var body = {
            idVaso: String(idVaso),
            tempo: tempoBomba
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        //console.log(JSON.stringify(body))
        return this.http.put('http://localhost:5000/bomba', JSON.stringify(body), { headers: headers }).subscribe(function (val) {
            console.log("PUT realizado", val);
        }, function (response) {
            console.log("PUT não realizado", response);
        });
    };
    BombaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BombaProvider);
    return BombaProvider;
}());

//# sourceMappingURL=bomba.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__informacao_informacao__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bomba_bomba__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__informacao_informacao__["a" /* InformacaoPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__["a" /* CadastroPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__bomba_bomba__["a" /* BombaPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Informação" tabIcon="ios-leaf"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Cadastro" tabIcon="md-add-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Bomba" tabIcon="water"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Sobre" tabIcon="ios-information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">\n      Sobre\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div style="text-align: center;">\n    <h2>Sistema de Irrigação Vertical</h2>\n    <h5>\n      Trabalho desenvolvido para a disciplina de Projeto Integrador III\n      do curso de Engenharia de Telecomunicações IFSC-SJ. Integrantes:\n    </h5>\n    <ion-list>\n      <ion-item>\n        Jeneffer Farias \n        <button ion-button outline item-end> <ion-icon name="ios-send"></ion-icon></button>\n      </ion-item>\n      <ion-item>\n        Marcelo Bittencourt\n        <button ion-button outline item-end> <ion-icon name="ios-send"></ion-icon></button>\n      </ion-item>\n      <ion-item>\n        Osvaldo Neto\n        <button ion-button outline item-end> <ion-icon name="ios-send"></ion-icon></button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_informacao_informacao__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cadastro_cadastro__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_bomba_bomba__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_alterar_vegetal_alterar_vegetal__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_alterar_vaso_alterar_vaso__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_criar_vegetal_criar_vegetal__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_bomba_bomba__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_vaso_vaso__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_vegetal_vegetal__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_informacao_informacao__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_informacao_informacao__["a" /* InformacaoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bomba_bomba__["a" /* BombaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_alterar_vegetal_alterar_vegetal__["a" /* AlterarVegetalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_alterar_vaso_alterar_vaso__["a" /* AlterarVasoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_criar_vegetal_criar_vegetal__["a" /* CriarVegetalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bomba/bomba.module#BombaPageModule', name: 'BombaPage', segment: 'bomba', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/informacao/informacao.module#InformacaoPageModule', name: 'InformacaoPage', segment: 'informacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alterar-vegetal/alterar-vegetal.module#AlterarVegetalPageModule', name: 'AlterarVegetalPage', segment: 'alterar-vegetal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alterar-vaso/alterar-vaso.module#AlterarVasoPageModule', name: 'AlterarVasoPage', segment: 'alterar-vaso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/criar-vegetal/criar-vegetal.module#CriarVegetalPageModule', name: 'CriarVegetalPage', segment: 'criar-vegetal', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_informacao_informacao__["a" /* InformacaoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bomba_bomba__["a" /* BombaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_alterar_vegetal_alterar_vegetal__["a" /* AlterarVegetalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_alterar_vaso_alterar_vaso__["a" /* AlterarVasoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_criar_vegetal_criar_vegetal__["a" /* CriarVegetalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_bomba_bomba__["a" /* BombaProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_vaso_vaso__["a" /* VasoProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_vegetal_vegetal__["a" /* VegetalProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_informacao_informacao__["a" /* InformacaoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VasoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VasoProvider = /** @class */ (function () {
    function VasoProvider(http) {
        this.http = http;
    }
    VasoProvider.prototype.getVaso = function () {
        return this.http.get('http://localhost:5000/vaso');
    };
    VasoProvider.prototype.putVaso = function () { };
    VasoProvider.prototype.deleteVaso = function () { };
    VasoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], VasoProvider);
    return VasoProvider;
}());

//# sourceMappingURL=vaso.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VegetalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VegetalProvider = /** @class */ (function () {
    function VegetalProvider(http) {
        this.http = http;
    }
    VegetalProvider.prototype.getVegetal = function () {
        return this.http.get('http://localhost:5000/vegetal');
    };
    VegetalProvider.prototype.putVegetal = function (nome, tempIdeal, umiIdeal) {
        var body = {
            nome: nome,
            tempIdeal: String(tempIdeal),
            umidadeIdeal: String(umiIdeal)
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        return this.http.put('http://localhost:5000/vegetal', JSON.stringify(body), { headers: headers }).subscribe(function (val) {
            console.log("PUT realizado", val);
        }, function (response) {
            console.log("PUT não realizado", response);
        });
    };
    VegetalProvider.prototype.postVegetal = function (nome, tempIdeal, umiIdeal) { };
    VegetalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], VegetalProvider);
    return VegetalProvider;
}());

//# sourceMappingURL=vegetal.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InformacaoProvider = /** @class */ (function () {
    function InformacaoProvider(http) {
        this.http = http;
    }
    InformacaoProvider.prototype.getInfo = function () {
        return this.http.get('http://localhost:5000/informacao');
    };
    InformacaoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], InformacaoProvider);
    return InformacaoProvider;
}());

//# sourceMappingURL=informacao.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarVegetalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlterarVegetalPage = /** @class */ (function () {
    function AlterarVegetalPage(navCtrl, navParams, vegetalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vegetalProvider = vegetalProvider;
        this.vegetal = navParams.get('vegetal');
    }
    AlterarVegetalPage.prototype.ionViewDidLoad = function () { };
    AlterarVegetalPage.prototype.alteraVegetal = function (vegetal, novaTempIdeal, novaUmiIdeal) {
        if (novaTempIdeal == undefined && novaUmiIdeal == undefined) {
            this.vegetalProvider.putVegetal(vegetal.nome, vegetal.tempIdeal, vegetal.umidadeIdeal);
            //console.log(vegetal.nome,vegetal.tempIdeal,vegetal.umidadeIdeal)
        }
        else if (novaTempIdeal != undefined && novaUmiIdeal != undefined) {
            this.vegetalProvider.putVegetal(vegetal.nome, novaTempIdeal, novaUmiIdeal);
            //console.log(vegetal.nome,novaTempIdeal,novaUmiIdeal)
        }
        else if (novaTempIdeal == undefined) {
            this.vegetalProvider.putVegetal(vegetal.nome, vegetal.tempIdeal, novaUmiIdeal);
            //console.log(vegetal.nome,vegetal.tempIdeal,novaUmiIdeal)
        }
        else if (novaUmiIdeal == undefined) {
            this.vegetalProvider.putVegetal(vegetal.nome, novaTempIdeal, vegetal.umidadeIdeal);
            //console.log(vegetal.nome,novaTempIdeal,vegetal.umidadeIdeal)
        }
        this.novaTempIdeal = "";
        this.novaUmiIdeal = "";
    };
    AlterarVegetalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alterar-vegetal',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/alterar-vegetal/alterar-vegetal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">Alterar Vegetal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="vegetal">\n    <h3 style="text-align: center; color:  rgb(125, 197, 103);">Dados do Vegetal</h3>\n    <ion-card id="cardSpec">\n       <strong>Nome: </strong> {{vegetal.nome}} <br>\n       <strong>Temperatura ideal (Celsius): </strong> {{vegetal.tempIdeal}} <br>\n       <strong>Umidade ideal (%): </strong> {{vegetal.umidadeIdeal}} <br>\n    </ion-card>\n  </div>\n  \n  <div>\n    <ion-input max="50" min= "0" type="number" text-center [(ngModel)]="novaTempIdeal" placeholder="Nova temperatura ideal" id="placeholderSpec"></ion-input>\n    <ion-input max="100" min= "0" type="number" text-center [(ngModel)]="novaUmiIdeal" placeholder="Nova umidade ideal" id="placeholderSpec"></ion-input>\n    <div style="text-align: center">\n      <button style="background-color: rgb(125, 197, 103)" id="buttonAlteraVegetal" ion-button (click)="alteraVegetal(vegetal,novaTempIdeal,novaUmiIdeal)">Alterar</button>\n    </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/alterar-vegetal/alterar-vegetal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__["a" /* VegetalProvider */]])
    ], AlterarVegetalPage);
    return AlterarVegetalPage;
}());

//# sourceMappingURL=alterar-vegetal.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarVasoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AlterarVasoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlterarVasoPage = /** @class */ (function () {
    function AlterarVasoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlterarVasoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlterarVasoPage');
    };
    AlterarVasoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alterar-vaso',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/alterar-vaso/alterar-vaso.html"*/'<!--\n  Generated template for the AlterarVasoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>alterar-vaso</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/alterar-vaso/alterar-vaso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AlterarVasoPage);
    return AlterarVasoPage;
}());

//# sourceMappingURL=alterar-vaso.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriarVegetalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CriarVegetalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CriarVegetalPage = /** @class */ (function () {
    function CriarVegetalPage(navCtrl, navParams, vegetalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vegetalProvider = vegetalProvider;
    }
    CriarVegetalPage.prototype.ionViewDidLoad = function () { };
    CriarVegetalPage.prototype.criaVegetal = function (nome, tempIdeal, umiIdeal) {
        console.log(nome, tempIdeal, umiIdeal);
        this.nome = "";
        this.tempIdeal = "";
        this.umiIdeal = "";
    };
    CriarVegetalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-criar-vegetal',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/criar-vegetal/criar-vegetal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">Novo Vegetal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <ion-input type="text" text-center [(ngModel)]="nome" placeholder="Nome" id="placeholderSpec"></ion-input>\n    <ion-input max="50" min= "0" type="number" text-center [(ngModel)]="tempIdeal" placeholder="Temperatura ideal" id="placeholderSpec"></ion-input>\n    <ion-input max="100" min= "0" type="number" text-center [(ngModel)]="umiIdeal" placeholder="Umidade ideal" id="placeholderSpec"></ion-input>\n    <div style="text-align: center">\n      <button style="background-color: rgb(125, 197, 103)" id="buttonCriarVegetal" ion-button (click)="criaVegetal(nome,tempIdeal,umiIdeal)">CRIAR</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/criar-vegetal/criar-vegetal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__["a" /* VegetalProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__["a" /* VegetalProvider */]) === "function" && _c || Object])
    ], CriarVegetalPage);
    return CriarVegetalPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=criar-vegetal.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map