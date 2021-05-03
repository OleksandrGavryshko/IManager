using System;
using System.Collections.Generic;
using System.Linq;

namespace IManager.Common.Models
{
    public class IdentityResponse<ResultType>
    {
        public IdentityResponse(ResultType result) : this(result, new string[] { }) { }

        public IdentityResponse(ResultType result, IEnumerable<string> errors)
        {
            Result = result;
            Errors = errors.ToList();
        }

        public ResultType Result { get; set; }

        public List<string> Errors { get; internal set; }

        public void AddError(string error)
        {
            if (Errors == null)
                Errors = new List<string>();

            Errors.Add(error);
        }

        public void AddRangeErrors(IEnumerable<string> errors)
        {
            if (Errors == null)
                Errors = new List<string>();

            Errors.AddRange(errors);
        }
    }
}
