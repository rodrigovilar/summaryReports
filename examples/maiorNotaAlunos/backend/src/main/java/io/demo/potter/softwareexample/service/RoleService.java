package io.demo.potter.softwareexample.service;

import io.demo.potter.softwareexample.core.service.CrudService;
import io.demo.potter.softwareexample.model.Role;
import io.demo.potter.softwareexample.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * CRUD service of the model: Role.
 *
 * @author Virtus
 */
@Service
public class RoleService extends CrudService<Role, Integer> {

    /**
     * Role repository.
     */
    @Autowired
    private RoleRepository repository;

    /**
     * (non-Javadoc)
     *
     * @see CrudService#getRepository()
     */
    @Override
    protected RoleRepository getRepository() {
        return repository;
    }

}