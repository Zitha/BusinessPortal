using System.ComponentModel.DataAnnotations;

namespace BusinessPortal.Model
{
    public class Client
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string ContactNumber { get; set; }

        public bool CanContact { get; set; }
    }
}