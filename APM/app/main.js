"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main entry point 
//JiT-Just in time
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//AoT-Ahead of Time
//import { platformBrowser } from "@angular/platform-browser";
//import { AppModuleNgFactory } from "./app.module.ngfactory";
//platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);*/
//# sourceMappingURL=main.js.map