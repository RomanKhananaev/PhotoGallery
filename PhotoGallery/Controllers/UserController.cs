using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PhotoGallery.DbContexts;
using PhotoGallery.Models;

namespace PhotoGallery.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext m_db;
        public UserController(DataContext db)
        {
            m_db = db;
        }
        [HttpPost("Register")]
        public IActionResult Register(User.UserRegisterDTO user)
        {
            try
            {
                var query = m_db.Users.ToList();
               return Ok(query);
            }
            catch (Exception)
            {
                return BadRequest("Registration failed"); 
            }
        }

        [HttpPost("Login")]
        public IActionResult Login(User.UserLoginDTO user)
        {
            try
            {
                return Ok("Login successful!");
            }
            catch(Exception)
            {
                return BadRequest("Login failed");
            }
        }
    }
}
