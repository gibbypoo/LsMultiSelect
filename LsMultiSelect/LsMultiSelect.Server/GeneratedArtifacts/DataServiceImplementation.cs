﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using global::System.Linq;

namespace LightSwitchApplication.Implementation
{
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class NorthwindDataService
        : global::Microsoft.LightSwitch.ServerGenerated.Implementation.DataService<global::LightSwitchApplication.Implementation.Northwind>
    {
    
        public NorthwindDataService() : base()
        {
        }
    
        protected override global::Microsoft.LightSwitch.IDataService GetDataService(global::Microsoft.LightSwitch.IDataWorkspace dataWorkspace)
        {
            return ((global::LightSwitchApplication.DataWorkspace)dataWorkspace).Northwind;
        }
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class NorthwindServiceImplementation
        : global::Microsoft.LightSwitch.ServerGenerated.Implementation.AstoriaDataServiceImplementation<global::LightSwitchApplication.Implementation.Northwind, global::Northwind.NorthwindService.NorthwindEntities>
    {
        public NorthwindServiceImplementation(global::Microsoft.LightSwitch.IDataService dataService) : base(dataService)
        {
        }
    
    #region Queries
    #endregion

    #region Protected Methods
        protected override object CreateObject(global::System.Type type)
        {
            if (type == typeof(global::LightSwitchApplication.Implementation.Customer))
            {
                return new global::LightSwitchApplication.Implementation.Customer();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.Employee))
            {
                return new global::LightSwitchApplication.Implementation.Employee();
            }
            if (type == typeof(global::LightSwitchApplication.Implementation.Product))
            {
                return new global::LightSwitchApplication.Implementation.Product();
            }
    
            return base.CreateObject(type);
        }
    
        protected override global::LightSwitchApplication.Implementation.Northwind CreateObjectContext()
        {
            string assemblyName = global::System.Reflection.Assembly.GetExecutingAssembly().GetName().Name;
            return new global::LightSwitchApplication.Implementation.Northwind(this.GetEntityConnectionString(
                "Northwind",
                "res://" + assemblyName + "/Northwind.csdl|res://" + assemblyName + "/Northwind.ssdl|res://" + assemblyName + "/Northwind.msl",
                "System.Data.SqlClient",
                true));
        }
    
        protected override global::Microsoft.LightSwitch.Internal.IEntityImplementation CreateEntityImplementation<T>()
        {
            if (typeof(T) == typeof(global::LightSwitchApplication.Customer))
            {
                return new global::LightSwitchApplication.Implementation.Customer();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.Employee))
            {
                return new global::LightSwitchApplication.Implementation.Employee();
            }
            if (typeof(T) == typeof(global::LightSwitchApplication.Product))
            {
                return new global::LightSwitchApplication.Implementation.Product();
            }
            return null;
        }
    
        protected override string WebConfigurationConnectionStringName
        {
            get
            {
                return "Northwind";
            }
        }
    
        protected override global::System.Type ConvertType(global::System.Type outerType)
        {
            if (outerType == typeof(global::LightSwitchApplication.Implementation.Customer))
            {
                return typeof(global::Northwind.NorthwindService.Customer);
            }
            if (outerType == typeof(global::LightSwitchApplication.Implementation.Employee))
            {
                return typeof(global::Northwind.NorthwindService.Employee);
            }
            if (outerType == typeof(global::LightSwitchApplication.Implementation.Product))
            {
                return typeof(global::Northwind.NorthwindService.Product);
            }
            return base.ConvertType(outerType);
        }
    
        protected override object ConvertEntity(object outerEntity)
        {
            global::LightSwitchApplication.Implementation.Customer customer = outerEntity as global::LightSwitchApplication.Implementation.Customer;
            if (customer != null)
            {
                global::Northwind.NorthwindService.Customer result = new global::Northwind.NorthwindService.Customer();
                result.CustomerID = customer.CustomerID;
                result.CompanyName = customer.CompanyName;
                result.ContactName = customer.ContactName;
                result.ContactTitle = customer.ContactTitle;
                result.Address = customer.Address;
                result.City = customer.City;
                result.Region = customer.Region;
                result.PostalCode = customer.PostalCode;
                result.Country = customer.Country;
                result.Phone = customer.Phone;
                result.Fax = customer.Fax;
                return result;
            }
            global::LightSwitchApplication.Implementation.Employee employee = outerEntity as global::LightSwitchApplication.Implementation.Employee;
            if (employee != null)
            {
                global::Northwind.NorthwindService.Employee result = new global::Northwind.NorthwindService.Employee();
                result.EmployeeID = employee.EmployeeID;
                result.LastName = employee.LastName;
                result.FirstName = employee.FirstName;
                result.Title = employee.Title;
                result.TitleOfCourtesy = employee.TitleOfCourtesy;
                result.BirthDate = employee.BirthDate;
                result.HireDate = employee.HireDate;
                result.Address = employee.Address;
                result.City = employee.City;
                result.Region = employee.Region;
                result.PostalCode = employee.PostalCode;
                result.Country = employee.Country;
                result.HomePhone = employee.HomePhone;
                result.Extension = employee.Extension;
                result.Photo = employee.Photo;
                result.Notes = employee.Notes;
                result.PhotoPath = employee.PhotoPath;
                result.ReportsTo = employee.ReportsTo;
                return result;
            }
            global::LightSwitchApplication.Implementation.Product product = outerEntity as global::LightSwitchApplication.Implementation.Product;
            if (product != null)
            {
                global::Northwind.NorthwindService.Product result = new global::Northwind.NorthwindService.Product();
                result.ProductID = product.ProductID;
                result.ProductName = product.ProductName;
                result.SupplierID = product.SupplierID;
                result.CategoryID = product.CategoryID;
                result.QuantityPerUnit = product.QuantityPerUnit;
                result.UnitPrice = product.UnitPrice;
                result.UnitsInStock = product.UnitsInStock;
                result.UnitsOnOrder = product.UnitsOnOrder;
                result.ReorderLevel = product.ReorderLevel;
                result.Discontinued = product.Discontinued;
                return result;
            }
            return null;
        }
    
