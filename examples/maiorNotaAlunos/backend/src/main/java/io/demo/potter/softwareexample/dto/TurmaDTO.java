package io.demo.potter.softwareexample.dto;

import java.util.*;

import io.demo.potter.softwareexample.model.*;

import io.demo.potter.softwareexample.core.dto.ModelDTO;
import io.demo.potter.softwareexample.enums.*;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * DTO for Model: Turma.
 *
 * @author Virtus
 */
public class TurmaDTO extends ModelDTO {

    private Integer id;
    
    
/**
* Aluno.
*/
private String aluno;

/**
* Disciplina.
*/
private String disciplina;

/**
* Nota.
*/
private String nota;


    public TurmaDTO() {}

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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
public String getNota() {
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
public void setNota(String nota) {
    this.nota = nota;
}


}
