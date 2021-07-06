using IManager.Common.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Common.Models.Application
{
    public class AppResponse<ResponseData> : IErrorResponce
    {
        public AppResponse()
        {
             Errors = new List<string>();
            //ValidationResult = new FluentValidation.Results.ValidationResult();
        }

        public ResponseData Result { get; set; }
        //public FluentValidation.Results.ValidationResult ValidationResult { get; set; }

        public List<string> Errors { get; set; }
        public bool IsValid => !(Errors.Count > 0);

        public void AddError(string errorMessage)
        {
            Errors.Add(errorMessage);
        }
    }
}
