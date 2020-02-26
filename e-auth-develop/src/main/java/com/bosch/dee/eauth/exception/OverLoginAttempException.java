package com.bosch.dee.eauth.exception;

import org.springframework.security.core.AuthenticationException;

/**
 * This exception is thrown in case of a not activated user trying to authenticate.
 */
public class OverLoginAttempException extends AuthenticationException {

    private static final long serialVersionUID = 1L;

    public OverLoginAttempException(String message) {
        super(message);
    }

    public OverLoginAttempException(String message, Throwable t) {
        super(message, t);
    }
}
