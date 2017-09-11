$(function () {
    fifth();
    //fourth();
    //third();
    //second();
    //first();
});

//using ObservableArray
var fifth = function () {
    var nameArray = [{ name: "Tintin" }, { name: "Snowy" }, { name: "Haddock" }, { name: "Thomson" }];

    var viewModel = {
        accName: ko.observable("Jack"),
        nameList: ko.observableArray(nameArray),
        addName: function () {
            this.nameList.push({ name: this.accName() });
        },
        removeName: function () { this.nameList.pop();}
    };//viewModel

    ko.applyBindings(viewModel);
}

var fourth = function () {
    var viewModel = {
        name: ko.observable("Tintin"),
        changeName: function () {
            this.name("Mandrake");
        },
        nameVisible: ko.observable(true)
    };//viewModel

    //Dependent Observable
    viewModel.displayName = ko.computed(function () {
        return this.name() + " is " + (!this.nameVisible() ? "not" : "") + " visible."
    }, viewModel);

    ko.applyBindings(viewModel);//This applies the viewModel to the KO
}; //fourth

var third = function () {
    var viewModel = {
        name: ko.observable("Tintin"),
        changeName: function () {
            this.name("Mandrake");
        },
        nameVisible: ko.observable(true)
    };//viewModel
    ko.applyBindings(viewModel);//This applies the viewModel to the KO
}; //third

//Here because of Observable the name is monitered and when a change happenes it will notify
var second = function () {
    var viewModel = {
        name: ko.observable("Tintin"),
        changeName: function () {
            this.name("Mandrake");
        }
    };//viewModel
    ko.applyBindings(viewModel);//This applies the viewModel to the KO
}; //second

//Name will not change even when the changeName function is called as it is just JS
var first = function () {
    var viewModel = {
        name: "Tintin",
        changeName: function () {
            //alert("From ChangeName");
            this.name = "Mandrake";
        }
    };//viewModel
    ko.applyBindings(viewModel);//This applies the viewModel to the KO
}; //first
