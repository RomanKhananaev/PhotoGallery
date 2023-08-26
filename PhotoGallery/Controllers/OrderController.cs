using Microsoft.AspNetCore.Mvc;
using PhotoGallery.DbContexts;
using System.Data.Entity;

namespace PhotoGallery.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly DataContext m_db;
        public OrderController(DataContext db)
        {
            m_db = db;
        }
        [HttpGet("GetOrders")]
        public IActionResult GetOrders ()
        {
            try
            {
                var orderList = m_db.Orders
                    .AsNoTracking()
                    .Select(x => new
                    {
                        x.Id,
                        x.FirstName,
                        x.LastName,
                        x.PhoneNumber,
                        x.InvitedAmount,
                        x.EventDate,
                        x.ImagePath
                    }).ToList();
                return Ok(orderList);

            }
            catch
            {
                return BadRequest("Cannot get order list");
            }
        }
    }
}
