namespace IManager.Common.Models.Application.Configuration
{
    public class JwtSettings
    {
        public string Issuer { get; set; }
        public string Secret { get; set; }
        public string ExpirationInMinutes { get; set; }
    }
}
