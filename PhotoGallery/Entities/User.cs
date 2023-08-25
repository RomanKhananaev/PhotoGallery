using System.ComponentModel.DataAnnotations;

namespace PhotoGallery.Entities
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string FirstName { get; set; } = string.Empty;  
    }
}
