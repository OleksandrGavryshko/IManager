using IManager.Common.Interfaces.Identity;
using IManager.Common.Models.Application.Configuration;
using IManager.Domain.Entities.Identity;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace IManager.Extensions
{
    public class TokenManager : ITokenManager
    {
        public string GenerateToken(ApplicationUser user, IEnumerable<string> roles, JwtSettings jwtSettings)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
            };

            var roleClaims = roles.Select(r => new Claim(ClaimTypes.Role, r));
            claims.AddRange(roleClaims);

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.Secret));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            int expirationInMinutes = 5;
            int.TryParse(jwtSettings.ExpirationInMinutes, out expirationInMinutes );
            var expires = DateTime.Now.AddMinutes(expirationInMinutes);

            var token = new JwtSecurityToken(
                issuer: jwtSettings.Issuer, // "http://localhost:5000", //_jwtSettings.Issuer,
                audience: jwtSettings.Issuer, //"http://localhost:5000", // _jwtSettings.Issuer,
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
