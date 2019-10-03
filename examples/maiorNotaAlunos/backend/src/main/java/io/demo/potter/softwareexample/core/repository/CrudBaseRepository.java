package io.demo.potter.softwareexample.core.repository;

import java.io.Serializable;

import org.springframework.data.repository.NoRepositoryBean;

import io.demo.potter.softwareexample.core.model.Model;

/**
 * Base Repository for CRUD operations.
 * 
 * @author Virtus
 *
 * @param <M> Model type.
 * @param <T> ID type.
 */
@NoRepositoryBean
public interface CrudBaseRepository<M extends Model<T>, T extends Serializable> extends SearchBaseRepository<M, T> {

}
