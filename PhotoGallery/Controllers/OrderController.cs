using Microsoft.AspNetCore.Mvc;
using PhotoGallery.DbContexts;
using PhotoGallery.Entities;
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
            //m_db.Orders.Add(object from client)
            //    try
            //{
            //    m_db.SaveChanges();
            //}
            //catch
            //{

            //}
        }

        //[HttpPost("PostNewOrder")]
        //public IActionResult PostNewOrder (Models.Order.SetOrderDTO order)
        //{
        //    try
        //    {
        //        m_db.Orders.Add(order);
        //    }
        //    catch
        //    {

        //    }
        //}

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
