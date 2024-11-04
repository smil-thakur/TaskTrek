using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SQLConnector.Database;
using SQLConnector.Models;

namespace SQLConnector.Controllers;

[ApiController]
[Route("SQL")]
public class AuthSQLController(DataContext context) : ControllerBase
{

    private readonly DataContext _context = context;


    [HttpPost("registerDB")]
    public async Task<IActionResult> RegisterUserInDB(User user)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }
        IActionResult res = await CheckUserExsists(user);
        if (res is OkResult)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return Ok();
        }
        else
        {
            return res;
        }



    }

    [HttpPost("checkUserDB")]
    public async Task<IActionResult> CheckUserExsists(User user)
    {
        User? userDB = await _context.Users.Where(u => u.Username == user.Username).FirstOrDefaultAsync();

        if (userDB != null)
        {
            return BadRequest("username already exsists");
        }
        else
        {
            userDB = await _context.Users.Where(u => u.Email == user.Email).FirstOrDefaultAsync();

            if (userDB != null)
            {
                return BadRequest("Email is already registered");
            }
        }

        if (userDB == null)
        {
            return Ok();
        }
        else
        {
            return BadRequest("Internal server error");
        }
    }
}