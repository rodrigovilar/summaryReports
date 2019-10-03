package io.demo.potter.softwareexample.service;

import io.demo.potter.softwareexample.core.service.CrudService;
import io.demo.potter.softwareexample.model.Turma;
import io.demo.potter.softwareexample.repository.TurmaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * CRUD service of the model: Turma.
 *
 * @author Virtus
 */
@Service
public class TurmaService extends CrudService<Turma, Integer> {

    /**
     * Turma repository.
     */
    @Autowired
    private TurmaRepository repository;

    /**
     * (non-Javadoc)
     *
     * @see CrudService#getRepository()
     */
    @Override
    protected TurmaRepository getRepository() {
        return repository;
    }

}