/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.BrowseCustomers.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCustomers
        },
        CustomerList: {
            _$class: msls.ContentItem,
            _$name: "CustomerList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.BrowseCustomers,
            value: lightSwitchApplication.BrowseCustomers
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "CustomerList",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.BrowseCustomers,
            value: lightSwitchApplication.BrowseCustomers
        },
        Group1: {
            _$class: msls.ContentItem,
            _$name: "Group1",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.BrowseCustomers,
            value: lightSwitchApplication.BrowseCustomers
        },
        GetSelected: {
            _$class: msls.ContentItem,
            _$name: "GetSelected",
            _$parentName: "Group1",
            screen: lightSwitchApplication.BrowseCustomers
        },
        Group2: {
            _$class: msls.ContentItem,
            _$name: "Group2",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.BrowseCustomers,
            value: lightSwitchApplication.BrowseCustomers
        },
        Group3: {
            _$class: msls.ContentItem,
            _$name: "Group3",
            _$parentName: "Group",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.BrowseCustomers,
            value: lightSwitchApplication.BrowseCustomers
        },
        Customers: {
            _$class: msls.ContentItem,
            _$name: "Customers",
            _$parentName: "CustomerList",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.BrowseCustomers,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseCustomers,
                _$entry: {
                    elementType: lightSwitchApplication.Customer
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Customers",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: lightSwitchApplication.Customer
        },
        CustomerID: {
            _$class: msls.ContentItem,
            _$name: "CustomerID",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: String
        },
        CompanyName: {
            _$class: msls.ContentItem,
            _$name: "CompanyName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: String
        },
        ContactName: {
            _$class: msls.ContentItem,
            _$name: "ContactName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseCustomers,
            data: lightSwitchApplication.Customer,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseCustomers
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseCustomers, {
        /// <field>
        /// Called when a new BrowseCustomers screen is created.
        /// <br/>created(msls.application.BrowseCustomers screen)
        /// </field>
        created: [lightSwitchApplication.BrowseCustomers],
        /// <field>
        /// Called before changes on an active BrowseCustomers screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseCustomers screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseCustomers],
        /// <field>
        /// Called to determine if the GetSelected method can be executed.
        /// <br/>canExecute(msls.application.BrowseCustomers screen)
        /// </field>
        GetSelected_canExecute: [lightSwitchApplication.BrowseCustomers],
        /// <field>
        /// Called to execute the GetSelected method.
        /// <br/>execute(msls.application.BrowseCustomers screen)
        /// </field>
        GetSelected_execute: [lightSwitchApplication.BrowseCustomers],
        /// <field>
        /// Called after the CustomerList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerList_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("CustomerList"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("Group"); }],
        /// <field>
        /// Called after the Group1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group1_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("Group1"); }],
        /// <field>
        /// Called after the GetSelected content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GetSelected_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("GetSelected"); }],
        /// <field>
        /// Called after the Group2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group2_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("Group2"); }],
        /// <field>
        /// Called after the Group3 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group3_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("Group3"); }],
        /// <field>
        /// Called after the Customers content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Customers_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("Customers"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("rows"); }],
        /// <field>
        /// Called after the CustomerID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CustomerID_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("CustomerID"); }],
        /// <field>
        /// Called after the CompanyName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CompanyName_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("CompanyName"); }],
        /// <field>
        /// Called after the ContactName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ContactName_postRender: [$element, function () { return new lightSwitchApplication.BrowseCustomers().findContentItem("ContactName"); }]
    });

}(msls.application));