package com.ab0529.mflix;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class MflixApplication {

	public static void main(String[] args) {
		SpringApplication.run(MflixApplication.class, args);
	}

//	@Bean
//	public WebMvcConfigurer corsConfiger() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/api/videos/all").allowedOrigins("http://localhost:8080");
//			}
//		};
//	}
}
