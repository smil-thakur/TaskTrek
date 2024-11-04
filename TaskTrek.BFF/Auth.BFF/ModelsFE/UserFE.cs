using SQLConnector.Models;

namespace Auth.BFF.ModelsFE;

public class UserFE
{
    public string Username { get; set; } = "";
    public string Email { get; set; } = "";
    public string ProfileURL { get; set; } = "";
    public string Password { get; set; } = "";
    public string Organization { get; set; } = "";

    public static User UserFEToUser(UserFE userFE)
    {

        return new User()
        {
            Username = userFE.Username,
            Email = userFE.Email,
            ProfileURL = userFE.ProfileURL,
            Password = userFE.Password,
            Organization = userFE.Organization,
        };
    }
}