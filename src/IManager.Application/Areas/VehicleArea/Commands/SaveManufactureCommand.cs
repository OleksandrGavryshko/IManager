using IManager.Application.Areas.VehicleArea.Dto;
using IManager.Common.Models.Application;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace IManager.Application.Areas.VehicleArea.Commands
{
    public class SaveManufactureCommand : IRequest<AppResponse<bool>>
    {
        public ManufactureDto Model { get; set; }

        class SaveManufactureHandler : IRequestHandler<SaveManufactureCommand, AppResponse<bool>>
        {
            public async Task<AppResponse<bool>> Handle(SaveManufactureCommand request, CancellationToken cancellationToken)
            {


                return new AppResponse<bool>(true);
            }
        }
    }
}
