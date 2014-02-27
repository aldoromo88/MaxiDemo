using System;
using System.Web.Http;
using MaxiDemo.Data.Applications;
using MaxiDemo.Filters;

namespace MaxiDemo.Controllers
{
    [Authorize]
    [ValidateHttpAntiForgeryToken]
    public class UserController : ApiController
    {
        private UserApplication _userApplication;

        public UserController(UserApplication userApplication)
        {
            _userApplication = userApplication;
        }

        public dynamic GetMenu()
        {
            var permissions= _userApplication.GetPermissions(Convert.ToInt32(User.Identity.Name));
            return permissions;
        }
    }
}
