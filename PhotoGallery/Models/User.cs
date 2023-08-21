namespace PhotoGallery.Models
{
    public class User
    {
        public class UserRegisterDTO
        {
            public string fullName { get; set; }
            public string email { get; set; }
            public string password { get; set; }
            public string phoneNumber { get; set; }
        }
        public class UserLoginDTO
        {
            public string email { get; set; }
            public string password { get; set; }
        }
        
    }
}
