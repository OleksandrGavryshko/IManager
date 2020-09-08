using IManager.Common.Interfaces;
using IManager.Domain.Entities;
using IManager.Domain.Entities.Car;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Persistence
{
    public class ApplicationDbContext<TUser, TRole, TKey> : IdentityDbContext<TUser,TRole, TKey>, IApplicationDbContext
        where TUser : IdentityUser<TKey>
        where TRole : IdentityRole<TKey>
        where TKey : IEquatable<TKey>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext<TUser, TRole, TKey>> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.HasDefaultSchema("IMS");
        }

        public DbSet<Country> Countries { get; set; }
        public DbSet<Car> Cars { get; set; }


    }
}
