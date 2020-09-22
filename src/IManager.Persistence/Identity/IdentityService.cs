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
    public class IdentityService // : IIdentityService
    {
        //private readonly UserManager<ApplicationUser> _userManager;

        //public IdentityService(UserManager<ApplicationUser> userManager)
        //{
        //    _userManager = userManager;
        //}

        //public async Task<string> GetUserNameAsync(Guid userId)
        //{
        //    var user = await _userManager.Users.FirstAsync(u => u.Id == userId);

        //    return user.UserName;
        //}
        //public async Task<(Result Result, Guid UserId)> CreateUserAsync(string userName, string password)
        //{
        //    var user = new ApplicationUser
        //    {
        //        UserName = userName,
        //        Email = userName,
        //    };

        //    var result = await _userManager.CreateAsync(user, password);

        //    return (result.ToApplicationResult(), user.Id);
        //}

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




        //_______________________________________________________________________________________________________________






        private readonly UserManager<ApplicationUser> _userManager;
        //private readonly IMapper _mapper;
        private readonly RoleManager<ApplicationRole> _roleManager;
        //private readonly JwtSettings _jwtSettings;

        //public AuthController(
        //    //IMapper mapper,
        //    UserManager<ApplicationUser> userManager,
        //    RoleManager<ApplicationRole> roleManager
        //    //IOptionsSnapshot<JwtSettings> jwtSettings
        //    )
        //{
        //    //_mapper = mapper;
        //    _userManager = userManager;
        //    _roleManager = roleManager;
        //    //_jwtSettings = jwtSettings.Value;
        //}

        public IdentityService(
            UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager
            )
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }


        [HttpPost]
        public async Task<IActionResult> SignUp(UserSignUpResource userSignUpResource)
        {
            //var user = _mapper.Map<UserSignUpResource, ApplicationUser>(userSignUpResource);

            var user = new ApplicationUser
            {
                Email = userSignUpResource.Email,
                UserName = userSignUpResource.Email,
                //userSignUpResource.FirstName,
                //userSignUpResource.LastName,
                // userSignUpResource.Password
            };

            var userCreateResult = await _userManager.CreateAsync(user, userSignUpResource.Password);

            if (userCreateResult.Succeeded)
            {
                return Created(string.Empty, string.Empty);
            }

            return Problem(userCreateResult.Errors.First().Description, null, 500);
        }

        [HttpPost]
        public async Task<IActionResult> SignIn(UserLoginResource userLoginResource)
        {
            var user = _userManager.Users.SingleOrDefault(u => u.UserName == userLoginResource.Email);
            if (user is null)
            {
                return NotFound("User not found");
            }

            var userSigninResult = await _userManager.CheckPasswordAsync(user, userLoginResource.Password);

            if (userSigninResult)
            {
                var roles = await _userManager.GetRolesAsync(user);
                return Ok(GenerateJwt(user, roles));
            }

            return BadRequest("Email or password incorrect.");
        }


        private string GenerateJwt(ApplicationUser user, IList<string> roles)
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

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("veryVerySuperSecretKey"));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.
                AddMinutes(1);
            //AddDays(Convert.ToDouble(1));

            var token = new JwtSecurityToken(
                issuer: "http://localhost:5000", //_jwtSettings.Issuer,
                audience: "http://localhost:5000", // _jwtSettings.Issuer,
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }






















    }
}
