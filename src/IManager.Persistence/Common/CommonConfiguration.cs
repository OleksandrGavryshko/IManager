using IManager.Domain.Common;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Persistence.Common
{
    public abstract class CommonConfiguration<TEntity> : IEntityTypeConfiguration<TEntity> where TEntity : CommonEntity
    {
        public void Configure(EntityTypeBuilder<TEntity> builder)
        {
            //builder.Property(p => p.State).va()

        }
    }
}
