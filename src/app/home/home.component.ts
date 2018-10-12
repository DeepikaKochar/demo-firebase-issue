import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    
    curriculums = [];
    value = {
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
            imageSrc: "https://placem.at/things?w=500&txt=0&random=6"},
            { name: "Beer? Liquor?", desc: "Mmmmm drinky.", price: "$7", imageSrc: "https://placem.at/things?w=500&txt=0&random=10" },
            { name: "Skateboard", 
            desc: "Too bad you are too old to use it.", 
            price: "$129", 
            imageSrc: "https://placem.at/things?w=500&txt=0&random=7" }
        ]
    };

    constructor() {
        for(let i = 0; i < 4; i++){
            this.curriculums.push(this.value);
        }
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
