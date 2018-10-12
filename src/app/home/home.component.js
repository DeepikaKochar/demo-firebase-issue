"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.curriculums = [];
        this.value = {
            name: "Pancakes!",
            desc: "Everybody* loves gluten.",
            price: "$5",
            imageSrc: "https://placem.at/things?w=500&txt=0&random=9",
            list: [
                { name: "Motorcycle", desc: "It'll be worth the argument with your spouse.", price: "$8899", imageSrc: "https://placem.at/things?w=500&txt=0&random=1" },
                { name: "Air Plant", desc: "It looked cool in the store.", price: "$9", imageSrc: "https://placem.at/things?w=500&txt=0&random=2" },
                { name: "Bowl of Crap",
                    desc: "Probably something in here. But probably not.",
                    price: "$1",
                    imageSrc: "https://placem.at/things?w=500&txt=0&random=6" },
                { name: "Beer? Liquor?", desc: "Mmmmm drinky.", price: "$7", imageSrc: "https://placem.at/things?w=500&txt=0&random=10" },
                { name: "Skateboard",
                    desc: "Too bad you are too old to use it.",
                    price: "$129",
                    imageSrc: "https://placem.at/things?w=500&txt=0&random=7" }
            ]
        };
        for (var i = 0; i < 4; i++) {
            this.curriculums.push(this.value);
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQU9sRDtJQXVCSTtRQXJCQSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixVQUFLLEdBQUc7WUFDSixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsMEJBQTBCO1lBQ2hDLEtBQUssRUFBRSxJQUFJO1lBQ1gsUUFBUSxFQUFFLCtDQUErQztZQUN6RCxJQUFJLEVBQUU7Z0JBQ0YsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSwrQ0FBK0MsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSwrQ0FBK0MsRUFBRTtnQkFDeEosRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSw4QkFBOEIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSwrQ0FBK0MsRUFBRTtnQkFDbkksRUFBRSxJQUFJLEVBQUUsY0FBYztvQkFDdEIsSUFBSSxFQUFFLCtDQUErQztvQkFDckQsS0FBSyxFQUFFLElBQUk7b0JBQ1gsUUFBUSxFQUFFLCtDQUErQyxFQUFDO2dCQUMxRCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxnREFBZ0QsRUFBRTtnQkFDekgsRUFBRSxJQUFJLEVBQUUsWUFBWTtvQkFDcEIsSUFBSSxFQUFFLG9DQUFvQztvQkFDMUMsS0FBSyxFQUFFLE1BQU07b0JBQ2IsUUFBUSxFQUFFLCtDQUErQyxFQUFFO2FBQzlEO1NBQ0osQ0FBQztRQUdFLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBL0JRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7O09BQ1csYUFBYSxDQWdDekI7SUFBRCxvQkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBcbiAgICBjdXJyaWN1bHVtcyA9IFtdO1xuICAgIHZhbHVlID0ge1xuICAgICAgICBuYW1lOiBcIlBhbmNha2VzIVwiLCBcbiAgICAgICAgZGVzYzogXCJFdmVyeWJvZHkqIGxvdmVzIGdsdXRlbi5cIiwgXG4gICAgICAgIHByaWNlOiBcIiQ1XCIsIFxuICAgICAgICBpbWFnZVNyYzogXCJodHRwczovL3BsYWNlbS5hdC90aGluZ3M/dz01MDAmdHh0PTAmcmFuZG9tPTlcIiwgXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgIHsgbmFtZTogXCJNb3RvcmN5Y2xlXCIsIGRlc2M6IFwiSXQnbGwgYmUgd29ydGggdGhlIGFyZ3VtZW50IHdpdGggeW91ciBzcG91c2UuXCIsIHByaWNlOiBcIiQ4ODk5XCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcGxhY2VtLmF0L3RoaW5ncz93PTUwMCZ0eHQ9MCZyYW5kb209MVwiIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiQWlyIFBsYW50XCIsIGRlc2M6IFwiSXQgbG9va2VkIGNvb2wgaW4gdGhlIHN0b3JlLlwiLCBwcmljZTogXCIkOVwiLCBpbWFnZVNyYzogXCJodHRwczovL3BsYWNlbS5hdC90aGluZ3M/dz01MDAmdHh0PTAmcmFuZG9tPTJcIiB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkJvd2wgb2YgQ3JhcFwiLCBcbiAgICAgICAgICAgIGRlc2M6IFwiUHJvYmFibHkgc29tZXRoaW5nIGluIGhlcmUuIEJ1dCBwcm9iYWJseSBub3QuXCIsIFxuICAgICAgICAgICAgcHJpY2U6IFwiJDFcIiwgXG4gICAgICAgICAgICBpbWFnZVNyYzogXCJodHRwczovL3BsYWNlbS5hdC90aGluZ3M/dz01MDAmdHh0PTAmcmFuZG9tPTZcIn0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiQmVlcj8gTGlxdW9yP1wiLCBkZXNjOiBcIk1tbW1tIGRyaW5reS5cIiwgcHJpY2U6IFwiJDdcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGFjZW0uYXQvdGhpbmdzP3c9NTAwJnR4dD0wJnJhbmRvbT0xMFwiIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiU2thdGVib2FyZFwiLCBcbiAgICAgICAgICAgIGRlc2M6IFwiVG9vIGJhZCB5b3UgYXJlIHRvbyBvbGQgdG8gdXNlIGl0LlwiLCBcbiAgICAgICAgICAgIHByaWNlOiBcIiQxMjlcIiwgXG4gICAgICAgICAgICBpbWFnZVNyYzogXCJodHRwczovL3BsYWNlbS5hdC90aGluZ3M/dz01MDAmdHh0PTAmcmFuZG9tPTdcIiB9XG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspe1xuICAgICAgICAgICAgdGhpcy5jdXJyaWN1bHVtcy5wdXNoKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cbn1cbiJdfQ==