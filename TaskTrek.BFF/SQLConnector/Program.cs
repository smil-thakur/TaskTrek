using DotNetEnv;
using Microsoft.EntityFrameworkCore;
using SQLConnector.Database;

Env.Load("../.env");


var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddEnvironmentVariables();

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var connectionString = Environment.GetEnvironmentVariable("MYSQL_CONNECTION");

builder.Services.AddDbContext<DataContext>(options => options.UseMySql(serverVersion: ServerVersion.AutoDetect(connectionString), connectionString: connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.Run();

