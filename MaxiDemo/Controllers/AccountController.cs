using System.Globalization;
using System.Web.Mvc;
using System.Web.Security;
using MaxiDemo.Data.Applications;
using MaxiDemo.Data.DTO;
using MaxiDemo.Models;

namespace MaxiDemo.Controllers
{
    public class AccountController : Controller
    {

        #region Fields
        private UserApplication _userApplication; 
        #endregion

        #region Properties
        protected UserApplication UserApplication
        {
            get
            {
                return _userApplication ?? (_userApplication = new UserApplication());
            }
        } 
        #endregion

        #region Methods
        public ActionResult Login()
        {
            return View();
        }

        [AllowAnonymous]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(LoginModel model, string returnUrl)
        {
            // Lets first check if the Model is valid or not
            if (ModelState.IsValid)
            {

                AuthenticationResponse authenticationResponse = UserApplication.AuthenticateUser(model.LoginName, model.Password);

                if (authenticationResponse.IsValid)
                {
                    FormsAuthentication.SetAuthCookie(authenticationResponse.IdUser.ToString(CultureInfo.InvariantCulture), false);
                    
                    if (Url.IsLocalUrl(returnUrl) && returnUrl.Length > 1 && returnUrl.StartsWith("/")
                        && !returnUrl.StartsWith("//") && !returnUrl.StartsWith("/\\"))
                    {
                        return Redirect(returnUrl);
                    }
                    return RedirectToAction("Index", "Home");
                }
                ModelState.AddModelError("", "The user name or password provided is incorrect.");
            }

            // If we got this far, something failed, redisplay form
            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult LogOff()
        {
            FormsAuthentication.SignOut();

            return RedirectToAction("Index", "Home");
        } 
        #endregion
    }
}
