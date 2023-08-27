namespace PhotoGallery.Models
{
    public class Order
    {
        public class SetOrderDTO
        {
            public string FirstName { get; set; } = string.Empty;
            public string LastName { get; set; } = string.Empty;
            public string PhoneNumber { get; set; } = string.Empty;
            public uint InvitedAmount { get; set; }
            public DateTime EventDate { get; set; }
            public string ImagePath { get; set; } = string.Empty;
        }
    }
}
