using IManager.Domain.Entities;
using IManager.Domain.Entities.Vehicle;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Common.Interfaces.Persistence
{
    public interface IApplicationDbContext
    {
        DbSet<Country> Countries { get; set; }

         DbSet<Manufacture> Manufactures { get; set; }
         DbSet<Vehicle> Vehicles { get; set; }

        //Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
