$(function () {
    var data = [
        { Id: 1, Name: "Tintin", Phone: "129201", Group: "Friend" },
        { Id: 2, Name: "Snowy", Phone: "292011", Group: "Professional" },
        { Id: 3, Name: "Bageera", Phone: "392012", Group: "Gym" },
        { Id: 4, Name: "Baloo", Phone: "492013", Group: "Friend" },
        { Id: 5, Name: "Mowgli", Phone: "592014", Group: "Professional" },
        { Id: 6, Name: "Archie", Phone: "69205", Group: "Family" },
        { Id: 7, Name: "Batman", Phone: "79206", Group: "Friend" },
        { Id: 8, Name: "Mandrake", Phone: "89207", Group: "Family" }
    ];


    var viewModel = {
        contactList: ko.observableArray(data),
        Name: ko.observable(""),
        Phone: ko.observable(""),
        Group: ko.observable(""),
        addContact: function () {
            this.contactList.push({ Name: this.Name(), Phone: this.Phone(), Group: this.Group() });
        }
    };//viewModel


    ko.applyBindings(viewModel);

});//Root