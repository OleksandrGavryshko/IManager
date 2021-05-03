using IManager.Common.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Common.Extensions.Exceptions
{
    public static partial class ExceptionExtension
    {
        public static void HandleError(this Exception ex, IErrorResponce response)
        {
            response.AddError(ex.Message);

            //ValidationFailure validationFailure = TransformFormattedArguments(ex);
            //response.ValidationResult.Errors.Add(validationFailure);

            //if (ex is TranslatedException tex)
            //    if (tex.ValidationResult != null && !tex.ValidationResult.IsValid)
            //        foreach (var error in tex.ValidationResult.Errors)
            //            response.AddError(error.ErrorMessage, error.FormattedMessageArguments);

            //ValidationFailure TransformFormattedArguments(Exception ex)
            //{
            //    ValidationFailure validationFailure = null;
            //    if (ex is TranslatedException tex)
            //    {
            //        var formattedMessageArguments = new List<object>();

            //        foreach (var item in tex.FormattedArguments)
            //        {
            //            if (item is TranslatedException tiex)
            //            {
            //                formattedMessageArguments.Add(TransformFormattedArguments(tiex));
            //            }
            //            else
            //                formattedMessageArguments.Add(item.ToString());
            //        }

            //        validationFailure = new ValidationFailure("", tex.Message)
            //        {
            //            FormattedMessageArguments = formattedMessageArguments.ToArray()
            //        };
            //    }
            //    else
            //        validationFailure = new ValidationFailure("", ex.Message);


            //    return validationFailure;
            //}
        }

        //public static void HandleError(this Exception ex, IErrorResponse response, object[] formattedArguments)
        //{
        //    ValidationFailure validationFailure = new ValidationFailure("", ex.Message)
        //    {
        //        FormattedMessageArguments = formattedArguments
        //    };

        //    response.ValidationResult.Errors.Add(validationFailure);
        //}
    }
}
