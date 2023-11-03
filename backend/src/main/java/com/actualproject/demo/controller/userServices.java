package com.actualproject.demo.controller;


import com.actualproject.demo.models.Data;
import com.actualproject.demo.repositories.userRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@Transactional

public class userServices {
    @Autowired
    private userRepository ur;


    @Autowired(required = false)
    Data obj;
    @GetMapping("/data")
    public List<Data> getUsers(){
        List<Data> users = new ArrayList<Data>();
        ur.findAll().forEach(user -> users.add(user));
        return users;
    }
    @GetMapping("/data/{id}")
    public Data getUser(@PathVariable("id") Long id){
        this.obj = ur.findAllById(id);
        return  obj;
    }
    @PostMapping(value = "/post",consumes = MediaType.ALL_VALUE)
    public Data postUsers(
            @RequestBody Data obj2
    ){
        this.obj = obj2;
        String name = obj.name;
        String email = obj.email;
        String phone = obj.phone;
        Long id = obj.id;
        return ur.save(new Data(name,email,phone));
    }
    @PutMapping("/update/{id}")
    public String updateUser(@PathVariable("id") Long id, @RequestBody Data obj2){
        this.obj = obj2;
        if(obj != null){
           Data myObj = ur.findAllById(id);

           myObj.name = obj.name;
           myObj.email = obj.email;
           myObj.phone = obj.phone;
            ur.save(myObj);
            return  "Successfully Updated user";
        }
        return  "User doesn't exist";
    }
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable("id") Long id){
        ur.deleteById(id);
        return  "Deleted successfully";
    }
}
