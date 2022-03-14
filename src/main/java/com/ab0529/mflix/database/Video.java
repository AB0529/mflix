package com.ab0529.mflix.database;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;
import java.util.stream.Stream;

@Entity
@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
@Table(name = "Videos")
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer OBJ_ID;

    // A slug which is used to identify a video
    private String ID;
    // An image URL which is used as a thumbnail
    private String imageURL;
    private String title;
    private String description;
    // TODO:
    // - Ratings
    // - Comments

    public boolean areValuesNull() {
        if (ID == null) {
            System.out.println("id");
            return true;
        }
        if (imageURL == null) {
            System.out.println("url");
            return true;
        }
        if (title == null) {
            System.out.println("title");
            return true;
        }

        return description == null;
    }

    @Override
    public String toString() {
        return "Video{" +
                "OBJ_ID=" + OBJ_ID +
                ", id='" + ID + '\'' +
                ", imgURL='" + imageURL + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
