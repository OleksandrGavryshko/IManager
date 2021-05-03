using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Common.Interfaces
{
    public interface IErrorResponce
    {
        public bool IsValid => Errors.Count > 0;

        //public FluentValidation.Results.ValidationResult ValidationResult { get; set; }

        List<string> Errors { get; set; }

        public void AddError(string errorMessage)
        {
            Errors.Add(errorMessage);
        }
    }
}
