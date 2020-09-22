using IManager.Application;
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
            services.AddApplication(Configuration);
            services.AddInfrastructure();
            services.AddPersistence(Configuration);

            services.AddAuth(Configuration);

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

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
