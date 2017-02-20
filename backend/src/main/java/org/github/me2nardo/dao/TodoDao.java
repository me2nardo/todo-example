package org.github.me2nardo.dao;

import org.github.me2nardo.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by leo on 15.02.17.
 */
public interface TodoDao extends JpaRepository<Todo,Long> {
}
