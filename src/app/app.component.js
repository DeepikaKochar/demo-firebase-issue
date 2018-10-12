"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase.init({
            onPushTokenReceivedCallback: function (token) {
                if (token) {
                    console.log("onPushTokenReceivedCallback " + token);
                }
            },
            persist: false
        }).then(function (instance) {
        }, function (error) {
        });
        firebase.getCurrentPushToken().then(function (token) {
            if (token) {
                console.log("getCurrentPushToken " + token);
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-app",
            templateUrl: "app.component.html"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFRekQ7SUFBQTtJQXFCQSxDQUFDO0lBbkJHLCtCQUFRLEdBQVI7UUFDSSxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ1YsMkJBQTJCLEVBQUUsVUFBQyxLQUFLO2dCQUNuQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO29CQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RELENBQUM7WUFDRCxDQUFDO1lBQ0QsT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLFFBQVE7UUFDdEIsQ0FBQyxFQUFFLFVBQVUsS0FBSztRQUNsQixDQUFDLENBQ0osQ0FBQztRQUVGLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDdEMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwQlEsWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQztPQUVXLFlBQVksQ0FxQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgICAgICAgb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOiAodG9rZW4pID0+e1xuICAgICAgICAgICAgaWYodG9rZW4pe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrIFwiK3Rva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwZXJzaXN0OiBmYWxzZVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBmaXJlYmFzZS5nZXRDdXJyZW50UHVzaFRva2VuKCkudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgIGlmKHRva2VuKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldEN1cnJlbnRQdXNoVG9rZW4gXCIrdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59Il19