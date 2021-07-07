using IManager.Domain.Entities;
using IManager.Persistence.Common;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Persistence.Configurations
{
    internal class CountryConfiguration : AuditableConfiguration<Country>
    {
        public override void ConfigureEntity(EntityTypeBuilder<Country> builder)
        {
            builder.Property(x => x.Code)
                .IsRequired()
                .IsUnicode()
                .HasMaxLength(100);

            builder.Property(x => x.Name)
                .IsRequired()
                .IsUnicode()
                .HasMaxLength(300);
        }
    }
}
