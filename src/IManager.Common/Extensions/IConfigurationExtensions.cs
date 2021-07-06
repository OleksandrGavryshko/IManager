using IManager.Common.Models.Application;
using Microsoft.Extensions.Configuration;

namespace IManager.Common.Extensions
{
    public static class IConfigurationExtensions
    {
        public static AppSettings GetAppSettings(this IConfiguration configuration)
        {
            return configuration.GetSection(nameof(AppSettings)).Get<AppSettings>();
        }
    }
}
