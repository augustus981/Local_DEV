package com.bosch.dee.eauth.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bosch.dee.eauth.entity.Client;

@Repository
public interface ClientDetailsRepository extends CrudRepository<Client, String> {

}
