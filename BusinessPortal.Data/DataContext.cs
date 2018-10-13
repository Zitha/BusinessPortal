using System.Configuration;
using System.Data.Entity;

namespace BusinessPortal.Data
{
    public class DataContext : DbContext
    {
        static DataContext()
        {
            Database.SetInitializer(new CustomDatabaseInitializer());
        }

        public DataContext()
            : base(ConnectionStringName)
        {
        }

        public static string ConnectionStringName
        {
            get
            {
                if (ConfigurationManager.AppSettings["ConnectionStringName"]
                    != null)
                {
                    return ConfigurationManager.
                        AppSettings["ConnectionStringName"];
                }

                return "DefaultConnection";
            }
        }
    }
}
