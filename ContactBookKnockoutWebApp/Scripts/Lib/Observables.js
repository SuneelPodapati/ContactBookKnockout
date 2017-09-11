$(function () {
    first();
});

var first = function () {
    var viewModel = {
        name: "Tintin",
        changeName: function () {
            alert("From ChangeName");
            name: "Mandrake";
        }
    };//viewModel

    ko.applyBindings(viewModel);//This applies the viewModel to the KO

}; //first
