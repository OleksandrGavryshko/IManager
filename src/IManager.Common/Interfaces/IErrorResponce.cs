using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Common.Interfaces
{
    public interface IErrorResponce
    {
        bool IsValid { get; }

        //public FluentValidation.Results.ValidationResult ValidationResult { get; set; }

        List<string> Errors { get; set; }

        void AddError(string errorMessage);
    }
}
