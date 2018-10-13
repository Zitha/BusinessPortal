using System.Data.Entity;

namespace BusinessPortal.Data
{
    internal class CustomDatabaseInitializer : CreateDatabaseIfNotExists<DataContext>
    {
    }
}