/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Customer, {
        /// <field>
        /// Called when a new customer is created.
        /// <br/>created(msls.application.Customer entity)
        /// </field>
        created: [lightSwitchApplication.Customer]
    });

    msls._addEntryPoints(lightSwitchApplication.Employee, {
        /// <field>
        /// Called when a new employee is created.
        /// <br/>created(msls.application.Employee entity)
        /// </field>
        created: [lightSwitchApplication.Employee]
    });

    msls._addEntryPoints(lightSwitchApplication.Product, {
        /// <field>
        /// Called when a new product is created.
        /// <br/>created(msls.application.Product entity)
        /// </field>
        created: [lightSwitchApplication.Product]
    });

}(msls.application));
