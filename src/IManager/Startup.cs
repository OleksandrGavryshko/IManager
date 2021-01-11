using IManager.Application;
using IManager.Common.Interfaces.Identity;
using IManager.Common.Models.Application;
using IManager.Domain.Entities.Identity;
using IManager.Extensions;
using IManager.Infrastructure;
using IManager.Persistence;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

namespace IManager
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //TODO: LOGGER
            services.AddScoped<ITokenManager, TokenManager>();
            services.AddApplication(Configuration);
            services.AddInfrastructure();
            services.AddPersistence(Configuration);

            services.AddAuth(Configuration);

            //services.AddSwaggerDocument();

            services.AddSwaggerDocument(settings =>
            {
                settings.PostProcess = document =>
                {
                    document.Info.Version = "v1";
                    document.Info.Title = "Example API";
                    document.Info.Description = "REST API for example.";
                };
            });

            //services.AddSwaggerDocument(config =>
            //{
            //    config.PostProcess = document =>
            //    {
            //        document.Info.Version = "v1";
            //        document.Info.Title = "ToDo API";
            //        document.Info.Description = "A simple ASP.NET Core web API";
            //        document.Info.TermsOfService = "None";
            //        document.Info.Contact = new NSwag.OpenApiContact
            //        {
            //            Name = "Shayne Boyer",
            //            Email = string.Empty,
            //            Url = "https://twitter.com/spboyer"
            //        };
            //        document.Info.License = new NSwag.OpenApiLicense
            //        {
            //            Name = "Use under LICX",
            //            Url = "https://example.com/license"
            //        };
            //    };
            //});

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            using var scope = app.ApplicationServices.CreateScope();
            scope.MigrateDatabase();

            if (env.IsDevelopment())
            {
                // app.UseDatabaseErrorPage();
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuth();
            app.ConfigurePersistenceWithIdentity()
                .UseAuthorization();

            app.UseOpenApi();
            app.UseSwaggerUi3();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
