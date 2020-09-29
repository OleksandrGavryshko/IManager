using IManager.Common.Models.Application.Configuration;
using IManager.Domain.Entities.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Common.Interfaces.Identity
{
    public interface ITokenManager
    {
        string GenerateToken(ApplicationUser user, IEnumerable<string> roles, JwtSettings jwtSettings);
    }
}
