create table oauth_client_details (
  client_id VARCHAR(255) PRIMARY KEY,
  resource_ids VARCHAR(255),
  client_secret VARCHAR(255),
  scope VARCHAR(255),
  authorized_grant_types VARCHAR(255),
  web_server_redirect_uri VARCHAR(255),
  authorities VARCHAR(255),
  access_token_validity INTEGER,
  refresh_token_validity INTEGER,
  additional_information VARCHAR(4096),
  autoapprove VARCHAR(255)
);

create table oauth_client_token (
  token_id VARCHAR(255),
  token BLOB,
  authentication_id VARCHAR(255),
  user_name VARCHAR(255),
  client_id VARCHAR(255)
);

create table oauth_access_token (
  token_id VARCHAR(255),
  token BLOB,
  authentication_id VARCHAR(255),
  user_name VARCHAR(255),
  client_id VARCHAR(255),
  authentication BLOB,
  refresh_token VARCHAR(255)
);

create table oauth_refresh_token (
  token_id VARCHAR(255),
  token BLOB,
  authentication BLOB
);

create table oauth_code (
  code VARCHAR(255), authentication BLOB
);

INSERT INTO `eauth`.`client_details` (`client_id`, `access_token_validity`, `additional_information`, `authorities`, `authorized_grant_types`, `autoapprove`, `client_secret`, `web_server_redirect_uri`, `refresh_token_validity`, `scope`) VALUES ('edata', '1800', 'Testing', 'USER', 'authorization_code,refresh_token,client_credentials,password', 'true', '$2a$10$oHrnwvjP7AmExpjSNktdF.G55ZShzWa2ZlwO7HPTmfILBD84LQeU2', 'http://localhost:7001/edata/login', '1800', 'READ');
INSERT INTO `eauth`.`client_details` (`client_id`, `access_token_validity`, `additional_information`, `authorities`, `authorized_grant_types`, `autoapprove`, `client_secret`, `web_server_redirect_uri`, `refresh_token_validity`, `scope`) VALUES ('onboarding', '1800', 'Testing', 'USER', 'authorization_code,refresh_token,client_credentials,password', 'true', '$2a$10$oHrnwvjP7AmExpjSNktdF.G55ZShzWa2ZlwO7HPTmfILBD84LQeU2', 'http://localhost:7002/onboarding/login', '1800', 'READ');


