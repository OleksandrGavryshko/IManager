using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace IManager
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var hosts = CreateHostBuilder(args).Build();

            hosts.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
