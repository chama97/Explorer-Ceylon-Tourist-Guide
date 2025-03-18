package com.lmu.explorer_ceylon.service;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.lmu.explorer_ceylon.dto.request.LoginReqDTO;
import com.lmu.explorer_ceylon.util.ResponseUtil;

public interface UserService extends UserDetailsService {
    public ResponseUtil authenticationLogin(LoginReqDTO loginReqDTO);
 
}