using IManager.Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Domain.Entities
{
    public class Country : AuditableEntity
    {
        public string ShortName { get; set; }
        public string Name { get; set; }
    }
}
