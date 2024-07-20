package com.example.tmm022fmb.interfaces;

import com.example.tmm022fmb.models.PartModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartRepository extends JpaRepository<PartModel, Long> {
    @Override
    <S extends PartModel> S save(S entity);
}
