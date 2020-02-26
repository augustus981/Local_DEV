package com.bosch.dee.onboarding.serviceImpl;

import com.bosch.dee.onboarding.entity.NewcomerAssigment;
import com.bosch.dee.onboarding.repository.NewcomerAssigmentRepository;
import com.bosch.dee.onboarding.service.NewcomerAssigmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class NewcomerAssigmentServiceImpl implements NewcomerAssigmentService {

    @Autowired
    private NewcomerAssigmentRepository newcomerAssigmentRepository;

    @Override
    public List<NewcomerAssigment> findAll() {
        return newcomerAssigmentRepository.findAll();
    }

    @Override
    public List<NewcomerAssigment> findAllByStatus(String status) {
        return newcomerAssigmentRepository.findAllByStatusIs(status);
    }

    @Override
    public List<NewcomerAssigment> findAllByNewcomerIdandStatus(Long userId, String status) {
        return newcomerAssigmentRepository.findAllByNewcomerIdAndStatusIs(userId, status);
    	//return null;
    }

    @Override
    public List<NewcomerAssigment> save(Set<NewcomerAssigment> NewcomerAssigmentSet) {
        return newcomerAssigmentRepository.saveAll(NewcomerAssigmentSet);
    }

    @Override
    public NewcomerAssigment save(NewcomerAssigment NewcomerAssigment) {
        return newcomerAssigmentRepository.save(NewcomerAssigment);
    }

    @Override
    public void delete(NewcomerAssigment NewcomerAssigment) {
    	newcomerAssigmentRepository.delete(NewcomerAssigment);
    }

    @Override
    public void delete(List<NewcomerAssigment> NewcomerAssigments) {
    	newcomerAssigmentRepository.deleteAll(NewcomerAssigments);
    }


}
