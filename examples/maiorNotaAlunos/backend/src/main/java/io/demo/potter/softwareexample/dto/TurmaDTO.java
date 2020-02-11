package io.demo.potter.softwareexample.dto;

import io.demo.potter.softwareexample.core.dto.ModelDTO;

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

	private Integer anoConclusao;

	public TurmaDTO() {
	}

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

	public Integer getAnoConclusao() {
		return anoConclusao;
	}

	public void setAnoConclusao(Integer anoConclusao) {
		this.anoConclusao = anoConclusao;
	}

}
