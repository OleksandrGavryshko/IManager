using IManager.Common.Models;
using System;
using System.Threading.Tasks;

namespace IManager.Common.Interfaces.Identity
{
    public interface IIdentityService
    {
        Task<string> GetUserNameAsync(Guid userId);

        Task<(Result Result, Guid UserId)> CreateUserAsync(string userName, string password);

        Task<Result> DeleteUserAsync(Guid userId);
    }
}
