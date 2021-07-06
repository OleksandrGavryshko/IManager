using IManager.Application.Common;
using IManager.Common.Extensions;
using MediatR;
using MediatR.Pipeline;
using Microsoft.AspNetCore.Builder;
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
            services.AddScoped(typeof(IRequestExceptionHandler<,,>), typeof(ExceptionHandlerMiddleware<,,>));

            return services;
        }

        public static IApplicationBuilder UseApplication(this IApplicationBuilder builder)
        {
            //    return builder.UseMiddleware<ExceptionHandlerMiddleware>();

            return builder;
        }

    }
}
