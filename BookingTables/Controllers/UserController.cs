using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookingTables.Data;
using BookingTables.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookingTables.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : BaseController
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("current")]
        public async Task<ActionResult<ApplicationUser>> GetUser()
        {
            var user = await _context.Users.Where(i => i.Id == CurrentUserId.ToString()).FirstOrDefaultAsync();

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }
    }
}
