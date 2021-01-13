webpackJsonp([6],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarVasoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vaso_vaso__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vegetal_vegetal__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlterarVasoPage = /** @class */ (function () {
    function AlterarVasoPage(navCtrl, navParams, toastCtrl, vasoProvider, vegetalProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.vasoProvider = vasoProvider;
        this.vegetalProvider = vegetalProvider;
        this.vaso = this.navParams.get('vaso');
    }
    AlterarVasoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.vegetalProvider.getVegetal().subscribe(function (info) {
            _this.vegetais = info;
            _this.vegetais = _this.vegetais.lista_vegetais;
        });
    };
    // Método PUT Vaso
    AlterarVasoPage.prototype.alterarVaso = function (vaso, nomeVegetal) {
        if ((nomeVegetal == undefined) || (nomeVegetal == "")) {
            this.erroToast();
        }
        else if (this.verificaNomeVegetal(nomeVegetal)) {
            this.vasoProvider.putVaso(vaso.id, nomeVegetal.toLowerCase());
            this.sucessoToast();
        }
        else {
            this.erroToast();
        }
        this.nomeVegetal = "";
        //this.navCtrl.push(CadastroPage)
        this.navCtrl.pop();
    };
    AlterarVasoPage.prototype.verificaNomeVegetal = function (nome) {
        // Verifica se existe esse vegetal 
        var aux = false;
        for (var _i = 0, _a = this.vegetais; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.nome == nome.toLowerCase()) {
                aux = true;
            }
        }
        return aux;
    };
    AlterarVasoPage.prototype.sucessoToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Vaso alterado com sucesso!',
            duration: 3000,
            cssClass: 'toast-succ'
        });
        toast.present();
    };
    AlterarVasoPage.prototype.erroToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Erro ao alterar vaso!',
            duration: 3000,
            cssClass: 'toast-fail'
        });
        toast.present();
    };
    AlterarVasoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alterar-vaso',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/alterar-vaso/alterar-vaso.html"*/'<!--\n  Generated template for the AlterarVasoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">Alterar Vaso</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="vaso.vegetal != null; else vazio ">\n    \n    <h3 style="text-align: center; color:  rgb(125, 197, 103);">Vegetal do Vaso</h3>\n    <ion-card id="cardSpec">\n       <strong>Vegetal presente: </strong> {{vaso.vegetal}} <br>\n    </ion-card>\n\n  </div>\n\n  <ng-template #vazio>\n    <h3 style="text-align: center; color:  rgb(125, 197, 103);">Vegetal do Vaso</h3>\n    <ion-card id="cardSpec">\n      <strong>Vegetal presente: </strong> Nenhum vegetal cadastrado <br>\n    </ion-card>\n  </ng-template>\n\n  <div>\n    <ion-input type="text" text-center [(ngModel)]="nomeVegetal" placeholder="Insira o nome do novo vegetal" id="placeholderSpec"></ion-input>\n    <div style="text-align: center">\n      <button style="background-color: rgb(125, 197, 103)" id="buttonalteraVaso" ion-button (click)="alterarVaso(vaso,nomeVegetal)">Alterar</button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/alterar-vaso/alterar-vaso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_vaso_vaso__["a" /* VasoProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_vegetal_vegetal__["a" /* VegetalProvider */]])
    ], AlterarVasoPage);
    return AlterarVasoPage;
}());

