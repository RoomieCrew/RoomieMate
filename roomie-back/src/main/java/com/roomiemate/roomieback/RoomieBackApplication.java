package com.roomiemate.roomieback;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude={SecurityAutoConfiguration.class}) // 시큐리티 일단 막음
public class RoomieBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(RoomieBackApplication.class, args);
    }

}
