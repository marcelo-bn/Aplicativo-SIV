webpackJsonp([7],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarVasoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vaso_vaso__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vegetal_vegetal__ = __webpack_require__(43);
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

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarVegetalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__ = __webpack_require__(43);
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

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BombaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bomba_bomba__ = __webpack_require__(166);
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

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriarVegetalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__ = __webpack_require__(43);
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

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_email_validator__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_email_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_email_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_email_email__ = __webpack_require__(167);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_email_email__["a" /* EmailProvider */]])
    ], EmailPage);
    return EmailPage;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_informacao_informacao__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GraficoPage = /** @class */ (function () {
    function GraficoPage(navCtrl, navParams, informacaoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.informacaoProvider = informacaoProvider;
        this.vaso1Temperaturas = [];
        this.vaso1Umidades = [];
        this.vaso1Datas = [];
        this.vaso2Temperaturas = [];
        this.vaso2Umidades = [];
        this.vaso2Datas = [];
    }
    GraficoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.info = "";
        this.vaso1Temperaturas = [];
        this.vaso1Umidades = [];
        this.vaso1Datas = [];
        this.vaso2Temperaturas = [];
        this.vaso2Umidades = [];
        this.vaso2Datas = [];
        this.informacaoProvider.getInfo().subscribe(function (info) {
            _this.info = info;
            _this.info = _this.info.lista_info;
            console.log(_this.info);
        });
        setTimeout(function () {
            _this.lineChart1 = _this.getLineChartVaso1();
        }, 3000);
        setTimeout(function () {
            _this.lineChart2 = _this.getLineChartVaso2();
        }, 3000);
    };
    GraficoPage.prototype.getChart = function (context, chartType, data, options) {
        return new __WEBPACK_IMPORTED_MODULE_2_chart_js___default.a(context, {
            data: data,
            options: options,
            type: chartType
        });
    };
    GraficoPage.prototype.getLineChartVaso1 = function () {
        this.verificaVaso();
        var data = {
            labels: this.vaso1Datas,
            datasets: [{
                    label: 'temperatura',
                    data: this.vaso1Temperaturas,
                    borderColor: 'rgb(102, 178, 255)',
                    borderCapStyle: 'butt',
                    borderJoinStyle: 'mitter',
                    pointRadius: 3,
                    pointHitRadius: 10,
                    spanGaps: false,
                },
                {
                    label: 'umidade',
                    data: this.vaso1Umidades,
                    borderColor: 'rgb(125, 197, 103)',
                    borderCapStyle: 'butt',
                    borderJoinStyle: 'mitter',
                    pointRadius: 3,
                    pointHitRadius: 10,
                    spanGaps: false,
                }]
        };
        var options = {
            scales: {
                xAxes: [{
                        display: false
                    }]
            }
        };
        return this.getChart(this.lineCanvas.nativeElement, 'line', data, options);
    };
    GraficoPage.prototype.getLineChartVaso2 = function () {
        this.verificaVaso();
        var data = {
            labels: this.vaso2Datas,
            datasets: [{
                    label: 'temperatura',
                    data: this.vaso2Temperaturas,
                    borderColor: 'rgb(102, 178, 255)',
                    borderCapStyle: 'butt',
                    borderJoinStyle: 'mitter',
                    pointRadius: 3,
                    pointHitRadius: 10,
                    spanGaps: false,
                },
                {
                    label: 'umidade',
                    data: this.vaso2Umidades,
                    borderColor: 'rgb(125, 197, 103)',
                    borderCapStyle: 'butt',
                    borderJoinStyle: 'mitter',
                    pointRadius: 3,
                    pointHitRadius: 10,
                    spanGaps: false,
                }]
        };
        var options = {
            scales: {
                xAxes: [{
                        display: false
                    }]
            }
        };
        return this.getChart(this.lineCanvas2.nativeElement, 'line', data, options);
    };
    GraficoPage.prototype.verificaVaso = function () {
        // Seleciona apenas os dados de um vaso específico
        for (var _i = 0, _a = this.info; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.idVaso == 1) {
                this.vaso1Temperaturas.push(item.temperatura);
                this.vaso1Umidades.push(item.umidade);
                this.vaso1Datas.push(item.data);
            }
            else {
                this.vaso2Temperaturas.push(item.temperatura);
                this.vaso2Umidades.push(item.umidade);
                this.vaso2Datas.push(item.data);
            }
        }
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], GraficoPage.prototype, "lineCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas2'),
        __metadata("design:type", Object)
    ], GraficoPage.prototype, "lineCanvas2", void 0);
    GraficoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grafico',template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/grafico/grafico.html"*/'<!--\n  Generated template for the GraficoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center;">Gráficos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n      <ion-card-header>\n        Vaso 1\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #lineCanvas></canvas>\n      </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Vaso 2\n    </ion-card-header>\n      <ion-card-content>\n          <canvas #lineCanvas2></canvas>\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/grafico/grafico.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_informacao_informacao__["a" /* InformacaoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_informacao_informacao__["a" /* InformacaoProvider */]) === "function" && _c || Object])
    ], GraficoPage);
    return GraficoPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=grafico.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_informacao_informacao__ = __webpack_require__(83);
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

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alterar-vaso/alterar-vaso.module": [
		431,
		6
	],
	"../pages/alterar-vegetal/alterar-vegetal.module": [
		432,
		5
	],
	"../pages/bomba/bomba.module": [
		433,
		4
	],
	"../pages/criar-vegetal/criar-vegetal.module": [
		434,
		3
	],
	"../pages/email/email.module": [
		435,
		2
	],
	"../pages/grafico/grafico.module": [
		436,
		1
	],
	"../pages/informacao/informacao.module": [
		437,
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
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BombaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(49);
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

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
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
        return this.http.post('http://localhost:5000/email', JSON.stringify(body), { headers: headers }).subscribe(function (val) {
            console.log("POST realizado", val);
        }, function (response) {
            console.log("POST não realizado", response);
        });
    };
    EmailProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], EmailProvider);
    return EmailProvider;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__informacao_informacao__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bomba_bomba__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grafico_grafico__ = __webpack_require__(111);
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
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__grafico_grafico__["a" /* GraficoPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/marcelobittencourt/Documents/app-siv/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Sobre" tabIcon="ios-information-circle"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Cadastro" tabIcon="md-add-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Bomba" tabIcon="water"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Informacao" tabIcon="ios-leaf"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Gráficos" tabIcon="md-analytics"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/marcelobittencourt/Documents/app-siv/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_email__ = __webpack_require__(110);
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

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_vegetal_vegetal__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_vaso_vaso__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alterar_vegetal_alterar_vegetal__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__criar_vegetal_criar_vegetal__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alterar_vaso_alterar_vaso__ = __webpack_require__(106);
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

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_informacao_informacao__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cadastro_cadastro__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_bomba_bomba__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_alterar_vegetal_alterar_vegetal__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_alterar_vaso_alterar_vaso__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_criar_vegetal_criar_vegetal__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_email_email__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_grafico_grafico__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_bomba_bomba__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_vaso_vaso__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_vegetal_vegetal__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_informacao_informacao__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_email_email__ = __webpack_require__(167);
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
                __WEBPACK_IMPORTED_MODULE_15__pages_email_email__["a" /* EmailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_grafico_grafico__["a" /* GraficoPage */]
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
                        { loadChildren: '../pages/grafico/grafico.module#GraficoPageModule', name: 'GraficoPage', segment: 'grafico', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_15__pages_email_email__["a" /* EmailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_grafico_grafico__["a" /* GraficoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_bomba_bomba__["a" /* BombaProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_vaso_vaso__["a" /* VasoProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_vegetal_vegetal__["a" /* VegetalProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_informacao_informacao__["a" /* InformacaoProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_email_email__["a" /* EmailProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 168,
	"./af.js": 168,
	"./ar": 169,
	"./ar-dz": 170,
	"./ar-dz.js": 170,
	"./ar-kw": 171,
	"./ar-kw.js": 171,
	"./ar-ly": 172,
	"./ar-ly.js": 172,
	"./ar-ma": 173,
	"./ar-ma.js": 173,
	"./ar-sa": 174,
	"./ar-sa.js": 174,
	"./ar-tn": 175,
	"./ar-tn.js": 175,
	"./ar.js": 169,
	"./az": 176,
	"./az.js": 176,
	"./be": 177,
	"./be.js": 177,
	"./bg": 178,
	"./bg.js": 178,
	"./bm": 179,
	"./bm.js": 179,
	"./bn": 180,
	"./bn-bd": 181,
	"./bn-bd.js": 181,
	"./bn.js": 180,
	"./bo": 182,
	"./bo.js": 182,
	"./br": 183,
	"./br.js": 183,
	"./bs": 184,
	"./bs.js": 184,
	"./ca": 185,
	"./ca.js": 185,
	"./cs": 186,
	"./cs.js": 186,
	"./cv": 187,
	"./cv.js": 187,
	"./cy": 188,
	"./cy.js": 188,
	"./da": 189,
	"./da.js": 189,
	"./de": 190,
	"./de-at": 191,
	"./de-at.js": 191,
	"./de-ch": 192,
	"./de-ch.js": 192,
	"./de.js": 190,
	"./dv": 193,
	"./dv.js": 193,
	"./el": 194,
	"./el.js": 194,
	"./en-au": 195,
	"./en-au.js": 195,
	"./en-ca": 196,
	"./en-ca.js": 196,
	"./en-gb": 197,
	"./en-gb.js": 197,
	"./en-ie": 198,
	"./en-ie.js": 198,
	"./en-il": 199,
	"./en-il.js": 199,
	"./en-in": 200,
	"./en-in.js": 200,
	"./en-nz": 201,
	"./en-nz.js": 201,
	"./en-sg": 202,
	"./en-sg.js": 202,
	"./eo": 203,
	"./eo.js": 203,
	"./es": 204,
	"./es-do": 205,
	"./es-do.js": 205,
	"./es-mx": 206,
	"./es-mx.js": 206,
	"./es-us": 207,
	"./es-us.js": 207,
	"./es.js": 204,
	"./et": 208,
	"./et.js": 208,
	"./eu": 209,
	"./eu.js": 209,
	"./fa": 210,
	"./fa.js": 210,
	"./fi": 211,
	"./fi.js": 211,
	"./fil": 212,
	"./fil.js": 212,
	"./fo": 213,
	"./fo.js": 213,
	"./fr": 214,
	"./fr-ca": 215,
	"./fr-ca.js": 215,
	"./fr-ch": 216,
	"./fr-ch.js": 216,
	"./fr.js": 214,
	"./fy": 217,
	"./fy.js": 217,
	"./ga": 218,
	"./ga.js": 218,
	"./gd": 219,
	"./gd.js": 219,
	"./gl": 220,
	"./gl.js": 220,
	"./gom-deva": 221,
	"./gom-deva.js": 221,
	"./gom-latn": 222,
	"./gom-latn.js": 222,
	"./gu": 223,
	"./gu.js": 223,
	"./he": 224,
	"./he.js": 224,
	"./hi": 225,
	"./hi.js": 225,
	"./hr": 226,
	"./hr.js": 226,
	"./hu": 227,
	"./hu.js": 227,
	"./hy-am": 228,
	"./hy-am.js": 228,
	"./id": 229,
	"./id.js": 229,
	"./is": 230,
	"./is.js": 230,
	"./it": 231,
	"./it-ch": 232,
	"./it-ch.js": 232,
	"./it.js": 231,
	"./ja": 233,
	"./ja.js": 233,
	"./jv": 234,
	"./jv.js": 234,
	"./ka": 235,
	"./ka.js": 235,
	"./kk": 236,
	"./kk.js": 236,
	"./km": 237,
	"./km.js": 237,
	"./kn": 238,
	"./kn.js": 238,
	"./ko": 239,
	"./ko.js": 239,
	"./ku": 240,
	"./ku.js": 240,
	"./ky": 241,
	"./ky.js": 241,
	"./lb": 242,
	"./lb.js": 242,
	"./lo": 243,
	"./lo.js": 243,
	"./lt": 244,
	"./lt.js": 244,
	"./lv": 245,
	"./lv.js": 245,
	"./me": 246,
	"./me.js": 246,
	"./mi": 247,
	"./mi.js": 247,
	"./mk": 248,
	"./mk.js": 248,
	"./ml": 249,
	"./ml.js": 249,
	"./mn": 250,
	"./mn.js": 250,
	"./mr": 251,
	"./mr.js": 251,
	"./ms": 252,
	"./ms-my": 253,
	"./ms-my.js": 253,
	"./ms.js": 252,
	"./mt": 254,
	"./mt.js": 254,
	"./my": 255,
	"./my.js": 255,
	"./nb": 256,
	"./nb.js": 256,
	"./ne": 257,
	"./ne.js": 257,
	"./nl": 258,
	"./nl-be": 259,
	"./nl-be.js": 259,
	"./nl.js": 258,
	"./nn": 260,
	"./nn.js": 260,
	"./oc-lnc": 261,
	"./oc-lnc.js": 261,
	"./pa-in": 262,
	"./pa-in.js": 262,
	"./pl": 263,
	"./pl.js": 263,
	"./pt": 264,
	"./pt-br": 265,
	"./pt-br.js": 265,
	"./pt.js": 264,
	"./ro": 266,
	"./ro.js": 266,
	"./ru": 267,
	"./ru.js": 267,
	"./sd": 268,
	"./sd.js": 268,
	"./se": 269,
	"./se.js": 269,
	"./si": 270,
	"./si.js": 270,
	"./sk": 271,
	"./sk.js": 271,
	"./sl": 272,
	"./sl.js": 272,
	"./sq": 273,
	"./sq.js": 273,
	"./sr": 274,
	"./sr-cyrl": 275,
	"./sr-cyrl.js": 275,
	"./sr.js": 274,
	"./ss": 276,
	"./ss.js": 276,
	"./sv": 277,
	"./sv.js": 277,
	"./sw": 278,
	"./sw.js": 278,
	"./ta": 279,
	"./ta.js": 279,
	"./te": 280,
	"./te.js": 280,
	"./tet": 281,
	"./tet.js": 281,
	"./tg": 282,
	"./tg.js": 282,
	"./th": 283,
	"./th.js": 283,
	"./tk": 284,
	"./tk.js": 284,
	"./tl-ph": 285,
	"./tl-ph.js": 285,
	"./tlh": 286,
	"./tlh.js": 286,
	"./tr": 287,
	"./tr.js": 287,
	"./tzl": 288,
	"./tzl.js": 288,
	"./tzm": 289,
	"./tzm-latn": 290,
	"./tzm-latn.js": 290,
	"./tzm.js": 289,
	"./ug-cn": 291,
	"./ug-cn.js": 291,
	"./uk": 292,
	"./uk.js": 292,
	"./ur": 293,
	"./ur.js": 293,
	"./uz": 294,
	"./uz-latn": 295,
	"./uz-latn.js": 295,
	"./uz.js": 294,
	"./vi": 296,
	"./vi.js": 296,
	"./x-pseudo": 297,
	"./x-pseudo.js": 297,
	"./yo": 298,
	"./yo.js": 298,
	"./zh-cn": 299,
	"./zh-cn.js": 299,
	"./zh-hk": 300,
	"./zh-hk.js": 300,
	"./zh-mo": 301,
	"./zh-mo.js": 301,
	"./zh-tw": 302,
	"./zh-tw.js": 302
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 403;

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(346);
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

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VegetalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(49);
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

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VasoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(49);
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

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(49);
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

/***/ })

},[349]);
//# sourceMappingURL=main.js.map