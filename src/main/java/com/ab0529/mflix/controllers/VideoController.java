package com.ab0529.mflix.controllers;

import com.ab0529.mflix.repositories.VideoRepository;
import com.ab0529.mflix.database.Video;
import com.ab0529.mflix.util.ApiResponse;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import com.ab0529.mflix.util.Slug;

import java.util.Optional;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("/api/videos")
public class VideoController {
    @Autowired
    private VideoRepository videoRepository;

    @PostMapping("/add")
    public ApiResponse addNewVideo(@RequestBody Video v) {
        String videoID = new Slug().getSlug();
        v.setID(videoID);

        // No value should be empty
        if (v.areValuesNull()) {
            return new ApiResponse(HttpStatus.BAD_REQUEST, "empty value detected", null);
        }

        videoRepository.save(v);

        return new ApiResponse(HttpStatus.CREATED, "video created and saved", v);
    }

    @PostMapping("/update/{id}")
    public ApiResponse updateVideo(@PathVariable String id, @RequestBody Video v) {
        // Try to find video
        Optional<Video> vid = videoRepository.findByID(id);

        System.out.println(id);

        if (vid.isEmpty()) {
            return new ApiResponse(HttpStatus.NOT_FOUND, "video not found", null);
        }

        // Make sure nothing is null
        if (vid.get().areValuesNull()) {
            return new ApiResponse(HttpStatus.BAD_REQUEST, "empty value detected", null);
        }

        // Update video
        vid.get().setDescription(v.getDescription());
        vid.get().setImageURL(v.getImageURL());
        vid.get().setTitle(v.getTitle());

        videoRepository.save(vid.get());

        return new ApiResponse(HttpStatus.OK, "video has been updated", vid.get());
    }

    @Transactional
    @DeleteMapping("/delete/{id}")
    public ApiResponse deleteVideo(@PathVariable String id) {
        Optional<Video> v = videoRepository.deleteByID(id);

        if (v.isEmpty()) {
            return new ApiResponse(HttpStatus.NOT_FOUND, "video not found", null);
        }

        return new ApiResponse(HttpStatus.OK, "video deleted", v);
    }

    @GetMapping("/search/{query}")
    public ApiResponse searchVideo(@PathVariable String query) {
        Iterable<Video> v = videoRepository.findPartialMatch(query);
        int size = (int) StreamSupport.stream(v.spliterator(), false).count();

        if (size <= 0) {
            return new ApiResponse(HttpStatus.NOT_FOUND, "video not found", null);
        }

        return new ApiResponse(HttpStatus.FOUND, "videos found", v);
    }

    @GetMapping("/all")
    public ApiResponse getAllVideos() {
        Iterable<Video> videos = videoRepository.findAll();
        int size = (int) StreamSupport.stream(videos.spliterator(), false).count();

        if (size <= 0 ) {
            return new ApiResponse(HttpStatus.NO_CONTENT, "no videos found", null);
        }

        return new ApiResponse(HttpStatus.FOUND, size + " videos found", videos);
    }
}
