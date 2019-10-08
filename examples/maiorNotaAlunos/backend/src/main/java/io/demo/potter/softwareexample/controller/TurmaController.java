package io.demo.potter.softwareexample.controller;

import io.demo.potter.softwareexample.core.api.ApiVersion;
import io.demo.potter.softwareexample.core.api.ApiVersions;
import io.demo.potter.softwareexample.core.controller.CrudBaseController;
import io.demo.potter.softwareexample.dto.TurmaDTO;
import io.demo.potter.softwareexample.model.*;
import io.demo.potter.softwareexample.service.TurmaService;
import io.demo.potter.softwareexample.core.security.authorization.Authorization;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

/**
 * CRUD Controller for the model: Turma.
 *
 * @author Virtus
 */
@RestController
@RequestMapping("turmas")
// @Authorization("turma")
@Api(value="turma", tags="turma-controller")
@ApiVersion(ApiVersions.V1)
public class TurmaController extends CrudBaseController<Turma, Integer, TurmaDTO> {

    /**
     * Turma service.
     */
    @Autowired
    private TurmaService service;

    /**
     * (non-Javadoc)
     *
     * @see CrudBaseController#getService()
     */
    @Override
    protected TurmaService getService() {
        return service;
    }
    
}
