﻿using System;
using System.Collections.Generic;
using System.Linq;
using MaxiDemo.Data.DTO;

namespace MaxiDemo.Data.Applications
{
    public class UserApplication
    {

        public AuthenticationResponse AuthenticateUser(string loginName, string password)
        {
            var menuOptions = new List<UserPermission>
                {
                    new UserPermission{ DisplayName = "Rep Cobranza 1", ParentName = "Cobranza", Name = "RepCobranza1"},
                    new UserPermission{ DisplayName = "Rep Cobranza 2", ParentName = "Cobranza", Name = "RepCobranza2"},
                    new UserPermission{ DisplayName = "Rep Cobranza 3", ParentName = "Cobranza", Name = "RepCobranza3"},

                    new UserPermission{ DisplayName = "Rep Ventas 1", ParentName = "Ventas", Name = "RepVentas1"},
                    new UserPermission{ DisplayName = "Rep Ventas 2", ParentName = "Ventas", Name = "RepVentas2"},
                    new UserPermission{ DisplayName = "Rep Ventas 3", ParentName = "Ventas", Name = "RepVentas3"},

                    new UserPermission{ DisplayName = "Rep Finanzas 1", ParentName = "Finanzas", Name = "RepFinanzas1"},
                    new UserPermission{ DisplayName = "Rep Finanzas 2", ParentName = "Finanzas", Name = "RepFinanzas2"},
                    new UserPermission{ DisplayName = "Rep Finanzas 3", ParentName = "Finanzas", Name = "RepFinanzas3"},

                };


            return new AuthenticationResponse
            {
                IsValid = true,
                UserName = "User Demo",
                SessionGuid = Guid.NewGuid(),
                Permissions = menuOptions
                                .GroupBy(permission => permission.ParentName)
                                .Select(grouping => new
                                {
                                    Description = grouping.Key,
                                    Items = grouping.Select(c => new
                                    {
                                        Description = c.DisplayName,
                                        c.Name,
                                        c.IsSingleInstance
                                    })
                                })
            };
        }
    }
}
