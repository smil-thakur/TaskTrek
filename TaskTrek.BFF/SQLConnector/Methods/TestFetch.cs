using Microsoft.EntityFrameworkCore;
using SQLConnector.Database;
using SQLConnector.Tables;

namespace SQLConnector.Methods;

public class TestFetch
{

    private readonly DataContext _context;
    public TestFetch(DataContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Test>> GetTestValues()
    {
        return await _context.test.ToListAsync();
    }

}