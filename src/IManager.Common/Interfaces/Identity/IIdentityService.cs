using IManager.Common.Models;
using IManager.Domain.Entities.Identity;
using System;
using System.Threading.Tasks;

namespace IManager.Common.Interfaces.Identity
{
    public interface IIdentityService
    {
        Task<Response<bool>> CreateUserAsync(ApplicationUser user, string password);
        Task<Response<ApplicationUser>> SignInAsync(string login, string password);

        Task SignOutAsync(string login);

        //Task<Result> DeleteUserAsync(Guid userId);
    }
}
