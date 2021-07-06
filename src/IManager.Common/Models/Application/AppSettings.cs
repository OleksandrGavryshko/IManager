using IManager.Common.Models.Application.Configuration;

namespace IManager.Common.Models.Application
{
    public class AppSettings
    {
        public JwtSettings JwtSettings { get; set; }
        public bool UseInMemoryDatabase { get; set; }
    }


}
