package io.demo.potter.softwareexample.model;

import javax.persistence.*;
import java.util.*;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.demo.potter.softwareexample.core.model.Model;
import io.demo.potter.softwareexample.enums.*;

/**
 * Model for table: PERMISSION.
 *
 * @author Virtus
 */
@Entity(name = "permission")
@SQLDelete(sql = "UPDATE permission SET deleted = true WHERE id = ?")
@Where(clause = Model.WHERE_DELETED_CLAUSE)
public class Permission extends Model<Integer> {

    /**
     * Permission ID.
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
     * If it is deleted.
     */
    @Column(name = "deleted")
    private boolean deleted = false;

    public Permission() {}

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