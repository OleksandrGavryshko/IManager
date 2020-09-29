using IManager.Common.Interfaces.Identity;
using IManager.Common.Models.Application;
using IManager.Domain.Entities.Identity;
using MediatR;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace IManager.Application.Areas.Identity.Commands
{
    public class SignInCommand : IRequest<BaseMediatorResponse<SignInCommandResponse>>
    {
        public string Email { get; set; }

        public string Password { get; set; }

        

        class SignInCommandHandler :  IRequestHandler<SignInCommand, BaseMediatorResponse<SignInCommandResponse>>
        {
            private readonly AppSettings appSettings;
            private readonly IIdentityService identityService;
            private readonly ITokenManager tokenManager;

            public SignInCommandHandler(IOptionsMonitor<AppSettings> optionsMonitor, IIdentityService identityService, ITokenManager tokenManager)
            {
                appSettings = optionsMonitor.CurrentValue;
                this.identityService = identityService;
                this.tokenManager = tokenManager;
            }

            public async Task<BaseMediatorResponse<SignInCommandResponse>> Handle(SignInCommand request, CancellationToken cancellationToken)
            {
                var response = new BaseMediatorResponse<SignInCommandResponse>();

                try
                {
                    var signInResponse = await identityService.SignInAsync(request.Email, request.Password);

                    if (signInResponse.Errors != null && signInResponse.Errors.Count > 0)
                    {
                        response.Errors = signInResponse.Errors;
                        return response;
                    }

                    response.Result = new SignInCommandResponse();
                    response.Result.User = signInResponse.Result;

                    //todo: get roles // await _userManager.GetRolesAsync(user);
                    var roles = new List<string> { "user" };
                    response.Result.Token = tokenManager.GenerateToken(response.Result.User, roles, appSettings.JwtSettings);


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

    public class SignInCommandResponse
    {
        public ApplicationUser User { get; set; }
        public string Token { get; set; }
    }
}
