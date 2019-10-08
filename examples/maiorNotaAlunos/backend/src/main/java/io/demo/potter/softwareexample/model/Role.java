package io.demo.potter.softwareexample.model;

import javax.persistence.*;
import java.util.*;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.demo.potter.softwareexample.core.model.Model;
import io.demo.potter.softwareexample.enums.*;

/**
 * Model for table: ROLE.
 *
 * @author Virtus
 */
@Entity(name = "role")
@SQLDelete(sql = "UPDATE role SET deleted = true WHERE id = ?")
@Where(clause = Model.WHERE_DELETED_CLAUSE)
public class Role extends Model<Integer> {

    /**
     * Role ID.
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
* Description.
*/
@Column( name="description")
private String description;

/**
* Permissions.
*/
@ManyToMany(fetch = FetchType.EAGER)
@JoinTable(name = "role_permission",
               joinColumns = @JoinColumn(name = "idrole"),
               inverseJoinColumns = @JoinColumn(name = "idpermission"))
private Set<Permission> permissions;


    /**
     * If it is deleted.
     */
    @Column(name = "deleted")
    private boolean deleted = false;

    public Role() {}

    /**
* Gets the name.
*
* @return name.
*/
public String getName() {
    return name;
}
/**
* Gets the description.
*
* @return description.
*/
public String getDescription() {
    return description;
}
/**
* Gets the permissions.
*
* @return permissions.
*/
public Set<Permission> getPermissions() {
    return permissions;
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
* Sets the description.
*
* @param name description.
*/
public void setDescription(String description) {
    this.description = description;
}

/**
* Sets the permissions.
*
* @param name permissions.
*/
public void setPermissions(Set<Permission> permissions) {
    this.permissions = permissions;
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