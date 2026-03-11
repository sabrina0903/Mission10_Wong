using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10_Wong.Data;

namespace Mission10_Wong.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BowlingController : ControllerBase
    {
        private BowlingDbContext _context;

        public BowlingController(BowlingDbContext temp)
        {
            _context = temp;
        }

        [HttpGet]
        public IEnumerable<Bowler> GetBowlers()
        {
            var bowlers = _context.Bowlers
                .Include(b => b.Team)
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks")
                .ToList();

            return bowlers;
        }
    }
}