using System.ComponentModel.DataAnnotations;

namespace MaxiDemo.Models
{
    public class LoginModel
    {
        [Required]
        [Display(Name = "User name")]
        public string LoginName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
    }
}