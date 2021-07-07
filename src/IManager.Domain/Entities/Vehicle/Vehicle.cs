using IManager.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Domain.Entities.Vehicle
{
    public class Vehicle : AuditableEntity
    {
        public int ManufactureId { get; set; }

        public string Model { get; set; }
        public string Description { get; set; }
        public DateTime ProductionDate { get; set; }
        public DateTime PurchaseDate { get; set; }
        public string VIN { get; set; }
        public string RegistrationPlate { get; set; }

        public Manufacture Manufacture { get; set; }

    }
}
