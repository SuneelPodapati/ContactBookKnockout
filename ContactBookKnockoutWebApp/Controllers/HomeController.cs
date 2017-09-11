using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ContactBookKnockoutWebApp.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Observables() { return View(); }
        public ActionResult DataBindings() { return View(); }
        public ActionResult Bindings() { return View(); }
        public ActionResult RestBindings() { return View(); }

    }
}