using Microsoft.EntityFrameworkCore;
using SQLConnector.Models;
using SQLConnector.Tables;

namespace SQLConnector.Database;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Test> test { get; set; }
    public DbSet<User> Users { get; set; }
}