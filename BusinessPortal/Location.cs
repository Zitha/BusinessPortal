using System.ComponentModel.DataAnnotations;

namespace BusinessPortal.Model
{
    public class Location
    {
        [Key]
        public int Id { get; set; }

        public string Longitude { get; set; }

        public string Latitude { get; set; }
    }
}