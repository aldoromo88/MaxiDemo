using System;

namespace MaxiDemo.Data.DTO
{
    public class AuthenticationResponse
    {
        public bool IsValid { get; set; }
        public string UserName { get; set; }
        public Guid SessionGuid { get; set; }
        public dynamic Permissions { get; set; }
    }
}