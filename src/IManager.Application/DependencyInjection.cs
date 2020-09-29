using IManager.Common.Extensions;
using MediatR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace IManager.Application
{

    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services, IConfiguration configuration)
        {
            services.ConfigureAppSettings(configuration);
            var appsettings = configuration.GetAppSettings();

            services.AddMediatR(Assembly.GetExecutingAssembly());

            return services;
        }

    }
}
