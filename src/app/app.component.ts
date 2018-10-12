import { Component, OnInit } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})

export class AppComponent implements OnInit {

    ngOnInit() {
        firebase.init({
            onPushTokenReceivedCallback: (token) =>{
            if(token){
                console.log("onPushTokenReceivedCallback "+token);
            }
            },
            persist: false
        }).then(function (instance) {
            }, function (error) {
            }
        );
        
        firebase.getCurrentPushToken().then((token) => {
            if(token){
                console.log("getCurrentPushToken "+token);
            }
        });
    }
}