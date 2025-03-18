package com.lmu.explorer_ceylon.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseUtil {
    private int code;
    private String message;
    private Object data;
}