        protected override void UpdateResult(object outerEntity, object innerResult)
        {
            global::LightSwitchApplication.Implementation.Customer outerCustomer = outerEntity as global::LightSwitchApplication.Implementation.Customer;
            global::Northwind.NorthwindService.Customer innerCustomer = innerResult as global::Northwind.NorthwindService.Customer;
            if ((outerCustomer != null) && (innerCustomer != null))
            {
                outerCustomer.CustomerID = innerCustomer.CustomerID;
                outerCustomer.CompanyName = innerCustomer.CompanyName;
                outerCustomer.ContactName = innerCustomer.ContactName;
                outerCustomer.ContactTitle = innerCustomer.ContactTitle;
                outerCustomer.Address = innerCustomer.Address;
                outerCustomer.City = innerCustomer.City;
                outerCustomer.Region = innerCustomer.Region;
                outerCustomer.PostalCode = innerCustomer.PostalCode;
                outerCustomer.Country = innerCustomer.Country;
                outerCustomer.Phone = innerCustomer.Phone;
                outerCustomer.Fax = innerCustomer.Fax;
                return;
            }
            global::LightSwitchApplication.Implementation.Employee outerEmployee = outerEntity as global::LightSwitchApplication.Implementation.Employee;
            global::Northwind.NorthwindService.Employee innerEmployee = innerResult as global::Northwind.NorthwindService.Employee;
            if ((outerEmployee != null) && (innerEmployee != null))
            {
                outerEmployee.EmployeeID = innerEmployee.EmployeeID;
                outerEmployee.LastName = innerEmployee.LastName;
                outerEmployee.FirstName = innerEmployee.FirstName;
                outerEmployee.Title = innerEmployee.Title;
                outerEmployee.TitleOfCourtesy = innerEmployee.TitleOfCourtesy;
                outerEmployee.BirthDate = innerEmployee.BirthDate;
                outerEmployee.HireDate = innerEmployee.HireDate;
                outerEmployee.Address = innerEmployee.Address;
                outerEmployee.City = innerEmployee.City;
                outerEmployee.Region = innerEmployee.Region;
                outerEmployee.PostalCode = innerEmployee.PostalCode;
                outerEmployee.Country = innerEmployee.Country;
                outerEmployee.HomePhone = innerEmployee.HomePhone;
                outerEmployee.Extension = innerEmployee.Extension;
                outerEmployee.Photo = innerEmployee.Photo;
                outerEmployee.Notes = innerEmployee.Notes;
                outerEmployee.PhotoPath = innerEmployee.PhotoPath;
                outerEmployee.ReportsTo = innerEmployee.ReportsTo;
                return;
            }
            global::LightSwitchApplication.Implementation.Product outerProduct = outerEntity as global::LightSwitchApplication.Implementation.Product;
            global::Northwind.NorthwindService.Product innerProduct = innerResult as global::Northwind.NorthwindService.Product;
            if ((outerProduct != null) && (innerProduct != null))
            {
                outerProduct.ProductID = innerProduct.ProductID;
                outerProduct.ProductName = innerProduct.ProductName;
                outerProduct.SupplierID = innerProduct.SupplierID;
                outerProduct.CategoryID = innerProduct.CategoryID;
                outerProduct.QuantityPerUnit = innerProduct.QuantityPerUnit;
                outerProduct.UnitPrice = innerProduct.UnitPrice;
                outerProduct.UnitsInStock = innerProduct.UnitsInStock;
                outerProduct.UnitsOnOrder = innerProduct.UnitsOnOrder;
                outerProduct.ReorderLevel = innerProduct.ReorderLevel;
                outerProduct.Discontinued = innerProduct.Discontinued;
                return;
            }
            base.UpdateResult(outerEntity, innerResult);
        }
    
