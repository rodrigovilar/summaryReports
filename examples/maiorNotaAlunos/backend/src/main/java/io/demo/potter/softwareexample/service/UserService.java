package io.demo.potter.softwareexample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.demo.potter.softwareexample.core.exception.BusinessException;
import io.demo.potter.softwareexample.core.service.CrudService;
import io.demo.potter.softwareexample.core.util.CryptoUtil;
import io.demo.potter.softwareexample.model.User;
import io.demo.potter.softwareexample.repository.UserRepository;

/**
 * Crud Service for model: User.
 *
 * @author Virtus
 */
@Service
public class UserService extends CrudService<User, Integer> {

    /**
     * User repository.
     */
    @Autowired
    private UserRepository repository;

    /**
     * (non-Javadoc)
     *
     * @see io.demo.potter.softwareexample.core.service.CrudService#getRepository()
     */
    @Override
    protected UserRepository getRepository() {
        return repository;
    }

    /**
     * (non-Javadoc)
     *
     * @see io.demo.potter.softwareexample.core.service.CrudService#insert(io.demo.potter.softwareexample.core.model.Model)
     */
    @Override
    public User insert(User model) throws BusinessException {
        model.setPassword(CryptoUtil.hash(model.getPassword()));

        return super.insert(model);
    }
    
    /**
     * (non-Javadoc)
     * @see io.demo.potter.softwareexample.core.service.CrudService#validateInsert(io.demo.potter.softwareexample.core.model.Model)
     */
    @Override
    protected void validateInsert(User model) throws BusinessException {
    	/* If Username already exists */
    	if(getRepository().existsByUsername(model.getUsername())) {
    		throw new BusinessException("user.username.exists");
    	}
    }

    /**
     * (non-Javadoc)
     * @see io.demo.potter.softwareexample.core.service.CrudService#validateUpdate(io.demo.potter.softwareexample.core.model.Model)
     */
    @Override
    protected void validateUpdate(User model) throws BusinessException {
    	/* If username already exists and it is NOT me */
    	if(getRepository().existsByUsernameAndIdNot(model.getUsername(), model.getId())) {
    		throw new BusinessException("user.username.exists");
    	}
    }

    /**
     * Login the User.
     *
     * @param username Username.
     * @param password Password.
     * @return User.
     */
    public User login(String username, String password) {
        return getRepository().login(username, CryptoUtil.hash(password));
    }

    /**
     * Find the User by username.
     *
     * @param username Username.
     * @return User.
     */
    public User findByUsername(String username) {
        return getRepository().findByUsername(username);
    }
    
    /**
     * Updates the password of the current User.
     * 
     * @param currentUsername
     * 		Current username.
     * @param newUsername
     * 		New username.
     * @throws BusinessException
     */
    @Transactional
    public void updateCurrentPassword(String currentPassword, String newPassword) throws BusinessException {
    	this.updatePassword(getCurrentUserId(), currentPassword, newPassword);
    }
    
    /**
     * Updates the password of the specified User.
     * 
     * @param id
     * 		User ID.
     * @param currentPassword
     * 		Current password.
     * @param newPassword
     * 		New password.
     * @throws BusinessException
     */
    @Transactional
    public void updatePassword(Integer id, String currentPassword, String newPassword) throws BusinessException {
    	if(getRepository().isPasswordCorrect(id, CryptoUtil.hash(currentPassword)) == null) {
    		throw new BusinessException("user.password.wrong");
    	}
    	
    	getRepository().updatePassword(id, CryptoUtil.hash(newPassword));
    }
}
