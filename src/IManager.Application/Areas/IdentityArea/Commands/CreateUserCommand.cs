using IManager.Common.Interfaces.Identity;
using IManager.Common.Models.Application;
using IManager.Domain.Entities.Identity;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace IManager.Application.Areas.IdentityArea.Commands
{
    public class CreateUserCommand : IRequest<AppResponse<bool>>
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    class CreateUserCommandHandler : IRequestHandler<CreateUserCommand, AppResponse<bool>>
    {
        private readonly IIdentityService identityService;

        public CreateUserCommandHandler(IIdentityService identityService)
        {
            this.identityService = identityService;
        }

        public async Task<AppResponse<bool>> Handle(CreateUserCommand request, CancellationToken cancellationToken)
        {
            var response = new AppResponse<bool>();

            try
            {
                //todo: mapper
                var user = new ApplicationUser()
                {
                    Email = request.Email,
                    UserName = request.Email
                };

                var createUserResult = await identityService.CreateUserAsync(user, request.Password);
                if (!createUserResult.Result)
                {
                    response.Errors = createUserResult.Errors;
                }
                else
                {
                    response.Result = true;
                }
            }
            catch (Exception ex)
            {
                response.Errors = new List<string> { ex.Message };
                //todo:logError, handl error
            }

            return response;
        }
    }
}
