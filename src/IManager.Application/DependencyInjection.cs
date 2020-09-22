using IManager.Common.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace IManager.Application
{

    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services, IConfiguration configuration)
        {
            services.ConfigureAppSettings(configuration);
            //appsettings = configuration.GetAppSettings();


            return services;
        }

    }
}
