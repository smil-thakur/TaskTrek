using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using SQLConnector.Methods;
using SQLConnector.Tables;

namespace Auth.BFF.Controllers;


[ApiController]
[Route("signin")]
public class SignInController : ControllerBase
{

    private readonly TestFetch _testFetch;

    public SignInController(TestFetch testFetch)
    {
        _testFetch = testFetch;
    }

    [HttpPost]
    public async Task<IActionResult> SignIn()
    {

        var data = await _testFetch.GetTestValues();

        foreach (var d in data)
        {
            System.Console.WriteLine(d.test);
        }

        return BadRequest("not yet impelmented");
    }
}