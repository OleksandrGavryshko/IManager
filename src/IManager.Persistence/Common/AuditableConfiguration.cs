using IManager.Domain.Common;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Persistence.Common
{
    internal abstract class AuditableConfiguration <TEntity> : CommonConfiguration<TEntity> where TEntity : AuditableEntity
    {
        public override void ConfigureAuditableEntity(EntityTypeBuilder<TEntity> builder)
        {
            builder.Property(p => p.Created)
                .IsRequired();

            builder.Property(p => p.CreatedBy)
                .IsRequired()
                .HasMaxLength(400);


            builder.Property(p => p.LastModified)
                .IsRequired();

            builder.Property(p => p.LastModifiedBy)
                .IsRequired()
                .HasMaxLength(400);
        }
    }
}
