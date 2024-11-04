using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SQLConnector.Models;

public class User
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    [Required]
    public string Username { get; set; } = "";
    [Required]
    [EmailAddress]
    public string Email { get; set; } = "";
    [Url]
    public string ProfileURL { get; set; } = "";
    public string Password { get; set; } = "";
    [Required]
    public string Organization { get; set; } = "";

}