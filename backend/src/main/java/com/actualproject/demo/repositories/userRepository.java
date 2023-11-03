package com.actualproject.demo.repositories;

import com.actualproject.demo.models.Data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends CrudRepository<Data,Integer> {
    Data findAllById(Long id);

    void deleteById(Long id);
//    public List<Data> findByNameContainingOrEmailContainingOrPhoneContaining();
}
