package io.demo.potter.softwareexample.model;

import javax.persistence.*;
import java.util.*;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.demo.potter.softwareexample.core.model.Model;
import io.demo.potter.softwareexample.enums.*;

/**
 * Model for table: USER.
 *
 * @author Virtus
 */
@Entity(name = "user_account")
@SQLDelete(sql = "UPDATE user_account SET deleted = true WHERE id = ?")
@Where(clause = Model.WHERE_DELETED_CLAUSE)
public class User extends Model<Integer> {

    /**
     * User ID.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    
/**
* Name.
*/
@Column( name="name")
private String name;

/**
* Username.
*/
@Column( name="username")
private String username;

/**
* Password.
*/
@Column( name="password")
private String password;

/**
* Role.
*/
@ManyToOne
private Role role;


    /**
     * If it is deleted.
     */
    @Column(name = "deleted")
    private boolean deleted = false;

    public User() {}

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
* Gets the password.
*
* @return password.
*/
public String getPassword() {
    return password;
}
/**
* Gets the role.
*
* @return role.
*/
public Role getRole() {
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
* Sets the password.
*
* @param name password.
*/
public void setPassword(String password) {
    this.password = password;
}

/**
* Sets the role.
*
* @param name role.
*/
public void setRole(Role role) {
    this.role = role;
}


    /**
     * Gets if it is deleted.
     * 
     * @return If it is deleted.
     */
    public boolean isDeleted() {
		return deleted;
	}

    /**
     * Sets if it is deleted.
     * 
     * @param deleted
     * 		If it is deleted.
     */
	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

     /**
     * (non-Javadoc)
     *
     * @see Model#getId()
     */
    @Override
    public Integer getId() {
        return this.id;
    }

    /**
     * (non-Javadoc)
     *
     * @see Model#setId(java.io.Serializable)
     */
    @Override
    public void setId(Integer id) {
        this.id = id;
    }
}