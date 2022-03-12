package com.ab0529.mflix.util;


import lombok.Getter;
import lombok.Setter;

import java.text.Normalizer;
import java.util.Locale;
import java.util.regex.Pattern;


public class Slug {
    /*
    * A unique identifier
    */

    private static final Pattern NONLATIN = Pattern.compile("[^\\w-]");
    private static final Pattern WHITESPACE = Pattern.compile("[\\s]");
    private static final Pattern EDGESDHASHES = Pattern.compile("(^-|-$)");
    private static final String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            + "0123456789-"
            + "abcdefghijklmnopqrstuvxyz";

    public static String slug;

    public Slug(String input) {
        slug = toSlug(input);
    }

    public Slug() {
        String id = randomID(5);
        slug = toSlug(id);
    }

    // toSlug slugifies the provided string
    public static String toSlug(String input) {
        String nowhitespace = WHITESPACE.matcher(input).replaceAll("-");
        String normalized = Normalizer.normalize(nowhitespace, Normalizer.Form.NFD);
        String slug = NONLATIN.matcher(normalized).replaceAll("");
        slug = EDGESDHASHES.matcher(slug).replaceAll("");
        return slug.toLowerCase(Locale.ENGLISH);
    }

    // randomID generates a random ID of n length
    public static String randomID(int n) {
        StringBuilder sb = new StringBuilder(n);

        for (int i = 0; i < n; i++) {
            int index = (int)(AlphaNumericString.length() * Math.random());
            sb.append(AlphaNumericString.charAt(index));
        }

        return sb.toString();
    }

    public String getSlug() {
        return slug;
    }

}
