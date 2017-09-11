$(function () {
    var nameArray = [{ name: "Tintin" }, { name: "Snowy" }, { name: "Haddock" }, { name: "Thomson" }];

    var viewModel = {
        accName: ko.observable("Jack"),
        nameList: ko.observableArray(nameArray),
        addName: function () {
            this.nameList.push({ name: this.accName() });
        }
    };//viewModel

    $(document).on("click", ".btn-danger", function () {
        var nameToRemove = ko.dataFor(this);//ko.dataFor will give the entire info where it is
        viewModel.nameList.remove(nameToRemove);
    });//document

    ko.applyBindings(viewModel);
});