//# sourceMappingURL=alterar-vaso.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarVegetalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__ = __webpack_require__(42);
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
    function AlterarVegetalPage(navCtrl, navParams, vegetalProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vegetalProvider = vegetalProvider;
        this.toastCtrl = toastCtrl;
        this.vegetal = navParams.get('vegetal');
    }
    AlterarVegetalPage.prototype.ionViewDidLoad = function () { };
    AlterarVegetalPage.prototype.alteraVegetal = function (vegetal, novaTempIdeal, novaUmiIdeal) {
        if (novaTempIdeal == undefined && novaUmiIdeal == undefined) {
            this.erroToast();
            //console.log(vegetal.nome,vegetal.tempIdeal,vegetal.umidadeIdeal)
        }
        else if (novaTempIdeal != undefined && novaUmiIdeal != undefined) {
            this.vegetalProvider.putVegetal(vegetal.nome, novaTempIdeal, novaUmiIdeal);
            this.sucessoToast();
            //console.log(vegetal.nome,novaTempIdeal,novaUmiIdeal)
        }
        else if (novaTempIdeal == undefined) {
            this.vegetalProvider.putVegetal(vegetal.nome, vegetal.tempIdeal, novaUmiIdeal);
            this.sucessoToast();
            //console.log(vegetal.nome,vegetal.tempIdeal,novaUmiIdeal)
        }
        else if (novaUmiIdeal == undefined) {
            this.vegetalProvider.putVegetal(vegetal.nome, novaTempIdeal, vegetal.umidadeIdeal);
            this.sucessoToast();
            //console.log(vegetal.nome,novaTempIdeal,vegetal.umidadeIdeal)
        }
        this.novaTempIdeal = "";
        this.novaUmiIdeal = "";
        setTimeout(function () { console.log("World!"); }, 3000);
        this.navCtrl.pop(); // Volta para a página de cadastro
    };
    AlterarVegetalPage.prototype.sucessoToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Vegetal alterado com sucesso!',
            duration: 3000,
            cssClass: 'toast-succ'
        });
        toast.present();
    };
    AlterarVegetalPage.prototype.erroToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Nada foi alterado!',
            duration: 3000,
            cssClass: 'toast-fail'
        });
        toast.present();
    };
    AlterarVegetalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alterar-vegetal',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/alterar-vegetal/alterar-vegetal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">Alterar Vegetal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="vegetal">\n    <h3 style="text-align: center; color:  rgb(125, 197, 103);">Dados do Vegetal</h3>\n    <ion-card id="cardSpec">\n       <strong>Nome: </strong> {{vegetal.nome}} <br>\n       <strong>Temperatura ideal (Celsius): </strong> {{vegetal.tempIdeal}} <br>\n       <strong>Umidade ideal (%): </strong> {{vegetal.umidadeIdeal}} <br>\n    </ion-card>\n  </div>\n  \n  <div>\n    <ion-input max="50" min= "0" type="number" text-center [(ngModel)]="novaTempIdeal" placeholder="Nova temperatura ideal" id="placeholderSpec"></ion-input>\n    <ion-input max="100" min= "0" type="number" text-center [(ngModel)]="novaUmiIdeal" placeholder="Nova umidade ideal" id="placeholderSpec"></ion-input>\n    <div style="text-align: center">\n      <button style="background-color: rgb(125, 197, 103)" id="buttonAlteraVegetal" ion-button (click)="alteraVegetal(vegetal,novaTempIdeal,novaUmiIdeal)">Alterar</button>\n    </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/alterar-vegetal/alterar-vegetal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__["a" /* VegetalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], AlterarVegetalPage);
    return AlterarVegetalPage;
}());

