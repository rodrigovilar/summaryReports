package io.demo.potter.softwareexample.dto;

import java.util.*;

import io.demo.potter.softwareexample.model.*;

import io.demo.potter.softwareexample.core.dto.ModelDTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * DTO for Model: User.
 *
 * @author Virtus
 */
public class UserDTO extends ModelDTO {

	/**
	 * User ID.
	 */
	private Integer id;

	
/**
* Name.
*/
private String name;

/**
* Username.
*/
private String username;

/**
* Role.
*/
private RoleDTO role;


    /**
     * New Password.
     */
    private String newPassword;
    
    /**
     * Current Password.
     */
    private String currentPassword;
	
	/**
* Gets the name.
*
* @return name.
*/
public String getName() {
    return name;
}
/**
* Gets the username.
*
* @return username.
*/
public String getUsername() {
    return username;
}
/**
* Gets the role.
*
* @return role.
*/
public RoleDTO getRole() {
    return role;
}

    
/**
* Sets the name.
*
* @param name name.
*/
public void setName(String name) {
    this.name = name;
}

/**
* Sets the username.
*
* @param name username.
*/
public void setUsername(String username) {
    this.username = username;
}

/**
* Sets the role.
*
* @param name role.
*/
public void setRole(RoleDTO role) {
    this.role = role;
}


    /**
     * Gets the ID.
     * 
     * @return ID.
     */
	public Integer getId() {
		return id;
	}

	/**
	 * Sets the ID.
	 * 
	 * @param id
	 * 		ID.
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * Gets the new password.
	 * 
	 * @return New password.
	 */
	public String getNewPassword() {
		return newPassword;
	}

	/**
	 * Sets the new password.
	 * 
	 * @param newPassword
	 * 		New password.
	 */
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	
	/**
	 * Gets the current password.
	 * 
	 * @return Current password.
	 */
	public String getCurrentPassword() {
		return currentPassword;
	}

	/**
	 * Sets the current password.
	 * 
	 * @param currentPassword
	 * 		Current password.
	 */
	public void setCurrentPassword(String currentPassword) {
		this.currentPassword = currentPassword;
	}

}
