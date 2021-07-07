using IManager.Application.Common.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Application.Areas.VehicleArea.Dto
{
    public class ManufactureDto : CommonDto // : IMapFrom
    {
        public string Code { get; set; }
        public string Name { get; set; }
    }
}
