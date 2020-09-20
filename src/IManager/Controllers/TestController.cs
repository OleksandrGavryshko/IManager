using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IManager.Controllers
{
    public class TestController : BaseController
    {
        
        [HttpGet]
        public string GetValue()
        {
            return "value";
        }

        [HttpGet]
        [Authorize]
        public string GetValueAuth()
        {
            return "value auth";
        }

    }
}
