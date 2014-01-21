using System.Web.Http;
using MaxiDemo.Data.Applications;
using MaxiDemo.Data.DTO;
using MaxiDemo.Models;

namespace MaxiDemo.Controllers
{
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

        public AuthenticationResponse PostLogIn(LoginModel user)
        {
            AuthenticationResponse authenticationResponse = UserApplication.AuthenticateUser(user.LoginName, user.Password);
            return authenticationResponse;
        }
    }
}
