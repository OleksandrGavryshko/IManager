using IManager.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Domain.Entities.Vehicle
{
    public class Manufacture : AuditableEntity
    {
        public string  Code { get; set; }
        public string Name { get; set; }

    }
}
