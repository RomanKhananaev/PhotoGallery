using System.ComponentModel.DataAnnotations;

namespace PhotoGallery.Entities
{
    public class Order
    {
        [Key]
        public int Id { get; set; } 
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public uint InvitedAmount { get; set; }
        public DateTime EventDate { get; set; }
        public string ImagePath { get; set; }
    }
}
