using BusinessPortal.Api.Models;
using BusinessPortal.Data;
using BusinessPortal.Model;
using System.Linq;
using System.Web.Http;

namespace BusinessPortal.Api.Controllers
{
    public class UserController : ApiController
    {
        public int Login(string userName, string password)
        {
            using (ApplicationUnit unit = new ApplicationUnit())
            {
                Technician loginUser = unit.Technicians.GetAll()
                    .FirstOrDefault(user => user.CellNo.ToLower() == userName.ToLower());

                if (loginUser != null)
                {
                    string decriptedPassword = Encryption.Decrypt(loginUser.Password, "BusinessPortal");
                    if (decriptedPassword == password)
                    {
                        return loginUser.Id;
                    }
                }
                return 0;
            }
        }

        [HttpPost]
        public Technician CreateTechnicianAccount(Technician technician)
        {
            using (ApplicationUnit unit = new ApplicationUnit())
            {
                Technician hasUser = unit.Technicians.GetAll().FirstOrDefault(u => u.CellNo.ToLower() == technician.CellNo.ToLower());
                if (hasUser == null)
                {
                    string password = Encryption.Encrypt(technician.Password, "BusinessPortal");
                    technician.Password = password;
                    technician.Role = "Technician";
                    unit.Technicians.Add(technician);
                    unit.SaveChanges();

                    //Send Message to user
                    //EmailService emailService = new EmailService();
                    //Task sendEmailTask = new Task(() => emailService.SendWelcomeEmail(user.Email));
                    //sendEmailTask.Start();

                    return technician;
                }
                return null;
            }
        }
    }
}