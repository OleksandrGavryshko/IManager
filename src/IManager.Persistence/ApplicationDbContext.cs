using IManager.Common.Interfaces.Persistence;
using IManager.Domain.Entities;
using IManager.Domain.Entities.Identity;
using IManager.Domain.Entities.Vehicle;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;

namespace IManager.Persistence
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, Guid>, IApplicationDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.HasDefaultSchema(DependencyInjection.DefaultSchema);

            builder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
        }

        public DbSet<Country> Countries { get; set; }
        public DbSet<Manufacture> Manufactures { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }


    }
}
