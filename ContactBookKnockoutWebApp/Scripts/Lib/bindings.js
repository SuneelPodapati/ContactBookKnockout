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

    $("#contactDialog").hide();

    var viewModel = {
        //contactList: ko.observableArray(data),
        contactList: ko.observableArray(ko.toProtectedObservableItemArray(data)),
        Name: ko.observable(""),
        Phone: ko.observable(""),
        Group: ko.observable(""),
        groupCount: ko.observable(""),
        groupNameSearch: ko.observable(""),
        groupList: ko.observableArray(""),
        groupContactCount: ko.observable(""),
        groupContactList: ko.observableArray(""),
        searchByGroup: function () {
            var filter = this.groupNameSearch().toLowerCase();
            var grpContactList = ko.utils.arrayFilter(this.contactList(), function (contact) {
                //return (contact.Group.toLowerCase() === filter);//With Regular Array
                return (contact.Group().toLowerCase() === filter);//After toProtectedObservableItemArray
            });
            this.groupContactCount(grpContactList.length);
            this.groupContactList(grpContactList);
        },
        getGroups: function () {
            var groups = ko.utils.arrayMap(this.contactList(), function (grp) {
                //return grp.Group;//With Regular Array
                return grp.Group();//After toProtectedObservableItemArray
            });
            groups.sort();
            var distinctResult = ko.utils.arrayGetDistinctValues(groups);
            this.groupCount(distinctResult.length);
            this.groupList(distinctResult);
            return distinctResult.length;
        },
        addContact: function () {
            //this.contactList.push({ Name: this.Name(), Phone: this.Phone(), Group: this.Group() });//With Array
            //After toProtectedObservableItemArray
            var newContact = { Name: this.Name(), Phone: this.Phone(), Group: this.Group() };
            this.contactList.push(new ko.protectedObservableItem(newContact));
        },
        selectedContact: ko.observable(""),
        selectContact: function () {
            //This will not work as it is using $data
            viewModel.selectedContact(this);
        }
    };//viewModel


    //Dependent observable
    viewModel.contactListCount = ko.computed(function () {
        return this.contactList().length;
    }, viewModel);//contactListCount

    $(document).on("click", ".btn-outline-danger", function () {
        var contactToRemove = ko.dataFor(this);
        viewModel.contactList.remove(contactToRemove);
    });//document


    $(document).on("click", "#editContact", function () {
        $("#contactDialog").dialog({
            buttons: {
                Save: function () {
                    $(this).dialog("close");
                    viewModel.selectedContact().commit();
                },
                Cancel: function () {
                    $(this).dialog("close");}
            }
        });
    });//document



    ko.applyBindings(viewModel);

});//Root