using BusinessPortal.Model;
using System.Data.Entity;

namespace BusinessPortal.Data.Repositories
{
    public class JobHistoryRepository : GenericRepository<JobHistory>
    {
        public JobHistoryRepository(DbContext context) : base(context)
        {
        }
    }
}
