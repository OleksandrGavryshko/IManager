using IManager.Domain.Common;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Persistence.Common
{
    internal abstract class CommonConfiguration<TEntity> : IEntityTypeConfiguration<TEntity> where TEntity : CommonEntity
    {
        public abstract void ConfigureEntity(EntityTypeBuilder<TEntity> builder);
        public virtual void ConfigureAuditableEntity(EntityTypeBuilder<TEntity> builder) { }


        public void Configure(EntityTypeBuilder<TEntity> builder)
        {
            builder.HasKey(p => p.Id);

            ConfigureAuditableEntity(builder);
            ConfigureEntity(builder);

            //builder.Property(p => p.State).va()

            //builder.Property(e => e.OrderId).HasColumnName("OrderID");

            //builder.Property(e => e.CustomerId)
            //    .HasColumnName("CustomerID")
            //    .HasMaxLength(5);

            //builder.Property(e => e.EmployeeId).HasColumnName("EmployeeID");

            //builder.Property(e => e.Freight)
            //    .HasColumnType("money")
            //    .HasDefaultValueSql("((0))");

            //builder.Property(e => e.OrderDate).HasColumnType("datetime");

            //builder.Property(e => e.RequiredDate).HasColumnType("datetime");

            //builder.Property(e => e.ShipAddress).HasMaxLength(60);

            //builder.Property(e => e.ShipCity).HasMaxLength(15);

            //builder.Property(e => e.ShipCountry).HasMaxLength(15);

            //builder.Property(e => e.ShipName).HasMaxLength(40);

            //builder.Property(e => e.ShipPostalCode).HasMaxLength(10);

            //builder.Property(e => e.ShipRegion).HasMaxLength(15);

            //builder.Property(e => e.ShippedDate).HasColumnType("datetime");

            //builder.HasOne(d => d.Shipper)
            //    .WithMany(p => p.Orders)
            //    .HasForeignKey(d => d.ShipVia)
            //    .HasConstraintName("FK_Orders_Shippers");

        }
    }
}