//# sourceMappingURL=alterar-vegetal.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BombaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bomba_bomba__ = __webpack_require__(163);
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
    function BombaPage(navCtrl, bombaProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.bombaProvider = bombaProvider;
        this.toastCtrl = toastCtrl;
    }
    BombaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.bombaProvider.getInfo().subscribe(function (info) {
            _this.info = info;
            _this.info = _this.info.lista_vasos;
            _this.vaso1 = _this.info[1]; // GET RETORNA O ID DOS VASOS DECRESCENTE
            _this.vaso2 = _this.info[0];
        });
    };
    BombaPage.prototype.acionaBomba = function (idVaso) {
        if (idVaso == 1) {
            if (this.vaso1.status == 1) {
                if (this.tempoBomba1 != undefined && this.tempoBomba1 != "") {
                    this.bombaProvider.putBomba(idVaso, this.tempoBomba1);
                    this.sucessoToast();
                }
                else {
                    this.erroToast("Valor inválido!");
                }
            }
            else {
                this.erroToast("O vaso não está ativo!");
            }
        }
        else {
            if (this.vaso2.status == 1) {
                if (this.tempoBomba2 != undefined && this.tempoBomba2 != "") {
                    this.bombaProvider.putBomba(idVaso, this.tempoBomba2);
                    this.sucessoToast();
                }
                else {
                    this.erroToast("Valor inválido!");
                }
            }
            else {
                this.erroToast("O vaso não está ativo!");
            }
        }
        this.tempoBomba1 = "";
        this.tempoBomba2 = "";
    };
    BombaPage.prototype.sucessoToast = function () {
        var toast = this.toastCtrl.create({
            message: 'A bomba será acionada!',
            duration: 3000,
            cssClass: 'toast-succ'
        });
        toast.present();
    };
    BombaPage.prototype.erroToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            cssClass: 'toast-fail'
        });
        toast.present();
    };
    BombaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bomba',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/bomba/bomba.html"*/'<!--\n  Generated template for the SettingsPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">Bomba</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngIf="vaso1" id="cardspec">\n    <h1>Vaso 1</h1>  \n    <h2>O último acionamento ocorreu em: <strong>{{vaso1["ultimaBomba"]}}</strong></h2>\n    <ion-input max="10" min= "1" type="number" text-center [(ngModel)]="tempoBomba1" placeholder="Insira o tempo de funcionamento da bomba" id="placeholderSpec"></ion-input>\n    <div style="text-align: center">\n      <button id="buttonBomba" ion-button (click)="acionaBomba(1)">Acionar</button>\n    </div>\n  </ion-card>\n\n  <ion-card *ngIf="vaso2" id="cardspec">\n    <h1>Vaso 2</h1>  \n    <h2>O último acionamento ocorreu em: <strong>{{vaso2["ultimaBomba"]}}</strong></h2>\n    <ion-input max="10" min= "1" type="number" text-center [(ngModel)]="tempoBomba2" placeholder="Insira o tempo de funcionamento da bomba" id="placeholderSpec"></ion-input>\n    <div style="text-align: center">\n      <button id="buttonBomba" ion-button (click)="acionaBomba(2)">Acionar</button>\n    </div>\n  </ion-card>\n  \n  \n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/bomba/bomba.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_bomba_bomba__["a" /* BombaProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], BombaPage);
    return BombaPage;
}());

//# sourceMappingURL=bomba.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriarVegetalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CriarVegetalPage = /** @class */ (function () {
    function CriarVegetalPage(navCtrl, navParams, vegetalProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vegetalProvider = vegetalProvider;
        this.toastCtrl = toastCtrl;
        this.vegetais = navParams.get('vegetais'); // Lista de vegetais
    }
    CriarVegetalPage.prototype.ionViewDidLoad = function () { };
    CriarVegetalPage.prototype.criaVegetal = function (nome, tempIdeal, umiIdeal) {
        if ((nome == undefined) || (tempIdeal == undefined) || (umiIdeal == undefined)) {
            this.erroToast();
        }
        else if (this.verificaNomeVegetal(nome)) {
            this.erroToast();
        }
        else {
            nome = nome.toLowerCase();
            this.vegetalProvider.postVegetal(nome, tempIdeal, umiIdeal);
            this.sucessoToast();
        }
        this.nome = "";
        this.tempIdeal = "";
        this.umiIdeal = "";
        //this.navCtrl.push(CadastroPage)
        this.navCtrl.pop();
    };
    CriarVegetalPage.prototype.sucessoToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Novo vegetal cadastrado com sucesso!',
            duration: 3000,
            cssClass: 'toast-succ'
        });
        toast.present();
    };
    CriarVegetalPage.prototype.erroToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Erro ao cadastrar vegetal!',
            duration: 3000,
            cssClass: 'toast-fail'
        });
        toast.present();
    };
    CriarVegetalPage.prototype.verificaNomeVegetal = function (nome) {
        // Verifica se já existe esse vegetal cadastrado
        var aux = false;
        for (var _i = 0, _a = this.vegetais; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.nome == nome.toLowerCase()) {
                aux = true;
            }
        }
        return aux;
    };
    CriarVegetalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-criar-vegetal',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/criar-vegetal/criar-vegetal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">Novo Vegetal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <ion-input type="text" text-center [(ngModel)]="nome" placeholder="Nome" id="placeholderSpec"></ion-input>\n    <ion-input max="50" min= "0" type="number" text-center [(ngModel)]="tempIdeal" placeholder="Temperatura ideal" id="placeholderSpec"></ion-input>\n    <ion-input max="100" min= "0" type="number" text-center [(ngModel)]="umiIdeal" placeholder="Umidade ideal" id="placeholderSpec"></ion-input>\n    <div style="text-align: center">\n      <button style="background-color: rgb(125, 197, 103)" id="buttonCriarVegetal" ion-button (click)="criaVegetal(nome,tempIdeal,umiIdeal)">CRIAR</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/criar-vegetal/criar-vegetal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__["a" /* VegetalProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], CriarVegetalPage);
    return CriarVegetalPage;
}());

