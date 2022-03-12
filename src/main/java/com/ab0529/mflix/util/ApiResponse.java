package com.ab0529.mflix.util;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Getter
public class ApiResponse {
    private HttpStatus status;
    private String message;
    private Object result;

    public ApiResponse(HttpStatus status, String message, Object result) {
        this.status = status;
        this.message = message;
        this.result = result;
    }
}
