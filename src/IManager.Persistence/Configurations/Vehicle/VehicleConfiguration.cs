using Models = IManager.Domain.Entities.Vehicle;
using IManager.Persistence.Common;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace IManager.Persistence.Configurations.Vehicle
{
    internal class VehicleConfiguration : AuditableConfiguration<Models.Vehicle>
    {
        public override void ConfigureEntity(EntityTypeBuilder<Models.Vehicle> builder)
        {
            builder.Property(x => x.Model)
                .IsRequired()
                .HasMaxLength(250);

            builder.Property(x => x.ManufactureId)
                .IsRequired();

            builder.Property(x => x.Description)
                .IsRequired()
                .HasMaxLength(2000);

            builder.Property(x => x.ProductionDate)
                .IsRequired();

            builder.Property(x => x.PurchaseDate)
                .IsRequired();

            builder.Property(x => x.VIN)
                .HasMaxLength(50)
                .HasDefaultValueSql("''");

            builder.Property(x => x.RegistrationPlate)
                .HasMaxLength(10)
                .HasDefaultValueSql("''");
        }
    }
}
