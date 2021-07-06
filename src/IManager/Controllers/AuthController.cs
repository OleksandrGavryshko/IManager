using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using IManager.Application.Areas.Identity.Commands;
using IManager.Common.Models.Application;
using IManager.Domain.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace IManager.Controllers
{
    public class AuthController : BaseController
    {
        [HttpPost]
        public async Task<AppResponse<bool>> SignUp(CreateUserCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPost]
        public async Task<AppResponse<SignInCommandResponse>> SignIn(SignInCommand command)
        { 
            return await Mediator.Send(command);
        }

        [HttpPost]
        public async Task<AppResponse<SignOutCommandResponse>> SignOut(SignOutCommand command)
        {
            return await Mediator.Send(command);
        }

    }
}
