using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PhotoGallery.Models;

namespace PhotoGallery.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpPost("Register")]
        public IActionResult Register(User.UserRegisterDTO user)
        {
            try
            {
               return Ok("Registration successful!");
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
