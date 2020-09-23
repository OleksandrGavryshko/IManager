using IManager.Common.Models;
using IManager.Domain.Entities.Identity;
using System;
using System.Threading.Tasks;

namespace IManager.Common.Interfaces.Identity
{
    public interface IIdentityService
    {
        Task CreateUserAsync(ApplicationUser user, string password);
        Task SignInAsync(string login, string password);



        //Task<Result> DeleteUserAsync(Guid userId);
    }
}
