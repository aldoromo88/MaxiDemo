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

        protected UserApplication UserApplication
        {
            get
            {
                return _userApplication ?? (_userApplication = new UserApplication());
            }
        }
        
        public dynamic GetMenu()
        {
            var permissions= UserApplication.GetPermissions(Convert.ToInt32(User.Identity.Name));
            return permissions;
        }
    }
}
