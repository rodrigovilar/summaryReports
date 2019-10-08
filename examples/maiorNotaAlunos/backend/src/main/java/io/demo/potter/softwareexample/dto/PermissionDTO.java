package io.demo.potter.softwareexample.dto;

import java.util.*;

import io.demo.potter.softwareexample.model.*;

import io.demo.potter.softwareexample.core.dto.ModelDTO;
import io.demo.potter.softwareexample.enums.*;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * DTO for Model: Permission.
 *
 * @author Virtus
 */
public class PermissionDTO extends ModelDTO {

    private Integer id;
    
    
/**
* Name.
*/
private String name;

/**
* Description.
*/
private String description;


    public PermissionDTO() {}

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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


}
