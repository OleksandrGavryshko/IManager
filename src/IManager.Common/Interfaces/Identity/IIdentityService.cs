using IManager.Common.Models;
using IManager.Domain.Entities.Identity;
using System;
using System.Threading.Tasks;

namespace IManager.Common.Interfaces.Identity
{
    public interface IIdentityService
    {
        Task<IdentityResponse<bool>> CreateUserAsync(ApplicationUser user, string password);
        Task<IdentityResponse<ApplicationUser>> SignInAsync(string login, string password);

        Task SignOutAsync(string login);

        //Task<Result> DeleteUserAsync(Guid userId);
    }
}
