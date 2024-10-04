using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Auth.BFF.Controllers;


[ApiController]
[Route("signin")]
public class SignInController : ControllerBase
{
    [HttpPost]
    public IActionResult SignIn()
    {
        return BadRequest("not yet impelmented");
    }
}