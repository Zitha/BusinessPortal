using BusinessPortal.Model;
using System.Data.Entity;

namespace BusinessPortal.Data.Repositories
{
    public class LocationRepository : GenericRepository<Location>
    {
        public LocationRepository(DbContext context) : base(context)
        {
        }
    }
}
