using Auth.BFF.ModelsFE;
using Auth.BFF.Shared;
using Microsoft.AspNetCore.Mvc;

namespace Auth.BFF.Controllers;


[ApiController]
[Route("signin")]
public class SignInController(HttpClient client) : ControllerBase
{
    private readonly HttpClient _httpClient = client;


    [HttpPost]
    public async Task<IActionResult> RegisterUser(UserFE user)
    {
        var registerUserDBAPI = APIConstants.registerUserDBAPI;

        var res = await _httpClient.PostAsJsonAsync(registerUserDBAPI, user);

        if (res.IsSuccessStatusCode)
        {
            return Ok(res);
        }
        else
        {
            return BadRequest(res);
        }
    }
}