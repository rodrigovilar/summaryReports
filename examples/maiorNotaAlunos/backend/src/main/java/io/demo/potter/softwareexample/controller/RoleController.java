package io.demo.potter.softwareexample.controller;

import io.demo.potter.softwareexample.core.api.ApiVersion;
import io.demo.potter.softwareexample.core.api.ApiVersions;
import io.demo.potter.softwareexample.core.controller.CrudBaseController;
import io.demo.potter.softwareexample.dto.RoleDTO;
import io.demo.potter.softwareexample.model.*;
import io.demo.potter.softwareexample.service.RoleService;
import io.demo.potter.softwareexample.core.security.authorization.Authorization;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

/**
 * CRUD Controller for the model: Role.
 *
 * @author Virtus
 */
@RestController
@RequestMapping("roles")
// @Authorization("role")
@Api(value="role", tags="role-controller")
@ApiVersion(ApiVersions.V1)
public class RoleController extends CrudBaseController<Role, Integer, RoleDTO> {

    /**
     * Role service.
     */
    @Autowired
    private RoleService service;

    /**
     * (non-Javadoc)
     *
     * @see CrudBaseController#getService()
     */
    @Override
    protected RoleService getService() {
        return service;
    }
    
}
