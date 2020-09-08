using IManager.Common.Interfaces;
using IManager.Domain.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Persistence
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddPersistenceWithIdentity<TUser, TRole, TKey>(this IServiceCollection services, IConfiguration configuration)
            where TUser : IdentityUser<TKey>
            where TRole : IdentityRole<TKey>
            where TKey : IEquatable<TKey>
        {
            if (configuration.GetValue<bool>("UseInMemoryDatabase"))
            {
                services.AddDbContext<ApplicationDbContext<TUser, TRole, TKey>>(options =>
                    options.UseInMemoryDatabase("IManagerApplicationDb"));
            }
            else
            {
                services.AddDbContext<ApplicationDbContext<TUser, TRole, TKey>>(options =>
                    options.UseSqlServer(
                        configuration.GetConnectionString("DefaultConnection"),
                        b =>
                        {
                            b.MigrationsHistoryTable("__MigrationsHistory", "IMS");
                            b.MigrationsAssembly(typeof(ApplicationDbContext<TUser, TRole, TKey>).Assembly.FullName);
                        }
                    ));
            }

            services.AddScoped<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext<TUser, TRole, TKey>>());


            return services;
        }


        public static void MigrateDatabase<TUser, TRole, TKey>(this IServiceScope scope)
            where TUser : IdentityUser<TKey>
            where TRole : IdentityRole<TKey>
            where TKey : IEquatable<TKey>
        {

            var services = scope.ServiceProvider;

            try
            {
                var dbContext = services.GetRequiredService<ApplicationDbContext<TUser, TRole, TKey>>();

                if (dbContext.Database.IsSqlServer())
                {
                    dbContext.Database.Migrate();
                }

                // TODO: seed db
                //var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();

                //await ApplicationDbContextSeed.SeedDefaultUserAsync(userManager);
                //await ApplicationDbContextSeed.SeedSampleDataAsync(dbContext);
            }
            catch (Exception ex)
            {
                var logger = scope.ServiceProvider.GetRequiredService<ILogger>();

                logger.LogError(ex, "An error occurred while migrating or seeding the database.");

                throw;
            }
        }
    }
}
