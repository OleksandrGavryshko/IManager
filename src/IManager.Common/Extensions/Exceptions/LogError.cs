using IManager.Common.Interfaces;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Common.Extensions.Exceptions
{
    public static partial class ExceptionExtension
    {

        public static void LogError(this Exception ex, ILogger logger)
        {
            if (ex.InnerException != null)
                LogError(ex.InnerException, logger);

            logger.LogError(ex, ex.Message);
        }
    }
}
