package com.bosch.dee.eauth.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * An authority (a security role) used by Spring Security.
 */
@Entity
@Table(name = "authority")

public class AuthorityEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
	@SequenceGenerator(name = "sequenceGenerator")
	private Long id;

	@NotNull
	@Size(max = 50)
	@Column(length = 50)
	private String name;

	@Column(name = "DESCRIPTION")
	private String description;

	@ManyToMany(mappedBy = "authorities")
	private Set<User> userEntity;
	
	public Set<User> getUserEntity() {
		return userEntity;
	}

	public void setUserEntity(Set<User> userEntity) {
		this.userEntity = userEntity;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public AuthorityEntity(String name) {
		this.name = name;
	}

	public AuthorityEntity() {

	}

	@Override
	public boolean equals(Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}

		AuthorityEntity authority = (AuthorityEntity) o;

		return !(name != null ? !name.equals(authority.name) : authority.name != null);
	}

	@Override
	public int hashCode() {
		return name != null ? name.hashCode() : 0;
	}

	@Override
	public String toString() {
		return "Authority{" + "name='" + name + '\'' + "}";
	}
}

