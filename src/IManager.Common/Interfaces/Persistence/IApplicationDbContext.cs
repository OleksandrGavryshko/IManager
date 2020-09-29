using IManager.Domain.Entities;
using IManager.Domain.Entities.Car;
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
        DbSet<Car> Cars { get; set; }


        //Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
