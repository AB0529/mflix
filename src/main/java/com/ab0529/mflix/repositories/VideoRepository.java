package com.ab0529.mflix.repositories;

import com.ab0529.mflix.database.Video;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface VideoRepository extends CrudRepository<Video, Integer> {
    @Query(value = "SELECT * FROM Videos ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Video getRandomVideo();
    Optional<Video> deleteByID(String id);
    Optional<Video> findByTitle(@Param("title") String title);
    Optional<Video> findByID(String id);
    @Query(value = "SELECT * FROM videos WHERE title OR description LIKE CONCAT('%', :inp, '%') OR ID LIKE CONCAT('%', :inp, '%')", nativeQuery = true)
    Iterable<Video> findPartialMatch(@Param("inp") String input);
}
