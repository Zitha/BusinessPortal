using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BusinessPortal.Model
{
    public class Technician
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Nationality { get; set; }
        public DateTime? Registration { get; set; }
        [Required]
        public string CellNo { get; set; }
        public string Password { get; set; }
        public string Rating { get; set; }
        public Location Location { get; set; }
        public List<JobHistory> JobHistory { get; set; }
        public string Role { get; set; }
    }
}
