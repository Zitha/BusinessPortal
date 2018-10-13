using BusinessPortal.Data.Repositories;
using BusinessPortal.Model;
using System;
using System.Data.Entity.Validation;

namespace BusinessPortal.Data
{
    public class ApplicationUnit : IDisposable
    {
        private readonly DataContext _context = new DataContext();
        private IRepository<Technician> _technicians;

        public IRepository<Technician> Technicians
        {
            get
            {
                if (_technicians == null)
                {
                    _technicians = new TechnicianRepository(_context);
                }
                return _technicians;
            }
        }

        public void SaveChanges()
        {
            try
            {
                _context.SaveChanges();
            }
            catch (DbEntityValidationException e)
            {
            }
        }
        public void Dispose()
        {
            if (_context != null)
            {
                _context.Dispose();
            }
        }
    }
}
