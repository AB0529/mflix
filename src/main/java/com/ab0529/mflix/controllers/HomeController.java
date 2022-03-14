package com.ab0529.mflix.controllers;

import org.springframework.web.bind.annotation.RequestMapping;

public class HomeController {
    @RequestMapping(value = "/")

    public String index() {
        return "index";
    }
}
