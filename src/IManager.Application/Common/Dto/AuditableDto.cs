using System;

namespace IManager.Application.Common.Dto
{
    public abstract class AuditableDto : CommonDto
    {
        public string CreatedBy { get; set; }

        public DateTime Created { get; set; }

        public string LastModifiedBy { get; set; }

        public DateTime LastModified { get; set; }
    }
}
