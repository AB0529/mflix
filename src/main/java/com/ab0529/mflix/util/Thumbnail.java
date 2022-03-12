package com.ab0529.mflix.util;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.Buffer;

@Getter
public class Thumbnail {
    /*
    * Represents a thumbnail object which is used on a video
    */

    public static URL URL;
    public static BufferedImage image;

    Thumbnail(String link) throws MalformedURLException {
        URL = new URL(link);
        try {
            image = ImageIO.read(URL);
        } catch (IOException e) {
            image = null;
        }
    }


}
