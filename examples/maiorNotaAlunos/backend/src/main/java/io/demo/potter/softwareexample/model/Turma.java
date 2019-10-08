package io.demo.potter.softwareexample.model;

import javax.persistence.*;
import java.util.*;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.demo.potter.softwareexample.core.model.Model;
import io.demo.potter.softwareexample.enums.*;

/**
 * Model for table: TURMA.
 *
 * @author Virtus
 */
@Entity(name = "turma")
@SQLDelete(sql = "UPDATE turma SET deleted = true WHERE id = ?")
@Where(clause = Model.WHERE_DELETED_CLAUSE)
public class Turma extends Model<Integer> {

    /**
     * Turma ID.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Integer id;

    
/**
* Aluno.
*/
@Column( name="aluno")
private String aluno;

/**
* Disciplina.
*/
@Column( name="disciplina")
private String disciplina;

/**
* Nota.
*/
@Column( name="nota")
private Double nota;


    /**
     * If it is deleted.
     */
    @Column(name = "deleted")
    private boolean deleted = false;

    public Turma() {}

    /**
* Gets the aluno.
*
* @return aluno.
*/
public String getAluno() {
    return aluno;
}
/**
* Gets the disciplina.
*
* @return disciplina.
*/
public String getDisciplina() {
    return disciplina;
}
/**
* Gets the nota.
*
* @return nota.
*/
public Double getNota() {
    return nota;
}

    
/**
* Sets the aluno.
*
* @param name aluno.
*/
public void setAluno(String aluno) {
    this.aluno = aluno;
}

/**
* Sets the disciplina.
*
* @param name disciplina.
*/
public void setDisciplina(String disciplina) {
    this.disciplina = disciplina;
}

/**
* Sets the nota.
*
* @param name nota.
*/
public void setNota(Double nota) {
    this.nota = nota;
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