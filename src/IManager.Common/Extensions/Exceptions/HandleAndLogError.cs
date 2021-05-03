using IManager.Common.Interfaces;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Common.Extensions.Exceptions
{
    public static partial class ExceptionExtension
    {

        public static void HandleAndLogError(this Exception ex, IErrorResponce response, ILogger logger)
        {
            ex.HandleError(response);
            ex.LogError(logger);
        }
    }
}