//# sourceMappingURL=criar-vegetal.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_email_validator__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_email_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_email_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_email_email__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailPage = /** @class */ (function () {
    function EmailPage(navCtrl, navParams, toastCtrl, emailProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.emailProvider = emailProvider;
    }
    EmailPage.prototype.ionViewDidLoad = function () { };
    EmailPage.prototype.enviarEmail = function (nome, email, corpo) {
        if ((nome != undefined) && (email != undefined) && (corpo != undefined)) {
            if (__WEBPACK_IMPORTED_MODULE_1_email_validator__["validate"](email)) {
                this.emailProvider.enviarEmail(nome, email, corpo);
                this.sucessoToast();
            }
            else {
                this.erroToast('E-mail inválido');
            }
        }
        else {
            this.erroToast('Erro ao enviar e-mail!');
        }
        this.nome = "";
        this.email = "";
        this.corpo = "";
        this.navCtrl.pop();
    };
    EmailPage.prototype.sucessoToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Sucesso! Logo mais você receberá um retorno.',
            duration: 2000,
            cssClass: 'toast-succ'
        });
        toast.present();
    };
    EmailPage.prototype.erroToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            cssClass: 'toast-fail'
        });
        toast.present();
    };
    EmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-email',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/email/email.html"*/'<!--\n  Generated template for the EmailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">CONTATO</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n    Nome:<br>\n    <ion-input type="text" [(ngModel)]="nome" placeholder="Escreva aqui"> </ion-input> <br> <br>\n    E-mail:<br>\n    <ion-input type="text" [(ngModel)]="email" placeholder="Escreva aqui"> </ion-input> <br> <br>\n    Descrição:<br> <br>\n    <ion-textarea [(ngModel)]="corpo" placeholder="Escreva aqui"></ion-textarea>\n    <div style="text-align: center">\n      <button style="background-color: rgb(125, 197, 103)" ion-button \n      (click)="enviarEmail(nome,email,corpo)">ENVIAR</button>\n    </div>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/email/email.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_email_email__["a" /* EmailProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_email_email__["a" /* EmailProvider */]) === "function" && _d || Object])
    ], EmailPage);
    return EmailPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_informacao_informacao__ = __webpack_require__(164);
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

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alterar-vaso/alterar-vaso.module": [
		290,
		5
	],
	"../pages/alterar-vegetal/alterar-vegetal.module": [
		291,
		4
	],
	"../pages/bomba/bomba.module": [
		292,
		3
	],
	"../pages/criar-vegetal/criar-vegetal.module": [
		293,
		2
	],
	"../pages/email/email.module": [
		294,
		1
	],
	"../pages/informacao/informacao.module": [
		295,
		0
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
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BombaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(48);
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
        return this.http.get('https://projeto-siv.herokuapp.com/vaso');
    };
    BombaProvider.prototype.putBomba = function (idVaso, tempoBomba) {
        var body = {
            idVaso: String(idVaso),
            tempo: tempoBomba
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        //console.log(JSON.stringify(body))
        return this.http.put('https://projeto-siv.herokuapp.com/bomba', JSON.stringify(body), { headers: headers }).subscribe(function (val) {
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(48);
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
        this.URI = 'https://projeto-siv.herokuapp.com/';
    }
    InformacaoProvider.prototype.getInfo = function () {
        return this.http.get('https://projeto-siv.herokuapp.com/informacao');
    };
    InformacaoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], InformacaoProvider);
    return InformacaoProvider;
}());

