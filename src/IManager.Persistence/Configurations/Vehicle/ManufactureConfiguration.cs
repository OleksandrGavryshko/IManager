using IManager.Domain.Entities.Vehicle;
using IManager.Persistence.Common;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IManager.Persistence.Configurations.Vehicle
{
    internal class ManufactureConfiguration : AuditableConfiguration<Manufacture>
    {
        public override void ConfigureEntity(EntityTypeBuilder<Manufacture> builder)
        {
            builder.Property(x => x.Code)
                .IsRequired()
                .IsUnicode()
                .HasMaxLength(150);

            builder.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(300);
        }
    }
}
