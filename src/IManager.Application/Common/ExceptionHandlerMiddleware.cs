using IManager.Common.Extensions.Exceptions;
using IManager.Common.Interfaces;
using IManager.Common.Models;
using MediatR.Pipeline;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Net;
using System.Threading.Tasks;

namespace IManager.Application.Common
{
    public class ExceptionHandlerMiddleware<TRequest, TResponse, TException> : RequestExceptionHandler<TRequest, TResponse, TException>
        where TException : Exception
        where TResponse : IErrorResponce, new()
    {
        private readonly ILogger _logger;

        public ExceptionHandlerMiddleware(ILogger<ExceptionHandlerMiddleware<TRequest, TResponse, TException>> logger)
        {
            _logger = logger;
        }

        protected override void Handle(TRequest request, TException exception, RequestExceptionHandlerState<TResponse> state)
        {
            var response = new TResponse();
            exception.HandleAndLogError(response, _logger);

            state.SetHandled(response);
        }

    }
}
