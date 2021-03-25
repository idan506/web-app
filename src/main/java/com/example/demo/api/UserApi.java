package com.example.demo.api;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("user-service")
public interface UserApi {

    @GetMapping("/{id}")
    public String getUser(@PathVariable String id);
}

