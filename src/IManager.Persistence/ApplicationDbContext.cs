using IManager.Common.Interfaces;
using IManager.Domain.Entities;
using IManager.Domain.Entities.Car;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Persistence
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {
        public DbSet<Country> Countries { get; set; }
        public DbSet<Car> Cars { get; set; }


    }
}
