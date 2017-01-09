/// <reference path="resize.ts" />
////interface CallWhenDone {//for PsalmManager.getPsalmFile
////    (text: string): void;
////}
var Psalms;
(function (Psalms) {
    Psalms[Psalms["p1"] = 0] = "p1";
    Psalms[Psalms["p2"] = 1] = "p2";
    Psalms[Psalms["p3"] = 2] = "p3";
    Psalms[Psalms["p4"] = 3] = "p4";
    Psalms[Psalms["p5"] = 4] = "p5";
    Psalms[Psalms["p6a"] = 5] = "p6a";
    Psalms[Psalms["p6b"] = 6] = "p6b";
})(Psalms || (Psalms = {}));
var PsalmManager = (function () {
    function PsalmManager() {
        this.psalmTextElement = document.getElementById("textDiv");
    }
    PsalmManager.prototype.loadPsalm = function (psalm) {
        var _this = this;
        this.loadPsalm_getPsalmFile(psalm, function (fileText) {
            _this.loadPsalm_showPsalmHtml(_this.loadPsalm_jsonToHtml(JSON.parse(fileText)));
        });
    };
    PsalmManager.prototype.loadPsalm_getPsalmFile = function (psalm, callWhenDone) {
        var file = new XMLHttpRequest();
        console.log(psalm.toString);
        file.open("GET", "psalms/" + psalm.toString + ".json", true);
        file.send();
        file.onreadystatechange = function () {
            if (file.readyState == 4 && file.status == 200) {
                callWhenDone(file.responseText);
            }
        };
    };
    PsalmManager.prototype.loadPsalm_jsonToHtml = function (json) {
        console.log(json);
        console.log(typeof (json));
        var html = "";
        //---header
        var header = "";
        header += json.psalm;
        return '';
    };
    PsalmManager.prototype.loadPsalm_showPsalmHtml = function (html) {
        this.psalmTextElement.innerHTML = html;
    };
    return PsalmManager;
}());
console.log("app.ts/js,root");
window.onload = function () {
    console.log("app.ts/js,load");
    var psalmManager = new PsalmManager();
    psalmManager.loadPsalm(Psalms.p1);
};
//# sourceMappingURL=app.js.map