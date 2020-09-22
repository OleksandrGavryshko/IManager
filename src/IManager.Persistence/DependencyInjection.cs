﻿using IManager.Common.Extensions;
using IManager.Common.Interfaces.Identity;
using IManager.Common.Interfaces.Persistence;
using IManager.Domain.Entities.Identity;
using IManager.Persistence.Identity;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;

namespace IManager.Persistence
{
    public static class DependencyInjection
    {
        public const string DefaultSchema = "IMS";
        public const string DefaultConnectionName = "DefaultConnection";
        public const string UseInMemoryDatabaseName = "IManagerApplicationDb";
        public const string DefaultMigrationsTableName = "__MigrationsHistory";

        public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration)
        {
            var appSettings = configuration.GetAppSettings();

            if (appSettings.UseInMemoryDatabase)
            {
                services.AddDbContext<ApplicationDbContext<ApplicationUser, ApplicationRole, Guid>>(options =>
                        options.UseInMemoryDatabase(UseInMemoryDatabaseName)
                    );
            }
            else
            {
                services.AddDbContext<ApplicationDbContext<ApplicationUser, ApplicationRole, Guid>>(options =>
                    options.UseSqlServer(
                        configuration.GetConnectionString(DefaultConnectionName),
                        b =>
                        {
                            b.MigrationsHistoryTable(DefaultMigrationsTableName, DefaultSchema);
                            b.MigrationsAssembly(typeof(ApplicationDbContext<ApplicationUser, ApplicationRole, Guid>).Assembly.FullName);
                        }
                    ));
            }

            services.AddScoped<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext<ApplicationUser, ApplicationRole, Guid>>());
            services.AddTransient<IIdentityService, IdentityService>();

            services.AddIdentity<ApplicationUser, ApplicationRole>()
                .AddEntityFrameworkStores<ApplicationDbContext<ApplicationUser, ApplicationRole, Guid>>()
                .AddDefaultTokenProviders();

            return services;
        }

        public static IApplicationBuilder ConfigurePersistenceWithIdentity(this IApplicationBuilder app)
        {
            app.UseAuthentication();

            return app;
        }

        public static void MigrateDatabase(this IServiceScope scope)
        {

            var services = scope.ServiceProvider;

            try
            {
                var dbContext = services.GetRequiredService<ApplicationDbContext<ApplicationUser, ApplicationRole, Guid>>();

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
