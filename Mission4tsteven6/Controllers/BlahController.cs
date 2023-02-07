using Microsoft.AspNetCore.Mvc;
using Mission4tsteven6.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4tsteven6.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult CalculatorView()
        {
            return View();
        }
        [HttpPost]
        public IActionResult CalculatorView(CalculatorModel model)
        {
            return View();
        }
    }
}