//# sourceMappingURL=informacao.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__informacao_informacao__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bomba_bomba__ = __webpack_require__(106);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__["a" /* CadastroPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__bomba_bomba__["a" /* BombaPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__informacao_informacao__["a" /* InformacaoPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Sobre" tabIcon="ios-information-circle"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Cadastro" tabIcon="md-add-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Bomba" tabIcon="water"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Informacao" tabIcon="ios-leaf"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_email__ = __webpack_require__(108);
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
    function AboutPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    // Redireciona para a página de enviar email
    AboutPage.prototype.enviarEmailPagina = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__email_email__["a" /* EmailPage */]); };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">\n      Sobre\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div style="text-align: center;">\n    <h2>Sistema de Irrigação Vertical</h2>\n    <h5>\n      Trabalho desenvolvido para a disciplina de Projeto Integrador III\n      do curso de Engenharia de Telecomunicações IFSC-SJ. Integrantes:\n    </h5>\n    <ion-list>\n      <ion-item>\n        Jeneffer Farias \n      </ion-item>\n      <ion-item>\n        Marcelo Bittencourt\n      </ion-item>\n      <ion-item>\n        Osvaldo Neto\n      </ion-item>\n    </ion-list>\n    \n    <button style="background-color: rgb(125, 197, 103)" id="buttonEmail" \n    ion-button (click)="enviarEmailPagina()">CONTATO</button>\n  </div>\n  <footer style="position: absolute; bottom: 5px;">\n    Versão 1.0 - janeiro de 2021\n  </footer>\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vaso_vaso__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alterar_vegetal_alterar_vegetal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__criar_vegetal_criar_vegetal__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alterar_vaso_alterar_vaso__ = __webpack_require__(104);
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
    function CadastroPage(navCtrl, vegetalProvider, vasoProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.vegetalProvider = vegetalProvider;
        this.vasoProvider = vasoProvider;
        this.toastCtrl = toastCtrl;
    }
    // Página onde haverá método PUT Vegetal
    CadastroPage.prototype.alterarVegetalPagina = function (vegetal) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__alterar_vegetal_alterar_vegetal__["a" /* AlterarVegetalPage */], { vegetal: vegetal });
    };
    // Página onde haverá método POST Vegetal
    CadastroPage.prototype.criarVegetalPagina = function (vegetais) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__criar_vegetal_criar_vegetal__["a" /* CriarVegetalPage */], { vegetais: vegetais });
    };
    // Página onde haverá método PUT Vaso
    CadastroPage.prototype.alterarVasoPagina = function (vaso) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__alterar_vaso_alterar_vaso__["a" /* AlterarVasoPage */], { vaso: vaso });
    };
    // Método DELETE Vaso
    CadastroPage.prototype.limpaVaso = function (vaso) {
        this.vasoProvider.deleteVaso(vaso.id);
        this.limpaVasoToast();
        this.ionViewWillEnter();
    };
    CadastroPage.prototype.limpaVasoToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Vaso desativado!',
            duration: 3000,
            cssClass: 'toast-limpa'
        });
        toast.present();
    };
    // Métodos GET Vegetal e Vaso
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
            selector: 'page-cadastro',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/cadastro/cadastro.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">\n      Cadastrar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <br>\n    <div style="text-align: center;" *ngIf="vegetais">\n      <button id="buttonBomba" ion-button (click)="criarVegetalPagina(vegetais)">NOVO VEGETAL</button>\n    </div>\n  <br>\n  \n  <ion-row>\n    <ion-col id="colSpec">\n      <h4>Vegetais</h4>\n      <ion-card>\n       <ion-item *ngFor="let item of vegetais">\n        <ion-label>{{item.nome}}</ion-label>\n        <button ion-button outline item-end (click)="alterarVegetalPagina(item)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n       </ion-item>\n      </ion-card>\n    </ion-col>\n\n    <ion-col id="colSpec">\n      <h4>Vasos</h4>\n      <ion-card>\n       <ion-item *ngFor="let item of vasos">\n        <ion-label>Vaso {{item.id}}: {{item.vegetal}}</ion-label>\n        <button ion-button outline item-end (click)="alterarVasoPagina(item)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n        <button ion-button outline item-end (click)="limpaVaso(item)">\n          <ion-icon id="butDelete" name="md-trash" color="danger"></ion-icon>\n        </button>\n       </ion-item>\n      </ion-card>\n    </ion-col>\n\n  </ion-row>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/cadastro/cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__["a" /* VegetalProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_vaso_vaso__["a" /* VasoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_informacao_informacao__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cadastro_cadastro__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_bomba_bomba__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_alterar_vegetal_alterar_vegetal__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_alterar_vaso_alterar_vaso__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_criar_vegetal_criar_vegetal__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_email_email__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_bomba_bomba__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_vaso_vaso__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_vegetal_vegetal__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_informacao_informacao__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_email_email__ = __webpack_require__(296);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_criar_vegetal_criar_vegetal__["a" /* CriarVegetalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_email_email__["a" /* EmailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alterar-vaso/alterar-vaso.module#AlterarVasoPageModule', name: 'AlterarVasoPage', segment: 'alterar-vaso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alterar-vegetal/alterar-vegetal.module#AlterarVegetalPageModule', name: 'AlterarVegetalPage', segment: 'alterar-vegetal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bomba/bomba.module#BombaPageModule', name: 'BombaPage', segment: 'bomba', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/criar-vegetal/criar-vegetal.module#CriarVegetalPageModule', name: 'CriarVegetalPage', segment: 'criar-vegetal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email/email.module#EmailPageModule', name: 'EmailPage', segment: 'email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/informacao/informacao.module#InformacaoPageModule', name: 'InformacaoPage', segment: 'informacao', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_14__pages_criar_vegetal_criar_vegetal__["a" /* CriarVegetalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_email_email__["a" /* EmailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_bomba_bomba__["a" /* BombaProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_vaso_vaso__["a" /* VasoProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_vegetal_vegetal__["a" /* VegetalProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_informacao_informacao__["a" /* InformacaoProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_email_email__["a" /* EmailProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(208);
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

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailProvider = /** @class */ (function () {
    function EmailProvider(http) {
        this.http = http;
    }
    EmailProvider.prototype.enviarEmail = function (nome, email, corpo) {
        var body = {
            nome: nome,
            email: email,
            corpo: corpo
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        return this.http.post('http://localhost:5000', JSON.stringify(body), { headers: headers }).subscribe(function (val) {
            console.log("POST realizado", val);
        }, function (response) {
            console.log("POST não realizado", response);
        });
    };
    EmailProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], EmailProvider);
    return EmailProvider;
    var _a;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VegetalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(48);
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
        return this.http.get('https://projeto-siv.herokuapp.com/vegetal');
    };
    VegetalProvider.prototype.putVegetal = function (nome, tempIdeal, umiIdeal) {
        var body = {
            nome: nome,
            tempIdeal: String(tempIdeal),
            umidadeIdeal: String(umiIdeal)
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        return this.http.put('https://projeto-siv.herokuapp.com/vegetal', JSON.stringify(body), { headers: headers }).subscribe(function (val) {
            console.log("PUT realizado", val);
        }, function (response) {
            console.log("PUT não realizado", response);
        });
    };
    VegetalProvider.prototype.postVegetal = function (nome, tempIdeal, umiIdeal) {
        var body = {
            nome: nome,
            tempIdeal: String(tempIdeal),
            umidadeIdeal: String(umiIdeal)
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        return this.http.post('https://projeto-siv.herokuapp.com/vegetal', JSON.stringify(body), { headers: headers }).subscribe(function (val) {
            console.log("POST realizado", val);
        }, function (response) {
            console.log("POST não realizado", response);
        });
    };
    VegetalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], VegetalProvider);
    return VegetalProvider;
}());

//# sourceMappingURL=vegetal.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VasoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(48);
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
        return this.http.get('https://projeto-siv.herokuapp.com/vaso');
    };
    VasoProvider.prototype.putVaso = function (idVaso, nomeVegetal) {
        var body = {
            idVaso: String(idVaso),
            nomeVegetal: nomeVegetal
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        return this.http.put('https://projeto-siv.herokuapp.com/vaso', JSON.stringify(body), { headers: headers }).subscribe(function (val) {
            console.log("PUT realizado", val);
        }, function (response) {
            console.log("PUT não realizado", response);
        });
    };
    VasoProvider.prototype.deleteVaso = function (vaso) {
        var data = {
            idVaso: String(vaso)
        };
        var data_JSON = JSON.stringify(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "application/json");
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), body: data_JSON
        };
        return this.http.delete("https://projeto-siv.herokuapp.com/vaso", httpOptions)
            .subscribe(function (val) {
            console.log("DELETE realizado!", val);
        }, function (response) {
            console.log("DELETE não realizado!", response);
        });
    };
    VasoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], VasoProvider);
    return VasoProvider;
}());

//# sourceMappingURL=vaso.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map