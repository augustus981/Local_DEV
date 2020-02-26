package com.bosch.dee.onboarding.service;

import com.bosch.dee.onboarding.entity.NewcomerAssigment;

import java.util.List;
import java.util.Set;

public interface NewcomerAssigmentService {

    List<NewcomerAssigment> findAll();

    List<NewcomerAssigment> findAllByStatus(String status);

    List<NewcomerAssigment> findAllByNewcomerIdandStatus(Long userId, String status);

    List<NewcomerAssigment> save(Set<NewcomerAssigment> checklistResultSet);

    NewcomerAssigment save(NewcomerAssigment checklistResult);

    void delete(NewcomerAssigment checklistResult);

    void delete(List<NewcomerAssigment> checklistResults);
}
