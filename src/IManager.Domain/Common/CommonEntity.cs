using IManager.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Domain.Common
{
    public class CommonEntity
    {
        public int Id { get; set; }
        public ObjectState State { get; set; }

    }
}
