/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Customer(entitySet) {
        /// <summary>
        /// Represents the Customer entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this customer.
        /// </param>
        /// <field name="CustomerID" type="String">
        /// Gets or sets the customerID for this customer.
        /// </field>
        /// <field name="CompanyName" type="String">
        /// Gets or sets the companyName for this customer.
        /// </field>
        /// <field name="ContactName" type="String">
        /// Gets or sets the contactName for this customer.
        /// </field>
        /// <field name="ContactTitle" type="String">
        /// Gets or sets the contactTitle for this customer.
        /// </field>
        /// <field name="Address" type="String">
        /// Gets or sets the address for this customer.
        /// </field>
        /// <field name="City" type="String">
        /// Gets or sets the city for this customer.
        /// </field>
        /// <field name="Region" type="String">
        /// Gets or sets the region for this customer.
        /// </field>
        /// <field name="PostalCode" type="String">
        /// Gets or sets the postalCode for this customer.
        /// </field>
        /// <field name="Country" type="String">
        /// Gets or sets the country for this customer.
        /// </field>
        /// <field name="Phone" type="String">
        /// Gets or sets the phone for this customer.
        /// </field>
        /// <field name="Fax" type="String">
        /// Gets or sets the fax for this customer.
        /// </field>
        /// <field name="details" type="msls.application.Customer.Details">
        /// Gets the details for this customer.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Employee(entitySet) {
        /// <summary>
        /// Represents the Employee entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this employee.
        /// </param>
        /// <field name="EmployeeID" type="Number">
        /// Gets or sets the employeeID for this employee.
        /// </field>
        /// <field name="LastName" type="String">
        /// Gets or sets the lastName for this employee.
        /// </field>
        /// <field name="FirstName" type="String">
        /// Gets or sets the firstName for this employee.
        /// </field>
        /// <field name="Title" type="String">
        /// Gets or sets the title for this employee.
        /// </field>
        /// <field name="TitleOfCourtesy" type="String">
        /// Gets or sets the titleOfCourtesy for this employee.
        /// </field>
        /// <field name="BirthDate" type="Date">
        /// Gets or sets the birthDate for this employee.
        /// </field>
        /// <field name="HireDate" type="Date">
        /// Gets or sets the hireDate for this employee.
        /// </field>
        /// <field name="Address" type="String">
        /// Gets or sets the address for this employee.
        /// </field>
        /// <field name="City" type="String">
        /// Gets or sets the city for this employee.
        /// </field>
        /// <field name="Region" type="String">
        /// Gets or sets the region for this employee.
        /// </field>
        /// <field name="PostalCode" type="String">
        /// Gets or sets the postalCode for this employee.
        /// </field>
        /// <field name="Country" type="String">
        /// Gets or sets the country for this employee.
        /// </field>
        /// <field name="HomePhone" type="String">
        /// Gets or sets the homePhone for this employee.
        /// </field>
        /// <field name="Extension" type="String">
        /// Gets or sets the extension for this employee.
        /// </field>
        /// <field name="Photo" type="String">
        /// Gets or sets the photo for this employee.
        /// </field>
        /// <field name="Notes" type="String">
        /// Gets or sets the notes for this employee.
        /// </field>
        /// <field name="PhotoPath" type="String">
        /// Gets or sets the photoPath for this employee.
        /// </field>
        /// <field name="Employees1" type="msls.EntityCollection" elementType="msls.application.Employee">
        /// Gets the employees1 for this employee.
        /// </field>
        /// <field name="Employee1" type="msls.application.Employee">
        /// Gets or sets the employee1 for this employee.
        /// </field>
        /// <field name="details" type="msls.application.Employee.Details">
        /// Gets the details for this employee.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Product(entitySet) {
        /// <summary>
        /// Represents the Product entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this product.
        /// </param>
        /// <field name="ProductID" type="Number">
        /// Gets or sets the productID for this product.
        /// </field>
        /// <field name="ProductName" type="String">
        /// Gets or sets the productName for this product.
        /// </field>
        /// <field name="SupplierID" type="Number">
        /// Gets or sets the supplierID for this product.
        /// </field>
        /// <field name="CategoryID" type="Number">
        /// Gets or sets the categoryID for this product.
        /// </field>
        /// <field name="QuantityPerUnit" type="String">
        /// Gets or sets the quantityPerUnit for this product.
        /// </field>
        /// <field name="UnitPrice" type="String">
        /// Gets or sets the unitPrice for this product.
        /// </field>
        /// <field name="UnitsInStock" type="Number">
        /// Gets or sets the unitsInStock for this product.
        /// </field>
        /// <field name="UnitsOnOrder" type="Number">
        /// Gets or sets the unitsOnOrder for this product.
        /// </field>
        /// <field name="ReorderLevel" type="Number">
        /// Gets or sets the reorderLevel for this product.
        /// </field>
        /// <field name="Discontinued" type="Boolean">
        /// Gets or sets the discontinued for this product.
        /// </field>
        /// <field name="details" type="msls.application.Product.Details">
        /// Gets the details for this product.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Northwind(dataWorkspace) {
        /// <summary>
        /// Represents the Northwind data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Customers" type="msls.EntitySet">
        /// Gets the Customers entity set.
        /// </field>
        /// <field name="Employees" type="msls.EntitySet">
        /// Gets the Employees entity set.
        /// </field>
        /// <field name="Products" type="msls.EntitySet">
        /// Gets the Products entity set.
        /// </field>
        /// <field name="details" type="msls.application.Northwind.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="Northwind" type="msls.application.Northwind">
        /// Gets the Northwind data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Customer: $defineEntity(Customer, [
            { name: "CustomerID", type: String },
            { name: "CompanyName", type: String },
            { name: "ContactName", type: String },
            { name: "ContactTitle", type: String },
            { name: "Address", type: String },
            { name: "City", type: String },
            { name: "Region", type: String },
            { name: "PostalCode", type: String },
            { name: "Country", type: String },
            { name: "Phone", type: String },
            { name: "Fax", type: String }
        ]),

        Employee: $defineEntity(Employee, [
            { name: "EmployeeID", type: Number, isReadOnly: true },
            { name: "LastName", type: String },
            { name: "FirstName", type: String },
            { name: "Title", type: String },
            { name: "TitleOfCourtesy", type: String },
            { name: "BirthDate", type: Date },
            { name: "HireDate", type: Date },
            { name: "Address", type: String },
            { name: "City", type: String },
            { name: "Region", type: String },
            { name: "PostalCode", type: String },
            { name: "Country", type: String },
            { name: "HomePhone", type: String },
            { name: "Extension", type: String },
            { name: "Photo", type: String },
            { name: "Notes", type: String },
            { name: "PhotoPath", type: String },
            { name: "Employees1", kind: "collection", elementType: Employee },
            { name: "Employee1", kind: "reference", type: Employee }
        ]),

        Product: $defineEntity(Product, [
            { name: "ProductID", type: Number, isReadOnly: true },
            { name: "ProductName", type: String },
            { name: "SupplierID", type: Number },
            { name: "CategoryID", type: Number },
            { name: "QuantityPerUnit", type: String },
            { name: "UnitPrice", type: String },
            { name: "UnitsInStock", type: Number },
            { name: "UnitsOnOrder", type: Number },
            { name: "ReorderLevel", type: Number },
            { name: "Discontinued", type: Boolean }
        ]),

        Northwind: $defineDataService(Northwind, lightSwitchApplication.rootUri + "/Northwind.svc", [
            { name: "Customers", elementType: Customer },
            { name: "Employees", elementType: Employee },
            { name: "Products", elementType: Product }
        ], [
            {
                name: "Customers_SingleOrDefault", value: function (CustomerID) {
                    return new $DataServiceQuery({ _entitySet: this.Customers },
                        lightSwitchApplication.rootUri + "/Northwind.svc" + "/Customers(" + "CustomerID=" + $toODataString(CustomerID, "String?") + ")"
                    );
                }
            },
            {
                name: "Employees_SingleOrDefault", value: function (EmployeeID) {
                    return new $DataServiceQuery({ _entitySet: this.Employees },
                        lightSwitchApplication.rootUri + "/Northwind.svc" + "/Employees(" + "EmployeeID=" + $toODataString(EmployeeID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Products_SingleOrDefault", value: function (ProductID) {
                    return new $DataServiceQuery({ _entitySet: this.Products },
                        lightSwitchApplication.rootUri + "/Northwind.svc" + "/Products(" + "ProductID=" + $toODataString(ProductID, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "Northwind", type: Northwind }
        ])

    });

}(msls.application));