    #endregion
    
    }
    
    #region DataServiceImplementationFactory
    [global::System.ComponentModel.Composition.PartCreationPolicy(global::System.ComponentModel.Composition.CreationPolicy.Shared)]
    [global::System.ComponentModel.Composition.Export(typeof(global::Microsoft.LightSwitch.Internal.IDataServiceFactory))]
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class __DataServiceFactory :
        global::Microsoft.LightSwitch.ServerGenerated.Implementation.DataServiceFactory
    {
    
        protected override global::Microsoft.LightSwitch.IDataService CreateDataService(global::System.Type dataServiceType)
        {
            if (dataServiceType == typeof(global::LightSwitchApplication.NorthwindService))
            {
                return new global::LightSwitchApplication.NorthwindService();
            }
            return base.CreateDataService(dataServiceType);
        }
    
        protected override global::Microsoft.LightSwitch.Internal.IDataServiceImplementation CreateDataServiceImplementation<TDataService>(TDataService dataService)
        {
            if (typeof(TDataService) == typeof(global::LightSwitchApplication.NorthwindService))
            {
                return new global::LightSwitchApplication.Implementation.NorthwindServiceImplementation(dataService);
            }
            return base.CreateDataServiceImplementation(dataService);
        }
    }
    #endregion
    
    [global::System.ComponentModel.Composition.PartCreationPolicy(global::System.ComponentModel.Composition.CreationPolicy.Shared)]
    [global::System.ComponentModel.Composition.Export(typeof(global::Microsoft.LightSwitch.Internal.ITypeMappingProvider))]
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public class __TypeMapping
        : global::Microsoft.LightSwitch.Internal.ITypeMappingProvider
    {
        global::System.Type global::Microsoft.LightSwitch.Internal.ITypeMappingProvider.GetImplementationType(global::System.Type definitionType)
        {
            if (typeof(global::LightSwitchApplication.Customer) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.Customer);
            }
            if (typeof(global::LightSwitchApplication.Employee) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.Employee);
            }
            if (typeof(global::LightSwitchApplication.Product) == definitionType)
            {
                return typeof(global::LightSwitchApplication.Implementation.Product);
            }
            return null;
        }
    }
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class Customer :
        global::LightSwitchApplication.Customer.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.IAstoriaEntityImplementation
    {
    
        [global::System.Runtime.Serialization.DataMember]
        public string Microsoft_LightSwitch_ETag
        {
            get;
            set;
        }
    
        string global::Microsoft.LightSwitch.Internal.IAstoriaEntityImplementation.ETag
        {
            get { return this.Microsoft_LightSwitch_ETag; }
            set { this.Microsoft_LightSwitch_ETag = value; }
        }
    
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class Employee :
        global::LightSwitchApplication.Employee.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.IAstoriaEntityImplementation
    {
    
        [global::System.Runtime.Serialization.DataMember]
        public string Microsoft_LightSwitch_ETag
        {
            get;
            set;
        }
    
        string global::Microsoft.LightSwitch.Internal.IAstoriaEntityImplementation.ETag
        {
            get { return this.Microsoft_LightSwitch_ETag; }
            set { this.Microsoft_LightSwitch_ETag = value; }
        }
    
        global::System.Collections.IEnumerable global::LightSwitchApplication.Employee.DetailsClass.IImplementation.Employees1
        {
            get
            {
                return this.Employees1;
            }
        }
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementation global::LightSwitchApplication.Employee.DetailsClass.IImplementation.Employee1
        {
            get
            {
                return this.Employee1;
            }
            set
            {
                this.Employee1 = (global::LightSwitchApplication.Implementation.Employee)value;
                if (this.__host != null)
                {
                    this.__host.RaisePropertyChanged("Employee1");
                }
            }
        }
        
        partial void OnReportsToChanged()
        {
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged("Employee1");
            }
        }
        
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    public partial class Product :
        global::LightSwitchApplication.Product.DetailsClass.IImplementation,
        global::Microsoft.LightSwitch.Internal.IAstoriaEntityImplementation
    {
    
        [global::System.Runtime.Serialization.DataMember]
        public string Microsoft_LightSwitch_ETag
        {
            get;
            set;
        }
    
        string global::Microsoft.LightSwitch.Internal.IAstoriaEntityImplementation.ETag
        {
            get { return this.Microsoft_LightSwitch_ETag; }
            set { this.Microsoft_LightSwitch_ETag = value; }
        }
    
        #region IEntityImplementation Members
        private global::Microsoft.LightSwitch.Internal.IEntityImplementationHost __host;
        
        global::Microsoft.LightSwitch.Internal.IEntityImplementationHost global::Microsoft.LightSwitch.Internal.IEntityImplementation.Host
        {
            get
            {
                return this.__host;
            }
        }
        
        void global::Microsoft.LightSwitch.Internal.IEntityImplementation.Initialize(global::Microsoft.LightSwitch.Internal.IEntityImplementationHost host)
        {
            this.__host = host;
        }
        
        protected override void OnPropertyChanged(string propertyName)
        {
            base.OnPropertyChanged(propertyName);
            if (this.__host != null)
            {
                this.__host.RaisePropertyChanged(propertyName);
            }
        }
        #endregion
    }
    
}

