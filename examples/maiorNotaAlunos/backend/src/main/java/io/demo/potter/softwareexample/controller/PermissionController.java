package io.demo.potter.softwareexample.controller;

import io.demo.potter.softwareexample.core.api.ApiVersion;
import io.demo.potter.softwareexample.core.api.ApiVersions;
import io.demo.potter.softwareexample.core.controller.CrudBaseController;
import io.demo.potter.softwareexample.dto.PermissionDTO;
import io.demo.potter.softwareexample.model.*;
import io.demo.potter.softwareexample.service.PermissionService;
import io.demo.potter.softwareexample.core.security.authorization.Authorization;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

/**
 * CRUD Controller for the model: Permission.
 *
 * @author Virtus
 */
@RestController
@RequestMapping("permissions")
// @Authorization("permission")
@Api(value="permission", tags="permission-controller")
@ApiVersion(ApiVersions.V1)
public class PermissionController extends CrudBaseController<Permission, Integer, PermissionDTO> {

    /**
     * Permission service.
     */
    @Autowired
    private PermissionService service;

    /**
     * (non-Javadoc)
     *
     * @see CrudBaseController#getService()
     */
    @Override
    protected PermissionService getService() {
        return service;
    }
    
}
