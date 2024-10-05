using Microsoft.EntityFrameworkCore;
using SQLConnector.Tables;

namespace SQLConnector.Database;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Test> test { get; set; }
}