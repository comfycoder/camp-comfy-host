using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using CampComfyHost.Models;

namespace CampComfyHost.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public HomeController(
           IHostingEnvironment hostingEnvironment
       )
        {
            _hostingEnvironment = hostingEnvironment;
        }

        public IActionResult Index()
        {
            var indexHtml = string.Empty;
            var indexPath = string.Empty;

            var webRootPath = _hostingEnvironment.WebRootPath;

            if (!string.IsNullOrWhiteSpace(webRootPath))
            {
                indexPath = Path.Combine(webRootPath, "", "index.html");

                if (System.IO.File.Exists(indexPath))
                {
                    indexHtml = System.IO.File.ReadAllText(indexPath);
                }
                else
                {
                    return StatusCode(500, "Missing index.html in wwwroot folder.");
                }
            }
            else
            {
                return StatusCode(500, "Missing wwwroot folder.");
            }

            if (!string.IsNullOrEmpty(indexHtml))
            {
                ViewBag.Html = indexHtml;
            }
            else
            {
                ViewBag.Html = string.Empty;
            }

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
