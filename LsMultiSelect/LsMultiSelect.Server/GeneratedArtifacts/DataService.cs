﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LightSwitchApplication
{
    #region Data Services
    
    /// <summary>
    /// Provides members to query and update data in the Northwind datasource.
    /// </summary>
    public sealed partial class NorthwindService
        : global::LightSwitchApplication.Northwind
    {
        #region Constructors
    
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public NorthwindService() : base()
        {
        }
    
        #endregion
    
        #region Private Properties
        
        /// <summary>
        /// Gets the Application object for this application.  The Application object provides access to active screens, methods to open screens and access to the current user.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        private global::LightSwitchApplication.Application Application
        {
            get
            {
                return global::LightSwitchApplication.Application.Current;
            }
        }
        
        /// <summary>
        /// Gets the containing data workspace.  The data workspace provides access to all data sources in the application.
        /// </summary>
        [global::System.CodeDom.Compiler.GeneratedCodeAttribute("Microsoft.LightSwitch.BuildTasks.CodeGen", "12.1.0.0")]
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        private global::LightSwitchApplication.DataWorkspace DataWorkspace
        {
            get
            {
                return (global::LightSwitchApplication.DataWorkspace)this.Details.DataWorkspace;
            }
        }
        
        #endregion
    
        #region Server Interceptions Points
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Customers_CanRead(ref bool result);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Customers_Validate(global::LightSwitchApplication.Customer entity, global::Microsoft.LightSwitch.EntitySetValidationResultsBuilder results);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Employees_CanRead(ref bool result);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Employees_Validate(global::LightSwitchApplication.Employee entity, global::Microsoft.LightSwitch.EntitySetValidationResultsBuilder results);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Products_CanRead(ref bool result);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Products_Validate(global::LightSwitchApplication.Product entity, global::Microsoft.LightSwitch.EntitySetValidationResultsBuilder results);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void SaveChanges_CanExecute(ref bool result);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void SaveChanges_Executing();
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void SaveChanges_Executed();
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void SaveChanges_ExecuteFailed(global::System.Exception exception);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Query_Executing(global::Microsoft.LightSwitch.QueryExecutingDescriptor queryDescriptor);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Query_Executed(global::Microsoft.LightSwitch.QueryExecutedDescriptor queryDescriptor);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Query_ExecuteFailed(global::Microsoft.LightSwitch.QueryExecuteFailedDescriptor queryDescriptor);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Northwind_SendingRequest(global::Microsoft.LightSwitch.ODataSendingState state);
    
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        partial void Northwind_ReceivedResponse(global::Microsoft.LightSwitch.ODataReceivedState state);
    
        #endregion
    
        #region Details Class
    
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [global::System.ComponentModel.EditorBrowsable(global::System.ComponentModel.EditorBrowsableState.Never)]
        [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1034:NestedTypesShouldNotBeVisible")]
        public static new class DetailsClass
        {
    
            [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1810:InitializeReferenceTypeStaticFieldsInline")]
            static DetailsClass()
            {
            }
            
            [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private static readonly global::Microsoft.LightSwitch.Details.Framework.Server.EntitySetEntry<global::LightSwitchApplication.NorthwindService, global::LightSwitchApplication.Customer>
                __CustomersEntry = new global::Microsoft.LightSwitch.Details.Framework.Server.EntitySetEntry<global::LightSwitchApplication.NorthwindService, global::LightSwitchApplication.Customer>(
                    "Customers",
                    null,
                    null,
                    null,
                    global::LightSwitchApplication.NorthwindService.DetailsClass.__Customers_CanRead,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    global::LightSwitchApplication.NorthwindService.DetailsClass.__Customers_Validate,
                    null);
            private static bool __Customers_CanRead(global::LightSwitchApplication.NorthwindService d)
            {
                bool result = true;
                d.Customers_CanRead(ref result);
                return result;
            }
            private static void __Customers_Validate(global::LightSwitchApplication.NorthwindService d, global::LightSwitchApplication.Customer e, global::Microsoft.LightSwitch.EntitySetValidationResultsBuilder r)
            {
                d.Customers_Validate(e, r);
            }
            
            [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private static readonly global::Microsoft.LightSwitch.Details.Framework.Server.EntitySetEntry<global::LightSwitchApplication.NorthwindService, global::LightSwitchApplication.Employee>
                __EmployeesEntry = new global::Microsoft.LightSwitch.Details.Framework.Server.EntitySetEntry<global::LightSwitchApplication.NorthwindService, global::LightSwitchApplication.Employee>(
                    "Employees",
                    null,
                    null,
                    null,
                    global::LightSwitchApplication.NorthwindService.DetailsClass.__Employees_CanRead,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    global::LightSwitchApplication.NorthwindService.DetailsClass.__Employees_Validate,
                    null);
            private static bool __Employees_CanRead(global::LightSwitchApplication.NorthwindService d)
            {
                bool result = true;
                d.Employees_CanRead(ref result);
                return result;
            }
            private static void __Employees_Validate(global::LightSwitchApplication.NorthwindService d, global::LightSwitchApplication.Employee e, global::Microsoft.LightSwitch.EntitySetValidationResultsBuilder r)
            {
                d.Employees_Validate(e, r);
            }
            
            [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private static readonly global::Microsoft.LightSwitch.Details.Framework.Server.EntitySetEntry<global::LightSwitchApplication.NorthwindService, global::LightSwitchApplication.Product>
                __ProductsEntry = new global::Microsoft.LightSwitch.Details.Framework.Server.EntitySetEntry<global::LightSwitchApplication.NorthwindService, global::LightSwitchApplication.Product>(
                    "Products",
                    null,
                    null,
                    null,
                    global::LightSwitchApplication.NorthwindService.DetailsClass.__Products_CanRead,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    global::LightSwitchApplication.NorthwindService.DetailsClass.__Products_Validate,
                    null);
            private static bool __Products_CanRead(global::LightSwitchApplication.NorthwindService d)
            {
                bool result = true;
                d.Products_CanRead(ref result);
                return result;
            }
            private static void __Products_Validate(global::LightSwitchApplication.NorthwindService d, global::LightSwitchApplication.Product e, global::Microsoft.LightSwitch.EntitySetValidationResultsBuilder r)
            {
                d.Products_Validate(e, r);
            }
            
            [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private static readonly global::Microsoft.LightSwitch.Details.Framework.Server.OperationEntry<global::LightSwitchApplication.NorthwindService>
                __SaveChangesEntry = new global::Microsoft.LightSwitch.Details.Framework.Server.OperationEntry<global::LightSwitchApplication.NorthwindService>(
                    "SaveChanges",
                    global::LightSwitchApplication.NorthwindService.DetailsClass.__SaveChanges_CanExecute,
                    global::LightSwitchApplication.NorthwindService.DetailsClass.__SaveChanges_Executing,
                    global::LightSwitchApplication.NorthwindService.DetailsClass.__SaveChanges_Executed,
                    global::LightSwitchApplication.NorthwindService.DetailsClass.__SaveChanges_Failed);
            private static bool __SaveChanges_CanExecute(global::LightSwitchApplication.NorthwindService d, bool r)
            {
                d.SaveChanges_CanExecute(ref r);
                return r;
            }
            private static void __SaveChanges_Executing(global::LightSwitchApplication.NorthwindService d, object[] args)
            {
                d.SaveChanges_Executing();
            }
            private static void __SaveChanges_Executed(global::LightSwitchApplication.NorthwindService d, object[] args)
            {
                d.SaveChanges_Executed();
            }
            private static void __SaveChanges_Failed(global::LightSwitchApplication.NorthwindService d, object[] args, global::System.Exception ex)
            {
                d.SaveChanges_ExecuteFailed(ex);
            }
    
            [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private static readonly global::Microsoft.LightSwitch.Details.Framework.Server.QueryEntry<global::LightSwitchApplication.NorthwindService>
                ___QueryEntry = new global::Microsoft.LightSwitch.Details.Framework.Server.QueryEntry<global::LightSwitchApplication.NorthwindService>(
                    global::LightSwitchApplication.NorthwindService.DetailsClass.__Query_Executing,
                    global::LightSwitchApplication.NorthwindService.DetailsClass.__Query_Executed,
                    global::LightSwitchApplication.NorthwindService.DetailsClass.__Query_Failed);
            private static void __Query_Executing(global::LightSwitchApplication.NorthwindService d, global::Microsoft.LightSwitch.QueryExecutingDescriptor queryDescriptor)
            {
                d.Query_Executing(queryDescriptor);
            }
            private static void __Query_Executed(global::LightSwitchApplication.NorthwindService d, global::Microsoft.LightSwitch.QueryExecutedDescriptor queryDescriptor)
            {
                d.Query_Executed(queryDescriptor);
            }
            private static void __Query_Failed(global::LightSwitchApplication.NorthwindService d, global::Microsoft.LightSwitch.QueryExecuteFailedDescriptor queryDescriptor)
            {
                d.Query_ExecuteFailed(queryDescriptor);
            }
    
            [global::System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
            [global::System.Diagnostics.DebuggerBrowsable(global::System.Diagnostics.DebuggerBrowsableState.Never)]
            private static readonly global::Microsoft.LightSwitch.Details.Framework.Server.ODataServiceAuthEntry<global::LightSwitchApplication.NorthwindService>
                ___ODataServiceAuthEntry = new global::Microsoft.LightSwitch.Details.Framework.Server.ODataServiceAuthEntry<global::LightSwitchApplication.NorthwindService>(
                    global::LightSwitchApplication.NorthwindService.DetailsClass.__Northwind_SendingRequest,
                    global::LightSwitchApplication.NorthwindService.DetailsClass.__Northwind_ReceivedResponse);
            private static void __Northwind_SendingRequest(global::LightSwitchApplication.NorthwindService d, global::Microsoft.LightSwitch.ODataSendingState state)
            {
                d.Northwind_SendingRequest(state);
            }
            private static void __Northwind_ReceivedResponse(global::LightSwitchApplication.NorthwindService d, global::Microsoft.LightSwitch.ODataReceivedState state)
            {
                d.Northwind_ReceivedResponse(state);
            }
        }
    
        #endregion
    }
    
    #endregion
}
