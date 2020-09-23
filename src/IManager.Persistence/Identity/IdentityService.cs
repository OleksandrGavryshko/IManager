using IManager.Common.Interfaces.Identity;
using IManager.Common.Models;
using IManager.Domain.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IManager.Persistence.Identity
{
    public class IdentityService : IIdentityService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;

        public IdentityService(
            UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager
            )
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        //return model ?
        public async Task CreateUserAsync(ApplicationUser user, string password)
        {
            IdentityResult userCreateResult = await _userManager.CreateAsync(user, password);
            
            if (userCreateResult.Succeeded)
            {
                //return Created(string.Empty, string.Empty);
                //return OK
            }
            else
            {
                //return Problem(userCreateResult.Errors.First().Description, null, 500);
                //map errors
            }
        }

        //return model ?
        public async Task SignInAsync(string login, string password)
        {
            var user = _userManager.Users.SingleOrDefault(u => u.UserName == login);
            if (user is null)
            {
                //return; "User not found"
            }

            var userSigninResult = await _userManager.CheckPasswordAsync(user, password);
            //return userSigninResult
            //GenerateJwt(user, roles)
        }




        //public async Task<Result> DeleteUserAsync(Guid userId)
        //{
        //    var user = _userManager.Users.SingleOrDefault(u => u.Id == userId);

        //    if (user != null)
        //    {
        //        return await DeleteUserAsync(user);
        //    }

        //    return Result.Success();
        //}

        //public async Task<Result> DeleteUserAsync(ApplicationUser user)
        //{
        //    var result = await _userManager.DeleteAsync(user);

        //    return result.ToApplicationResult();
        //}




        //private string GenerateJwt(ApplicationUser user, IList<string> roles)
        //{

        //    var claims = new List<Claim>
        //    {
        //        new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
        //        new Claim(ClaimTypes.Name, user.UserName),
        //        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        //        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
        //    };

        //    var roleClaims = roles.Select(r => new Claim(ClaimTypes.Role, r));
        //    claims.AddRange(roleClaims);

        //    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("veryVerySuperSecretKey"));
        //    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        //    var expires = DateTime.Now.
        //        AddMinutes(1);
        //    //AddDays(Convert.ToDouble(1));

        //    var token = new JwtSecurityToken(
        //        issuer: "http://localhost:5000", //_jwtSettings.Issuer,
        //        audience: "http://localhost:5000", // _jwtSettings.Issuer,
        //        claims,
        //        expires: expires,
        //        signingCredentials: creds
        //    );

        //    return new JwtSecurityTokenHandler().WriteToken(token);
        //}



    }
}
