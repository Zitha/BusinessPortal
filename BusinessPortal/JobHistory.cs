using System;
using System.ComponentModel.DataAnnotations;

namespace BusinessPortal.Model
{
    public class JobHistory
    {
        [Key]
        public int Id { get; set; }

        public DateTime? Date { get; set; }

        public string Pictures { get; set; }

        public string Description { get; set; }

        public Client Client { get; set; }
    }
}