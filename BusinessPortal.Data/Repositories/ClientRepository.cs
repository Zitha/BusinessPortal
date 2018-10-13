using BusinessPortal.Model;
using System.Data.Entity;

namespace BusinessPortal.Data.Repositories
{
    public class ClientRepository : GenericRepository<Client>
    {
        public ClientRepository(DbContext context) : base(context)
        {
        }
    }
}
