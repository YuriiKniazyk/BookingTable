using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookingTables.Controllers
{
    [ApiController]
    public abstract class BaseController : ControllerBase
    {
        public Guid CurrentUserId
        {
            get
            {
                if (!User.Identity.IsAuthenticated)
                {
                    return Guid.Empty;
                }

                return Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)); 
            }
        }
    }
}
