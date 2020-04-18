using IManager.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Domain.Entities.Car
{
    public class Car : AuditableEntity
    {
        public string Manufacturer { get; set; }
        public string Model { get; set; }
        public DateTime ProductionDate { get; set; }
        public DateTime PurchaseDate { get; set; }
        public string VIN { get; set; }
        public string RegistrationPlate { get; set; }


    }
}
