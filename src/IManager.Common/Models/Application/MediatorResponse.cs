using System;
using System.Collections.Generic;
using System.Text;

namespace IManager.Common.Models.Application
{
    public class BaseMediatorResponse<ResponseData>
    {
        public BaseMediatorResponse()
        {
            //ValidationResult = new FluentValidation.Results.ValidationResult();
        }

        public ResponseData Result { get; set; }
        //public FluentValidation.Results.ValidationResult ValidationResult { get; set; }

        public List<string> Errors { get; set; }
    }
}
