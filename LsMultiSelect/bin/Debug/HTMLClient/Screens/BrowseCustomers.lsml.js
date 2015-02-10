/// <reference path="~/GeneratedArtifacts/viewModel.js" />
/// <reference path="../scripts/lswires.js" />

myapp.BrowseCustomers.Customers_postRender = function (element, contentItem) {
    // Write code here.
    // Enable multi-item selection on this tile control
    lsWire.list.enableMultiSelect(contentItem);
};
myapp.BrowseCustomers.GetSelected_execute = function (screen) {
    // Write code here.
    var list = screen.findContentItem("Customers");
    var count = lsWire.list.selectedCount(list);
    var selected = lsWire.list.selected(list);
    //var text = "Customers Selected\n\n";
    _.forEach(selected, function (item) {
        window.open("http://google.com");
    });
    //text += "\n\nCount = " + count;
    //window.alert(text);

};