using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System;
using Microsoft.AspNetCore.Builder;

namespace IManager.Extensions
{
    public static class AuthExtensions
    {
        public static IServiceCollection AddAuth(
            this IServiceCollection services
            //,
            //JwtSettings jwtSettings
            )
        {
            services
                .AddAuthorization(options =>
                {
                    //options.AddPolicy("OnlyTest", policy => policy.RequireUserName("test@test.com"));
                })
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = false;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        //"Issuer": "http://localhost:5000",
                        //"Secret": "veryVerySuperSecretKey",
                        //"ExpirationInDays": 30
                        ValidIssuer = "http://localhost:5000", //jwtSettings.Issuer,
                        ValidAudience = "http://localhost:5000", //jwtSettings.Issuer,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                            "veryVerySuperSecretKey"
                            //jwtSettings.Secret
                            )),
                        ClockSkew = TimeSpan.Zero
                    };
                });

            return services;
        }

        public static IApplicationBuilder UseAuth(this IApplicationBuilder app)
        {
            app.UseAuthentication();

            app.UseAuthorization();

            return app;
        }
    }
}
