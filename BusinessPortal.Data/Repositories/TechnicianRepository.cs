using BusinessPortal.Model;
using System.Data.Entity;

namespace BusinessPortal.Data.Repositories
{
    public class TechnicianRepository : GenericRepository<Technician>
    {
        public TechnicianRepository(DbContext context) : base(context)
        {
        }
    }
}
