using Microsoft.AspNetCore.Mvc;
using PhotoGallery.DbContexts;
using PhotoGallery.Entities;
using System.Data.Entity;
using static PhotoGallery.Models.Order;

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

        [HttpPost("SetOrders")]
        public IActionResult SetOrders (Order order)
        {
            try
            {
                m_db.Orders.Add(order);
                m_db.SaveChanges();
                return Ok("Order been send successfuly");
            }
            catch(Exception)
            {
                return BadRequest("Set order been falied");
            }
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
