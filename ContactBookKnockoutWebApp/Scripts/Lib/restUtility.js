//https://github.com/dknight/jQuery-Notify-bar for Notification

$(function () {
    $.ajaxSetup({cache:false});
});

function restContactAdd(url, dataToSave, callback) {
    ajaxService(url, dataToSave, "POST", "Contact Added.", callback);
}

function restContactUpdate(url, dataToSave, callback) {
    //alert("restContactUpdate\nurl: "+ url + "\nData: " + dataToSave.Name());
    //console.log("restContactUpdate -> url: " + url + "\nData: " + dataToSave);
    ajaxService(url, dataToSave, "PUT", "Contact Updated.", callback);
}

function restContactDelete(url) {
    ajaxService(url, null, "Delete", "Contact Deleted.");
}

function ajaxService(url, dataToSave, httpVerb, successMessage, callback) {
    $.ajax(url, {
        data: dataToSave,
        type: httpVerb,
        dataType: "json",
        contentType: "application/json",
        success: function (data) {
            $.notifyBar({
                html: successMessage,
                cls: "success"
            });
            if (callback !== undefined) {
                console.log("callback -> " + callback);
                callback(data);
            }
        },
        error: function () {
            $.notifyBar({
                html: "Unexpected Error",
                cls: "Error"
            });
        }
    });
}