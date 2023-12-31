PGDMP     1             	        {            keycloak    15.3    15.3 �   u           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            v           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            w           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            x           1262    57348    keycloak    DATABASE     {   CREATE DATABASE keycloak WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'French_France.1252';
    DROP DATABASE keycloak;
                postgres    false            �            1259    57349    admin_event_entity    TABLE     �  CREATE TABLE public.admin_event_entity (
    id character varying(36) NOT NULL,
    admin_event_time bigint,
    realm_id character varying(255),
    operation_type character varying(255),
    auth_realm_id character varying(255),
    auth_client_id character varying(255),
    auth_user_id character varying(255),
    ip_address character varying(255),
    resource_path character varying(2550),
    representation text,
    error character varying(255),
    resource_type character varying(64)
);
 &   DROP TABLE public.admin_event_entity;
       public         heap    postgres    false            �            1259    57354    associated_policy    TABLE     �   CREATE TABLE public.associated_policy (
    policy_id character varying(36) NOT NULL,
    associated_policy_id character varying(36) NOT NULL
);
 %   DROP TABLE public.associated_policy;
       public         heap    postgres    false            �            1259    57357    authentication_execution    TABLE     �  CREATE TABLE public.authentication_execution (
    id character varying(36) NOT NULL,
    alias character varying(255),
    authenticator character varying(36),
    realm_id character varying(36),
    flow_id character varying(36),
    requirement integer,
    priority integer,
    authenticator_flow boolean DEFAULT false NOT NULL,
    auth_flow_id character varying(36),
    auth_config character varying(36)
);
 ,   DROP TABLE public.authentication_execution;
       public         heap    postgres    false            �            1259    57361    authentication_flow    TABLE     t  CREATE TABLE public.authentication_flow (
    id character varying(36) NOT NULL,
    alias character varying(255),
    description character varying(255),
    realm_id character varying(36),
    provider_id character varying(36) DEFAULT 'basic-flow'::character varying NOT NULL,
    top_level boolean DEFAULT false NOT NULL,
    built_in boolean DEFAULT false NOT NULL
);
 '   DROP TABLE public.authentication_flow;
       public         heap    postgres    false            �            1259    57369    authenticator_config    TABLE     �   CREATE TABLE public.authenticator_config (
    id character varying(36) NOT NULL,
    alias character varying(255),
    realm_id character varying(36)
);
 (   DROP TABLE public.authenticator_config;
       public         heap    postgres    false            �            1259    57372    authenticator_config_entry    TABLE     �   CREATE TABLE public.authenticator_config_entry (
    authenticator_id character varying(36) NOT NULL,
    value text,
    name character varying(255) NOT NULL
);
 .   DROP TABLE public.authenticator_config_entry;
       public         heap    postgres    false            �            1259    57377    broker_link    TABLE     L  CREATE TABLE public.broker_link (
    identity_provider character varying(255) NOT NULL,
    storage_provider_id character varying(255),
    realm_id character varying(36) NOT NULL,
    broker_user_id character varying(255),
    broker_username character varying(255),
    token text,
    user_id character varying(255) NOT NULL
);
    DROP TABLE public.broker_link;
       public         heap    postgres    false            �            1259    57382    client    TABLE     �  CREATE TABLE public.client (
    id character varying(36) NOT NULL,
    enabled boolean DEFAULT false NOT NULL,
    full_scope_allowed boolean DEFAULT false NOT NULL,
    client_id character varying(255),
    not_before integer,
    public_client boolean DEFAULT false NOT NULL,
    secret character varying(255),
    base_url character varying(255),
    bearer_only boolean DEFAULT false NOT NULL,
    management_url character varying(255),
    surrogate_auth_required boolean DEFAULT false NOT NULL,
    realm_id character varying(36),
    protocol character varying(255),
    node_rereg_timeout integer DEFAULT 0,
    frontchannel_logout boolean DEFAULT false NOT NULL,
    consent_required boolean DEFAULT false NOT NULL,
    name character varying(255),
    service_accounts_enabled boolean DEFAULT false NOT NULL,
    client_authenticator_type character varying(255),
    root_url character varying(255),
    description character varying(255),
    registration_token character varying(255),
    standard_flow_enabled boolean DEFAULT true NOT NULL,
    implicit_flow_enabled boolean DEFAULT false NOT NULL,
    direct_access_grants_enabled boolean DEFAULT false NOT NULL,
    always_display_in_console boolean DEFAULT false NOT NULL
);
    DROP TABLE public.client;
       public         heap    postgres    false            �            1259    57400    client_attributes    TABLE     �   CREATE TABLE public.client_attributes (
    client_id character varying(36) NOT NULL,
    value character varying(4000),
    name character varying(255) NOT NULL
);
 %   DROP TABLE public.client_attributes;
       public         heap    postgres    false            �            1259    57405    client_auth_flow_bindings    TABLE     �   CREATE TABLE public.client_auth_flow_bindings (
    client_id character varying(36) NOT NULL,
    flow_id character varying(36),
    binding_name character varying(255) NOT NULL
);
 -   DROP TABLE public.client_auth_flow_bindings;
       public         heap    postgres    false            �            1259    57408    client_initial_access    TABLE     �   CREATE TABLE public.client_initial_access (
    id character varying(36) NOT NULL,
    realm_id character varying(36) NOT NULL,
    "timestamp" integer,
    expiration integer,
    count integer,
    remaining_count integer
);
 )   DROP TABLE public.client_initial_access;
       public         heap    postgres    false            �            1259    57411    client_node_registrations    TABLE     �   CREATE TABLE public.client_node_registrations (
    client_id character varying(36) NOT NULL,
    value integer,
    name character varying(255) NOT NULL
);
 -   DROP TABLE public.client_node_registrations;
       public         heap    postgres    false            �            1259    57414    client_scope    TABLE     �   CREATE TABLE public.client_scope (
    id character varying(36) NOT NULL,
    name character varying(255),
    realm_id character varying(36),
    description character varying(255),
    protocol character varying(255)
);
     DROP TABLE public.client_scope;
       public         heap    postgres    false            �            1259    57419    client_scope_attributes    TABLE     �   CREATE TABLE public.client_scope_attributes (
    scope_id character varying(36) NOT NULL,
    value character varying(2048),
    name character varying(255) NOT NULL
);
 +   DROP TABLE public.client_scope_attributes;
       public         heap    postgres    false            �            1259    57424    client_scope_client    TABLE     �   CREATE TABLE public.client_scope_client (
    client_id character varying(255) NOT NULL,
    scope_id character varying(255) NOT NULL,
    default_scope boolean DEFAULT false NOT NULL
);
 '   DROP TABLE public.client_scope_client;
       public         heap    postgres    false            �            1259    57430    client_scope_role_mapping    TABLE     �   CREATE TABLE public.client_scope_role_mapping (
    scope_id character varying(36) NOT NULL,
    role_id character varying(36) NOT NULL
);
 -   DROP TABLE public.client_scope_role_mapping;
       public         heap    postgres    false            �            1259    57433    client_session    TABLE     �  CREATE TABLE public.client_session (
    id character varying(36) NOT NULL,
    client_id character varying(36),
    redirect_uri character varying(255),
    state character varying(255),
    "timestamp" integer,
    session_id character varying(36),
    auth_method character varying(255),
    realm_id character varying(255),
    auth_user_id character varying(36),
    current_action character varying(36)
);
 "   DROP TABLE public.client_session;
       public         heap    postgres    false            �            1259    57438    client_session_auth_status    TABLE     �   CREATE TABLE public.client_session_auth_status (
    authenticator character varying(36) NOT NULL,
    status integer,
    client_session character varying(36) NOT NULL
);
 .   DROP TABLE public.client_session_auth_status;
       public         heap    postgres    false            �            1259    57441    client_session_note    TABLE     �   CREATE TABLE public.client_session_note (
    name character varying(255) NOT NULL,
    value character varying(255),
    client_session character varying(36) NOT NULL
);
 '   DROP TABLE public.client_session_note;
       public         heap    postgres    false            �            1259    57446    client_session_prot_mapper    TABLE     �   CREATE TABLE public.client_session_prot_mapper (
    protocol_mapper_id character varying(36) NOT NULL,
    client_session character varying(36) NOT NULL
);
 .   DROP TABLE public.client_session_prot_mapper;
       public         heap    postgres    false            �            1259    57449    client_session_role    TABLE     �   CREATE TABLE public.client_session_role (
    role_id character varying(255) NOT NULL,
    client_session character varying(36) NOT NULL
);
 '   DROP TABLE public.client_session_role;
       public         heap    postgres    false            �            1259    57452    client_user_session_note    TABLE     �   CREATE TABLE public.client_user_session_note (
    name character varying(255) NOT NULL,
    value character varying(2048),
    client_session character varying(36) NOT NULL
);
 ,   DROP TABLE public.client_user_session_note;
       public         heap    postgres    false            �            1259    57457 	   component    TABLE     )  CREATE TABLE public.component (
    id character varying(36) NOT NULL,
    name character varying(255),
    parent_id character varying(36),
    provider_id character varying(36),
    provider_type character varying(255),
    realm_id character varying(36),
    sub_type character varying(255)
);
    DROP TABLE public.component;
       public         heap    postgres    false            �            1259    57462    component_config    TABLE     �   CREATE TABLE public.component_config (
    id character varying(36) NOT NULL,
    component_id character varying(36) NOT NULL,
    name character varying(255) NOT NULL,
    value character varying(4000)
);
 $   DROP TABLE public.component_config;
       public         heap    postgres    false            �            1259    57467    composite_role    TABLE     �   CREATE TABLE public.composite_role (
    composite character varying(36) NOT NULL,
    child_role character varying(36) NOT NULL
);
 "   DROP TABLE public.composite_role;
       public         heap    postgres    false            �            1259    57470 
   credential    TABLE     $  CREATE TABLE public.credential (
    id character varying(36) NOT NULL,
    salt bytea,
    type character varying(255),
    user_id character varying(36),
    created_date bigint,
    user_label character varying(255),
    secret_data text,
    credential_data text,
    priority integer
);
    DROP TABLE public.credential;
       public         heap    postgres    false            �            1259    57475    databasechangelog    TABLE     Y  CREATE TABLE public.databasechangelog (
    id character varying(255) NOT NULL,
    author character varying(255) NOT NULL,
    filename character varying(255) NOT NULL,
    dateexecuted timestamp without time zone NOT NULL,
    orderexecuted integer NOT NULL,
    exectype character varying(10) NOT NULL,
    md5sum character varying(35),
    description character varying(255),
    comments character varying(255),
    tag character varying(255),
    liquibase character varying(20),
    contexts character varying(255),
    labels character varying(255),
    deployment_id character varying(10)
);
 %   DROP TABLE public.databasechangelog;
       public         heap    postgres    false            �            1259    57480    databasechangeloglock    TABLE     �   CREATE TABLE public.databasechangeloglock (
    id integer NOT NULL,
    locked boolean NOT NULL,
    lockgranted timestamp without time zone,
    lockedby character varying(255)
);
 )   DROP TABLE public.databasechangeloglock;
       public         heap    postgres    false            �            1259    57483    default_client_scope    TABLE     �   CREATE TABLE public.default_client_scope (
    realm_id character varying(36) NOT NULL,
    scope_id character varying(36) NOT NULL,
    default_scope boolean DEFAULT false NOT NULL
);
 (   DROP TABLE public.default_client_scope;
       public         heap    postgres    false            �            1259    57487    event_entity    TABLE     �  CREATE TABLE public.event_entity (
    id character varying(36) NOT NULL,
    client_id character varying(255),
    details_json character varying(2550),
    error character varying(255),
    ip_address character varying(255),
    realm_id character varying(255),
    session_id character varying(255),
    event_time bigint,
    type character varying(255),
    user_id character varying(255)
);
     DROP TABLE public.event_entity;
       public         heap    postgres    false            �            1259    57492    fed_user_attribute    TABLE     (  CREATE TABLE public.fed_user_attribute (
    id character varying(36) NOT NULL,
    name character varying(255) NOT NULL,
    user_id character varying(255) NOT NULL,
    realm_id character varying(36) NOT NULL,
    storage_provider_id character varying(36),
    value character varying(2024)
);
 &   DROP TABLE public.fed_user_attribute;
       public         heap    postgres    false            �            1259    57497    fed_user_consent    TABLE     �  CREATE TABLE public.fed_user_consent (
    id character varying(36) NOT NULL,
    client_id character varying(255),
    user_id character varying(255) NOT NULL,
    realm_id character varying(36) NOT NULL,
    storage_provider_id character varying(36),
    created_date bigint,
    last_updated_date bigint,
    client_storage_provider character varying(36),
    external_client_id character varying(255)
);
 $   DROP TABLE public.fed_user_consent;
       public         heap    postgres    false            �            1259    57502    fed_user_consent_cl_scope    TABLE     �   CREATE TABLE public.fed_user_consent_cl_scope (
    user_consent_id character varying(36) NOT NULL,
    scope_id character varying(36) NOT NULL
);
 -   DROP TABLE public.fed_user_consent_cl_scope;
       public         heap    postgres    false            �            1259    57505    fed_user_credential    TABLE     �  CREATE TABLE public.fed_user_credential (
    id character varying(36) NOT NULL,
    salt bytea,
    type character varying(255),
    created_date bigint,
    user_id character varying(255) NOT NULL,
    realm_id character varying(36) NOT NULL,
    storage_provider_id character varying(36),
    user_label character varying(255),
    secret_data text,
    credential_data text,
    priority integer
);
 '   DROP TABLE public.fed_user_credential;
       public         heap    postgres    false            �            1259    57510    fed_user_group_membership    TABLE     �   CREATE TABLE public.fed_user_group_membership (
    group_id character varying(36) NOT NULL,
    user_id character varying(255) NOT NULL,
    realm_id character varying(36) NOT NULL,
    storage_provider_id character varying(36)
);
 -   DROP TABLE public.fed_user_group_membership;
       public         heap    postgres    false            �            1259    57513    fed_user_required_action    TABLE       CREATE TABLE public.fed_user_required_action (
    required_action character varying(255) DEFAULT ' '::character varying NOT NULL,
    user_id character varying(255) NOT NULL,
    realm_id character varying(36) NOT NULL,
    storage_provider_id character varying(36)
);
 ,   DROP TABLE public.fed_user_required_action;
       public         heap    postgres    false            �            1259    57519    fed_user_role_mapping    TABLE     �   CREATE TABLE public.fed_user_role_mapping (
    role_id character varying(36) NOT NULL,
    user_id character varying(255) NOT NULL,
    realm_id character varying(36) NOT NULL,
    storage_provider_id character varying(36)
);
 )   DROP TABLE public.fed_user_role_mapping;
       public         heap    postgres    false            �            1259    57522    federated_identity    TABLE       CREATE TABLE public.federated_identity (
    identity_provider character varying(255) NOT NULL,
    realm_id character varying(36),
    federated_user_id character varying(255),
    federated_username character varying(255),
    token text,
    user_id character varying(36) NOT NULL
);
 &   DROP TABLE public.federated_identity;
       public         heap    postgres    false            �            1259    57527    federated_user    TABLE     �   CREATE TABLE public.federated_user (
    id character varying(255) NOT NULL,
    storage_provider_id character varying(255),
    realm_id character varying(36) NOT NULL
);
 "   DROP TABLE public.federated_user;
       public         heap    postgres    false            �            1259    57532    group_attribute    TABLE       CREATE TABLE public.group_attribute (
    id character varying(36) DEFAULT 'sybase-needs-something-here'::character varying NOT NULL,
    name character varying(255) NOT NULL,
    value character varying(255),
    group_id character varying(36) NOT NULL
);
 #   DROP TABLE public.group_attribute;
       public         heap    postgres    false            �            1259    57538    group_role_mapping    TABLE     �   CREATE TABLE public.group_role_mapping (
    role_id character varying(36) NOT NULL,
    group_id character varying(36) NOT NULL
);
 &   DROP TABLE public.group_role_mapping;
       public         heap    postgres    false            �            1259    57541    identity_provider    TABLE     �  CREATE TABLE public.identity_provider (
    internal_id character varying(36) NOT NULL,
    enabled boolean DEFAULT false NOT NULL,
    provider_alias character varying(255),
    provider_id character varying(255),
    store_token boolean DEFAULT false NOT NULL,
    authenticate_by_default boolean DEFAULT false NOT NULL,
    realm_id character varying(36),
    add_token_role boolean DEFAULT true NOT NULL,
    trust_email boolean DEFAULT false NOT NULL,
    first_broker_login_flow_id character varying(36),
    post_broker_login_flow_id character varying(36),
    provider_display_name character varying(255),
    link_only boolean DEFAULT false NOT NULL
);
 %   DROP TABLE public.identity_provider;
       public         heap    postgres    false                        1259    57552    identity_provider_config    TABLE     �   CREATE TABLE public.identity_provider_config (
    identity_provider_id character varying(36) NOT NULL,
    value text,
    name character varying(255) NOT NULL
);
 ,   DROP TABLE public.identity_provider_config;
       public         heap    postgres    false                       1259    57557    identity_provider_mapper    TABLE       CREATE TABLE public.identity_provider_mapper (
    id character varying(36) NOT NULL,
    name character varying(255) NOT NULL,
    idp_alias character varying(255) NOT NULL,
    idp_mapper_name character varying(255) NOT NULL,
    realm_id character varying(36) NOT NULL
);
 ,   DROP TABLE public.identity_provider_mapper;
       public         heap    postgres    false                       1259    57562    idp_mapper_config    TABLE     �   CREATE TABLE public.idp_mapper_config (
    idp_mapper_id character varying(36) NOT NULL,
    value text,
    name character varying(255) NOT NULL
);
 %   DROP TABLE public.idp_mapper_config;
       public         heap    postgres    false                       1259    57567    keycloak_group    TABLE     �   CREATE TABLE public.keycloak_group (
    id character varying(36) NOT NULL,
    name character varying(255),
    parent_group character varying(36) NOT NULL,
    realm_id character varying(36)
);
 "   DROP TABLE public.keycloak_group;
       public         heap    postgres    false                       1259    57570    keycloak_role    TABLE     b  CREATE TABLE public.keycloak_role (
    id character varying(36) NOT NULL,
    client_realm_constraint character varying(255),
    client_role boolean DEFAULT false NOT NULL,
    description character varying(255),
    name character varying(255),
    realm_id character varying(255),
    client character varying(36),
    realm character varying(36)
);
 !   DROP TABLE public.keycloak_role;
       public         heap    postgres    false                       1259    57576    migration_model    TABLE     �   CREATE TABLE public.migration_model (
    id character varying(36) NOT NULL,
    version character varying(36),
    update_time bigint DEFAULT 0 NOT NULL
);
 #   DROP TABLE public.migration_model;
       public         heap    postgres    false                       1259    57580    offline_client_session    TABLE     �  CREATE TABLE public.offline_client_session (
    user_session_id character varying(36) NOT NULL,
    client_id character varying(255) NOT NULL,
    offline_flag character varying(4) NOT NULL,
    "timestamp" integer,
    data text,
    client_storage_provider character varying(36) DEFAULT 'local'::character varying NOT NULL,
    external_client_id character varying(255) DEFAULT 'local'::character varying NOT NULL
);
 *   DROP TABLE public.offline_client_session;
       public         heap    postgres    false                       1259    57587    offline_user_session    TABLE     P  CREATE TABLE public.offline_user_session (
    user_session_id character varying(36) NOT NULL,
    user_id character varying(255) NOT NULL,
    realm_id character varying(36) NOT NULL,
    created_on integer NOT NULL,
    offline_flag character varying(4) NOT NULL,
    data text,
    last_session_refresh integer DEFAULT 0 NOT NULL
);
 (   DROP TABLE public.offline_user_session;
       public         heap    postgres    false                       1259    57593    policy_config    TABLE     �   CREATE TABLE public.policy_config (
    policy_id character varying(36) NOT NULL,
    name character varying(255) NOT NULL,
    value text
);
 !   DROP TABLE public.policy_config;
       public         heap    postgres    false            	           1259    57598    protocol_mapper    TABLE     1  CREATE TABLE public.protocol_mapper (
    id character varying(36) NOT NULL,
    name character varying(255) NOT NULL,
    protocol character varying(255) NOT NULL,
    protocol_mapper_name character varying(255) NOT NULL,
    client_id character varying(36),
    client_scope_id character varying(36)
);
 #   DROP TABLE public.protocol_mapper;
       public         heap    postgres    false            
           1259    57603    protocol_mapper_config    TABLE     �   CREATE TABLE public.protocol_mapper_config (
    protocol_mapper_id character varying(36) NOT NULL,
    value text,
    name character varying(255) NOT NULL
);
 *   DROP TABLE public.protocol_mapper_config;
       public         heap    postgres    false                       1259    57608    realm    TABLE     �	  CREATE TABLE public.realm (
    id character varying(36) NOT NULL,
    access_code_lifespan integer,
    user_action_lifespan integer,
    access_token_lifespan integer,
    account_theme character varying(255),
    admin_theme character varying(255),
    email_theme character varying(255),
    enabled boolean DEFAULT false NOT NULL,
    events_enabled boolean DEFAULT false NOT NULL,
    events_expiration bigint,
    login_theme character varying(255),
    name character varying(255),
    not_before integer,
    password_policy character varying(2550),
    registration_allowed boolean DEFAULT false NOT NULL,
    remember_me boolean DEFAULT false NOT NULL,
    reset_password_allowed boolean DEFAULT false NOT NULL,
    social boolean DEFAULT false NOT NULL,
    ssl_required character varying(255),
    sso_idle_timeout integer,
    sso_max_lifespan integer,
    update_profile_on_soc_login boolean DEFAULT false NOT NULL,
    verify_email boolean DEFAULT false NOT NULL,
    master_admin_client character varying(36),
    login_lifespan integer,
    internationalization_enabled boolean DEFAULT false NOT NULL,
    default_locale character varying(255),
    reg_email_as_username boolean DEFAULT false NOT NULL,
    admin_events_enabled boolean DEFAULT false NOT NULL,
    admin_events_details_enabled boolean DEFAULT false NOT NULL,
    edit_username_allowed boolean DEFAULT false NOT NULL,
    otp_policy_counter integer DEFAULT 0,
    otp_policy_window integer DEFAULT 1,
    otp_policy_period integer DEFAULT 30,
    otp_policy_digits integer DEFAULT 6,
    otp_policy_alg character varying(36) DEFAULT 'HmacSHA1'::character varying,
    otp_policy_type character varying(36) DEFAULT 'totp'::character varying,
    browser_flow character varying(36),
    registration_flow character varying(36),
    direct_grant_flow character varying(36),
    reset_credentials_flow character varying(36),
    client_auth_flow character varying(36),
    offline_session_idle_timeout integer DEFAULT 0,
    revoke_refresh_token boolean DEFAULT false NOT NULL,
    access_token_life_implicit integer DEFAULT 0,
    login_with_email_allowed boolean DEFAULT true NOT NULL,
    duplicate_emails_allowed boolean DEFAULT false NOT NULL,
    docker_auth_flow character varying(36),
    refresh_token_max_reuse integer DEFAULT 0,
    allow_user_managed_access boolean DEFAULT false NOT NULL,
    sso_max_lifespan_remember_me integer DEFAULT 0 NOT NULL,
    sso_idle_timeout_remember_me integer DEFAULT 0 NOT NULL,
    default_role character varying(255)
);
    DROP TABLE public.realm;
       public         heap    postgres    false                       1259    57641    realm_attribute    TABLE     �   CREATE TABLE public.realm_attribute (
    name character varying(255) NOT NULL,
    realm_id character varying(36) NOT NULL,
    value text
);
 #   DROP TABLE public.realm_attribute;
       public         heap    postgres    false                       1259    57646    realm_default_groups    TABLE     �   CREATE TABLE public.realm_default_groups (
    realm_id character varying(36) NOT NULL,
    group_id character varying(36) NOT NULL
);
 (   DROP TABLE public.realm_default_groups;
       public         heap    postgres    false                       1259    57649    realm_enabled_event_types    TABLE     �   CREATE TABLE public.realm_enabled_event_types (
    realm_id character varying(36) NOT NULL,
    value character varying(255) NOT NULL
);
 -   DROP TABLE public.realm_enabled_event_types;
       public         heap    postgres    false                       1259    57652    realm_events_listeners    TABLE     �   CREATE TABLE public.realm_events_listeners (
    realm_id character varying(36) NOT NULL,
    value character varying(255) NOT NULL
);
 *   DROP TABLE public.realm_events_listeners;
       public         heap    postgres    false                       1259    57655    realm_localizations    TABLE     �   CREATE TABLE public.realm_localizations (
    realm_id character varying(255) NOT NULL,
    locale character varying(255) NOT NULL,
    texts text NOT NULL
);
 '   DROP TABLE public.realm_localizations;
       public         heap    postgres    false                       1259    57660    realm_required_credential    TABLE       CREATE TABLE public.realm_required_credential (
    type character varying(255) NOT NULL,
    form_label character varying(255),
    input boolean DEFAULT false NOT NULL,
    secret boolean DEFAULT false NOT NULL,
    realm_id character varying(36) NOT NULL
);
 -   DROP TABLE public.realm_required_credential;
       public         heap    postgres    false                       1259    57667    realm_smtp_config    TABLE     �   CREATE TABLE public.realm_smtp_config (
    realm_id character varying(36) NOT NULL,
    value character varying(255),
    name character varying(255) NOT NULL
);
 %   DROP TABLE public.realm_smtp_config;
       public         heap    postgres    false                       1259    57672    realm_supported_locales    TABLE     �   CREATE TABLE public.realm_supported_locales (
    realm_id character varying(36) NOT NULL,
    value character varying(255) NOT NULL
);
 +   DROP TABLE public.realm_supported_locales;
       public         heap    postgres    false                       1259    57675    redirect_uris    TABLE        CREATE TABLE public.redirect_uris (
    client_id character varying(36) NOT NULL,
    value character varying(255) NOT NULL
);
 !   DROP TABLE public.redirect_uris;
       public         heap    postgres    false                       1259    57678    required_action_config    TABLE     �   CREATE TABLE public.required_action_config (
    required_action_id character varying(36) NOT NULL,
    value text,
    name character varying(255) NOT NULL
);
 *   DROP TABLE public.required_action_config;
       public         heap    postgres    false                       1259    57683    required_action_provider    TABLE     \  CREATE TABLE public.required_action_provider (
    id character varying(36) NOT NULL,
    alias character varying(255),
    name character varying(255),
    realm_id character varying(36),
    enabled boolean DEFAULT false NOT NULL,
    default_action boolean DEFAULT false NOT NULL,
    provider_id character varying(255),
    priority integer
);
 ,   DROP TABLE public.required_action_provider;
       public         heap    postgres    false                       1259    57690    resource_attribute    TABLE       CREATE TABLE public.resource_attribute (
    id character varying(36) DEFAULT 'sybase-needs-something-here'::character varying NOT NULL,
    name character varying(255) NOT NULL,
    value character varying(255),
    resource_id character varying(36) NOT NULL
);
 &   DROP TABLE public.resource_attribute;
       public         heap    postgres    false                       1259    57696    resource_policy    TABLE     �   CREATE TABLE public.resource_policy (
    resource_id character varying(36) NOT NULL,
    policy_id character varying(36) NOT NULL
);
 #   DROP TABLE public.resource_policy;
       public         heap    postgres    false                       1259    57699    resource_scope    TABLE     �   CREATE TABLE public.resource_scope (
    resource_id character varying(36) NOT NULL,
    scope_id character varying(36) NOT NULL
);
 "   DROP TABLE public.resource_scope;
       public         heap    postgres    false                       1259    57702    resource_server    TABLE     �   CREATE TABLE public.resource_server (
    id character varying(36) NOT NULL,
    allow_rs_remote_mgmt boolean DEFAULT false NOT NULL,
    policy_enforce_mode character varying(15) NOT NULL,
    decision_strategy smallint DEFAULT 1 NOT NULL
);
 #   DROP TABLE public.resource_server;
       public         heap    postgres    false                       1259    57707    resource_server_perm_ticket    TABLE     �  CREATE TABLE public.resource_server_perm_ticket (
    id character varying(36) NOT NULL,
    owner character varying(255) NOT NULL,
    requester character varying(255) NOT NULL,
    created_timestamp bigint NOT NULL,
    granted_timestamp bigint,
    resource_id character varying(36) NOT NULL,
    scope_id character varying(36),
    resource_server_id character varying(36) NOT NULL,
    policy_id character varying(36)
);
 /   DROP TABLE public.resource_server_perm_ticket;
       public         heap    postgres    false                       1259    57712    resource_server_policy    TABLE     y  CREATE TABLE public.resource_server_policy (
    id character varying(36) NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255),
    type character varying(255) NOT NULL,
    decision_strategy character varying(20),
    logic character varying(20),
    resource_server_id character varying(36) NOT NULL,
    owner character varying(255)
);
 *   DROP TABLE public.resource_server_policy;
       public         heap    postgres    false                       1259    57717    resource_server_resource    TABLE     �  CREATE TABLE public.resource_server_resource (
    id character varying(36) NOT NULL,
    name character varying(255) NOT NULL,
    type character varying(255),
    icon_uri character varying(255),
    owner character varying(255) NOT NULL,
    resource_server_id character varying(36) NOT NULL,
    owner_managed_access boolean DEFAULT false NOT NULL,
    display_name character varying(255)
);
 ,   DROP TABLE public.resource_server_resource;
       public         heap    postgres    false                       1259    57723    resource_server_scope    TABLE       CREATE TABLE public.resource_server_scope (
    id character varying(36) NOT NULL,
    name character varying(255) NOT NULL,
    icon_uri character varying(255),
    resource_server_id character varying(36) NOT NULL,
    display_name character varying(255)
);
 )   DROP TABLE public.resource_server_scope;
       public         heap    postgres    false                       1259    57728    resource_uris    TABLE     �   CREATE TABLE public.resource_uris (
    resource_id character varying(36) NOT NULL,
    value character varying(255) NOT NULL
);
 !   DROP TABLE public.resource_uris;
       public         heap    postgres    false                        1259    57731    role_attribute    TABLE     �   CREATE TABLE public.role_attribute (
    id character varying(36) NOT NULL,
    role_id character varying(36) NOT NULL,
    name character varying(255) NOT NULL,
    value character varying(255)
);
 "   DROP TABLE public.role_attribute;
       public         heap    postgres    false            !           1259    57736    scope_mapping    TABLE     �   CREATE TABLE public.scope_mapping (
    client_id character varying(36) NOT NULL,
    role_id character varying(36) NOT NULL
);
 !   DROP TABLE public.scope_mapping;
       public         heap    postgres    false            "           1259    57739    scope_policy    TABLE     �   CREATE TABLE public.scope_policy (
    scope_id character varying(36) NOT NULL,
    policy_id character varying(36) NOT NULL
);
     DROP TABLE public.scope_policy;
       public         heap    postgres    false            #           1259    57742    user_attribute    TABLE     �   CREATE TABLE public.user_attribute (
    name character varying(255) NOT NULL,
    value character varying(255),
    user_id character varying(36) NOT NULL,
    id character varying(36) DEFAULT 'sybase-needs-something-here'::character varying NOT NULL
);
 "   DROP TABLE public.user_attribute;
       public         heap    postgres    false            $           1259    57748    user_consent    TABLE     7  CREATE TABLE public.user_consent (
    id character varying(36) NOT NULL,
    client_id character varying(255),
    user_id character varying(36) NOT NULL,
    created_date bigint,
    last_updated_date bigint,
    client_storage_provider character varying(36),
    external_client_id character varying(255)
);
     DROP TABLE public.user_consent;
       public         heap    postgres    false            %           1259    57753    user_consent_client_scope    TABLE     �   CREATE TABLE public.user_consent_client_scope (
    user_consent_id character varying(36) NOT NULL,
    scope_id character varying(36) NOT NULL
);
 -   DROP TABLE public.user_consent_client_scope;
       public         heap    postgres    false            &           1259    57756    user_entity    TABLE     =  CREATE TABLE public.user_entity (
    id character varying(36) NOT NULL,
    email character varying(255),
    email_constraint character varying(255),
    email_verified boolean DEFAULT false NOT NULL,
    enabled boolean DEFAULT false NOT NULL,
    federation_link character varying(255),
    first_name character varying(255),
    last_name character varying(255),
    realm_id character varying(255),
    username character varying(255),
    created_timestamp bigint,
    service_account_client_link character varying(255),
    not_before integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.user_entity;
       public         heap    postgres    false            '           1259    57764    user_federation_config    TABLE     �   CREATE TABLE public.user_federation_config (
    user_federation_provider_id character varying(36) NOT NULL,
    value character varying(255),
    name character varying(255) NOT NULL
);
 *   DROP TABLE public.user_federation_config;
       public         heap    postgres    false            (           1259    57769    user_federation_mapper    TABLE     $  CREATE TABLE public.user_federation_mapper (
    id character varying(36) NOT NULL,
    name character varying(255) NOT NULL,
    federation_provider_id character varying(36) NOT NULL,
    federation_mapper_type character varying(255) NOT NULL,
    realm_id character varying(36) NOT NULL
);
 *   DROP TABLE public.user_federation_mapper;
       public         heap    postgres    false            )           1259    57774    user_federation_mapper_config    TABLE     �   CREATE TABLE public.user_federation_mapper_config (
    user_federation_mapper_id character varying(36) NOT NULL,
    value character varying(255),
    name character varying(255) NOT NULL
);
 1   DROP TABLE public.user_federation_mapper_config;
       public         heap    postgres    false            *           1259    57779    user_federation_provider    TABLE     ;  CREATE TABLE public.user_federation_provider (
    id character varying(36) NOT NULL,
    changed_sync_period integer,
    display_name character varying(255),
    full_sync_period integer,
    last_sync integer,
    priority integer,
    provider_name character varying(255),
    realm_id character varying(36)
);
 ,   DROP TABLE public.user_federation_provider;
       public         heap    postgres    false            +           1259    57784    user_group_membership    TABLE     �   CREATE TABLE public.user_group_membership (
    group_id character varying(36) NOT NULL,
    user_id character varying(36) NOT NULL
);
 )   DROP TABLE public.user_group_membership;
       public         heap    postgres    false            ,           1259    57787    user_required_action    TABLE     �   CREATE TABLE public.user_required_action (
    user_id character varying(36) NOT NULL,
    required_action character varying(255) DEFAULT ' '::character varying NOT NULL
);
 (   DROP TABLE public.user_required_action;
       public         heap    postgres    false            -           1259    57791    user_role_mapping    TABLE     �   CREATE TABLE public.user_role_mapping (
    role_id character varying(255) NOT NULL,
    user_id character varying(36) NOT NULL
);
 %   DROP TABLE public.user_role_mapping;
       public         heap    postgres    false            .           1259    57794    user_session    TABLE     �  CREATE TABLE public.user_session (
    id character varying(36) NOT NULL,
    auth_method character varying(255),
    ip_address character varying(255),
    last_session_refresh integer,
    login_username character varying(255),
    realm_id character varying(255),
    remember_me boolean DEFAULT false NOT NULL,
    started integer,
    user_id character varying(255),
    user_session_state integer,
    broker_session_id character varying(255),
    broker_user_id character varying(255)
);
     DROP TABLE public.user_session;
       public         heap    postgres    false            /           1259    57800    user_session_note    TABLE     �   CREATE TABLE public.user_session_note (
    user_session character varying(36) NOT NULL,
    name character varying(255) NOT NULL,
    value character varying(2048)
);
 %   DROP TABLE public.user_session_note;
       public         heap    postgres    false            0           1259    57805    username_login_failure    TABLE       CREATE TABLE public.username_login_failure (
    realm_id character varying(36) NOT NULL,
    username character varying(255) NOT NULL,
    failed_login_not_before integer,
    last_failure bigint,
    last_ip_failure character varying(255),
    num_failures integer
);
 *   DROP TABLE public.username_login_failure;
       public         heap    postgres    false            1           1259    57810    web_origins    TABLE     }   CREATE TABLE public.web_origins (
    client_id character varying(36) NOT NULL,
    value character varying(255) NOT NULL
);
    DROP TABLE public.web_origins;
       public         heap    postgres    false                      0    57349    admin_event_entity 
   TABLE DATA           �   COPY public.admin_event_entity (id, admin_event_time, realm_id, operation_type, auth_realm_id, auth_client_id, auth_user_id, ip_address, resource_path, representation, error, resource_type) FROM stdin;
    public          postgres    false    214   e{                0    57354    associated_policy 
   TABLE DATA           L   COPY public.associated_policy (policy_id, associated_policy_id) FROM stdin;
    public          postgres    false    215   �{                0    57357    authentication_execution 
   TABLE DATA           �   COPY public.authentication_execution (id, alias, authenticator, realm_id, flow_id, requirement, priority, authenticator_flow, auth_flow_id, auth_config) FROM stdin;
    public          postgres    false    216   �{                0    57361    authentication_flow 
   TABLE DATA           q   COPY public.authentication_flow (id, alias, description, realm_id, provider_id, top_level, built_in) FROM stdin;
    public          postgres    false    217   �                0    57369    authenticator_config 
   TABLE DATA           C   COPY public.authenticator_config (id, alias, realm_id) FROM stdin;
    public          postgres    false    218   2�                0    57372    authenticator_config_entry 
   TABLE DATA           S   COPY public.authenticator_config_entry (authenticator_id, value, name) FROM stdin;
    public          postgres    false    219   �                0    57377    broker_link 
   TABLE DATA           �   COPY public.broker_link (identity_provider, storage_provider_id, realm_id, broker_user_id, broker_username, token, user_id) FROM stdin;
    public          postgres    false    220   Ԕ                0    57382    client 
   TABLE DATA           �  COPY public.client (id, enabled, full_scope_allowed, client_id, not_before, public_client, secret, base_url, bearer_only, management_url, surrogate_auth_required, realm_id, protocol, node_rereg_timeout, frontchannel_logout, consent_required, name, service_accounts_enabled, client_authenticator_type, root_url, description, registration_token, standard_flow_enabled, implicit_flow_enabled, direct_access_grants_enabled, always_display_in_console) FROM stdin;
    public          postgres    false    221   �                0    57400    client_attributes 
   TABLE DATA           C   COPY public.client_attributes (client_id, value, name) FROM stdin;
    public          postgres    false    222   T�                 0    57405    client_auth_flow_bindings 
   TABLE DATA           U   COPY public.client_auth_flow_bindings (client_id, flow_id, binding_name) FROM stdin;
    public          postgres    false    223   ћ      !          0    57408    client_initial_access 
   TABLE DATA           n   COPY public.client_initial_access (id, realm_id, "timestamp", expiration, count, remaining_count) FROM stdin;
    public          postgres    false    224   �      "          0    57411    client_node_registrations 
   TABLE DATA           K   COPY public.client_node_registrations (client_id, value, name) FROM stdin;
    public          postgres    false    225   �      #          0    57414    client_scope 
   TABLE DATA           Q   COPY public.client_scope (id, name, realm_id, description, protocol) FROM stdin;
    public          postgres    false    226   (�      $          0    57419    client_scope_attributes 
   TABLE DATA           H   COPY public.client_scope_attributes (scope_id, value, name) FROM stdin;
    public          postgres    false    227   ~�      %          0    57424    client_scope_client 
   TABLE DATA           Q   COPY public.client_scope_client (client_id, scope_id, default_scope) FROM stdin;
    public          postgres    false    228   ��      &          0    57430    client_scope_role_mapping 
   TABLE DATA           F   COPY public.client_scope_role_mapping (scope_id, role_id) FROM stdin;
    public          postgres    false    229   R�      '          0    57433    client_session 
   TABLE DATA           �   COPY public.client_session (id, client_id, redirect_uri, state, "timestamp", session_id, auth_method, realm_id, auth_user_id, current_action) FROM stdin;
    public          postgres    false    230   ԧ      (          0    57438    client_session_auth_status 
   TABLE DATA           [   COPY public.client_session_auth_status (authenticator, status, client_session) FROM stdin;
    public          postgres    false    231   �      )          0    57441    client_session_note 
   TABLE DATA           J   COPY public.client_session_note (name, value, client_session) FROM stdin;
    public          postgres    false    232   �      *          0    57446    client_session_prot_mapper 
   TABLE DATA           X   COPY public.client_session_prot_mapper (protocol_mapper_id, client_session) FROM stdin;
    public          postgres    false    233   +�      +          0    57449    client_session_role 
   TABLE DATA           F   COPY public.client_session_role (role_id, client_session) FROM stdin;
    public          postgres    false    234   H�      ,          0    57452    client_user_session_note 
   TABLE DATA           O   COPY public.client_user_session_note (name, value, client_session) FROM stdin;
    public          postgres    false    235   e�      -          0    57457 	   component 
   TABLE DATA           h   COPY public.component (id, name, parent_id, provider_id, provider_type, realm_id, sub_type) FROM stdin;
    public          postgres    false    236   ��      .          0    57462    component_config 
   TABLE DATA           I   COPY public.component_config (id, component_id, name, value) FROM stdin;
    public          postgres    false    237   ˬ      /          0    57467    composite_role 
   TABLE DATA           ?   COPY public.composite_role (composite, child_role) FROM stdin;
    public          postgres    false    238   R�      0          0    57470 
   credential 
   TABLE DATA              COPY public.credential (id, salt, type, user_id, created_date, user_label, secret_data, credential_data, priority) FROM stdin;
    public          postgres    false    239   &�      1          0    57475    databasechangelog 
   TABLE DATA           �   COPY public.databasechangelog (id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id) FROM stdin;
    public          postgres    false    240   ��      2          0    57480    databasechangeloglock 
   TABLE DATA           R   COPY public.databasechangeloglock (id, locked, lockgranted, lockedby) FROM stdin;
    public          postgres    false    241   @�      3          0    57483    default_client_scope 
   TABLE DATA           Q   COPY public.default_client_scope (realm_id, scope_id, default_scope) FROM stdin;
    public          postgres    false    242   n�      4          0    57487    event_entity 
   TABLE DATA           �   COPY public.event_entity (id, client_id, details_json, error, ip_address, realm_id, session_id, event_time, type, user_id) FROM stdin;
    public          postgres    false    243   ��      5          0    57492    fed_user_attribute 
   TABLE DATA           e   COPY public.fed_user_attribute (id, name, user_id, realm_id, storage_provider_id, value) FROM stdin;
    public          postgres    false    244   ��      6          0    57497    fed_user_consent 
   TABLE DATA           �   COPY public.fed_user_consent (id, client_id, user_id, realm_id, storage_provider_id, created_date, last_updated_date, client_storage_provider, external_client_id) FROM stdin;
    public          postgres    false    245   ��      7          0    57502    fed_user_consent_cl_scope 
   TABLE DATA           N   COPY public.fed_user_consent_cl_scope (user_consent_id, scope_id) FROM stdin;
    public          postgres    false    246   ��      8          0    57505    fed_user_credential 
   TABLE DATA           �   COPY public.fed_user_credential (id, salt, type, created_date, user_id, realm_id, storage_provider_id, user_label, secret_data, credential_data, priority) FROM stdin;
    public          postgres    false    247   ��      9          0    57510    fed_user_group_membership 
   TABLE DATA           e   COPY public.fed_user_group_membership (group_id, user_id, realm_id, storage_provider_id) FROM stdin;
    public          postgres    false    248   �      :          0    57513    fed_user_required_action 
   TABLE DATA           k   COPY public.fed_user_required_action (required_action, user_id, realm_id, storage_provider_id) FROM stdin;
    public          postgres    false    249   /�      ;          0    57519    fed_user_role_mapping 
   TABLE DATA           `   COPY public.fed_user_role_mapping (role_id, user_id, realm_id, storage_provider_id) FROM stdin;
    public          postgres    false    250   L�      <          0    57522    federated_identity 
   TABLE DATA           �   COPY public.federated_identity (identity_provider, realm_id, federated_user_id, federated_username, token, user_id) FROM stdin;
    public          postgres    false    251   i�      =          0    57527    federated_user 
   TABLE DATA           K   COPY public.federated_user (id, storage_provider_id, realm_id) FROM stdin;
    public          postgres    false    252   ��      >          0    57532    group_attribute 
   TABLE DATA           D   COPY public.group_attribute (id, name, value, group_id) FROM stdin;
    public          postgres    false    253   ��      ?          0    57538    group_role_mapping 
   TABLE DATA           ?   COPY public.group_role_mapping (role_id, group_id) FROM stdin;
    public          postgres    false    254   ��      @          0    57541    identity_provider 
   TABLE DATA             COPY public.identity_provider (internal_id, enabled, provider_alias, provider_id, store_token, authenticate_by_default, realm_id, add_token_role, trust_email, first_broker_login_flow_id, post_broker_login_flow_id, provider_display_name, link_only) FROM stdin;
    public          postgres    false    255   ��      A          0    57552    identity_provider_config 
   TABLE DATA           U   COPY public.identity_provider_config (identity_provider_id, value, name) FROM stdin;
    public          postgres    false    256   ��      B          0    57557    identity_provider_mapper 
   TABLE DATA           b   COPY public.identity_provider_mapper (id, name, idp_alias, idp_mapper_name, realm_id) FROM stdin;
    public          postgres    false    257   �      C          0    57562    idp_mapper_config 
   TABLE DATA           G   COPY public.idp_mapper_config (idp_mapper_id, value, name) FROM stdin;
    public          postgres    false    258   4�      D          0    57567    keycloak_group 
   TABLE DATA           J   COPY public.keycloak_group (id, name, parent_group, realm_id) FROM stdin;
    public          postgres    false    259   Q�      E          0    57570    keycloak_role 
   TABLE DATA           }   COPY public.keycloak_role (id, client_realm_constraint, client_role, description, name, realm_id, client, realm) FROM stdin;
    public          postgres    false    260   n�      F          0    57576    migration_model 
   TABLE DATA           C   COPY public.migration_model (id, version, update_time) FROM stdin;
    public          postgres    false    261   �
      G          0    57580    offline_client_session 
   TABLE DATA           �   COPY public.offline_client_session (user_session_id, client_id, offline_flag, "timestamp", data, client_storage_provider, external_client_id) FROM stdin;
    public          postgres    false    262   �
      H          0    57587    offline_user_session 
   TABLE DATA           �   COPY public.offline_user_session (user_session_id, user_id, realm_id, created_on, offline_flag, data, last_session_refresh) FROM stdin;
    public          postgres    false    263   �
      I          0    57593    policy_config 
   TABLE DATA           ?   COPY public.policy_config (policy_id, name, value) FROM stdin;
    public          postgres    false    264         J          0    57598    protocol_mapper 
   TABLE DATA           o   COPY public.protocol_mapper (id, name, protocol, protocol_mapper_name, client_id, client_scope_id) FROM stdin;
    public          postgres    false    265         K          0    57603    protocol_mapper_config 
   TABLE DATA           Q   COPY public.protocol_mapper_config (protocol_mapper_id, value, name) FROM stdin;
    public          postgres    false    266   7      L          0    57608    realm 
   TABLE DATA              COPY public.realm (id, access_code_lifespan, user_action_lifespan, access_token_lifespan, account_theme, admin_theme, email_theme, enabled, events_enabled, events_expiration, login_theme, name, not_before, password_policy, registration_allowed, remember_me, reset_password_allowed, social, ssl_required, sso_idle_timeout, sso_max_lifespan, update_profile_on_soc_login, verify_email, master_admin_client, login_lifespan, internationalization_enabled, default_locale, reg_email_as_username, admin_events_enabled, admin_events_details_enabled, edit_username_allowed, otp_policy_counter, otp_policy_window, otp_policy_period, otp_policy_digits, otp_policy_alg, otp_policy_type, browser_flow, registration_flow, direct_grant_flow, reset_credentials_flow, client_auth_flow, offline_session_idle_timeout, revoke_refresh_token, access_token_life_implicit, login_with_email_allowed, duplicate_emails_allowed, docker_auth_flow, refresh_token_max_reuse, allow_user_managed_access, sso_max_lifespan_remember_me, sso_idle_timeout_remember_me, default_role) FROM stdin;
    public          postgres    false    267   �      M          0    57641    realm_attribute 
   TABLE DATA           @   COPY public.realm_attribute (name, realm_id, value) FROM stdin;
    public          postgres    false    268   �       N          0    57646    realm_default_groups 
   TABLE DATA           B   COPY public.realm_default_groups (realm_id, group_id) FROM stdin;
    public          postgres    false    269   �$      O          0    57649    realm_enabled_event_types 
   TABLE DATA           D   COPY public.realm_enabled_event_types (realm_id, value) FROM stdin;
    public          postgres    false    270   %      P          0    57652    realm_events_listeners 
   TABLE DATA           A   COPY public.realm_events_listeners (realm_id, value) FROM stdin;
    public          postgres    false    271   -%      Q          0    57655    realm_localizations 
   TABLE DATA           F   COPY public.realm_localizations (realm_id, locale, texts) FROM stdin;
    public          postgres    false    272   �%      R          0    57660    realm_required_credential 
   TABLE DATA           ^   COPY public.realm_required_credential (type, form_label, input, secret, realm_id) FROM stdin;
    public          postgres    false    273   �%      S          0    57667    realm_smtp_config 
   TABLE DATA           B   COPY public.realm_smtp_config (realm_id, value, name) FROM stdin;
    public          postgres    false    274   �%      T          0    57672    realm_supported_locales 
   TABLE DATA           B   COPY public.realm_supported_locales (realm_id, value) FROM stdin;
    public          postgres    false    275   &      U          0    57675    redirect_uris 
   TABLE DATA           9   COPY public.redirect_uris (client_id, value) FROM stdin;
    public          postgres    false    276   8&      V          0    57678    required_action_config 
   TABLE DATA           Q   COPY public.required_action_config (required_action_id, value, name) FROM stdin;
    public          postgres    false    277   �'      W          0    57683    required_action_provider 
   TABLE DATA           }   COPY public.required_action_provider (id, alias, name, realm_id, enabled, default_action, provider_id, priority) FROM stdin;
    public          postgres    false    278   �'      X          0    57690    resource_attribute 
   TABLE DATA           J   COPY public.resource_attribute (id, name, value, resource_id) FROM stdin;
    public          postgres    false    279   =*      Y          0    57696    resource_policy 
   TABLE DATA           A   COPY public.resource_policy (resource_id, policy_id) FROM stdin;
    public          postgres    false    280   Z*      Z          0    57699    resource_scope 
   TABLE DATA           ?   COPY public.resource_scope (resource_id, scope_id) FROM stdin;
    public          postgres    false    281   w*      [          0    57702    resource_server 
   TABLE DATA           k   COPY public.resource_server (id, allow_rs_remote_mgmt, policy_enforce_mode, decision_strategy) FROM stdin;
    public          postgres    false    282   �*      \          0    57707    resource_server_perm_ticket 
   TABLE DATA           �   COPY public.resource_server_perm_ticket (id, owner, requester, created_timestamp, granted_timestamp, resource_id, scope_id, resource_server_id, policy_id) FROM stdin;
    public          postgres    false    283   �*      ]          0    57712    resource_server_policy 
   TABLE DATA           �   COPY public.resource_server_policy (id, name, description, type, decision_strategy, logic, resource_server_id, owner) FROM stdin;
    public          postgres    false    284   �*      ^          0    57717    resource_server_resource 
   TABLE DATA           �   COPY public.resource_server_resource (id, name, type, icon_uri, owner, resource_server_id, owner_managed_access, display_name) FROM stdin;
    public          postgres    false    285   �*      _          0    57723    resource_server_scope 
   TABLE DATA           e   COPY public.resource_server_scope (id, name, icon_uri, resource_server_id, display_name) FROM stdin;
    public          postgres    false    286   +      `          0    57728    resource_uris 
   TABLE DATA           ;   COPY public.resource_uris (resource_id, value) FROM stdin;
    public          postgres    false    287   %+      a          0    57731    role_attribute 
   TABLE DATA           B   COPY public.role_attribute (id, role_id, name, value) FROM stdin;
    public          postgres    false    288   B+      b          0    57736    scope_mapping 
   TABLE DATA           ;   COPY public.scope_mapping (client_id, role_id) FROM stdin;
    public          postgres    false    289   _+      c          0    57739    scope_policy 
   TABLE DATA           ;   COPY public.scope_policy (scope_id, policy_id) FROM stdin;
    public          postgres    false    290   �+      d          0    57742    user_attribute 
   TABLE DATA           B   COPY public.user_attribute (name, value, user_id, id) FROM stdin;
    public          postgres    false    291   �+      e          0    57748    user_consent 
   TABLE DATA           �   COPY public.user_consent (id, client_id, user_id, created_date, last_updated_date, client_storage_provider, external_client_id) FROM stdin;
    public          postgres    false    292   ,      f          0    57753    user_consent_client_scope 
   TABLE DATA           N   COPY public.user_consent_client_scope (user_consent_id, scope_id) FROM stdin;
    public          postgres    false    293   6,      g          0    57756    user_entity 
   TABLE DATA           �   COPY public.user_entity (id, email, email_constraint, email_verified, enabled, federation_link, first_name, last_name, realm_id, username, created_timestamp, service_account_client_link, not_before) FROM stdin;
    public          postgres    false    294   S,      h          0    57764    user_federation_config 
   TABLE DATA           Z   COPY public.user_federation_config (user_federation_provider_id, value, name) FROM stdin;
    public          postgres    false    295   '-      i          0    57769    user_federation_mapper 
   TABLE DATA           t   COPY public.user_federation_mapper (id, name, federation_provider_id, federation_mapper_type, realm_id) FROM stdin;
    public          postgres    false    296   D-      j          0    57774    user_federation_mapper_config 
   TABLE DATA           _   COPY public.user_federation_mapper_config (user_federation_mapper_id, value, name) FROM stdin;
    public          postgres    false    297   a-      k          0    57779    user_federation_provider 
   TABLE DATA           �   COPY public.user_federation_provider (id, changed_sync_period, display_name, full_sync_period, last_sync, priority, provider_name, realm_id) FROM stdin;
    public          postgres    false    298   ~-      l          0    57784    user_group_membership 
   TABLE DATA           B   COPY public.user_group_membership (group_id, user_id) FROM stdin;
    public          postgres    false    299   �-      m          0    57787    user_required_action 
   TABLE DATA           H   COPY public.user_required_action (user_id, required_action) FROM stdin;
    public          postgres    false    300   �-      n          0    57791    user_role_mapping 
   TABLE DATA           =   COPY public.user_role_mapping (role_id, user_id) FROM stdin;
    public          postgres    false    301   �-      o          0    57794    user_session 
   TABLE DATA           �   COPY public.user_session (id, auth_method, ip_address, last_session_refresh, login_username, realm_id, remember_me, started, user_id, user_session_state, broker_session_id, broker_user_id) FROM stdin;
    public          postgres    false    302   �2      p          0    57800    user_session_note 
   TABLE DATA           F   COPY public.user_session_note (user_session, name, value) FROM stdin;
    public          postgres    false    303   �2      q          0    57805    username_login_failure 
   TABLE DATA           �   COPY public.username_login_failure (realm_id, username, failed_login_not_before, last_failure, last_ip_failure, num_failures) FROM stdin;
    public          postgres    false    304   �2      r          0    57810    web_origins 
   TABLE DATA           7   COPY public.web_origins (client_id, value) FROM stdin;
    public          postgres    false    305   3      ;           2606    57814 &   username_login_failure CONSTRAINT_17-2 
   CONSTRAINT     v   ALTER TABLE ONLY public.username_login_failure
    ADD CONSTRAINT "CONSTRAINT_17-2" PRIMARY KEY (realm_id, username);
 R   ALTER TABLE ONLY public.username_login_failure DROP CONSTRAINT "CONSTRAINT_17-2";
       public            postgres    false    304    304            �           2606    57816 ,   keycloak_role UK_J3RWUVD56ONTGSUHOGM184WW2-2 
   CONSTRAINT     �   ALTER TABLE ONLY public.keycloak_role
    ADD CONSTRAINT "UK_J3RWUVD56ONTGSUHOGM184WW2-2" UNIQUE (name, client_realm_constraint);
 X   ALTER TABLE ONLY public.keycloak_role DROP CONSTRAINT "UK_J3RWUVD56ONTGSUHOGM184WW2-2";
       public            postgres    false    260    260            7           2606    57818 )   client_auth_flow_bindings c_cli_flow_bind 
   CONSTRAINT     |   ALTER TABLE ONLY public.client_auth_flow_bindings
    ADD CONSTRAINT c_cli_flow_bind PRIMARY KEY (client_id, binding_name);
 S   ALTER TABLE ONLY public.client_auth_flow_bindings DROP CONSTRAINT c_cli_flow_bind;
       public            postgres    false    223    223            F           2606    57820 $   client_scope_client c_cli_scope_bind 
   CONSTRAINT     s   ALTER TABLE ONLY public.client_scope_client
    ADD CONSTRAINT c_cli_scope_bind PRIMARY KEY (client_id, scope_id);
 N   ALTER TABLE ONLY public.client_scope_client DROP CONSTRAINT c_cli_scope_bind;
       public            postgres    false    228    228            9           2606    57822 .   client_initial_access cnstr_client_init_acc_pk 
   CONSTRAINT     l   ALTER TABLE ONLY public.client_initial_access
    ADD CONSTRAINT cnstr_client_init_acc_pk PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.client_initial_access DROP CONSTRAINT cnstr_client_init_acc_pk;
       public            postgres    false    224            �           2606    57824 ,   realm_default_groups con_group_id_def_groups 
   CONSTRAINT     k   ALTER TABLE ONLY public.realm_default_groups
    ADD CONSTRAINT con_group_id_def_groups UNIQUE (group_id);
 V   ALTER TABLE ONLY public.realm_default_groups DROP CONSTRAINT con_group_id_def_groups;
       public            postgres    false    269            -           2606    57826 !   broker_link constr_broker_link_pk 
   CONSTRAINT     w   ALTER TABLE ONLY public.broker_link
    ADD CONSTRAINT constr_broker_link_pk PRIMARY KEY (identity_provider, user_id);
 K   ALTER TABLE ONLY public.broker_link DROP CONSTRAINT constr_broker_link_pk;
       public            postgres    false    220    220            Y           2606    57828 /   client_user_session_note constr_cl_usr_ses_note 
   CONSTRAINT        ALTER TABLE ONLY public.client_user_session_note
    ADD CONSTRAINT constr_cl_usr_ses_note PRIMARY KEY (client_session, name);
 Y   ALTER TABLE ONLY public.client_user_session_note DROP CONSTRAINT constr_cl_usr_ses_note;
       public            postgres    false    235    235            _           2606    57830 +   component_config constr_component_config_pk 
   CONSTRAINT     i   ALTER TABLE ONLY public.component_config
    ADD CONSTRAINT constr_component_config_pk PRIMARY KEY (id);
 U   ALTER TABLE ONLY public.component_config DROP CONSTRAINT constr_component_config_pk;
       public            postgres    false    237            [           2606    57832    component constr_component_pk 
   CONSTRAINT     [   ALTER TABLE ONLY public.component
    ADD CONSTRAINT constr_component_pk PRIMARY KEY (id);
 G   ALTER TABLE ONLY public.component DROP CONSTRAINT constr_component_pk;
       public            postgres    false    236            �           2606    57834 3   fed_user_required_action constr_fed_required_action 
   CONSTRAINT     �   ALTER TABLE ONLY public.fed_user_required_action
    ADD CONSTRAINT constr_fed_required_action PRIMARY KEY (required_action, user_id);
 ]   ALTER TABLE ONLY public.fed_user_required_action DROP CONSTRAINT constr_fed_required_action;
       public            postgres    false    249    249            r           2606    57836 *   fed_user_attribute constr_fed_user_attr_pk 
   CONSTRAINT     h   ALTER TABLE ONLY public.fed_user_attribute
    ADD CONSTRAINT constr_fed_user_attr_pk PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.fed_user_attribute DROP CONSTRAINT constr_fed_user_attr_pk;
       public            postgres    false    244            u           2606    57838 +   fed_user_consent constr_fed_user_consent_pk 
   CONSTRAINT     i   ALTER TABLE ONLY public.fed_user_consent
    ADD CONSTRAINT constr_fed_user_consent_pk PRIMARY KEY (id);
 U   ALTER TABLE ONLY public.fed_user_consent DROP CONSTRAINT constr_fed_user_consent_pk;
       public            postgres    false    245            |           2606    57840 +   fed_user_credential constr_fed_user_cred_pk 
   CONSTRAINT     i   ALTER TABLE ONLY public.fed_user_credential
    ADD CONSTRAINT constr_fed_user_cred_pk PRIMARY KEY (id);
 U   ALTER TABLE ONLY public.fed_user_credential DROP CONSTRAINT constr_fed_user_cred_pk;
       public            postgres    false    247            �           2606    57842 /   fed_user_group_membership constr_fed_user_group 
   CONSTRAINT     |   ALTER TABLE ONLY public.fed_user_group_membership
    ADD CONSTRAINT constr_fed_user_group PRIMARY KEY (group_id, user_id);
 Y   ALTER TABLE ONLY public.fed_user_group_membership DROP CONSTRAINT constr_fed_user_group;
       public            postgres    false    248    248            �           2606    57844 *   fed_user_role_mapping constr_fed_user_role 
   CONSTRAINT     v   ALTER TABLE ONLY public.fed_user_role_mapping
    ADD CONSTRAINT constr_fed_user_role PRIMARY KEY (role_id, user_id);
 T   ALTER TABLE ONLY public.fed_user_role_mapping DROP CONSTRAINT constr_fed_user_role;
       public            postgres    false    250    250            �           2606    57846 $   federated_user constr_federated_user 
   CONSTRAINT     b   ALTER TABLE ONLY public.federated_user
    ADD CONSTRAINT constr_federated_user PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.federated_user DROP CONSTRAINT constr_federated_user;
       public            postgres    false    252            �           2606    57848 0   realm_default_groups constr_realm_default_groups 
   CONSTRAINT     ~   ALTER TABLE ONLY public.realm_default_groups
    ADD CONSTRAINT constr_realm_default_groups PRIMARY KEY (realm_id, group_id);
 Z   ALTER TABLE ONLY public.realm_default_groups DROP CONSTRAINT constr_realm_default_groups;
       public            postgres    false    269    269            �           2606    57850 8   realm_enabled_event_types constr_realm_enabl_event_types 
   CONSTRAINT     �   ALTER TABLE ONLY public.realm_enabled_event_types
    ADD CONSTRAINT constr_realm_enabl_event_types PRIMARY KEY (realm_id, value);
 b   ALTER TABLE ONLY public.realm_enabled_event_types DROP CONSTRAINT constr_realm_enabl_event_types;
       public            postgres    false    270    270            �           2606    57852 4   realm_events_listeners constr_realm_events_listeners 
   CONSTRAINT        ALTER TABLE ONLY public.realm_events_listeners
    ADD CONSTRAINT constr_realm_events_listeners PRIMARY KEY (realm_id, value);
 ^   ALTER TABLE ONLY public.realm_events_listeners DROP CONSTRAINT constr_realm_events_listeners;
       public            postgres    false    271    271            �           2606    57854 6   realm_supported_locales constr_realm_supported_locales 
   CONSTRAINT     �   ALTER TABLE ONLY public.realm_supported_locales
    ADD CONSTRAINT constr_realm_supported_locales PRIMARY KEY (realm_id, value);
 `   ALTER TABLE ONLY public.realm_supported_locales DROP CONSTRAINT constr_realm_supported_locales;
       public            postgres    false    275    275            �           2606    57856    identity_provider constraint_2b 
   CONSTRAINT     f   ALTER TABLE ONLY public.identity_provider
    ADD CONSTRAINT constraint_2b PRIMARY KEY (internal_id);
 I   ALTER TABLE ONLY public.identity_provider DROP CONSTRAINT constraint_2b;
       public            postgres    false    255            4           2606    57858    client_attributes constraint_3c 
   CONSTRAINT     j   ALTER TABLE ONLY public.client_attributes
    ADD CONSTRAINT constraint_3c PRIMARY KEY (client_id, name);
 I   ALTER TABLE ONLY public.client_attributes DROP CONSTRAINT constraint_3c;
       public            postgres    false    222    222            o           2606    57860    event_entity constraint_4 
   CONSTRAINT     W   ALTER TABLE ONLY public.event_entity
    ADD CONSTRAINT constraint_4 PRIMARY KEY (id);
 C   ALTER TABLE ONLY public.event_entity DROP CONSTRAINT constraint_4;
       public            postgres    false    243            �           2606    57862     federated_identity constraint_40 
   CONSTRAINT     v   ALTER TABLE ONLY public.federated_identity
    ADD CONSTRAINT constraint_40 PRIMARY KEY (identity_provider, user_id);
 J   ALTER TABLE ONLY public.federated_identity DROP CONSTRAINT constraint_40;
       public            postgres    false    251    251            �           2606    57864    realm constraint_4a 
   CONSTRAINT     Q   ALTER TABLE ONLY public.realm
    ADD CONSTRAINT constraint_4a PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.realm DROP CONSTRAINT constraint_4a;
       public            postgres    false    267            W           2606    57866     client_session_role constraint_5 
   CONSTRAINT     s   ALTER TABLE ONLY public.client_session_role
    ADD CONSTRAINT constraint_5 PRIMARY KEY (client_session, role_id);
 J   ALTER TABLE ONLY public.client_session_role DROP CONSTRAINT constraint_5;
       public            postgres    false    234    234            7           2606    57868    user_session constraint_57 
   CONSTRAINT     X   ALTER TABLE ONLY public.user_session
    ADD CONSTRAINT constraint_57 PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.user_session DROP CONSTRAINT constraint_57;
       public            postgres    false    302            +           2606    57870 &   user_federation_provider constraint_5c 
   CONSTRAINT     d   ALTER TABLE ONLY public.user_federation_provider
    ADD CONSTRAINT constraint_5c PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.user_federation_provider DROP CONSTRAINT constraint_5c;
       public            postgres    false    298            S           2606    57872 !   client_session_note constraint_5e 
   CONSTRAINT     q   ALTER TABLE ONLY public.client_session_note
    ADD CONSTRAINT constraint_5e PRIMARY KEY (client_session, name);
 K   ALTER TABLE ONLY public.client_session_note DROP CONSTRAINT constraint_5e;
       public            postgres    false    232    232            /           2606    57874    client constraint_7 
   CONSTRAINT     Q   ALTER TABLE ONLY public.client
    ADD CONSTRAINT constraint_7 PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.client DROP CONSTRAINT constraint_7;
       public            postgres    false    221            N           2606    57876    client_session constraint_8 
   CONSTRAINT     Y   ALTER TABLE ONLY public.client_session
    ADD CONSTRAINT constraint_8 PRIMARY KEY (id);
 E   ALTER TABLE ONLY public.client_session DROP CONSTRAINT constraint_8;
       public            postgres    false    230            	           2606    57878    scope_mapping constraint_81 
   CONSTRAINT     i   ALTER TABLE ONLY public.scope_mapping
    ADD CONSTRAINT constraint_81 PRIMARY KEY (client_id, role_id);
 E   ALTER TABLE ONLY public.scope_mapping DROP CONSTRAINT constraint_81;
       public            postgres    false    289    289            <           2606    57880 '   client_node_registrations constraint_84 
   CONSTRAINT     r   ALTER TABLE ONLY public.client_node_registrations
    ADD CONSTRAINT constraint_84 PRIMARY KEY (client_id, name);
 Q   ALTER TABLE ONLY public.client_node_registrations DROP CONSTRAINT constraint_84;
       public            postgres    false    225    225            �           2606    57882    realm_attribute constraint_9 
   CONSTRAINT     f   ALTER TABLE ONLY public.realm_attribute
    ADD CONSTRAINT constraint_9 PRIMARY KEY (name, realm_id);
 F   ALTER TABLE ONLY public.realm_attribute DROP CONSTRAINT constraint_9;
       public            postgres    false    268    268            �           2606    57884 '   realm_required_credential constraint_92 
   CONSTRAINT     q   ALTER TABLE ONLY public.realm_required_credential
    ADD CONSTRAINT constraint_92 PRIMARY KEY (realm_id, type);
 Q   ALTER TABLE ONLY public.realm_required_credential DROP CONSTRAINT constraint_92;
       public            postgres    false    273    273            �           2606    57886    keycloak_role constraint_a 
   CONSTRAINT     X   ALTER TABLE ONLY public.keycloak_role
    ADD CONSTRAINT constraint_a PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.keycloak_role DROP CONSTRAINT constraint_a;
       public            postgres    false    260                       2606    57888 0   admin_event_entity constraint_admin_event_entity 
   CONSTRAINT     n   ALTER TABLE ONLY public.admin_event_entity
    ADD CONSTRAINT constraint_admin_event_entity PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.admin_event_entity DROP CONSTRAINT constraint_admin_event_entity;
       public            postgres    false    214            +           2606    57890 1   authenticator_config_entry constraint_auth_cfg_pk 
   CONSTRAINT     �   ALTER TABLE ONLY public.authenticator_config_entry
    ADD CONSTRAINT constraint_auth_cfg_pk PRIMARY KEY (authenticator_id, name);
 [   ALTER TABLE ONLY public.authenticator_config_entry DROP CONSTRAINT constraint_auth_cfg_pk;
       public            postgres    false    219    219            !           2606    57892 0   authentication_execution constraint_auth_exec_pk 
   CONSTRAINT     n   ALTER TABLE ONLY public.authentication_execution
    ADD CONSTRAINT constraint_auth_exec_pk PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.authentication_execution DROP CONSTRAINT constraint_auth_exec_pk;
       public            postgres    false    216            %           2606    57894 +   authentication_flow constraint_auth_flow_pk 
   CONSTRAINT     i   ALTER TABLE ONLY public.authentication_flow
    ADD CONSTRAINT constraint_auth_flow_pk PRIMARY KEY (id);
 U   ALTER TABLE ONLY public.authentication_flow DROP CONSTRAINT constraint_auth_flow_pk;
       public            postgres    false    217            (           2606    57896 '   authenticator_config constraint_auth_pk 
   CONSTRAINT     e   ALTER TABLE ONLY public.authenticator_config
    ADD CONSTRAINT constraint_auth_pk PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.authenticator_config DROP CONSTRAINT constraint_auth_pk;
       public            postgres    false    218            Q           2606    57898 4   client_session_auth_status constraint_auth_status_pk 
   CONSTRAINT     �   ALTER TABLE ONLY public.client_session_auth_status
    ADD CONSTRAINT constraint_auth_status_pk PRIMARY KEY (client_session, authenticator);
 ^   ALTER TABLE ONLY public.client_session_auth_status DROP CONSTRAINT constraint_auth_status_pk;
       public            postgres    false    231    231            4           2606    57900    user_role_mapping constraint_c 
   CONSTRAINT     j   ALTER TABLE ONLY public.user_role_mapping
    ADD CONSTRAINT constraint_c PRIMARY KEY (role_id, user_id);
 H   ALTER TABLE ONLY public.user_role_mapping DROP CONSTRAINT constraint_c;
       public            postgres    false    301    301            b           2606    57902 (   composite_role constraint_composite_role 
   CONSTRAINT     y   ALTER TABLE ONLY public.composite_role
    ADD CONSTRAINT constraint_composite_role PRIMARY KEY (composite, child_role);
 R   ALTER TABLE ONLY public.composite_role DROP CONSTRAINT constraint_composite_role;
       public            postgres    false    238    238            U           2606    57904 /   client_session_prot_mapper constraint_cs_pmp_pk 
   CONSTRAINT     �   ALTER TABLE ONLY public.client_session_prot_mapper
    ADD CONSTRAINT constraint_cs_pmp_pk PRIMARY KEY (client_session, protocol_mapper_id);
 Y   ALTER TABLE ONLY public.client_session_prot_mapper DROP CONSTRAINT constraint_cs_pmp_pk;
       public            postgres    false    233    233            �           2606    57906 %   identity_provider_config constraint_d 
   CONSTRAINT     {   ALTER TABLE ONLY public.identity_provider_config
    ADD CONSTRAINT constraint_d PRIMARY KEY (identity_provider_id, name);
 O   ALTER TABLE ONLY public.identity_provider_config DROP CONSTRAINT constraint_d;
       public            postgres    false    256    256            �           2606    57908    policy_config constraint_dpc 
   CONSTRAINT     g   ALTER TABLE ONLY public.policy_config
    ADD CONSTRAINT constraint_dpc PRIMARY KEY (policy_id, name);
 F   ALTER TABLE ONLY public.policy_config DROP CONSTRAINT constraint_dpc;
       public            postgres    false    264    264            �           2606    57910    realm_smtp_config constraint_e 
   CONSTRAINT     h   ALTER TABLE ONLY public.realm_smtp_config
    ADD CONSTRAINT constraint_e PRIMARY KEY (realm_id, name);
 H   ALTER TABLE ONLY public.realm_smtp_config DROP CONSTRAINT constraint_e;
       public            postgres    false    274    274            f           2606    57912    credential constraint_f 
   CONSTRAINT     U   ALTER TABLE ONLY public.credential
    ADD CONSTRAINT constraint_f PRIMARY KEY (id);
 A   ALTER TABLE ONLY public.credential DROP CONSTRAINT constraint_f;
       public            postgres    false    239            #           2606    57914 $   user_federation_config constraint_f9 
   CONSTRAINT     �   ALTER TABLE ONLY public.user_federation_config
    ADD CONSTRAINT constraint_f9 PRIMARY KEY (user_federation_provider_id, name);
 N   ALTER TABLE ONLY public.user_federation_config DROP CONSTRAINT constraint_f9;
       public            postgres    false    295    295            �           2606    57916 ,   resource_server_perm_ticket constraint_fapmt 
   CONSTRAINT     j   ALTER TABLE ONLY public.resource_server_perm_ticket
    ADD CONSTRAINT constraint_fapmt PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.resource_server_perm_ticket DROP CONSTRAINT constraint_fapmt;
       public            postgres    false    283            �           2606    57918 )   resource_server_resource constraint_farsr 
   CONSTRAINT     g   ALTER TABLE ONLY public.resource_server_resource
    ADD CONSTRAINT constraint_farsr PRIMARY KEY (id);
 S   ALTER TABLE ONLY public.resource_server_resource DROP CONSTRAINT constraint_farsr;
       public            postgres    false    285            �           2606    57920 (   resource_server_policy constraint_farsrp 
   CONSTRAINT     f   ALTER TABLE ONLY public.resource_server_policy
    ADD CONSTRAINT constraint_farsrp PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.resource_server_policy DROP CONSTRAINT constraint_farsrp;
       public            postgres    false    284                       2606    57922 %   associated_policy constraint_farsrpap 
   CONSTRAINT     �   ALTER TABLE ONLY public.associated_policy
    ADD CONSTRAINT constraint_farsrpap PRIMARY KEY (policy_id, associated_policy_id);
 O   ALTER TABLE ONLY public.associated_policy DROP CONSTRAINT constraint_farsrpap;
       public            postgres    false    215    215            �           2606    57924 "   resource_policy constraint_farsrpp 
   CONSTRAINT     t   ALTER TABLE ONLY public.resource_policy
    ADD CONSTRAINT constraint_farsrpp PRIMARY KEY (resource_id, policy_id);
 L   ALTER TABLE ONLY public.resource_policy DROP CONSTRAINT constraint_farsrpp;
       public            postgres    false    280    280            �           2606    57926 '   resource_server_scope constraint_farsrs 
   CONSTRAINT     e   ALTER TABLE ONLY public.resource_server_scope
    ADD CONSTRAINT constraint_farsrs PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.resource_server_scope DROP CONSTRAINT constraint_farsrs;
       public            postgres    false    286            �           2606    57928 !   resource_scope constraint_farsrsp 
   CONSTRAINT     r   ALTER TABLE ONLY public.resource_scope
    ADD CONSTRAINT constraint_farsrsp PRIMARY KEY (resource_id, scope_id);
 K   ALTER TABLE ONLY public.resource_scope DROP CONSTRAINT constraint_farsrsp;
       public            postgres    false    281    281                       2606    57930     scope_policy constraint_farsrsps 
   CONSTRAINT     o   ALTER TABLE ONLY public.scope_policy
    ADD CONSTRAINT constraint_farsrsps PRIMARY KEY (scope_id, policy_id);
 J   ALTER TABLE ONLY public.scope_policy DROP CONSTRAINT constraint_farsrsps;
       public            postgres    false    290    290                       2606    57932    user_entity constraint_fb 
   CONSTRAINT     W   ALTER TABLE ONLY public.user_entity
    ADD CONSTRAINT constraint_fb PRIMARY KEY (id);
 C   ALTER TABLE ONLY public.user_entity DROP CONSTRAINT constraint_fb;
       public            postgres    false    294            )           2606    57934 9   user_federation_mapper_config constraint_fedmapper_cfg_pm 
   CONSTRAINT     �   ALTER TABLE ONLY public.user_federation_mapper_config
    ADD CONSTRAINT constraint_fedmapper_cfg_pm PRIMARY KEY (user_federation_mapper_id, name);
 c   ALTER TABLE ONLY public.user_federation_mapper_config DROP CONSTRAINT constraint_fedmapper_cfg_pm;
       public            postgres    false    297    297            %           2606    57936 -   user_federation_mapper constraint_fedmapperpm 
   CONSTRAINT     k   ALTER TABLE ONLY public.user_federation_mapper
    ADD CONSTRAINT constraint_fedmapperpm PRIMARY KEY (id);
 W   ALTER TABLE ONLY public.user_federation_mapper DROP CONSTRAINT constraint_fedmapperpm;
       public            postgres    false    296            z           2606    57938 6   fed_user_consent_cl_scope constraint_fgrntcsnt_clsc_pm 
   CONSTRAINT     �   ALTER TABLE ONLY public.fed_user_consent_cl_scope
    ADD CONSTRAINT constraint_fgrntcsnt_clsc_pm PRIMARY KEY (user_consent_id, scope_id);
 `   ALTER TABLE ONLY public.fed_user_consent_cl_scope DROP CONSTRAINT constraint_fgrntcsnt_clsc_pm;
       public            postgres    false    246    246                       2606    57940 5   user_consent_client_scope constraint_grntcsnt_clsc_pm 
   CONSTRAINT     �   ALTER TABLE ONLY public.user_consent_client_scope
    ADD CONSTRAINT constraint_grntcsnt_clsc_pm PRIMARY KEY (user_consent_id, scope_id);
 _   ALTER TABLE ONLY public.user_consent_client_scope DROP CONSTRAINT constraint_grntcsnt_clsc_pm;
       public            postgres    false    293    293                       2606    57942 #   user_consent constraint_grntcsnt_pm 
   CONSTRAINT     a   ALTER TABLE ONLY public.user_consent
    ADD CONSTRAINT constraint_grntcsnt_pm PRIMARY KEY (id);
 M   ALTER TABLE ONLY public.user_consent DROP CONSTRAINT constraint_grntcsnt_pm;
       public            postgres    false    292            �           2606    57944    keycloak_group constraint_group 
   CONSTRAINT     ]   ALTER TABLE ONLY public.keycloak_group
    ADD CONSTRAINT constraint_group PRIMARY KEY (id);
 I   ALTER TABLE ONLY public.keycloak_group DROP CONSTRAINT constraint_group;
       public            postgres    false    259            �           2606    57946 -   group_attribute constraint_group_attribute_pk 
   CONSTRAINT     k   ALTER TABLE ONLY public.group_attribute
    ADD CONSTRAINT constraint_group_attribute_pk PRIMARY KEY (id);
 W   ALTER TABLE ONLY public.group_attribute DROP CONSTRAINT constraint_group_attribute_pk;
       public            postgres    false    253            �           2606    57948 (   group_role_mapping constraint_group_role 
   CONSTRAINT     u   ALTER TABLE ONLY public.group_role_mapping
    ADD CONSTRAINT constraint_group_role PRIMARY KEY (role_id, group_id);
 R   ALTER TABLE ONLY public.group_role_mapping DROP CONSTRAINT constraint_group_role;
       public            postgres    false    254    254            �           2606    57950 (   identity_provider_mapper constraint_idpm 
   CONSTRAINT     f   ALTER TABLE ONLY public.identity_provider_mapper
    ADD CONSTRAINT constraint_idpm PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.identity_provider_mapper DROP CONSTRAINT constraint_idpm;
       public            postgres    false    257            �           2606    57952 '   idp_mapper_config constraint_idpmconfig 
   CONSTRAINT     v   ALTER TABLE ONLY public.idp_mapper_config
    ADD CONSTRAINT constraint_idpmconfig PRIMARY KEY (idp_mapper_id, name);
 Q   ALTER TABLE ONLY public.idp_mapper_config DROP CONSTRAINT constraint_idpmconfig;
       public            postgres    false    258    258            �           2606    57954 !   migration_model constraint_migmod 
   CONSTRAINT     _   ALTER TABLE ONLY public.migration_model
    ADD CONSTRAINT constraint_migmod PRIMARY KEY (id);
 K   ALTER TABLE ONLY public.migration_model DROP CONSTRAINT constraint_migmod;
       public            postgres    false    261            �           2606    57956 1   offline_client_session constraint_offl_cl_ses_pk3 
   CONSTRAINT     �   ALTER TABLE ONLY public.offline_client_session
    ADD CONSTRAINT constraint_offl_cl_ses_pk3 PRIMARY KEY (user_session_id, client_id, client_storage_provider, external_client_id, offline_flag);
 [   ALTER TABLE ONLY public.offline_client_session DROP CONSTRAINT constraint_offl_cl_ses_pk3;
       public            postgres    false    262    262    262    262    262            �           2606    57958 /   offline_user_session constraint_offl_us_ses_pk2 
   CONSTRAINT     �   ALTER TABLE ONLY public.offline_user_session
    ADD CONSTRAINT constraint_offl_us_ses_pk2 PRIMARY KEY (user_session_id, offline_flag);
 Y   ALTER TABLE ONLY public.offline_user_session DROP CONSTRAINT constraint_offl_us_ses_pk2;
       public            postgres    false    263    263            �           2606    57960    protocol_mapper constraint_pcm 
   CONSTRAINT     \   ALTER TABLE ONLY public.protocol_mapper
    ADD CONSTRAINT constraint_pcm PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.protocol_mapper DROP CONSTRAINT constraint_pcm;
       public            postgres    false    265            �           2606    57962 *   protocol_mapper_config constraint_pmconfig 
   CONSTRAINT     ~   ALTER TABLE ONLY public.protocol_mapper_config
    ADD CONSTRAINT constraint_pmconfig PRIMARY KEY (protocol_mapper_id, name);
 T   ALTER TABLE ONLY public.protocol_mapper_config DROP CONSTRAINT constraint_pmconfig;
       public            postgres    false    266    266            �           2606    57964 &   redirect_uris constraint_redirect_uris 
   CONSTRAINT     r   ALTER TABLE ONLY public.redirect_uris
    ADD CONSTRAINT constraint_redirect_uris PRIMARY KEY (client_id, value);
 P   ALTER TABLE ONLY public.redirect_uris DROP CONSTRAINT constraint_redirect_uris;
       public            postgres    false    276    276            �           2606    57966 0   required_action_config constraint_req_act_cfg_pk 
   CONSTRAINT     �   ALTER TABLE ONLY public.required_action_config
    ADD CONSTRAINT constraint_req_act_cfg_pk PRIMARY KEY (required_action_id, name);
 Z   ALTER TABLE ONLY public.required_action_config DROP CONSTRAINT constraint_req_act_cfg_pk;
       public            postgres    false    277    277            �           2606    57968 2   required_action_provider constraint_req_act_prv_pk 
   CONSTRAINT     p   ALTER TABLE ONLY public.required_action_provider
    ADD CONSTRAINT constraint_req_act_prv_pk PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.required_action_provider DROP CONSTRAINT constraint_req_act_prv_pk;
       public            postgres    false    278            1           2606    57970 /   user_required_action constraint_required_action 
   CONSTRAINT     �   ALTER TABLE ONLY public.user_required_action
    ADD CONSTRAINT constraint_required_action PRIMARY KEY (required_action, user_id);
 Y   ALTER TABLE ONLY public.user_required_action DROP CONSTRAINT constraint_required_action;
       public            postgres    false    300    300                       2606    57972 '   resource_uris constraint_resour_uris_pk 
   CONSTRAINT     u   ALTER TABLE ONLY public.resource_uris
    ADD CONSTRAINT constraint_resour_uris_pk PRIMARY KEY (resource_id, value);
 Q   ALTER TABLE ONLY public.resource_uris DROP CONSTRAINT constraint_resour_uris_pk;
       public            postgres    false    287    287                       2606    57974 +   role_attribute constraint_role_attribute_pk 
   CONSTRAINT     i   ALTER TABLE ONLY public.role_attribute
    ADD CONSTRAINT constraint_role_attribute_pk PRIMARY KEY (id);
 U   ALTER TABLE ONLY public.role_attribute DROP CONSTRAINT constraint_role_attribute_pk;
       public            postgres    false    288                       2606    57976 +   user_attribute constraint_user_attribute_pk 
   CONSTRAINT     i   ALTER TABLE ONLY public.user_attribute
    ADD CONSTRAINT constraint_user_attribute_pk PRIMARY KEY (id);
 U   ALTER TABLE ONLY public.user_attribute DROP CONSTRAINT constraint_user_attribute_pk;
       public            postgres    false    291            .           2606    57978 +   user_group_membership constraint_user_group 
   CONSTRAINT     x   ALTER TABLE ONLY public.user_group_membership
    ADD CONSTRAINT constraint_user_group PRIMARY KEY (group_id, user_id);
 U   ALTER TABLE ONLY public.user_group_membership DROP CONSTRAINT constraint_user_group;
       public            postgres    false    299    299            9           2606    57980 #   user_session_note constraint_usn_pk 
   CONSTRAINT     q   ALTER TABLE ONLY public.user_session_note
    ADD CONSTRAINT constraint_usn_pk PRIMARY KEY (user_session, name);
 M   ALTER TABLE ONLY public.user_session_note DROP CONSTRAINT constraint_usn_pk;
       public            postgres    false    303    303            =           2606    57982 "   web_origins constraint_web_origins 
   CONSTRAINT     n   ALTER TABLE ONLY public.web_origins
    ADD CONSTRAINT constraint_web_origins PRIMARY KEY (client_id, value);
 L   ALTER TABLE ONLY public.web_origins DROP CONSTRAINT constraint_web_origins;
       public            postgres    false    305    305            i           2606    57984 0   databasechangeloglock databasechangeloglock_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.databasechangeloglock
    ADD CONSTRAINT databasechangeloglock_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.databasechangeloglock DROP CONSTRAINT databasechangeloglock_pkey;
       public            postgres    false    241            D           2606    57986 '   client_scope_attributes pk_cl_tmpl_attr 
   CONSTRAINT     q   ALTER TABLE ONLY public.client_scope_attributes
    ADD CONSTRAINT pk_cl_tmpl_attr PRIMARY KEY (scope_id, name);
 Q   ALTER TABLE ONLY public.client_scope_attributes DROP CONSTRAINT pk_cl_tmpl_attr;
       public            postgres    false    227    227            ?           2606    57988    client_scope pk_cli_template 
   CONSTRAINT     Z   ALTER TABLE ONLY public.client_scope
    ADD CONSTRAINT pk_cli_template PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.client_scope DROP CONSTRAINT pk_cli_template;
       public            postgres    false    226            �           2606    57990 "   resource_server pk_resource_server 
   CONSTRAINT     `   ALTER TABLE ONLY public.resource_server
    ADD CONSTRAINT pk_resource_server PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.resource_server DROP CONSTRAINT pk_resource_server;
       public            postgres    false    282            L           2606    57992 +   client_scope_role_mapping pk_template_scope 
   CONSTRAINT     x   ALTER TABLE ONLY public.client_scope_role_mapping
    ADD CONSTRAINT pk_template_scope PRIMARY KEY (scope_id, role_id);
 U   ALTER TABLE ONLY public.client_scope_role_mapping DROP CONSTRAINT pk_template_scope;
       public            postgres    false    229    229            m           2606    57994 )   default_client_scope r_def_cli_scope_bind 
   CONSTRAINT     w   ALTER TABLE ONLY public.default_client_scope
    ADD CONSTRAINT r_def_cli_scope_bind PRIMARY KEY (realm_id, scope_id);
 S   ALTER TABLE ONLY public.default_client_scope DROP CONSTRAINT r_def_cli_scope_bind;
       public            postgres    false    242    242            �           2606    57996 ,   realm_localizations realm_localizations_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public.realm_localizations
    ADD CONSTRAINT realm_localizations_pkey PRIMARY KEY (realm_id, locale);
 V   ALTER TABLE ONLY public.realm_localizations DROP CONSTRAINT realm_localizations_pkey;
       public            postgres    false    272    272            �           2606    57998    resource_attribute res_attr_pk 
   CONSTRAINT     \   ALTER TABLE ONLY public.resource_attribute
    ADD CONSTRAINT res_attr_pk PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.resource_attribute DROP CONSTRAINT res_attr_pk;
       public            postgres    false    279            �           2606    58000    keycloak_group sibling_names 
   CONSTRAINT     o   ALTER TABLE ONLY public.keycloak_group
    ADD CONSTRAINT sibling_names UNIQUE (realm_id, parent_group, name);
 F   ALTER TABLE ONLY public.keycloak_group DROP CONSTRAINT sibling_names;
       public            postgres    false    259    259    259            �           2606    58002 /   identity_provider uk_2daelwnibji49avxsrtuf6xj33 
   CONSTRAINT     ~   ALTER TABLE ONLY public.identity_provider
    ADD CONSTRAINT uk_2daelwnibji49avxsrtuf6xj33 UNIQUE (provider_alias, realm_id);
 Y   ALTER TABLE ONLY public.identity_provider DROP CONSTRAINT uk_2daelwnibji49avxsrtuf6xj33;
       public            postgres    false    255    255            2           2606    58004 #   client uk_b71cjlbenv945rb6gcon438at 
   CONSTRAINT     m   ALTER TABLE ONLY public.client
    ADD CONSTRAINT uk_b71cjlbenv945rb6gcon438at UNIQUE (realm_id, client_id);
 M   ALTER TABLE ONLY public.client DROP CONSTRAINT uk_b71cjlbenv945rb6gcon438at;
       public            postgres    false    221    221            A           2606    58006    client_scope uk_cli_scope 
   CONSTRAINT     ^   ALTER TABLE ONLY public.client_scope
    ADD CONSTRAINT uk_cli_scope UNIQUE (realm_id, name);
 C   ALTER TABLE ONLY public.client_scope DROP CONSTRAINT uk_cli_scope;
       public            postgres    false    226    226                       2606    58008 (   user_entity uk_dykn684sl8up1crfei6eckhd7 
   CONSTRAINT     y   ALTER TABLE ONLY public.user_entity
    ADD CONSTRAINT uk_dykn684sl8up1crfei6eckhd7 UNIQUE (realm_id, email_constraint);
 R   ALTER TABLE ONLY public.user_entity DROP CONSTRAINT uk_dykn684sl8up1crfei6eckhd7;
       public            postgres    false    294    294            �           2606    58010 4   resource_server_resource uk_frsr6t700s9v50bu18ws5ha6 
   CONSTRAINT     �   ALTER TABLE ONLY public.resource_server_resource
    ADD CONSTRAINT uk_frsr6t700s9v50bu18ws5ha6 UNIQUE (name, owner, resource_server_id);
 ^   ALTER TABLE ONLY public.resource_server_resource DROP CONSTRAINT uk_frsr6t700s9v50bu18ws5ha6;
       public            postgres    false    285    285    285            �           2606    58012 7   resource_server_perm_ticket uk_frsr6t700s9v50bu18ws5pmt 
   CONSTRAINT     �   ALTER TABLE ONLY public.resource_server_perm_ticket
    ADD CONSTRAINT uk_frsr6t700s9v50bu18ws5pmt UNIQUE (owner, requester, resource_server_id, resource_id, scope_id);
 a   ALTER TABLE ONLY public.resource_server_perm_ticket DROP CONSTRAINT uk_frsr6t700s9v50bu18ws5pmt;
       public            postgres    false    283    283    283    283    283            �           2606    58014 2   resource_server_policy uk_frsrpt700s9v50bu18ws5ha6 
   CONSTRAINT     �   ALTER TABLE ONLY public.resource_server_policy
    ADD CONSTRAINT uk_frsrpt700s9v50bu18ws5ha6 UNIQUE (name, resource_server_id);
 \   ALTER TABLE ONLY public.resource_server_policy DROP CONSTRAINT uk_frsrpt700s9v50bu18ws5ha6;
       public            postgres    false    284    284                       2606    58016 1   resource_server_scope uk_frsrst700s9v50bu18ws5ha6 
   CONSTRAINT     �   ALTER TABLE ONLY public.resource_server_scope
    ADD CONSTRAINT uk_frsrst700s9v50bu18ws5ha6 UNIQUE (name, resource_server_id);
 [   ALTER TABLE ONLY public.resource_server_scope DROP CONSTRAINT uk_frsrst700s9v50bu18ws5ha6;
       public            postgres    false    286    286                       2606    58018 )   user_consent uk_jkuwuvd56ontgsuhogm8uewrt 
   CONSTRAINT     �   ALTER TABLE ONLY public.user_consent
    ADD CONSTRAINT uk_jkuwuvd56ontgsuhogm8uewrt UNIQUE (client_id, client_storage_provider, external_client_id, user_id);
 S   ALTER TABLE ONLY public.user_consent DROP CONSTRAINT uk_jkuwuvd56ontgsuhogm8uewrt;
       public            postgres    false    292    292    292    292            �           2606    58020 "   realm uk_orvsdmla56612eaefiq6wl5oi 
   CONSTRAINT     ]   ALTER TABLE ONLY public.realm
    ADD CONSTRAINT uk_orvsdmla56612eaefiq6wl5oi UNIQUE (name);
 L   ALTER TABLE ONLY public.realm DROP CONSTRAINT uk_orvsdmla56612eaefiq6wl5oi;
       public            postgres    false    267            !           2606    58022 (   user_entity uk_ru8tt6t700s9v50bu18ws5ha6 
   CONSTRAINT     q   ALTER TABLE ONLY public.user_entity
    ADD CONSTRAINT uk_ru8tt6t700s9v50bu18ws5ha6 UNIQUE (realm_id, username);
 R   ALTER TABLE ONLY public.user_entity DROP CONSTRAINT uk_ru8tt6t700s9v50bu18ws5ha6;
       public            postgres    false    294    294                       1259    58023    idx_admin_event_time    INDEX     i   CREATE INDEX idx_admin_event_time ON public.admin_event_entity USING btree (realm_id, admin_event_time);
 (   DROP INDEX public.idx_admin_event_time;
       public            postgres    false    214    214                       1259    58024    idx_assoc_pol_assoc_pol_id    INDEX     h   CREATE INDEX idx_assoc_pol_assoc_pol_id ON public.associated_policy USING btree (associated_policy_id);
 .   DROP INDEX public.idx_assoc_pol_assoc_pol_id;
       public            postgres    false    215            )           1259    58025    idx_auth_config_realm    INDEX     Z   CREATE INDEX idx_auth_config_realm ON public.authenticator_config USING btree (realm_id);
 )   DROP INDEX public.idx_auth_config_realm;
       public            postgres    false    218            "           1259    58026    idx_auth_exec_flow    INDEX     Z   CREATE INDEX idx_auth_exec_flow ON public.authentication_execution USING btree (flow_id);
 &   DROP INDEX public.idx_auth_exec_flow;
       public            postgres    false    216            #           1259    58027    idx_auth_exec_realm_flow    INDEX     j   CREATE INDEX idx_auth_exec_realm_flow ON public.authentication_execution USING btree (realm_id, flow_id);
 ,   DROP INDEX public.idx_auth_exec_realm_flow;
       public            postgres    false    216    216            &           1259    58028    idx_auth_flow_realm    INDEX     W   CREATE INDEX idx_auth_flow_realm ON public.authentication_flow USING btree (realm_id);
 '   DROP INDEX public.idx_auth_flow_realm;
       public            postgres    false    217            G           1259    58029    idx_cl_clscope    INDEX     R   CREATE INDEX idx_cl_clscope ON public.client_scope_client USING btree (scope_id);
 "   DROP INDEX public.idx_cl_clscope;
       public            postgres    false    228            5           1259    58030    idx_client_att_by_name_value    INDEX     }   CREATE INDEX idx_client_att_by_name_value ON public.client_attributes USING btree (name, ((value)::character varying(250)));
 0   DROP INDEX public.idx_client_att_by_name_value;
       public            postgres    false    222    222            0           1259    58031    idx_client_id    INDEX     E   CREATE INDEX idx_client_id ON public.client USING btree (client_id);
 !   DROP INDEX public.idx_client_id;
       public            postgres    false    221            :           1259    58032    idx_client_init_acc_realm    INDEX     _   CREATE INDEX idx_client_init_acc_realm ON public.client_initial_access USING btree (realm_id);
 -   DROP INDEX public.idx_client_init_acc_realm;
       public            postgres    false    224            O           1259    58033    idx_client_session_session    INDEX     [   CREATE INDEX idx_client_session_session ON public.client_session USING btree (session_id);
 .   DROP INDEX public.idx_client_session_session;
       public            postgres    false    230            B           1259    58034    idx_clscope_attrs    INDEX     Y   CREATE INDEX idx_clscope_attrs ON public.client_scope_attributes USING btree (scope_id);
 %   DROP INDEX public.idx_clscope_attrs;
       public            postgres    false    227            H           1259    58035    idx_clscope_cl    INDEX     S   CREATE INDEX idx_clscope_cl ON public.client_scope_client USING btree (client_id);
 "   DROP INDEX public.idx_clscope_cl;
       public            postgres    false    228            �           1259    58036    idx_clscope_protmap    INDEX     Z   CREATE INDEX idx_clscope_protmap ON public.protocol_mapper USING btree (client_scope_id);
 '   DROP INDEX public.idx_clscope_protmap;
       public            postgres    false    265            I           1259    58037    idx_clscope_role    INDEX     Z   CREATE INDEX idx_clscope_role ON public.client_scope_role_mapping USING btree (scope_id);
 $   DROP INDEX public.idx_clscope_role;
       public            postgres    false    229            `           1259    58038    idx_compo_config_compo    INDEX     [   CREATE INDEX idx_compo_config_compo ON public.component_config USING btree (component_id);
 *   DROP INDEX public.idx_compo_config_compo;
       public            postgres    false    237            \           1259    58039    idx_component_provider_type    INDEX     Z   CREATE INDEX idx_component_provider_type ON public.component USING btree (provider_type);
 /   DROP INDEX public.idx_component_provider_type;
       public            postgres    false    236            ]           1259    58040    idx_component_realm    INDEX     M   CREATE INDEX idx_component_realm ON public.component USING btree (realm_id);
 '   DROP INDEX public.idx_component_realm;
       public            postgres    false    236            c           1259    58041    idx_composite    INDEX     M   CREATE INDEX idx_composite ON public.composite_role USING btree (composite);
 !   DROP INDEX public.idx_composite;
       public            postgres    false    238            d           1259    58042    idx_composite_child    INDEX     T   CREATE INDEX idx_composite_child ON public.composite_role USING btree (child_role);
 '   DROP INDEX public.idx_composite_child;
       public            postgres    false    238            j           1259    58043    idx_defcls_realm    INDEX     U   CREATE INDEX idx_defcls_realm ON public.default_client_scope USING btree (realm_id);
 $   DROP INDEX public.idx_defcls_realm;
       public            postgres    false    242            k           1259    58044    idx_defcls_scope    INDEX     U   CREATE INDEX idx_defcls_scope ON public.default_client_scope USING btree (scope_id);
 $   DROP INDEX public.idx_defcls_scope;
       public            postgres    false    242            p           1259    58045    idx_event_time    INDEX     W   CREATE INDEX idx_event_time ON public.event_entity USING btree (realm_id, event_time);
 "   DROP INDEX public.idx_event_time;
       public            postgres    false    243    243            �           1259    58046    idx_fedidentity_feduser    INDEX     c   CREATE INDEX idx_fedidentity_feduser ON public.federated_identity USING btree (federated_user_id);
 +   DROP INDEX public.idx_fedidentity_feduser;
       public            postgres    false    251            �           1259    58047    idx_fedidentity_user    INDEX     V   CREATE INDEX idx_fedidentity_user ON public.federated_identity USING btree (user_id);
 (   DROP INDEX public.idx_fedidentity_user;
       public            postgres    false    251            s           1259    58048    idx_fu_attribute    INDEX     b   CREATE INDEX idx_fu_attribute ON public.fed_user_attribute USING btree (user_id, realm_id, name);
 $   DROP INDEX public.idx_fu_attribute;
       public            postgres    false    244    244    244            v           1259    58049    idx_fu_cnsnt_ext    INDEX     }   CREATE INDEX idx_fu_cnsnt_ext ON public.fed_user_consent USING btree (user_id, client_storage_provider, external_client_id);
 $   DROP INDEX public.idx_fu_cnsnt_ext;
       public            postgres    false    245    245    245            w           1259    58050    idx_fu_consent    INDEX     Y   CREATE INDEX idx_fu_consent ON public.fed_user_consent USING btree (user_id, client_id);
 "   DROP INDEX public.idx_fu_consent;
       public            postgres    false    245    245            x           1259    58051    idx_fu_consent_ru    INDEX     [   CREATE INDEX idx_fu_consent_ru ON public.fed_user_consent USING btree (realm_id, user_id);
 %   DROP INDEX public.idx_fu_consent_ru;
       public            postgres    false    245    245            }           1259    58052    idx_fu_credential    INDEX     Z   CREATE INDEX idx_fu_credential ON public.fed_user_credential USING btree (user_id, type);
 %   DROP INDEX public.idx_fu_credential;
       public            postgres    false    247    247            ~           1259    58053    idx_fu_credential_ru    INDEX     a   CREATE INDEX idx_fu_credential_ru ON public.fed_user_credential USING btree (realm_id, user_id);
 (   DROP INDEX public.idx_fu_credential_ru;
       public            postgres    false    247    247            �           1259    58054    idx_fu_group_membership    INDEX     j   CREATE INDEX idx_fu_group_membership ON public.fed_user_group_membership USING btree (user_id, group_id);
 +   DROP INDEX public.idx_fu_group_membership;
       public            postgres    false    248    248            �           1259    58055    idx_fu_group_membership_ru    INDEX     m   CREATE INDEX idx_fu_group_membership_ru ON public.fed_user_group_membership USING btree (realm_id, user_id);
 .   DROP INDEX public.idx_fu_group_membership_ru;
       public            postgres    false    248    248            �           1259    58056    idx_fu_required_action    INDEX     o   CREATE INDEX idx_fu_required_action ON public.fed_user_required_action USING btree (user_id, required_action);
 *   DROP INDEX public.idx_fu_required_action;
       public            postgres    false    249    249            �           1259    58057    idx_fu_required_action_ru    INDEX     k   CREATE INDEX idx_fu_required_action_ru ON public.fed_user_required_action USING btree (realm_id, user_id);
 -   DROP INDEX public.idx_fu_required_action_ru;
       public            postgres    false    249    249            �           1259    58058    idx_fu_role_mapping    INDEX     a   CREATE INDEX idx_fu_role_mapping ON public.fed_user_role_mapping USING btree (user_id, role_id);
 '   DROP INDEX public.idx_fu_role_mapping;
       public            postgres    false    250    250            �           1259    58059    idx_fu_role_mapping_ru    INDEX     e   CREATE INDEX idx_fu_role_mapping_ru ON public.fed_user_role_mapping USING btree (realm_id, user_id);
 *   DROP INDEX public.idx_fu_role_mapping_ru;
       public            postgres    false    250    250            �           1259    58060    idx_group_attr_group    INDEX     T   CREATE INDEX idx_group_attr_group ON public.group_attribute USING btree (group_id);
 (   DROP INDEX public.idx_group_attr_group;
       public            postgres    false    253            �           1259    58061    idx_group_role_mapp_group    INDEX     \   CREATE INDEX idx_group_role_mapp_group ON public.group_role_mapping USING btree (group_id);
 -   DROP INDEX public.idx_group_role_mapp_group;
       public            postgres    false    254            �           1259    58062    idx_id_prov_mapp_realm    INDEX     _   CREATE INDEX idx_id_prov_mapp_realm ON public.identity_provider_mapper USING btree (realm_id);
 *   DROP INDEX public.idx_id_prov_mapp_realm;
       public            postgres    false    257            �           1259    58063    idx_ident_prov_realm    INDEX     V   CREATE INDEX idx_ident_prov_realm ON public.identity_provider USING btree (realm_id);
 (   DROP INDEX public.idx_ident_prov_realm;
       public            postgres    false    255            �           1259    58064    idx_keycloak_role_client    INDEX     T   CREATE INDEX idx_keycloak_role_client ON public.keycloak_role USING btree (client);
 ,   DROP INDEX public.idx_keycloak_role_client;
       public            postgres    false    260            �           1259    58065    idx_keycloak_role_realm    INDEX     R   CREATE INDEX idx_keycloak_role_realm ON public.keycloak_role USING btree (realm);
 +   DROP INDEX public.idx_keycloak_role_realm;
       public            postgres    false    260            �           1259    58066    idx_offline_css_preload    INDEX     m   CREATE INDEX idx_offline_css_preload ON public.offline_client_session USING btree (client_id, offline_flag);
 +   DROP INDEX public.idx_offline_css_preload;
       public            postgres    false    262    262            �           1259    58067    idx_offline_uss_by_user    INDEX     s   CREATE INDEX idx_offline_uss_by_user ON public.offline_user_session USING btree (user_id, realm_id, offline_flag);
 +   DROP INDEX public.idx_offline_uss_by_user;
       public            postgres    false    263    263    263            �           1259    58068    idx_offline_uss_by_usersess    INDEX        CREATE INDEX idx_offline_uss_by_usersess ON public.offline_user_session USING btree (realm_id, offline_flag, user_session_id);
 /   DROP INDEX public.idx_offline_uss_by_usersess;
       public            postgres    false    263    263    263            �           1259    58069    idx_offline_uss_createdon    INDEX     `   CREATE INDEX idx_offline_uss_createdon ON public.offline_user_session USING btree (created_on);
 -   DROP INDEX public.idx_offline_uss_createdon;
       public            postgres    false    263            �           1259    58070    idx_offline_uss_preload    INDEX     }   CREATE INDEX idx_offline_uss_preload ON public.offline_user_session USING btree (offline_flag, created_on, user_session_id);
 +   DROP INDEX public.idx_offline_uss_preload;
       public            postgres    false    263    263    263            �           1259    58071    idx_protocol_mapper_client    INDEX     [   CREATE INDEX idx_protocol_mapper_client ON public.protocol_mapper USING btree (client_id);
 .   DROP INDEX public.idx_protocol_mapper_client;
       public            postgres    false    265            �           1259    58072    idx_realm_attr_realm    INDEX     T   CREATE INDEX idx_realm_attr_realm ON public.realm_attribute USING btree (realm_id);
 (   DROP INDEX public.idx_realm_attr_realm;
       public            postgres    false    268            =           1259    58073    idx_realm_clscope    INDEX     N   CREATE INDEX idx_realm_clscope ON public.client_scope USING btree (realm_id);
 %   DROP INDEX public.idx_realm_clscope;
       public            postgres    false    226            �           1259    58074    idx_realm_def_grp_realm    INDEX     \   CREATE INDEX idx_realm_def_grp_realm ON public.realm_default_groups USING btree (realm_id);
 +   DROP INDEX public.idx_realm_def_grp_realm;
       public            postgres    false    269            �           1259    58075    idx_realm_evt_list_realm    INDEX     _   CREATE INDEX idx_realm_evt_list_realm ON public.realm_events_listeners USING btree (realm_id);
 ,   DROP INDEX public.idx_realm_evt_list_realm;
       public            postgres    false    271            �           1259    58076    idx_realm_evt_types_realm    INDEX     c   CREATE INDEX idx_realm_evt_types_realm ON public.realm_enabled_event_types USING btree (realm_id);
 -   DROP INDEX public.idx_realm_evt_types_realm;
       public            postgres    false    270            �           1259    58077    idx_realm_master_adm_cli    INDEX     Y   CREATE INDEX idx_realm_master_adm_cli ON public.realm USING btree (master_admin_client);
 ,   DROP INDEX public.idx_realm_master_adm_cli;
       public            postgres    false    267            �           1259    58078    idx_realm_supp_local_realm    INDEX     b   CREATE INDEX idx_realm_supp_local_realm ON public.realm_supported_locales USING btree (realm_id);
 .   DROP INDEX public.idx_realm_supp_local_realm;
       public            postgres    false    275            �           1259    58079    idx_redir_uri_client    INDEX     S   CREATE INDEX idx_redir_uri_client ON public.redirect_uris USING btree (client_id);
 (   DROP INDEX public.idx_redir_uri_client;
       public            postgres    false    276            �           1259    58080    idx_req_act_prov_realm    INDEX     _   CREATE INDEX idx_req_act_prov_realm ON public.required_action_provider USING btree (realm_id);
 *   DROP INDEX public.idx_req_act_prov_realm;
       public            postgres    false    278            �           1259    58081    idx_res_policy_policy    INDEX     V   CREATE INDEX idx_res_policy_policy ON public.resource_policy USING btree (policy_id);
 )   DROP INDEX public.idx_res_policy_policy;
       public            postgres    false    280            �           1259    58082    idx_res_scope_scope    INDEX     R   CREATE INDEX idx_res_scope_scope ON public.resource_scope USING btree (scope_id);
 '   DROP INDEX public.idx_res_scope_scope;
       public            postgres    false    281            �           1259    58083    idx_res_serv_pol_res_serv    INDEX     j   CREATE INDEX idx_res_serv_pol_res_serv ON public.resource_server_policy USING btree (resource_server_id);
 -   DROP INDEX public.idx_res_serv_pol_res_serv;
       public            postgres    false    284            �           1259    58084    idx_res_srv_res_res_srv    INDEX     j   CREATE INDEX idx_res_srv_res_res_srv ON public.resource_server_resource USING btree (resource_server_id);
 +   DROP INDEX public.idx_res_srv_res_res_srv;
       public            postgres    false    285                        1259    58085    idx_res_srv_scope_res_srv    INDEX     i   CREATE INDEX idx_res_srv_scope_res_srv ON public.resource_server_scope USING btree (resource_server_id);
 -   DROP INDEX public.idx_res_srv_scope_res_srv;
       public            postgres    false    286                       1259    58086    idx_role_attribute    INDEX     P   CREATE INDEX idx_role_attribute ON public.role_attribute USING btree (role_id);
 &   DROP INDEX public.idx_role_attribute;
       public            postgres    false    288            J           1259    58087    idx_role_clscope    INDEX     Y   CREATE INDEX idx_role_clscope ON public.client_scope_role_mapping USING btree (role_id);
 $   DROP INDEX public.idx_role_clscope;
       public            postgres    false    229            
           1259    58088    idx_scope_mapping_role    INDEX     S   CREATE INDEX idx_scope_mapping_role ON public.scope_mapping USING btree (role_id);
 *   DROP INDEX public.idx_scope_mapping_role;
       public            postgres    false    289                       1259    58089    idx_scope_policy_policy    INDEX     U   CREATE INDEX idx_scope_policy_policy ON public.scope_policy USING btree (policy_id);
 +   DROP INDEX public.idx_scope_policy_policy;
       public            postgres    false    290            �           1259    58090    idx_update_time    INDEX     R   CREATE INDEX idx_update_time ON public.migration_model USING btree (update_time);
 #   DROP INDEX public.idx_update_time;
       public            postgres    false    261            �           1259    58091    idx_us_sess_id_on_cl_sess    INDEX     g   CREATE INDEX idx_us_sess_id_on_cl_sess ON public.offline_client_session USING btree (user_session_id);
 -   DROP INDEX public.idx_us_sess_id_on_cl_sess;
       public            postgres    false    262                       1259    58092    idx_usconsent_clscope    INDEX     f   CREATE INDEX idx_usconsent_clscope ON public.user_consent_client_scope USING btree (user_consent_id);
 )   DROP INDEX public.idx_usconsent_clscope;
       public            postgres    false    293                       1259    58093    idx_user_attribute    INDEX     P   CREATE INDEX idx_user_attribute ON public.user_attribute USING btree (user_id);
 &   DROP INDEX public.idx_user_attribute;
       public            postgres    false    291                       1259    58094    idx_user_attribute_name    INDEX     Y   CREATE INDEX idx_user_attribute_name ON public.user_attribute USING btree (name, value);
 +   DROP INDEX public.idx_user_attribute_name;
       public            postgres    false    291    291                       1259    58095    idx_user_consent    INDEX     L   CREATE INDEX idx_user_consent ON public.user_consent USING btree (user_id);
 $   DROP INDEX public.idx_user_consent;
       public            postgres    false    292            g           1259    58096    idx_user_credential    INDEX     M   CREATE INDEX idx_user_credential ON public.credential USING btree (user_id);
 '   DROP INDEX public.idx_user_credential;
       public            postgres    false    239                       1259    58097    idx_user_email    INDEX     G   CREATE INDEX idx_user_email ON public.user_entity USING btree (email);
 "   DROP INDEX public.idx_user_email;
       public            postgres    false    294            /           1259    58098    idx_user_group_mapping    INDEX     [   CREATE INDEX idx_user_group_mapping ON public.user_group_membership USING btree (user_id);
 *   DROP INDEX public.idx_user_group_mapping;
       public            postgres    false    299            2           1259    58099    idx_user_reqactions    INDEX     W   CREATE INDEX idx_user_reqactions ON public.user_required_action USING btree (user_id);
 '   DROP INDEX public.idx_user_reqactions;
       public            postgres    false    300            5           1259    58100    idx_user_role_mapping    INDEX     V   CREATE INDEX idx_user_role_mapping ON public.user_role_mapping USING btree (user_id);
 )   DROP INDEX public.idx_user_role_mapping;
       public            postgres    false    301                       1259    58101    idx_user_service_account    INDEX     q   CREATE INDEX idx_user_service_account ON public.user_entity USING btree (realm_id, service_account_client_link);
 ,   DROP INDEX public.idx_user_service_account;
       public            postgres    false    294    294            &           1259    58102    idx_usr_fed_map_fed_prv    INDEX     l   CREATE INDEX idx_usr_fed_map_fed_prv ON public.user_federation_mapper USING btree (federation_provider_id);
 +   DROP INDEX public.idx_usr_fed_map_fed_prv;
       public            postgres    false    296            '           1259    58103    idx_usr_fed_map_realm    INDEX     \   CREATE INDEX idx_usr_fed_map_realm ON public.user_federation_mapper USING btree (realm_id);
 )   DROP INDEX public.idx_usr_fed_map_realm;
       public            postgres    false    296            ,           1259    58104    idx_usr_fed_prv_realm    INDEX     ^   CREATE INDEX idx_usr_fed_prv_realm ON public.user_federation_provider USING btree (realm_id);
 )   DROP INDEX public.idx_usr_fed_prv_realm;
       public            postgres    false    298            >           1259    58105    idx_web_orig_client    INDEX     P   CREATE INDEX idx_web_orig_client ON public.web_origins USING btree (client_id);
 '   DROP INDEX public.idx_web_orig_client;
       public            postgres    false    305            K           2606    58106 1   client_session_auth_status auth_status_constraint    FK CONSTRAINT     �   ALTER TABLE ONLY public.client_session_auth_status
    ADD CONSTRAINT auth_status_constraint FOREIGN KEY (client_session) REFERENCES public.client_session(id);
 [   ALTER TABLE ONLY public.client_session_auth_status DROP CONSTRAINT auth_status_constraint;
       public          postgres    false    3662    230    231            Y           2606    58111 $   identity_provider fk2b4ebc52ae5c3b34    FK CONSTRAINT     �   ALTER TABLE ONLY public.identity_provider
    ADD CONSTRAINT fk2b4ebc52ae5c3b34 FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 N   ALTER TABLE ONLY public.identity_provider DROP CONSTRAINT fk2b4ebc52ae5c3b34;
       public          postgres    false    3779    267    255            E           2606    58116 $   client_attributes fk3c47c64beacca966    FK CONSTRAINT     �   ALTER TABLE ONLY public.client_attributes
    ADD CONSTRAINT fk3c47c64beacca966 FOREIGN KEY (client_id) REFERENCES public.client(id);
 N   ALTER TABLE ONLY public.client_attributes DROP CONSTRAINT fk3c47c64beacca966;
       public          postgres    false    3631    221    222            V           2606    58121 %   federated_identity fk404288b92ef007a6    FK CONSTRAINT     �   ALTER TABLE ONLY public.federated_identity
    ADD CONSTRAINT fk404288b92ef007a6 FOREIGN KEY (user_id) REFERENCES public.user_entity(id);
 O   ALTER TABLE ONLY public.federated_identity DROP CONSTRAINT fk404288b92ef007a6;
       public          postgres    false    3867    294    251            G           2606    58126 ,   client_node_registrations fk4129723ba992f594    FK CONSTRAINT     �   ALTER TABLE ONLY public.client_node_registrations
    ADD CONSTRAINT fk4129723ba992f594 FOREIGN KEY (client_id) REFERENCES public.client(id);
 V   ALTER TABLE ONLY public.client_node_registrations DROP CONSTRAINT fk4129723ba992f594;
       public          postgres    false    3631    225    221            L           2606    58131 &   client_session_note fk5edfb00ff51c2736    FK CONSTRAINT     �   ALTER TABLE ONLY public.client_session_note
    ADD CONSTRAINT fk5edfb00ff51c2736 FOREIGN KEY (client_session) REFERENCES public.client_session(id);
 P   ALTER TABLE ONLY public.client_session_note DROP CONSTRAINT fk5edfb00ff51c2736;
       public          postgres    false    232    3662    230            �           2606    58136 $   user_session_note fk5edfb00ff51d3472    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_session_note
    ADD CONSTRAINT fk5edfb00ff51d3472 FOREIGN KEY (user_session) REFERENCES public.user_session(id);
 N   ALTER TABLE ONLY public.user_session_note DROP CONSTRAINT fk5edfb00ff51d3472;
       public          postgres    false    3895    303    302            N           2606    58141 0   client_session_role fk_11b7sgqw18i532811v7o2dv76    FK CONSTRAINT     �   ALTER TABLE ONLY public.client_session_role
    ADD CONSTRAINT fk_11b7sgqw18i532811v7o2dv76 FOREIGN KEY (client_session) REFERENCES public.client_session(id);
 Z   ALTER TABLE ONLY public.client_session_role DROP CONSTRAINT fk_11b7sgqw18i532811v7o2dv76;
       public          postgres    false    234    3662    230            i           2606    58146 *   redirect_uris fk_1burs8pb4ouj97h5wuppahv9f    FK CONSTRAINT     �   ALTER TABLE ONLY public.redirect_uris
    ADD CONSTRAINT fk_1burs8pb4ouj97h5wuppahv9f FOREIGN KEY (client_id) REFERENCES public.client(id);
 T   ALTER TABLE ONLY public.redirect_uris DROP CONSTRAINT fk_1burs8pb4ouj97h5wuppahv9f;
       public          postgres    false    276    3631    221            �           2606    58151 5   user_federation_provider fk_1fj32f6ptolw2qy60cd8n01e8    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_federation_provider
    ADD CONSTRAINT fk_1fj32f6ptolw2qy60cd8n01e8 FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 _   ALTER TABLE ONLY public.user_federation_provider DROP CONSTRAINT fk_1fj32f6ptolw2qy60cd8n01e8;
       public          postgres    false    298    3779    267            M           2606    58156 7   client_session_prot_mapper fk_33a8sgqw18i532811v7o2dk89    FK CONSTRAINT     �   ALTER TABLE ONLY public.client_session_prot_mapper
    ADD CONSTRAINT fk_33a8sgqw18i532811v7o2dk89 FOREIGN KEY (client_session) REFERENCES public.client_session(id);
 a   ALTER TABLE ONLY public.client_session_prot_mapper DROP CONSTRAINT fk_33a8sgqw18i532811v7o2dk89;
       public          postgres    false    233    3662    230            f           2606    58161 6   realm_required_credential fk_5hg65lybevavkqfki3kponh9v    FK CONSTRAINT     �   ALTER TABLE ONLY public.realm_required_credential
    ADD CONSTRAINT fk_5hg65lybevavkqfki3kponh9v FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 `   ALTER TABLE ONLY public.realm_required_credential DROP CONSTRAINT fk_5hg65lybevavkqfki3kponh9v;
       public          postgres    false    273    3779    267            k           2606    58166 /   resource_attribute fk_5hrm2vlf9ql5fu022kqepovbr    FK CONSTRAINT     �   ALTER TABLE ONLY public.resource_attribute
    ADD CONSTRAINT fk_5hrm2vlf9ql5fu022kqepovbr FOREIGN KEY (resource_id) REFERENCES public.resource_server_resource(id);
 Y   ALTER TABLE ONLY public.resource_attribute DROP CONSTRAINT fk_5hrm2vlf9ql5fu022kqepovbr;
       public          postgres    false    279    3834    285            |           2606    58171 +   user_attribute fk_5hrm2vlf9ql5fu043kqepovbr    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_attribute
    ADD CONSTRAINT fk_5hrm2vlf9ql5fu043kqepovbr FOREIGN KEY (user_id) REFERENCES public.user_entity(id);
 U   ALTER TABLE ONLY public.user_attribute DROP CONSTRAINT fk_5hrm2vlf9ql5fu043kqepovbr;
       public          postgres    false    291    3867    294            �           2606    58176 1   user_required_action fk_6qj3w1jw9cvafhe19bwsiuvmd    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_required_action
    ADD CONSTRAINT fk_6qj3w1jw9cvafhe19bwsiuvmd FOREIGN KEY (user_id) REFERENCES public.user_entity(id);
 [   ALTER TABLE ONLY public.user_required_action DROP CONSTRAINT fk_6qj3w1jw9cvafhe19bwsiuvmd;
       public          postgres    false    300    3867    294            ]           2606    58181 *   keycloak_role fk_6vyqfe4cn4wlq8r6kt5vdsj5c    FK CONSTRAINT     �   ALTER TABLE ONLY public.keycloak_role
    ADD CONSTRAINT fk_6vyqfe4cn4wlq8r6kt5vdsj5c FOREIGN KEY (realm) REFERENCES public.realm(id);
 T   ALTER TABLE ONLY public.keycloak_role DROP CONSTRAINT fk_6vyqfe4cn4wlq8r6kt5vdsj5c;
       public          postgres    false    260    3779    267            g           2606    58186 .   realm_smtp_config fk_70ej8xdxgxd0b9hh6180irr0o    FK CONSTRAINT     �   ALTER TABLE ONLY public.realm_smtp_config
    ADD CONSTRAINT fk_70ej8xdxgxd0b9hh6180irr0o FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 X   ALTER TABLE ONLY public.realm_smtp_config DROP CONSTRAINT fk_70ej8xdxgxd0b9hh6180irr0o;
       public          postgres    false    274    3779    267            b           2606    58191 ,   realm_attribute fk_8shxd6l3e9atqukacxgpffptw    FK CONSTRAINT     �   ALTER TABLE ONLY public.realm_attribute
    ADD CONSTRAINT fk_8shxd6l3e9atqukacxgpffptw FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 V   ALTER TABLE ONLY public.realm_attribute DROP CONSTRAINT fk_8shxd6l3e9atqukacxgpffptw;
       public          postgres    false    268    3779    267            R           2606    58196 +   composite_role fk_a63wvekftu8jo1pnj81e7mce2    FK CONSTRAINT     �   ALTER TABLE ONLY public.composite_role
    ADD CONSTRAINT fk_a63wvekftu8jo1pnj81e7mce2 FOREIGN KEY (composite) REFERENCES public.keycloak_role(id);
 U   ALTER TABLE ONLY public.composite_role DROP CONSTRAINT fk_a63wvekftu8jo1pnj81e7mce2;
       public          postgres    false    238    3754    260            A           2606    58201 *   authentication_execution fk_auth_exec_flow    FK CONSTRAINT     �   ALTER TABLE ONLY public.authentication_execution
    ADD CONSTRAINT fk_auth_exec_flow FOREIGN KEY (flow_id) REFERENCES public.authentication_flow(id);
 T   ALTER TABLE ONLY public.authentication_execution DROP CONSTRAINT fk_auth_exec_flow;
       public          postgres    false    216    3621    217            B           2606    58206 +   authentication_execution fk_auth_exec_realm    FK CONSTRAINT     �   ALTER TABLE ONLY public.authentication_execution
    ADD CONSTRAINT fk_auth_exec_realm FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 U   ALTER TABLE ONLY public.authentication_execution DROP CONSTRAINT fk_auth_exec_realm;
       public          postgres    false    216    3779    267            C           2606    58211 &   authentication_flow fk_auth_flow_realm    FK CONSTRAINT     �   ALTER TABLE ONLY public.authentication_flow
    ADD CONSTRAINT fk_auth_flow_realm FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 P   ALTER TABLE ONLY public.authentication_flow DROP CONSTRAINT fk_auth_flow_realm;
       public          postgres    false    217    3779    267            D           2606    58216 "   authenticator_config fk_auth_realm    FK CONSTRAINT     �   ALTER TABLE ONLY public.authenticator_config
    ADD CONSTRAINT fk_auth_realm FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 L   ALTER TABLE ONLY public.authenticator_config DROP CONSTRAINT fk_auth_realm;
       public          postgres    false    218    3779    267            J           2606    58221 +   client_session fk_b4ao2vcvat6ukau74wbwtfqo1    FK CONSTRAINT     �   ALTER TABLE ONLY public.client_session
    ADD CONSTRAINT fk_b4ao2vcvat6ukau74wbwtfqo1 FOREIGN KEY (session_id) REFERENCES public.user_session(id);
 U   ALTER TABLE ONLY public.client_session DROP CONSTRAINT fk_b4ao2vcvat6ukau74wbwtfqo1;
       public          postgres    false    230    3895    302            �           2606    58226 .   user_role_mapping fk_c4fqv34p1mbylloxang7b1q3l    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_role_mapping
    ADD CONSTRAINT fk_c4fqv34p1mbylloxang7b1q3l FOREIGN KEY (user_id) REFERENCES public.user_entity(id);
 X   ALTER TABLE ONLY public.user_role_mapping DROP CONSTRAINT fk_c4fqv34p1mbylloxang7b1q3l;
       public          postgres    false    301    3867    294            H           2606    58231 .   client_scope_attributes fk_cl_scope_attr_scope    FK CONSTRAINT     �   ALTER TABLE ONLY public.client_scope_attributes
    ADD CONSTRAINT fk_cl_scope_attr_scope FOREIGN KEY (scope_id) REFERENCES public.client_scope(id);
 X   ALTER TABLE ONLY public.client_scope_attributes DROP CONSTRAINT fk_cl_scope_attr_scope;
       public          postgres    false    227    3647    226            I           2606    58236 .   client_scope_role_mapping fk_cl_scope_rm_scope    FK CONSTRAINT     �   ALTER TABLE ONLY public.client_scope_role_mapping
    ADD CONSTRAINT fk_cl_scope_rm_scope FOREIGN KEY (scope_id) REFERENCES public.client_scope(id);
 X   ALTER TABLE ONLY public.client_scope_role_mapping DROP CONSTRAINT fk_cl_scope_rm_scope;
       public          postgres    false    229    3647    226            O           2606    58241 +   client_user_session_note fk_cl_usr_ses_note    FK CONSTRAINT     �   ALTER TABLE ONLY public.client_user_session_note
    ADD CONSTRAINT fk_cl_usr_ses_note FOREIGN KEY (client_session) REFERENCES public.client_session(id);
 U   ALTER TABLE ONLY public.client_user_session_note DROP CONSTRAINT fk_cl_usr_ses_note;
       public          postgres    false    235    3662    230            _           2606    58246 #   protocol_mapper fk_cli_scope_mapper    FK CONSTRAINT     �   ALTER TABLE ONLY public.protocol_mapper
    ADD CONSTRAINT fk_cli_scope_mapper FOREIGN KEY (client_scope_id) REFERENCES public.client_scope(id);
 M   ALTER TABLE ONLY public.protocol_mapper DROP CONSTRAINT fk_cli_scope_mapper;
       public          postgres    false    265    3647    226            F           2606    58251 .   client_initial_access fk_client_init_acc_realm    FK CONSTRAINT     �   ALTER TABLE ONLY public.client_initial_access
    ADD CONSTRAINT fk_client_init_acc_realm FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 X   ALTER TABLE ONLY public.client_initial_access DROP CONSTRAINT fk_client_init_acc_realm;
       public          postgres    false    224    3779    267            Q           2606    58256 $   component_config fk_component_config    FK CONSTRAINT     �   ALTER TABLE ONLY public.component_config
    ADD CONSTRAINT fk_component_config FOREIGN KEY (component_id) REFERENCES public.component(id);
 N   ALTER TABLE ONLY public.component_config DROP CONSTRAINT fk_component_config;
       public          postgres    false    237    236    3675            P           2606    58261    component fk_component_realm    FK CONSTRAINT     |   ALTER TABLE ONLY public.component
    ADD CONSTRAINT fk_component_realm FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 F   ALTER TABLE ONLY public.component DROP CONSTRAINT fk_component_realm;
       public          postgres    false    3779    236    267            c           2606    58266 (   realm_default_groups fk_def_groups_realm    FK CONSTRAINT     �   ALTER TABLE ONLY public.realm_default_groups
    ADD CONSTRAINT fk_def_groups_realm FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 R   ALTER TABLE ONLY public.realm_default_groups DROP CONSTRAINT fk_def_groups_realm;
       public          postgres    false    269    3779    267            �           2606    58271 .   user_federation_mapper_config fk_fedmapper_cfg    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_federation_mapper_config
    ADD CONSTRAINT fk_fedmapper_cfg FOREIGN KEY (user_federation_mapper_id) REFERENCES public.user_federation_mapper(id);
 X   ALTER TABLE ONLY public.user_federation_mapper_config DROP CONSTRAINT fk_fedmapper_cfg;
       public          postgres    false    296    297    3877            �           2606    58276 ,   user_federation_mapper fk_fedmapperpm_fedprv    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_federation_mapper
    ADD CONSTRAINT fk_fedmapperpm_fedprv FOREIGN KEY (federation_provider_id) REFERENCES public.user_federation_provider(id);
 V   ALTER TABLE ONLY public.user_federation_mapper DROP CONSTRAINT fk_fedmapperpm_fedprv;
       public          postgres    false    3883    296    298            �           2606    58281 +   user_federation_mapper fk_fedmapperpm_realm    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_federation_mapper
    ADD CONSTRAINT fk_fedmapperpm_realm FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 U   ALTER TABLE ONLY public.user_federation_mapper DROP CONSTRAINT fk_fedmapperpm_realm;
       public          postgres    false    3779    296    267            ?           2606    58286 .   associated_policy fk_frsr5s213xcx4wnkog82ssrfy    FK CONSTRAINT     �   ALTER TABLE ONLY public.associated_policy
    ADD CONSTRAINT fk_frsr5s213xcx4wnkog82ssrfy FOREIGN KEY (associated_policy_id) REFERENCES public.resource_server_policy(id);
 X   ALTER TABLE ONLY public.associated_policy DROP CONSTRAINT fk_frsr5s213xcx4wnkog82ssrfy;
       public          postgres    false    3829    215    284            z           2606    58291 )   scope_policy fk_frsrasp13xcx4wnkog82ssrfy    FK CONSTRAINT     �   ALTER TABLE ONLY public.scope_policy
    ADD CONSTRAINT fk_frsrasp13xcx4wnkog82ssrfy FOREIGN KEY (policy_id) REFERENCES public.resource_server_policy(id);
 S   ALTER TABLE ONLY public.scope_policy DROP CONSTRAINT fk_frsrasp13xcx4wnkog82ssrfy;
       public          postgres    false    3829    290    284            p           2606    58296 8   resource_server_perm_ticket fk_frsrho213xcx4wnkog82sspmt    FK CONSTRAINT     �   ALTER TABLE ONLY public.resource_server_perm_ticket
    ADD CONSTRAINT fk_frsrho213xcx4wnkog82sspmt FOREIGN KEY (resource_server_id) REFERENCES public.resource_server(id);
 b   ALTER TABLE ONLY public.resource_server_perm_ticket DROP CONSTRAINT fk_frsrho213xcx4wnkog82sspmt;
       public          postgres    false    3823    283    282            u           2606    58301 5   resource_server_resource fk_frsrho213xcx4wnkog82ssrfy    FK CONSTRAINT     �   ALTER TABLE ONLY public.resource_server_resource
    ADD CONSTRAINT fk_frsrho213xcx4wnkog82ssrfy FOREIGN KEY (resource_server_id) REFERENCES public.resource_server(id);
 _   ALTER TABLE ONLY public.resource_server_resource DROP CONSTRAINT fk_frsrho213xcx4wnkog82ssrfy;
       public          postgres    false    285    3823    282            q           2606    58306 8   resource_server_perm_ticket fk_frsrho213xcx4wnkog83sspmt    FK CONSTRAINT     �   ALTER TABLE ONLY public.resource_server_perm_ticket
    ADD CONSTRAINT fk_frsrho213xcx4wnkog83sspmt FOREIGN KEY (resource_id) REFERENCES public.resource_server_resource(id);
 b   ALTER TABLE ONLY public.resource_server_perm_ticket DROP CONSTRAINT fk_frsrho213xcx4wnkog83sspmt;
       public          postgres    false    283    3834    285            r           2606    58311 8   resource_server_perm_ticket fk_frsrho213xcx4wnkog84sspmt    FK CONSTRAINT     �   ALTER TABLE ONLY public.resource_server_perm_ticket
    ADD CONSTRAINT fk_frsrho213xcx4wnkog84sspmt FOREIGN KEY (scope_id) REFERENCES public.resource_server_scope(id);
 b   ALTER TABLE ONLY public.resource_server_perm_ticket DROP CONSTRAINT fk_frsrho213xcx4wnkog84sspmt;
       public          postgres    false    286    283    3839            @           2606    58316 .   associated_policy fk_frsrpas14xcx4wnkog82ssrfy    FK CONSTRAINT     �   ALTER TABLE ONLY public.associated_policy
    ADD CONSTRAINT fk_frsrpas14xcx4wnkog82ssrfy FOREIGN KEY (policy_id) REFERENCES public.resource_server_policy(id);
 X   ALTER TABLE ONLY public.associated_policy DROP CONSTRAINT fk_frsrpas14xcx4wnkog82ssrfy;
       public          postgres    false    3829    215    284            {           2606    58321 )   scope_policy fk_frsrpass3xcx4wnkog82ssrfy    FK CONSTRAINT     �   ALTER TABLE ONLY public.scope_policy
    ADD CONSTRAINT fk_frsrpass3xcx4wnkog82ssrfy FOREIGN KEY (scope_id) REFERENCES public.resource_server_scope(id);
 S   ALTER TABLE ONLY public.scope_policy DROP CONSTRAINT fk_frsrpass3xcx4wnkog82ssrfy;
       public          postgres    false    3839    290    286            s           2606    58326 8   resource_server_perm_ticket fk_frsrpo2128cx4wnkog82ssrfy    FK CONSTRAINT     �   ALTER TABLE ONLY public.resource_server_perm_ticket
    ADD CONSTRAINT fk_frsrpo2128cx4wnkog82ssrfy FOREIGN KEY (policy_id) REFERENCES public.resource_server_policy(id);
 b   ALTER TABLE ONLY public.resource_server_perm_ticket DROP CONSTRAINT fk_frsrpo2128cx4wnkog82ssrfy;
       public          postgres    false    3829    283    284            t           2606    58331 3   resource_server_policy fk_frsrpo213xcx4wnkog82ssrfy    FK CONSTRAINT     �   ALTER TABLE ONLY public.resource_server_policy
    ADD CONSTRAINT fk_frsrpo213xcx4wnkog82ssrfy FOREIGN KEY (resource_server_id) REFERENCES public.resource_server(id);
 ]   ALTER TABLE ONLY public.resource_server_policy DROP CONSTRAINT fk_frsrpo213xcx4wnkog82ssrfy;
       public          postgres    false    3823    284    282            n           2606    58336 +   resource_scope fk_frsrpos13xcx4wnkog82ssrfy    FK CONSTRAINT     �   ALTER TABLE ONLY public.resource_scope
    ADD CONSTRAINT fk_frsrpos13xcx4wnkog82ssrfy FOREIGN KEY (resource_id) REFERENCES public.resource_server_resource(id);
 U   ALTER TABLE ONLY public.resource_scope DROP CONSTRAINT fk_frsrpos13xcx4wnkog82ssrfy;
       public          postgres    false    281    285    3834            l           2606    58341 ,   resource_policy fk_frsrpos53xcx4wnkog82ssrfy    FK CONSTRAINT     �   ALTER TABLE ONLY public.resource_policy
    ADD CONSTRAINT fk_frsrpos53xcx4wnkog82ssrfy FOREIGN KEY (resource_id) REFERENCES public.resource_server_resource(id);
 V   ALTER TABLE ONLY public.resource_policy DROP CONSTRAINT fk_frsrpos53xcx4wnkog82ssrfy;
       public          postgres    false    280    285    3834            m           2606    58346 ,   resource_policy fk_frsrpp213xcx4wnkog82ssrfy    FK CONSTRAINT     �   ALTER TABLE ONLY public.resource_policy
    ADD CONSTRAINT fk_frsrpp213xcx4wnkog82ssrfy FOREIGN KEY (policy_id) REFERENCES public.resource_server_policy(id);
 V   ALTER TABLE ONLY public.resource_policy DROP CONSTRAINT fk_frsrpp213xcx4wnkog82ssrfy;
       public          postgres    false    284    280    3829            o           2606    58351 +   resource_scope fk_frsrps213xcx4wnkog82ssrfy    FK CONSTRAINT     �   ALTER TABLE ONLY public.resource_scope
    ADD CONSTRAINT fk_frsrps213xcx4wnkog82ssrfy FOREIGN KEY (scope_id) REFERENCES public.resource_server_scope(id);
 U   ALTER TABLE ONLY public.resource_scope DROP CONSTRAINT fk_frsrps213xcx4wnkog82ssrfy;
       public          postgres    false    3839    281    286            v           2606    58356 2   resource_server_scope fk_frsrso213xcx4wnkog82ssrfy    FK CONSTRAINT     �   ALTER TABLE ONLY public.resource_server_scope
    ADD CONSTRAINT fk_frsrso213xcx4wnkog82ssrfy FOREIGN KEY (resource_server_id) REFERENCES public.resource_server(id);
 \   ALTER TABLE ONLY public.resource_server_scope DROP CONSTRAINT fk_frsrso213xcx4wnkog82ssrfy;
       public          postgres    false    286    282    3823            S           2606    58361 +   composite_role fk_gr7thllb9lu8q4vqa4524jjy8    FK CONSTRAINT     �   ALTER TABLE ONLY public.composite_role
    ADD CONSTRAINT fk_gr7thllb9lu8q4vqa4524jjy8 FOREIGN KEY (child_role) REFERENCES public.keycloak_role(id);
 U   ALTER TABLE ONLY public.composite_role DROP CONSTRAINT fk_gr7thllb9lu8q4vqa4524jjy8;
       public          postgres    false    260    3754    238            ~           2606    58366 .   user_consent_client_scope fk_grntcsnt_clsc_usc    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_consent_client_scope
    ADD CONSTRAINT fk_grntcsnt_clsc_usc FOREIGN KEY (user_consent_id) REFERENCES public.user_consent(id);
 X   ALTER TABLE ONLY public.user_consent_client_scope DROP CONSTRAINT fk_grntcsnt_clsc_usc;
       public          postgres    false    293    292    3859            }           2606    58371    user_consent fk_grntcsnt_user    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_consent
    ADD CONSTRAINT fk_grntcsnt_user FOREIGN KEY (user_id) REFERENCES public.user_entity(id);
 G   ALTER TABLE ONLY public.user_consent DROP CONSTRAINT fk_grntcsnt_user;
       public          postgres    false    294    3867    292            W           2606    58376 (   group_attribute fk_group_attribute_group    FK CONSTRAINT     �   ALTER TABLE ONLY public.group_attribute
    ADD CONSTRAINT fk_group_attribute_group FOREIGN KEY (group_id) REFERENCES public.keycloak_group(id);
 R   ALTER TABLE ONLY public.group_attribute DROP CONSTRAINT fk_group_attribute_group;
       public          postgres    false    259    3748    253            X           2606    58381 &   group_role_mapping fk_group_role_group    FK CONSTRAINT     �   ALTER TABLE ONLY public.group_role_mapping
    ADD CONSTRAINT fk_group_role_group FOREIGN KEY (group_id) REFERENCES public.keycloak_group(id);
 P   ALTER TABLE ONLY public.group_role_mapping DROP CONSTRAINT fk_group_role_group;
       public          postgres    false    259    3748    254            d           2606    58386 6   realm_enabled_event_types fk_h846o4h0w8epx5nwedrf5y69j    FK CONSTRAINT     �   ALTER TABLE ONLY public.realm_enabled_event_types
    ADD CONSTRAINT fk_h846o4h0w8epx5nwedrf5y69j FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 `   ALTER TABLE ONLY public.realm_enabled_event_types DROP CONSTRAINT fk_h846o4h0w8epx5nwedrf5y69j;
       public          postgres    false    267    3779    270            e           2606    58391 3   realm_events_listeners fk_h846o4h0w8epx5nxev9f5y69j    FK CONSTRAINT     �   ALTER TABLE ONLY public.realm_events_listeners
    ADD CONSTRAINT fk_h846o4h0w8epx5nxev9f5y69j FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 ]   ALTER TABLE ONLY public.realm_events_listeners DROP CONSTRAINT fk_h846o4h0w8epx5nxev9f5y69j;
       public          postgres    false    267    3779    271            [           2606    58396 &   identity_provider_mapper fk_idpm_realm    FK CONSTRAINT     �   ALTER TABLE ONLY public.identity_provider_mapper
    ADD CONSTRAINT fk_idpm_realm FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 P   ALTER TABLE ONLY public.identity_provider_mapper DROP CONSTRAINT fk_idpm_realm;
       public          postgres    false    267    257    3779            \           2606    58401    idp_mapper_config fk_idpmconfig    FK CONSTRAINT     �   ALTER TABLE ONLY public.idp_mapper_config
    ADD CONSTRAINT fk_idpmconfig FOREIGN KEY (idp_mapper_id) REFERENCES public.identity_provider_mapper(id);
 I   ALTER TABLE ONLY public.idp_mapper_config DROP CONSTRAINT fk_idpmconfig;
       public          postgres    false    257    3743    258            �           2606    58406 (   web_origins fk_lojpho213xcx4wnkog82ssrfy    FK CONSTRAINT     �   ALTER TABLE ONLY public.web_origins
    ADD CONSTRAINT fk_lojpho213xcx4wnkog82ssrfy FOREIGN KEY (client_id) REFERENCES public.client(id);
 R   ALTER TABLE ONLY public.web_origins DROP CONSTRAINT fk_lojpho213xcx4wnkog82ssrfy;
       public          postgres    false    3631    305    221            y           2606    58411 *   scope_mapping fk_ouse064plmlr732lxjcn1q5f1    FK CONSTRAINT     �   ALTER TABLE ONLY public.scope_mapping
    ADD CONSTRAINT fk_ouse064plmlr732lxjcn1q5f1 FOREIGN KEY (client_id) REFERENCES public.client(id);
 T   ALTER TABLE ONLY public.scope_mapping DROP CONSTRAINT fk_ouse064plmlr732lxjcn1q5f1;
       public          postgres    false    221    289    3631            `           2606    58416    protocol_mapper fk_pcm_realm    FK CONSTRAINT     ~   ALTER TABLE ONLY public.protocol_mapper
    ADD CONSTRAINT fk_pcm_realm FOREIGN KEY (client_id) REFERENCES public.client(id);
 F   ALTER TABLE ONLY public.protocol_mapper DROP CONSTRAINT fk_pcm_realm;
       public          postgres    false    221    265    3631            T           2606    58421 '   credential fk_pfyr0glasqyl0dei3kl69r6v0    FK CONSTRAINT     �   ALTER TABLE ONLY public.credential
    ADD CONSTRAINT fk_pfyr0glasqyl0dei3kl69r6v0 FOREIGN KEY (user_id) REFERENCES public.user_entity(id);
 Q   ALTER TABLE ONLY public.credential DROP CONSTRAINT fk_pfyr0glasqyl0dei3kl69r6v0;
       public          postgres    false    294    239    3867            a           2606    58426 "   protocol_mapper_config fk_pmconfig    FK CONSTRAINT     �   ALTER TABLE ONLY public.protocol_mapper_config
    ADD CONSTRAINT fk_pmconfig FOREIGN KEY (protocol_mapper_id) REFERENCES public.protocol_mapper(id);
 L   ALTER TABLE ONLY public.protocol_mapper_config DROP CONSTRAINT fk_pmconfig;
       public          postgres    false    266    3773    265            U           2606    58431 -   default_client_scope fk_r_def_cli_scope_realm    FK CONSTRAINT     �   ALTER TABLE ONLY public.default_client_scope
    ADD CONSTRAINT fk_r_def_cli_scope_realm FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 W   ALTER TABLE ONLY public.default_client_scope DROP CONSTRAINT fk_r_def_cli_scope_realm;
       public          postgres    false    242    267    3779            j           2606    58436 )   required_action_provider fk_req_act_realm    FK CONSTRAINT     �   ALTER TABLE ONLY public.required_action_provider
    ADD CONSTRAINT fk_req_act_realm FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 S   ALTER TABLE ONLY public.required_action_provider DROP CONSTRAINT fk_req_act_realm;
       public          postgres    false    267    3779    278            w           2606    58441 %   resource_uris fk_resource_server_uris    FK CONSTRAINT     �   ALTER TABLE ONLY public.resource_uris
    ADD CONSTRAINT fk_resource_server_uris FOREIGN KEY (resource_id) REFERENCES public.resource_server_resource(id);
 O   ALTER TABLE ONLY public.resource_uris DROP CONSTRAINT fk_resource_server_uris;
       public          postgres    false    287    285    3834            x           2606    58446 #   role_attribute fk_role_attribute_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.role_attribute
    ADD CONSTRAINT fk_role_attribute_id FOREIGN KEY (role_id) REFERENCES public.keycloak_role(id);
 M   ALTER TABLE ONLY public.role_attribute DROP CONSTRAINT fk_role_attribute_id;
       public          postgres    false    260    3754    288            h           2606    58451 2   realm_supported_locales fk_supported_locales_realm    FK CONSTRAINT     �   ALTER TABLE ONLY public.realm_supported_locales
    ADD CONSTRAINT fk_supported_locales_realm FOREIGN KEY (realm_id) REFERENCES public.realm(id);
 \   ALTER TABLE ONLY public.realm_supported_locales DROP CONSTRAINT fk_supported_locales_realm;
       public          postgres    false    275    267    3779                       2606    58456 3   user_federation_config fk_t13hpu1j94r2ebpekr39x5eu5    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_federation_config
    ADD CONSTRAINT fk_t13hpu1j94r2ebpekr39x5eu5 FOREIGN KEY (user_federation_provider_id) REFERENCES public.user_federation_provider(id);
 ]   ALTER TABLE ONLY public.user_federation_config DROP CONSTRAINT fk_t13hpu1j94r2ebpekr39x5eu5;
       public          postgres    false    298    3883    295            �           2606    58461 (   user_group_membership fk_user_group_user    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_group_membership
    ADD CONSTRAINT fk_user_group_user FOREIGN KEY (user_id) REFERENCES public.user_entity(id);
 R   ALTER TABLE ONLY public.user_group_membership DROP CONSTRAINT fk_user_group_user;
       public          postgres    false    299    3867    294            ^           2606    58466 !   policy_config fkdc34197cf864c4e43    FK CONSTRAINT     �   ALTER TABLE ONLY public.policy_config
    ADD CONSTRAINT fkdc34197cf864c4e43 FOREIGN KEY (policy_id) REFERENCES public.resource_server_policy(id);
 K   ALTER TABLE ONLY public.policy_config DROP CONSTRAINT fkdc34197cf864c4e43;
       public          postgres    false    284    264    3829            Z           2606    58471 +   identity_provider_config fkdc4897cf864c4e43    FK CONSTRAINT     �   ALTER TABLE ONLY public.identity_provider_config
    ADD CONSTRAINT fkdc4897cf864c4e43 FOREIGN KEY (identity_provider_id) REFERENCES public.identity_provider(internal_id);
 U   ALTER TABLE ONLY public.identity_provider_config DROP CONSTRAINT fkdc4897cf864c4e43;
       public          postgres    false    255    3736    256                  x������ � �            x������ � �            x��ZAvd7�\���y$A�f�x�`9�e�ZR�ӷ��O)���r��V�,����҇_m6)��P�K�N�Ω)/����;������n��o�����4�w}���b��*+�r�|����Z�����U�&�$��]��n�����䜚���ᒌ�Z/��un+5�'W�����t���+^8�Vr���T���p�<�D��WS���t_�Ŀ<�G��G����O�e\R,��X��č-r�טc��8��z@���.)�0ksR��F|����\��9c��|쩇����@B%��U��|��yq�e���ۓ>������_�����?�9��!�eCUF��������2�0WcI��n��o����k��gu��z�rէ�֐�i�H���W%$':�\���k9���[Q���yx><�˗-�(��u��I���=]��e�~vu5���3�y�ne���n����-w�ϙx�1f�-�s��.�i̮�޺f�5lez,I��Q�ݟ��0�YOy�ϻK�=�9�Q��5���D.Cť���X_(�!�-��V�@z��w���ޝ�.�YOq+�嘠ێ�Sl�s�#�-u�˃pl#:w����a����kx?��d>�\i��n���ZNW��9Ƈ��.�..Qk��K�=�T;��\^!搐�?�\Ƈ:vv���Ʊ�C��=�N(PW�h��ql��Q?���d��7T�FD�� #��/�bRRNYK�p=�	>��op�\�6{�_��L�9j��1��FFO)���9���]�1��.��;�����ۿ��}�?�E(�.�FI.~�i5G Ơ�i�>����E��w-�����uB�`�+�������;������Yئ����U�e��W�)�Lan��o(��<~��w��ʛscI��43�Q�5� ����U��=�e�F��˓�=<<�cg	G�X����N��i�B�}(�yMQ���ƙ�2�RA����4�8���s���|�Wge��0��G0��������s�o^�_;��7o���7�-�Yh3!F�c����[�k��j�������� v��`BW���V�<�`�<<qw3)Zq�bY�E�����Tڇ��.�.R�ϔg�a��%o�@�f.��Ʒ��W;9˪֤"y�; [�`o"(�v9�z�`��I����ϙ�=,Oh�4]��F^5-K�_*P�M5��8P��v�?����V��R��3����zr^l>��.v9�a����	����T߅��:��B	�&!C|�=du0�aO�������ۇ�rzT�A�I255����0��)@�*��W�ɟ���w��ѳ �X���6����uT���tVM+�Z��� ^�0u%�PH��ʈM�.k���E����Uu�^��
�M�}����&��Z%&h���\<|�MM-�gC��=�C@=�ȕ�����^�q�#
��r�����3���y+�D�����*�fW|��j����4�B��xz��yx�E�QD9rSxw���7Ĭ�B��\�GS͢�j`:U%�cs	e\|���ܡcZw�w���^O�5 x��}9�����]^\@@A�"d�d�7#�-�?@+
V;n�;=�b�G`�<�abwd3��̛�:�tߦ�H֢�� ix�ޜ����mi˯1�ȏ�S�0n�|���&"���j�BH�B�=�*���-�����*�fEh�y-����}��E��B#�E��m��*���K�ٖ﯑�Op���Ȼ��6E��9cZj>&��#���%z�<x��ة\�hB��(V�ў­p�~�;�A��)il>�ԦÏ�Ih����v9t�14hu�T���jn��� `��z�_���Μ��I�H���^ =3�v@��ce��y{�#]��	���
Jt�<�2X��e�yGv�qS�в�ަ3Vi� 
I���[B�yDf�#���w���^[���z��RNt��-I�<I��x��*�
ҫ��*%�=poi}ղM�^V.���>��D,�BWO�V;��j]Z���ƺ�pf�&#�b�]�������[�r�[Q�
aI��G6-U^+t�0<������@�Ҷ���8xhl�|�AF����E��R{�_�FY �a�K���<��>���p���=�\,�b�`m�l��w�U�l. �����Oᖽ�NW��_ŧ���)����lj
X&��\y�&����^����4�2]�\/Q�/d�B5������6���$���O�E\�]�&kan��uZ��R�?���2��J��f'x�a��~�l�@��lۄkp��y�&��K��hd�w�&��6Tn|����촀O��(b��w�!�!'�W�A}A������W�vټ��B���&ڔ�zOm
i�WD�x�]F^��@R\�������CWk���G�?��y@ȇVA������[�=x�o��K�HG�r��7�AD��ɜ5�Y����h�,��\
]���A:9�0FL�G��-۫������a3�:�g@'��� 	�\�e?�I�n������hI�G���I��E eB�j�T��h�g����0F�JM�*�vyY�Y�C)ˁ�Ǘ���|[���R6�ނW�R����U�v��yT � �-�޴�e��ȹt��f=*����'�`�`�s�7�>_j��m�hz<L�����3i%��w	oK�W�A�f�X׼�}���@�y^���{+P@)U�j�&\<Fw}gжD�I�H^t�eoU�5Y���Aԇ�q����ս]&/�7O�< '�$��
��1�!4J�}\.WS7Z?�iJa�(.z�}d�1�	e=���;֯�O7�?[0i	��jn[~BR�!�[2��
��̿[0�d�b��}	u�@����jK8�P}�ؖ�~��S3&���6�Xd�� �Pt�_[�f3���@F'7����	[���]�/k�_B���v1Z'���p]i���bt��3Z�;��@e�[)������8���|�;���s��^���6N3�G#��t�H��8>˙]�i�GR�6|$ڕ�{ ߭����l^>'5�����F��X�sp��CV���y��i��QԭU�]�/j5�	2�"�-E���]ne^�Œ���~0G�nH����#��r»�)��o��	��Qt��ԸbY�|�`{����Z��H��l`�m|7+��K�k��~����<��9�R��)�p�nϦ�s�v��ln���5��q�+��O�	��s/� �W�ᡧ��Ն�D���-:��n�u�>�:
l�d�޿�g�TG	ͩERx��`�d {|*	&���no� }t�� SV�k�Ӎ��sǡ[6v
J+V����:8���u�V��?$5�F{w���$gI,������{,��28��y2=b�X���B�ԁ�|!TpMm�d"��*��,�,u�N7� M��ѫ�w����ˏD~Etu>2� ��,�`���qk�Բ'��<���V�:�����BJ6�*&R���i�~2rjM?����w9�|��}e�9@:e0r�C�C�UK.GXmE3����l�٪Βot֨>��z���N��1w��(U���I�����_��(]�����E$�#{��@�&`**���b�(vF��i���۪�
|����rZ�D��2y9�lZ��[Ɓ$Y������>��E�1�"�g��9����q�m�5\e�kA�J/��ڀ9�R�g.�4Dr �����;�c�"T�]�p��n!Bs��G:�|�k��;흿v��xG�! �zA�)��a�M��pL~2�@��@�G{ȗy�j'ۻ/���}ԫI*g?⶗��,n����i�QG��l�'��S24��*B
�B
�t�=Θ�s#�Z̔|�H1�rt�
��>�cЍ�}g:6�Qmq���`~�c��io5��W7�=.	����&�`P�B4��G�u�|]�����Z��boE�@(jW��=k}{����b�G4@��� b   �������9�L��M�O~��K�B���;�d�.�Z�����^��1x1����Y@,��N���*��v��TFW����ޯ���ӧ5��           x��X�r7}>�pp�<:��q��앓}��HS�f���Z����צÊ�X)��t���ӌB	+l�Q��M��׺h�H'�Ր��ݦ�>YN�ZX�].봌��q��U��"8n�<7�xl^Dj�������|7,���Td	��%7Aa����Ҝ�(c�����f�O�>g7i�����9������KX��a��/�ژ֍��8�+��gt�A��VM�dJ~�C��O�T��yZ����^�=l�Y�K]_�Secc0����������&n��$~�d���J�L��H�xP�q�JiԼ�)���.�iZ��7uzs֍���y�̷k��w���v�)�����qь�&y�D�.Q#!J��g;K��|'&)$)�OAs#p&�^�XS��ð��fY�n��m�s
^	'*���.��s���ZPW!�g�Q������*�|����-7�iT�����t%
!qӦ.� wG8�6����6���z�E�/]�K�>�?V*þ�|]��q�8	�`�,�`�W�/p��ă�%�$CA����y���oW���v��i^^����3���ۛ�Wg�;|�zZoQ5�&t�:��+�<#��m��F�rh5���#��Ano�~����m��@)۔|��,�/����\)��"롍�������|1N�K��oؒ���R���m�nD����ܳ������vZ���ˑ.{\vlW�t�R�i�g������Á�j*&(��5N%�N<I�
%QD�[�I���vCzZn�䡳���̰��4O��a��i�t&Z����8��l��ڡ �x��r'u4Ɔ�,?��V��z�������eڦg�����܏��a܅e�d�:��n�,
��>�1����]&�E������5�k,AgaB3e�{�>���R|��f����\v������0��؜�+�̐(�Z�AAy�&y.�rJV�b��������A���}��A���ۘ�T���S5"�2�!�����K:����%�}��գ�y.eF>��"�U���Rr4 CW������/�`�~z�ޭ�6"�_~���S�66�FbG�[�Em�%�/&Y4�2��^H�>Qz��vk�޻�W�TKi�6[�co�ޝd��˚��:"��$�*/tN���p�@��eZ��tQ���у�S�x�����nPV���+�|��{���'��-�4)[R�g�qFW�Ϡ,�:�1I��y8���������Z
�2�bM�ƣ�h�Un@�FG�>n�y=.S�l͊TL��uC
G�xζ�>g[tͫtҔ�;�u��9���4�zt�9(�-F��'D�X"ơ�zh�G�h�ғqY���Y���U�\���"�B���El�uzW�=�8q�J�h�<��(E��"(�4�$�hb8�5*�d���bL <���=C�f�Sy�P����uV�S(�A�6P��R�Q���P�q:��C��*X3&�N��ږ2�)��H�	�r��lP�r��Ng a�]������C�N����W��[�� f�'e����w$Џ�pιE�lH%�w���ʥ5Y�DV�k�#A+h�!7d�
Ov��-�R�|�߇�>� �R�~\)^�h�YG�I%!����+�c�D�@�(V,�r����J�棫O ����!��ǘW�躃x�·�tA�5z����&˭��g��"��z�uB���R��6�>�z84RDKp�˞뢩Ta���-T��q���A��0� \em%:)�7����1�P]���?Bns�\�R� si_�M�D��/�={�?��w�         �   x���AN�0D��)z#;q���M�ب���>ݰ��l���8��D��){g�\R�(���a��}���ͷ7[�����h���3 J��0<Gh^��ϳNɩ�	�傆]P�KGBj#�q�����Ǿ}<�8���C�j`�8&��b��M�̅����}��L,-+�ف��(�֣�?f�Լ<��xb         �   x����m�  ���e�^�Y`��|�8���#�M�c5٣j>Bld�獍���}�~��Yy�~���S�}���\���~)r�!�
�� ��@��-c�"ٗZ������~��xΟ{T�'s[2����5x��R�Q,Y'��݁]�Zv���A��|A0�2r�,� �P����<���R�GRhO            x������ � �         S  x��V�jI}��b�Z��_�;ra�,�%���cid��%�߷�"�X�31bAҨ��9]�N�ˡ��_���A@�QkTԳvVg��oi;J��L����O�]�=i�!z) W� V/"VWmq�����oo{,~x����=�������y�1�b
���R$H6����	q{Ӵ\�GY�\����b�w1P�Hy{Mͪ n����?�:0�8B~;���k�i��iO�����%fK� ea=�
$o+d#]�!I_�m=]��vM���C�_�gd ��b#�F��M2B�V�t	U�8ﶟi�D3=�`�>&~d.�wA�)P`�a��:��3#�����٭�!�ͪ9�I�В��S����u�n�=�)�\����
B�r�:�Iy9Xo��^�:N��#�`&�(E�Ƚ!Y�sP�U\S	�������mh�?MB�`S#���Q�YE�#�\$xW����E=9ؤ&}�5�1ϱ�Ov�.���\�t���� �f��<r| FGbGy3��Ӣ2
S��@��i#s&�Tu̱t�+S��$ܟ��*��TH.s�K4�Ǚ jNֲ=�{4����x���̧��>���-$�c�I%�'�ag�F�4ҧI5���	;o��@Ւ��Z@��6�����D'�Bp	%�U��,��y�H;���j����[;;�x�������/�[�����˫���li���O�����Z]�A�U�^?_,�[L���}D�� ������}��N
+P%W�(�J~Q���*��� e�^w�����<�³,'�; �H8�*���bR$&�d��!���Wo�/�&��av����|�}>��k�d�         m  x���͒�8���.v������TQ�-���������w_��Ţ�	��H��/�����JT
���6b����;(ZSm�)�f3�(��k�8�8�;�<c:y��[h�����RT]U
��F�t;(��M��wU��D�S-A�^�� ��^�������*CQ� ����j������yٕEW�}%*���Ո��0�*1uW(�ߤ0�f �B���(G�s�c��ɀ�g0�f`�������7f�e�9��QBHրJr�N[wd"�W2ڣ�4�2@��u�K|K�r"�Ҳ��'�F�.}�N�����tr1A�3%���=����\��9��`�rw�'
G�C����v�y�}�qF-���՗*���S}�oj���_�eK�	�|�":yq�.��/����j)����.�z@����7��J*;�3�˘Z�%���NOL�?���Qe	ԉv�s��x=wj9�ƪe�?;-A)ډ'��=i�4�%��U_�ĘX����7}[�M�
~���!����]�I���jF4��`
xm�m�Fx�Y�̀x�c�-/+�t����~�����S^L��E��7�zs��H%Pc�عe�m	Q���D���j#(f]�e���6�*΢1U�`����S�W7*f���b.�N�\�U���oU�_U1��bv!�*�߫�KXQ1��b�3k�O�k2����Új�5�,kr�β&��5�,kf���f~_�d��u�� �U�kEe%
8`eʶ���Ecړ�\�'pgϯn��.gŞ\Ɲ=���=���ړ�jO&dݞ�Bn����'��bO"۞���/���7r~Z+Ff<���$���<#3�YF攝ed�s#3 YF���a�or����'D.             x������ � �      !      x������ � �      "      x������ � �      #   F  x���M�#E��ɯ�#�����mB�� �����m�t�:=~>N&Y�ff���\�Y����S��j�h�G���V��E0�Z�s�̽��I����N���cr߬�ڃ�ғ)�c-n~������i^��0�V�a��|?\��Ϧ�?�z�c��Ȕ��Tc�l�a/�5�f�w�n7�����������p<����6�I�Ɩ�y��ZB�*�`�=��~������}�uQ��hs�1c��X44�؉\t"��qwO�.4��)�Ҡ��߳qPS%���uƄ7��r�8�z�{I��i5t7:�;�b[����'��F9F��Й�����T�3`�ml(V���eNS}^{Y����yX?������IsS�L�F��j���ह��7�Ra^���t���͏��:��^�4$/,���w��%ZXu�[��v�܍�̧�����巟�`���?.��l���Z(BqF]����!9�2'uoC���-^�o�Aݙ֑i�iP����#uk�.�L,ߞm|�ӹ���!#��]��;U"
�\���q��_E�R{�H���hNr� !S����'�=�|	�9��\+X�M�t6�DcRK{��Wj��ك%V�ڔ�p��dkkY{�O�2ы��E���,�Z�V��,��bs(�)��GL^����]5F�6D��N��-��r���Hx�u/���obX�&�=��6�:��I��W�|ϲ��z�x`�<�������-��:}Ƴ�4|!��9�2:��r�m���q�i���BϑuV���"Z*h�����1�N�(��bLh�H��j�x��n�����-�      $     x�����#7E���pKC%�*iSmR��$
1�l/�����	��$/�ʰ1g�R�I���AR!���\��7Do��W}����I�<\·v9��|?��U�����q�t<���v��]���8���_o�����)��p���@*`�]��X3��-1���|9}�������&.���%Ηl���DP5$8���-1����eO��:���k��Ѯ��a�ߞ7�� �Tc�ر@�""��N�-1��"�Ӛ�uU�jm9�ҡ6k��\���@�þ3f�i3-1�������6�1i��;� �Y�����R��9L�İF��r^l�uU�F�2t
Q8Cu�Gt詣���%��q���X�%��m�Wh�%pD������9�!cn�>0������oH9jS��<�@� �B> V;�=G�����Ôj=�"%8��})y@�1q��g���V5�&%&��b�58`�C��$�]����Z�`$)P4uM�J�[q������-1~d�rB�\+����>��9�{���
����k�'<�G��lT���	���k�<hę�%�Kt]Ն�X,��P+�s�U�8`��J�6����/�u]�
�P��H-� �E�Y-�g�2=%+��躪[]cW�l6�3b�s�%P�H�e�F晭%�Kt��a����Eh�P@$� ҳ�`o�o��i�/A�����\�,B1x�!���1	�ີppR�� �G"�R�Ct�|�+�`���GD=���:dC�o��n�7R�i      %   �  x����md; �v.H�F�2QK?|����a��K=6e�˩G�[jJYּE�m�Q�����g뾥[iRO��o�����v���_'����֛�ޓ�}�x�"�X�{t��)��44�$)�/�Z�g���ү��p\w���LMW�5�'CW.����p�{�����t���Lʫ��~��8.�=F�G|k�z%�d����b��1�j�{�Y^_.�d����N{�K�GYmԻo�2�[R-�=�Ψ)�MY��:5�ʑ�KO�?�|�~���j���e簦�ud���k�6m��*u����]e92WY��UĂ�"t�՞��X���z���h�[Ӣ糘]_:2u����]e92WY��UĂ�"t�՞��X�՚��,���2���S���h�n��"t���,G�*ˑ��X�UĂ���3W���N9�9��+A��x��Lg��"t���,G�*ˑ��X�UĂ���3W��c�njD����|������+v��JXt_E9�}��U¢�*a�}���ꙹG������<:�y۩�v}D\��5K�{��8ԋ��*c�;��(����e�W�ʎp�v�e{�}���n6ޢ�s�i�����.�ۓ�_�4,�e��f�V%G���5PV�ϱ��@s��77w���������{�e���zw�3���ơ蠔V��VK��q�*�R<��E~�%ӣ�g�xJg�R&e���tV,�9�Ǹ:�ն$i:�i�EYuƐҰ]�/�^�(�>���֦���qa����u���oPƯ�u��W��3�H���X�UĂ�"t���\E,�*bAWY����]��{���)���[����I씩��]E,�*bAWY��UĂ�"t�Ջ��X���4�Q�'�>Z󎕯�$ٞ�֮�ܩ��]E,�*bAWY��UĂ�"t�Ջ��Xt��*;E�3Z�5����Mf�~���Xt����E�*��U¢s���\E��s�����4MwGO����G�i�Ze�5���x�"t����]e92W��X�UV/�*b�@�Έ��)u��������5��๊Xt ,��P�p ,��P��@X��@���E�<�i.���Np���]E,�*bAWY��UĂ�"t�Ջ��X�U�zZl��E�(�+L�{]���0��"t����]e92W��X�UV/�*bAW������)�/�      &   r   x�̻� ����<}�\"!迄s������q-�=�>4���f����Gs��@�H��.�|�����P�2Ga�Z`�J����|���1\1��Tj�#������':      '      x������ � �      (      x������ � �      )      x������ � �      *      x������ � �      +      x������ � �      ,      x������ � �      -   9  x��W�nG<�_�hbޏ����8��K�L����p)���4IS)!	2|!,�Q3��5�՛�UǹA�Q�e[cQ�'�7����a܌�٪��J\�
�y�E�K��0��C��.dX_Ͽ�]��2y}���x�Y�u7nָ��|5�]����}�������y�q9,���8M��"》ap��|��[�1������T�}�?o�5��}�Q��Ѱ,�%��2g������ɻ����^��~�F��\��6�հ٘1�"Vi{9E���(il�V��{�:�g�v�ns^�~�=���g�%��8m�L����#h�X�&�y�d����f(C?{���g�V|�4�>�����.��GkJ�6�1U���A����ZG
��=�}�=}/�G^�z���&D��� �J��`%�"G��3����G���g	�z�����k��b+�2'p���mÏp�G��E2��ނ�%&�Sب�9�2Y�׼��6�*�!G��8���?�]��y	?�6�E��
2���G�Y�-(�L\(Ѯ0/����8�yz�ʡ��Fo��vR�e�W���r�|^����<O�*eª3�e�c��d���](ZO��K�=y�^C�TaC�NN6$�jB_�0���9��n��q�����hs-�[�AH�c��Ah�$�9���DzX��=�,X+�%}J2��)�I�������vʈC�EDyP3y�E�%Qe@���=�Je#s�,[��bї\���2�Y��i�}�vbKEAZl�����_�����d�.�JTSX'�Q�
QzԢO)=��</g�wJ�;[e>�r��9qm[kZ�SE�]x�qR=��~ܡ�6�gA�=2��iȨe��O�i���o>$zk��ˠU�"*PE���ka%9�@J7_"����>�۞'����6hE��$�T��q���%�q5�m��qyܶr��&ʲhQXy�GL�e�rU�ߩY�ʚ|��Q�g���$��쫼w����Z�Ԙ�@qB|�9���,���bЈb�GW.=n��2�H;۳n]��/�>����W��O��O��t�7[�      .      x�ͼW��<�.z]�W�t�����,[8��(Q9XY֯?��={z��驽�8U@Y&W|r�$������(ap�"�q��L�'Bq�D��:���i:!qV�X\����C� X�GT�݊'0��z�Ǹ{���4��'Ð<��N��HI
lD�tDF�(���F�"A�y�O �Y 	88�Y�!%F����D�l��M�?�a�(�X,��|����H`���R��R$ %�(��l̠��X�Y6�!#�<���Bz)�2���B��	�$q�'c���B���F��ADJ8�����$BL�t�	?�*9>ň7�8�M4��_g����4ţT��,�"�K!d9�86��Y��<�6)�`V��MEע��3�N�s3<D��Ќ4��,�%�$��c	JR��<����% 9
2?2"��K��¿i&�{�.�j4��|�|��I��#�.���%�����K?#���R�C��A��4 	�t���!�5�b��4�'��E S2�`��d� #uH��s1�
$���&�$�$�H�("���P�1	�,��M�(I8��6w"E��i)d���,�w��hb&�H	<�����x��Z�g�orp	�q���)-F8��
[6�c�g��R�e~�;]��#.����<CӸ��oL��%:A9���B�\~��h!��o���ĩ@~�E��(��QL	8L��ȥq�{C�O�H�"Lc�
���x��S*b EH2���E^ i�%-�p�ı O��!�����x$А�yZ�V�u	�!bQ�O��$�w���M@�	J<��Q���p.RQ��	JRB%�����!I@�<Ќ�7
L�����P��tD��oS��\��E�u�*F�3$r>&E�(���'������/�HTuS�����"�l2F�@HH��R����?/H$
��A�5���YR�q�E������@�$�mb��L������ �JiJ!�A�-JXH���Pǟ2���קx��h�X�Q:D�!�$RRT/�HQ��#+Q{Ȏx$R$NF)H����?b��"-�h�?\�V�]U嗫*��,0�}M�����0��T��hȚ|q�⪝_��|�49�^O���j��G�����}������-(��1�L/\�4�ko^m�hg�{�e�V�U�~~�;=S�����DK\�j�l���\;��i	�9�,SN���;F}ڝ� ���l��P2��L���8�3�$�������/�5Z���
dt�G!��W4�c&YQ-�j�Z�X�jYB������c=>��8�Y��P�����#���籉z�B�/��	�k�>��^��{'[���.4����L� >-���k���
9iH����V2M�>\\�ʜ�h�6�OY����#�FJ�w㺰1\Ud=��k��:Y�j�U[��
��3W�e�k�Ѕv�Ğ|֏�Y֐�Y����M+��kFt,N��I�����9I��~�)=�C����� �j��������{�{z�eFu��[�X�� z�휮en�.@��}iQL�"�5l�����sˣ�N��ʯf0�~_�|�FU�n��y0�M�������K�-��5T|C�[��-�R��L�l<��M&�R��}L���ܛ�>�kg(�Px��Zʞ��p:�Iq���O4Ĳ�H��Ewg,*��E^��"����v�0�ְ���\��wz��'��sA]�C��/��%�B�(U�_�
~�#�q�͟4� J��%�x�;��E1N%4��� 2�k���bAy� ?�T��e��AE�!�4��jl#����~�gӚe��"��Љd���M�혘�H��tP�!O� �Ġ�*�ɯ�Ox�������ތv���9m�H7�E����M1�O�zK�$����&w,�a�,<8j��*��z�T����8�uME�F��w�.ԇk�e�){���O
H'-�.�Q���8�
qr���͛��}5��m�);-�"���DIS����}I�4�ȓ��ªWA�Uߣ�U��Q�����Z;͑�7y񵤓�guW_��o/�П[�g[�ϲ�Tw��1�ZܺM9%�.�ֲ�ZTG9�8%�o�0V����щNv�J<&�Ƒf��Ѫ\������Y#6�H.��?����:���N��Tz9?a)���b�-�-�sq�/�p��ӨVu�;�ãhK��a}��/�6�OE�^���D)I�;[n�'&�2��CcQ�'!4�:Ҍ�4t_���JWC��6�C{�.�d�ǌ�q�Dk5�*���� �.s�h��!��4x��wu�T�������X���)՝���EѼ��gC�LE��3F��۫}Ͻ'�i�0b?n<ǟ���^��v U��i����y�瀭��}� �H��(�On�����=�94f�}��4�!�=
�{�����T�Ao�қ>=��{�A��5�1�����G�H�G�<^�r9_X��!��	k8��<b�qi� �;�9�iP:U�"�/F.~hc�B(���L!��5ZӢ�m,Xh�q�Z�0��v��Ի.�}�-=|8[��"�xω�ʋz�i,��t�&E����ٌ���є��S`p���0����#5����v�BA�����8��9#NO"�MM�H�����tjTN�����=O�=r��K�d�XM��	G�=]�xϯN�(b��f�h3��ډ���5Lv#��rF�qO�fC�~�(=�6�)�Be���"A?�LM�
G5{��$�P��cÙץ<%���vܸ�yϮ���0���#h4�&��}v��蛴��d��Gn�o�KĄ�l�sq^ub�e��R�:=3(�:QDi=s�|��)�����)�鏷�|���f@��RߟJ�Q�MZ�b��P�+O��>�}�n��ǿ�?G�6����>����aegf_&�	�X��69_{�z�����KQ�r[�a��a��Eo�V��\�����+��A�}U��m̕{7~A3�ME�ۓ��>"$R�*Me �{w{����<b�$!�ADixD���D�J�i@R\BR�^����>?(�����H��ODU�0�	�yL��x"rd�� 	�����Q�=��+D���P�E��w�4��7?�+�?i�	D:�q��YĀ��AK���G��������߽D
i�P".21�g#Q� "~�6��N?����ns�g�[����7_��c�UK6Rx��jAt�{NN���>ޯ�<�8��ä�/���HnmͪYw構&���w����݈bb$�� D�� a ˀ��䬊�LkNo�/�c��Y�S2x�Jd؟E&,EB�K"�˟��Ĝ�3"C�����(��da}���Rą �Q�B|LQ�Q㌔ z�43�e�� � <�Ә�DPi�k��M�O<��e=x��?�q�K��� F*�*#�S\���#��D�1G��<_��@$!���xI⯋�Σg��R�g*�b$EH�	��M�oP!	
�<O�@�$1�1$�X<"�Ȓ��"�08	"	�H �Í�����\p.��X"�~�"F,O3������[�7����SÝ�����%j2��o����L�l���Y&�����0u�mt��\�H�;��*zGs����Z7�ԏ)g�]�I��J��j�r����8�-��GV1�i�@S6�}��4{�5�d��Ͼ��e����1=��1z�N�� �x
�ܭ��Mv��� ��H�%�<o଎�;� �?�=W�
�P�n=�{):]�R���D9��9��s�bπ�L ���]�;pX?Ԗz�D͕;x��#;������𲂤 !]������͗��p�Jy뺋�SJX���T�U�p�}�c�>yV�ǿ�s��q�ί��t-�a*o���̷��������X�w�]j����5]�W�z�^`nX�;1�N��<���,���L�Ը+��mo�h�Yv,N��ǖ"��\@(��DC�|s�	���l�{
������Ϳ��
���1�GRlm�C ���0B��U�/�|��8]�g�Z��Ϻ��<��ʓR\�8���~��w-    ��=�NN�`f��>��?23q[_��^kg�0��t��K�'p�bh�v(J� ���v]���S�ݛ$�����)�s�اQ8�A�x���\�Xw�j���Hh#?'��<���EƏ�+fƚ�xdD�t܊p"�׋���όظ��2.�Nj�T�x �R	�Uo	�J}T�=�U�al:x{p��1/��b<7�5��:�w�1�sF��r�a��[�JG�\Hd���@v^�w��C	rYz0O�(�w����,fU�W���C����L��>���Q�a��myŶ�=�Q~\߫̅<�ɣ������õyf�e@TO��\^�p��T�o�M�(�"�X�������[�����y>��-�wǈ��%$^~:��1s�em	�I[S�:��%}�Z�u��ں�±pOyF"�Ā����t�ȶ�Z��93vwů~n��޷ϭ����Vń
$���P�0��;��.��^��ZεF5�Dg��)���mω�����jQ��
�I>�3OM�X$������s����Z�_�*S��ɑ`D�Ut��N�%3o�X���tj�$|�J&�~�|��ҒɃ���ʍ��0-3��Ĕ+b�������缗�U���3�n8$�d�D�h���xn��� �EF���}��U�W!nf���M��L�tC>��C�*	��=b���Kq�M3��#��2��Uӊ�R�O�G"��+}���S
�H�ˉ���Z%�/v;�c����������o���K�d��� ��
{^(C�~*�W���P��]aLw����Eo�d��dt:�ߤ�5+Ǖ�>-���m���KU��9��Ǒj����L�3�¸�[�Aȱ�fݲ����R�
W�}���)��	���� O�_ծ�>c���Դ���H1�ra�`~Ne�x�|X�dm������}�^:����A���`�����k��º�rJ.N�Bk�)���'�2�W�X�2���9w2٥ز+V���i�x{ea�Sa��n��9��-��NDA��k�d?m[f��7��Lb���&�%4�N�$��O�
�J����YQ���`��x�6�'���RR��p��aT�@���2_Wŵ^a����2۫�<8,B%����-�s={�ǧ�Hb+�8�Ȫ�D��V��En{��V�{/F�T7��VU5�ه~/ZI����1e����_͝�gBb�6�[��#f~̚�����+�U��KT�w���z�]���7�B���	w�V�G��i���yA���'L@
��)��e��t��2T��q�0��YE�D
�� �g0_��D.���]$`~m��������~��s��#��E�~qT��)Φ#�L�3��	��*\JX� x1��+�a2^� ��AfF���\K���5D�A�B2NS y��k�'l�RT��ߗ��ܟ�|��ieΣg5/_��"� �%�Dl:�T-�?}CA�`��v���Ў�G&z|uTR���`n�7{�Ϭ���cn��O���ýZ�u�2\�O�fe������~��V��<����S����)�����	����\��f5�MG�~$�ӽ���-��+��j1�LB�n��9R�2V#��|�����^���l���f�w4QT��G��w���w�2n^���4�f��U�����R(9<�3C��=֖�)0#^��xۚq��c�^�g/ܪ�\���8�M>*w�|ح�u�}�N��
��i�yp,+#��u~df�`�R��I��,#��钽��#MԽV��BZb�r�_ir��#��Id3��L6�<��������.�g	�->$�7;���kT�="��=��u3ͣi,���>)�?�L��&��E��v-��suZ�*��vNW=$��g6���k��n\���'�դѩ��\�>)O�N���Vk�Ŵ�	k���u1�A(d��h���حg���?����^r=���:��n;�ʪ���U�������؋����Zʝ�,;���	�=���������6ۦ����y}*�����ʒ�'�͇�)P��W`
8VOl��S����{7�8
�P��g�_ٻD^��C|�Nu�~g�+U�1�����h�A����������J�9��*b�F֍gi__p{��m�ɦL��Է��>-L�����ۺId\�݈�±��ݲ�!=>�ɖo�mX_�n������Dmza L�y�2��C��m3q����S��D
��N�,�3�������y�����s��u3�F�3�t�Nߢ�5n̩��~��c\�k�aM'ך��t0���N�����GMd�y��K2J��9|`d��G^�?�J�i�[�}uj�����*��Qo���x �6�dwV9�^�J޽K慐Rjk�x��
X��A	��<��1��g���<��4Keg6�S���"���Z;P�+3M�{&�A�����P|��*���O��QT*%�9s�"ҏ�C�����H;#o���/T�`u���!���x���f�2���t��So!���*I��r5��ʻ=�ס��^�R\���K�آ��ձ.j�
��V%${�%�83Q����רUf�[�#q0�}��əh',놧1ԓV��?#
&i!�E��fp	U�L��Vb(��*�?b�������b�E�?�,��yղ�ɉ=/s��vWa����]-[=M^�2^}�C�ܿ{���Ҏ~ve֔��.��uij4�=������XO��;���ܩ�>�F�䔄�8�45B_yv�tB�G�B�a�'��9�:�^v݀������ߒ������Vڻ�Nq׶�N���7zNH#�I���}���3\�ߋdބ���p������i��f��2
ـe"	�ם���� p�Sj��N��QhD���?�Ƹ�{F߸��d�N��p�x� FK�����T 9ׅ����G�9��An��1��:Ē�h[�]�^���nI���?�z<�������qoG
����m�6ʎ���+��gQ�W]�o�����L��v+��V��zm(Ɖy�9�y��<�۲����u�ɵ/��܋���;�}��;�%C��-41�{�ʵ������+AFUAP��-Ҫ�ϋ��u��a��?����܂�3������m�vpޝ�Y6�4��w]:�צL<�z&^���e�{�F�]:��ոiW�}=8X9���K�q>tb�W���<�;b�/&�\r�pt�5>��]���X��0�~5!X?��zf��7��M��Xl�a�˫�Fm��Z"�rbV�|.ԇ����LD�"[��T��{�ߞe!����K���Zh�]w��"C�����p��R��y���bY���0��̱�E	廝M�IJ4�����)�$1ϧ8���ީ���(?�B���>�m��&zL"6�j0N�4z�Oc\��)!b�E\C�C>�4©��}��C'�V"QBs�$�ɯM���O;pF��3%��H�Ni�O4h�����|��Ri�񘢙�c8^񷇌"�/5A�E$�1���@�sRb�?��D@���H�:���V�5oL��c��D��C�<���<���h��2;�(Q�_��?��h���3,�|YZ	b2�"��������a���@*͗�v(~���3і� Z����s-����x�~�W�ӭٷ�Y�K���ӂ���=��U��J�}��fD5N�����(�Y��I��M�<䄘��g$(2�o�D�O���H�A�B�e�$F���4�����z�_u�R�r��M ���	�8��D&C$PH%B*��A�E�gR�M�3�g#V$A�$<��J�t��]���K�l���ɵ�qY0m�յ���qV�Q!�s��mr�L�K����=Mvi��c&s�6Z���ք\�ž�~���m�1X�\@�H�ԍ Z���AH��N�x����"�wI��y�x�jx{�<��H�lS�\v�,4p�_jŝ�Q����t��r9��۪�O6}���uM������_3ͧ�D���fV�gh�N��w/��w<�Fa]�w]��8:��*n���j m	  �ZU��aG�y�O�2��(�����O�
&�ҷǁq��x�����wV��	�w̐���R��8>�4��z�3�6m�~?���8?���'iWs�RnZE�+��h�<��� �C���M[�WOx�sC�ԃ�r;<���N��Cc��o ;/.1�lS��R]۹~���i����U'kVsz���ʗ�:yOG�?
�@d��(�sג^Z_w���ݘ���cl�|9�zWVg�E�HϐQ&W�3p
�V�%^5����aj�R��q{��u|P���%���0'�|�Y`6:�W"0n��]��c�5^n�[��U�{"i��ω�'�����T}Y?t^��/KO�n~Ee�R7%��F�����O73)_�n䡠�]�0ee���/!�>�V����"vU�5�X��wU��5F���F{k&�wZ�J�3�q>�6���a�gqv�е5��|�5���4�j'�+������OI)��y���t��J���zђV���.��u�6�
���wJץ-opL�x0^�]��0���k�m�:-k�u;߈�~�ܘ	�g7��%m6�g��p��JAxm�j/���OA.�ۀ��-�J1RN�g)��;�u�6���{����nN�i�����^�	���>ջ��?6����05�scv�?m�����e��i��ϛ
�/��jNr���۬�,D��-�x>����՟�3�uF��ϗ�j��ɭ�6Hziҹ:<�Ϝ���7����>S�����JV�%�T���ܼ�y7���J=�D���˭��	�s���a�3➛�k��٩�O��_����u�i@m+�	�٠Og[x\?�����2o1�9:�]����ou���^��m/w�݋{	�~�/�2�:jq����iPPA�T�,<�Ss�}�P|���X�U�z]�����N����r����_/l���V�Z��tE�Q����'#{���Ĉ,�dD�l"%�����1b�(f�$FE!�S�{�H,'	�ۀ�6�?٥e�(�8
A9�{���"��3�D%1�B�_��"��??0����/Sp����w�S�>Z��^V��ٗ^$'����斦e�0;A"C<m�?���1	;�� '����\�HN�/��2�e>r}R��ʇS�dU���N��`�W?ޒ�#�U�۠��mΒv�&=*W��}f&h�6��F.�ks�����a:sqD�ر=Er��n�a�ڞdTiZ&����c�tDdu�pW
�h������x��jj�3	�{�M�@�"}�yg���s{�22UP>��y��WNf|�Zh��'0��iWԜ��5_h����%�}��T�u�i��>�Z�bl�#VgQ_��-J_���|>���l��bA�G���c�q\y7�R-�霼,�?���׌?k6����v��5��������k�G7��B��Y{p�C�ݴx���C���,!�dٍN����	�`z�s��vB'�,�:�J��.dS����|r���w�e�D���V:A�Қ��Y�T���;sP�.����k�ڃ��Fϙ-Y����Rb�D�V"��P�jv�w�|N��F�]/�t�~���$����P���HLY�~��b
~��\L�a���)�$�\�GcU�m�B�@��K	�H\C���q��l���Oᷝ�B����$(@6��E��E1�<Ή��C|BD�q}o�" ��{�1�4�R��GI*Ak"��JG�$�H���Y����"��X�p�m��㢁$ U1�����?P�RtLC$��R�Q,*ÉK���8b�<��k!]!򂘩D�H�L����]F���rC� �o�#ZU��9�I��M��Ɛ�<+�8IK���"Z`�J8�r��4-R��;���oΡ/@�G���}AT<#� ��	�ݏ�}��WW�x6�EQ��{o���w3���"��s|ʑ�W��F�4M��y�[ic��Q�Q8$i:��m��m�����$�X�_3P��4#N
#2�MR��m���Έ� ��N�2!���}��$����D4���)���[��Z I�ǈ�D
�w������R�RQ�<e�G��Nn�R5rA@�%�?�?"�"���a����J#D��M(F)�q̿��4O1�H���"@>Ɠ�1.B9���4�A� b��I~� �hf&��D@A �oj�aQ������1Dr�1Σ��,D���M��"E�J�8�:��{%�b��'�H�\����O�ץH ���,����P�K(��%��;�����|�����n2.~�E�fQ}�1�~�"�����^$S��>)�v�G(� $y� ��w���G�i�gP��ⷂ"JD��"QT"1�@�����ˈP �%<���L�@� �!E��H�^��)�����ϟ�*�sK      /   �  x���K�)��]wq>|p�و���0�	�uuZ����B����$�}�U���k�sϽv�s�|�M>�rh�Vީ�[�T����^"5��o��-jR�����������HS�[���O��Lf���5���H�}�f�$ے6�i.�dbֲ�¹�H�Ky_"���]��u��H��=/��G"�$��(Q��b'���zr�+�zA�6���Vr�q6�"-�6˲$�tp��3�ޥ��z}ŉT$�J�_?��'��P=]��"I�%�7�R@܉im�g���>F�xꥦ�3߿�Ig`���nN���9k�&�i���x$�^J-B>F��]'�8T��Z$;�lg�{m;)�E��ս�j
:�&�V��g��ii��R�J�&O:ʥ�NY��>'��d�[��?�[������,�3�=.MW��)��yM�K�g�b*m��H5��*=�q:Sǂ�V�M��v��˘�e�B=o�?Ezʎќ{����U�0�9����f2c��-�"���W����J��-҈S�;����b�*�+�k��{9�����5��W��fi���*�A?���|n��p� ��1R�܏~��5F������@|#-�4���O^x녟�H�ys�f5	k���o8M����!Ej�w��%��w��	ڧTCR�Ν��4[�閥2V[��[v�̃̎��F�`*`�I���=��ĉ��[jٸ����/�e�x��R������" �ưi�V�Ɛ�H}�y/�B��wR�
�{Q������b�:�5����@\v��N�I1�����G��4<��Q��hO����΄��H��&�����]#�ա�{ץ��Y��!�1KIz�}1"H�2�����j�s>b���"2cN�N\K��.�����N7�`�/�{��|}�G��a� ��5�43�� �/j��.��H�����v���b-Wh-B��W�'������v����������l��s��p�)R6��-�/x����X���O�B�������h��~Z�Jx�J�v�U����Y5�:{g�cҙ��$��1l�^��-��yC�)�SvR�OC�7�`!�.��?^$Bv�� P��	Kq'�J�&��M��E2�²�I(�'@<ߘ��e}����H���dr�A�QdM<,�5�"ݽ�h�bmB[v��)0�b�Φ�#Na#$��s�bo�3�޽\c!~�Dxx��|j�0��{.��0,����;��8�ƚW��2E�x����9/j�-?*�-����JlYU�"5�V|�eZ�Ǚ�V�w�d����i���{Im4"I&�;I;�C����O����3���8)h���z�7Ï��A�؅���n\�y��Q�T�;�>y�p�A+��y�K	����ǜyFe7_?~������d͛E�y�SC��k�m��"r���e������Nr��Lx���L�掍,A�T��1R���qV�/ҷ�u�g����2�oٽP��O����%�1��qX�T�G�X��y"g"�_�.�s�/!��`1�M֪������hO-fZ:B+�F��*��.�r�oU�0��`e�Ρ��2�m�ʎpc��~���&��?�jl����S��O�[����C�]ʢaXoc����/�]�a{!N�t��m���G���=*B6���$"I�Mǫ�l���f7��q��q���m@���H6sN�ءo�CǊ�u�mx�U���.g�5�6�������T�      0   �  x����r�@�kx�d��K��`�@
��7g�+	K�"���#'MܤLw��r�3�-�B"Vq1�c�S
K߀/�<.%�uw���c�b�	�-Ĉs#��T�ط�z�O"!��}&�{��9C�Z���zJ����ʿ٨\L�;w�1�w�n����g��$)R�.�6�/�-	�[�>�L#�9em�����(Id��������P4�������.;��L>���o�o��g(B��`[�����[�`u6�x7�*��}�H�վ�}s�s�PTg@��g�C�1���f� nG
��lRbM$��YME�iN`�Ǆ"���j�c��?d�/�$�~$�C7��[�����u�V-�%h�X؅?�[$-W��b�V�f�`/Oy���aW�C���X-�.:E�]��٤;�BL�G�|���'��y8�����      1      x��]�RI����~ �S��n�������H9�D]m�q̌��OVK�Jꛀ٘�1a�RuugfU��eeU������q���x����L�����b�%,�����;p���d8��F�G����s_���p����O��vuYDh�bo��!�@��,p1�i88��더^35(r�E�0����-��3c/Û��啕
��?;;������px�??�]L����_�T_08Og��^L��)�حUy�ڦ㓳�t46����Q�x����AQ��`� ��/�Ha"C?����[�{�ݨԘ�8�O>^L��`7��E��BS��5�X.u4�?�Vc���w���9�/���┋�n�.g�qk��\���@��=s���pת��VΧ�IG��g���<p�x|����20���C0���h:��#:6���W׫���TN����2���Zl�J
�!�i�S��P�%��0#h�� �Z�����R�᧤���d�����o|���I5��i��~n�<ћ���/���u�*�	/���BF���0�!����)"�'����\���g�MƳ�`||qco8���b0>=��k�:>;����w0���Blz{I��XYd�<
D�0�VH�J~�?�N�.��_~�'�`Ro����Bn�#D�5�`�`(*�!���	E�٧��.6<�_y����w�lt��rg�a��Y�l#�)T6�b1f"�(m)��J� ��?����h�����ra�5O�� ��gHU�����:��D��$�NzD�S�"Z��xS�ο����fI)|�����5b�$9F��i&�wF�h�0Z�ȭ��zJ_�K$��e��õx2j�l?���`̸$�}Ӎ�K���P�)z�TNo\l�A��ه��?;������_j�*��l.i�3���3^2EF�apшH�h���i����&o�ᘪg�V[���( '!"r�9C*z�4L�a����������-��n������Z�Pp�X�m0�8G1JB�p2h�M[���n2�����D��UM��E㣣����K`xh�m���r~e��?��o����ni��w���iJ:���t=�(]xq��l2����exM+I� �M�K�%�@��N1m�b3i��<�SMm�M}w��5�V�m������#���w� ����Ά^	������w߃ㆾ+F�μ�~��:>�26_�4ZP����{�V!KZ!��
.*Fd(�����槔��|$�\��|F(Cf�����P�ƖК���{?��չ����ɕ�dtZ�X�|̠�5+��j{2<y7�L?�j�^:���|y�nu��MƟ��y��'}���Q�!���22��p���Ȃ��҈B6����4�gÓ��~�Ʒ�uHr?6��g�O��tqwzy9x��2��[�7}�N���.����"�2�&��! �D!����X6&R����!��˻O��>lJ�?~?��fN6��\�%ڏ_6�k����GK:0���2�.�.�n����|[�ܻ1�;\|�4�,��o_����i�nu\�)��*X�>�L :.b��ie�LS���/M������L���h�s���n��{����|��bd��)�.Q��u�$�2;ܞ``e��!��?g��3|�P�tA2������@�pt���/)HFD���
!Is���*��,������n�wTܾ_�<����[\JU�Q�:5@��p��#��UA2ک���#��H`�ct�IT�\q������ܙ���l�MF����vW����߁�����p2�z���u�Q]�<nV�ԗ�A��T�ϴ�^x��n�5Q�{��%z�X�U��B�@��1�8N1&B��s�$�T[���G�>��f��]���Vkx�oJ����?ѡ��Mܿ�G)��i��k������-3z}��^9�qQ��GD 
�i��`���{x��T݂"��zWC��PM���Q2}�������Cų��?^���l&f@��G�α�<�����N���\G#�=�;6.j0���HƓ=Hk�fXP���1�,�Z����*6V��&�H*�٪����ˋ�e��)��`�s��MP2 ���F��7�2�nཛ�?�<ǣӏu�<��Z+�l�hC�s�]cY�N�,��vͤe���8��aH�a�!H,�M�9�
���	��0A=B��e5/H����Q�U��Sݾ>
~����/<��b�_��Km8knW7o�m�a�Zw&���<U��f��e���Jf�V�J�G��.�PuE� �p�`5�:y�����5ё�xvV�Ӆ�a���B�j���I��&�"�PJ�� m%L�`$њq	�::k�0c�5�&�o~Խ��H�r�-�qA3���$�R<�����`zs	�$�"��Ӭ4LΥ�]�(�w=wz��q���zuym��o� ���˖����1��R��8�7K��`���p8LFg�&gS�������x��Im5��dK��.�խ��)�Y��kX���}Ecє�(h��#�k��Fρ���f�Hi����X���r� �Bʵ�n�on˻�������/�������L3	�!�|�/�K�:�a��F��@9��~����V���\����s���KT�4�F�E"8g�=F5�m�Q$�a�mс�LG��'��8�3ޓ�a�I�o��Q��j� ��TD��c��Yǥ�^�ن�M"В�v�6�X�8O��؄�"4�E#f�K��-U�ݒ��2 ����o��ڌ�L#\0���q��@��(�c��� n9o�۫��<?$�OG+;@L�$b�����ރ���x��i�F� �"�s�e�q&X�	X��N���<ʆ`I��R�V�K��:JlJ�<�ẙe���:�����A�G�\�h-X�20k��.j�\	i|@����\~g0�����p�h��*_�'+�-VJ-�@0|��`�E�Y�T�W��S��R6RMk�j֪q�j���В������jM)���bV+�BŠ��  uDr�	ױz�u�ݽ�*3yJb	��> �����,�>��"��z���+�1��4�Fc�'�~���{�ux2� o0�7�_� ��ؓȭfVy@C��WECj}6@��&���KL��!���_�����"}[��u�]���?ː��Ez���~�zJ.?��X�D�8QGUZ�rQ`Ɯ׌iE:��\3�K�%��yV����;�\g�`᯽�ŷpݻ2��'����0�$�g8��q �<J楈�!�o��*�C��ϙA�/8���2�"�<P"�p�2Ot�9:E��Ю������I�k��>��m�p�T�*	�y���ͲUB�>��P���ϲ�D`�UF�@ �+�(AaI��i���)e���:�, ������}l-�4�p19I'�k�IC��4X6�7�FR�a2��#9����S�:�=F`Tk�5��C�Dk�([5H}�g��L�1Q	o%��Ro��N����gݘ/X��꛹��v4J��jV�S�
�I���#ǐ7�X����l�!Mٍ9/��s)�!���<s�vU�(�8#0�`��tڌ��jgS���YfzBi;PJ�^���N߷��q����;]�kkp<쟞���Oa~�f�w���S��J<C��<�be�:�<x��QI����p(�q�β<�C��>#��_K8�����eBa
��S�Pϸ&�
��V/V��U�x����!���������u>�<��,�=:��u�}�R���y���e&Υ^��=J)��E9�i�|,2Ba:�M9h�L���d�^��\���s�nk��c�@�-�f���fu��j�_�_w�^��͎A-]�����\V��!��ҩ�g�o�����<^Xo,�%�7Zpgl<pQ�Hk��A�!0#Fu{`v��prr1>g�c���9�V�MCU��h2�|L��>�~�Wd:����X�$�<s��6L �*D�\�U@Y��@����Vb��1��2�W�_� >  �1���M#L�~~�,�i.���[��T�t��W�O���\Zk-�ĮBd�E.��<`��K�OL��m��|2���tQ����j�E�O�����t3�ۖ�8���ƴfl��j7`Bd4;�,�hE�,�c�\E�H$-�:���٭9���cZ�j��:_.��;�a�#	�0p<�3"�� P9<���N[�5@/^�k~<U��f������,e��$�����~� I&$�2�TF7�=V�;��J��Q��CE���s��X|������"&2�䉴��;��4X��+bd{����{H����t�Ezf^Fi�V�Dż�@gH:l@�zQ$Ru�3�odv:����)��i��]U��&�X厳3ZQn���܇���|�2�E4'�2_�J��<D"��\�FlRte�t]�\N����g�������>�������p�i������J\���Dd�51A)A��}qJL�g滷� ��;L�Ƈ7��b:G%��t���C��.bj���sk:�r B���TR��Uyܟn�2<_�������u��	9�y��SKeSK��k��o�L������N������b�#뭏Z
�<աuil:_���8�g�d��f����]Z��Hݍ�g�sI�������3@v��DJ6&(č��rF�\�t �w�s� �˥� �;Q�&�T)t2��҃�����0�J���3Z��$ӱ�2���1�
�U�K�"��"mmMh���Mw%v	1��OL�zq����X�ӢN���� ��Q Ag�. �Q�eJO}E����e[���l�3��	h�y*���ӆ~зV.R$$DpZ
	l�0��	6g�e0��7��u�	���!��{���D+����h�b����秳|�ͦ6�.=�ͦϹ�l8��se�1Y����2�ca̝��X��B#I��,��Zڊ�� <�i�����Q	Ctf�9��r���a�Ro���C�>�*r]�j��������|��;�aܪݢ� 
ˌ9XƢ��J+�a��6�KbB����B���J�4
zO���u�ͯ�oË��̎&^ύ1!qu6qĄeF#j�Z���;[��I���>�[���ٺ���Lŕ��`���� V�]�����S �yft(����T1J�pcAi��CC)C���n]Gk��'uU��X����5�|�{��7�d�t��2�R6�L��>�Tz�@���N{��b��5���)�8�Z	R�J�;k7��ZJKi������Y=v0N�WF���b��V�]��QJ�G��� .�2ޥ�R���~G��E˜&��EUf�	�f^(��o�K*Ӳ���Q��K��3y��l��P��!��WؽU��d��Ʈa�l(�z��X�2>F���:�� ��BQLR$Q
��7��'����*��b����22���W1��/�5d�\����� ��TobzE� k�J#c]�,�|Γ�]�ysen��W�_Bo9o?P7F�	�:��wL�ڠ`)A�U��t`�IHAv-lY���]�����Q�8�x2��\�G���}�ΰB�->��Ø� M��H����|�Y��f��J���BeL �� b�U@@ �E�M�y-��T�S伫h�����g�`]������P~f�����~@��������7Z����V�椙���w�p�r�/s7_\��)�bs�̄�-�[^� y�){��ٴ.�QmYCR��x�?���[�6Dc�&U�U���\\�v���6�&�i:�Fe4A�(e��
$b�4�H�O[�%m���u�U&�C�����24�liA`@^�jqH�w�8 �F�(=�i�*+F+�34��f-2�Z

�ċ��L:à��]��k�]p�#���%��&���4�8��9_t�H�Tע�XbF��t�6�id�,�`h�=PZH���-,��[��Y;Y��]z�TV�*�,����/]�RY�������!)�&���V���W�ivz#Q̐��1��쬈I�L����ˆnj��7�[�'qp���]<���ES4'�^l	.�+�t~���
�=��@$8ũU�J��;�MUꮾ��J��nk?� �+P]�� R���j-D���@���W^�SÞ���Tc��u7ev�0���(-�矷���i�8��!��t�V��,%   �؍�6�@Ch��9k�a	�h�7��Q�{�6[T׌��	۹��&e}q^�R~xq:���k����?�^���5߼a��A�3��� !>b�r�H�B��H!�&4c��W,���w?���ݥ�^��v좈j?��. g��_�$�G�Q.4�8�2���0В�)us�]��R��%tX�l^�`P�Lx�1��X #E�u��Z������8����u��ˣ�^�����Q~)�"�R�P �$�3g�UL+���I	�ׯ��]���Ш�JD���JQd�"�J�#�)���j؀1D�<�y�=sA���u��(F�Eƥ�vD*d�%�R��[8$Xz'-����?��&e����6� f��������]��=f���'q�/W�@Hi+Xvf�0��
M���0R�Bd��t>m��q�D{9�ꪆgN��-��,i�B��0r��F�FR{$�7�ٴ���9[�j���4�8"b�����`�=���j���n�B�m<xU����pJs5f:�EJ�K�`�aZ�q��P�) �:��2`�6��J�h0LG��B���{E\�a$�~7ϓN��7���W�!�3�w�#�E��r-�KG�4ŗ�̎�9�I�����E��
      2      x�3�L��".Cd�!����� �p�      3     x��T1�1����9E���&���^��j%�fg���.�
DW�3�&�*õKk��yRY�F��Hp'�8�|3{}�k?�r�\}��7�M�H]��p˽��_�qMF#�8�5��
ye�^��)�-��A�g�x5h�YU+���c��m6ׁܝ�l$Hˀm�������&���*���g�it�r����xA�ˁK����Ǣ�6u�b{<r:��t�~<G��o����� Kg�~Lp�~���C�Ba��1bY�Q�������������_�9�6��� FV<�"#b"����W��Ƃu�i	�:�{a����`��7=ƾ��bi�C��"ڱ��Z�]`��3x/Ĵ��x[���Ι:,��f�-]~��E��+��](;�����'
���μ>��ʹ���=�z/�zA'=�[�Z�U�r�'����cݭ���t�����wrL���������Ɗ1Sy������ARk��:�j<ޯƯ����A#      4      x������ � �      5      x������ � �      6      x������ � �      7      x������ � �      8      x������ � �      9      x������ � �      :      x������ � �      ;      x������ � �      <      x������ � �      =      x������ � �      >      x������ � �      ?      x������ � �      @      x������ � �      A      x������ � �      B      x������ � �      C      x������ � �      D      x������ � �      E     x��ZɎd�<�|��ipK�y4��/ pIJ�2�E�l���m�fzz_�aT��b�2##�4��,�+A)�jIl�T���PEڡ%�FJ cr�Э�:ؑ�d��8���8��7��K�Q�/�hn�<�����Ͷ�	�}kY�g*-z
9f*�*ѱ�-���"��/�W��%��f�A5�(�P)���{��w���-wJ��������
0���N�&�(xa<�^hT��a���!��}�S=�7<62*��k�g,�p��vqԫ�d��m�6��琪ء����$�z,�!�b��~�?����Bl�!��P`ɔ�\���,Bs��[��}����̰k 62m �veE4_M�=��q�S؏���it^�c���[K�exL�h�jM-V�j�]��qp^�C7�2n =#=s���ho�����ǻ?�������ͷ8�P8�"�m����Ȃ��5�i*���r�����?��x}�����Μ��9�����j@�YM��R��2.�U����_���� �,9k���.�
�X���^���ud���0B���QK����A���Y��^�6D	���G|U��u֣h���C'�33Q)1dT��FXI:����1�U��>�oq�w�t�EI6�VΤA2�9��'����{�U��+>z���.�],֕B�B��:���9�t�.�_�z��sV��x7�|䈬�6��)k0�؍g�������%�O�gf$E}�dB��:*=	�h�Z	�[����_�?��ݩF�|��+JXH����@��C��~�_o��?�@�9mY|��b� �ۜ6��ƈlmk�:����JB\c��zj�EM���� ˌ�>ɇ��6�~mA���
����B%��c Em��]���-�]�O�u:>/|SRDbN�a*�N�2�Θ( j�.>�.�W���z��w)�r�
B,�7�����%�0��'��������Ϣ��[�]D�B�Re�M�~s�4t������х�{=:/tx.kM�U�!�6�ߡC��2zg&��?�;�̲i(V	ZT�fP�b��:�5����޽J���y����c�笅k�2��s\o2�!ج���iӂ�&�4df8瘚6�>�T���*�Η��`o���3P���<eGeX��(u�h/?C�\_=)����U.)�Y�:j3B�U�C�������#z�y��8^i��}��)J�J\����h؂�Q��9,���,�|���ykb��S��R@�I"�w��:j�P|�q���K��TO�~��S���>��L�ʠ� j-ʢ��bM��;R;P
{�SG  �3I|�>�s6E7��4�[���� ʦ�/u¨`Y����)�vCjc�B1O�6xx��
8�g��O~�Mѭ�c�y (Q�.%eo��p�v�έ��G��[�k���)�,M&��F04�K1�e����V്�� T�Te���WL�Φ�~�����gG���Z�N%6�*c����;t���f摑�σR��:�
(9�>%]y5�?�ݜ�pa���y���-�[�Ϲ�
����V�N+�.�4N	2�֞��jT�}�?����� PG�C6S6=��AJ�*�~�)�<���g�SE�)�� �8�{U�<���?4E��qv2���F��Ya�U{g��םi|���֥H�
�G��s�I�l���pq)k�n�]��w����hcw�c���5��&�Ǜ�[�'�&v��(����U��(��c)���o�n��:l�7�
9��Y�!_�բ5%�0����C�V@M��8 �Pq�zk}����7�!-�04�V-�VMΚ9Ǟ�������;/�/vi�t�j=������!!�+�6(d��Y����Z�'����$���w��mM
�j˼� ���}�3�"�F�g>H�X@^9�@x�Ia�J�ٷ�h�h��`@L�>����G���֐� {����S�n�j#�+
��Taq��Tc�C\{нenV�!�zq:=����Ec�l�ֺۊY�� l`?�J�q��B���:�z���-�*R�4������k�ꑦ�k�ŅE�︐UtA.�{Ja���)w���v��
��ʄ��Ut��:j�ĉ����<���&c]ڇ�{^b�]`'~�=T��j�{�T�iJ�ռ~�.��	I��0Jz�n�4�F��M����|��r~�68C3��`_���y�w �l�!��:� �WѦ�MV'�K,�D�'))PtY�f�s_���������$����&:Jb��FP)Ww�]龬�:�f�L̳�/�nG��(GfU5���Η�vl&V�){?��64�ٟ��1��B�� _�ܦz�.$9jK��I��Y;_}��M�Z�H%L!�X��	���M|���3�M�^4�a�����]��x�b�ո��c�"��-XEX\��g�kS3�
�	Xmbi��q�?�����h-�Y���
���<C!�r�"	����n��4i�A�I��~� �(�t��D>�=8߾��nhq:o�yO'��)�1��1�����g��s�U�ꜫ�A'*�.���:L�v+���p����{vE*i0�#o�T>��wΦ��%>~��t�K�
>F1W�󶜎\��(�v����,zü�V
����e'����3*����-�3�X�!;���lu���l��B<#�4�,��{o��<��e^Vb�)�COM÷�?�pz�] �x.�J��^��Û�ٖ��q���d��"r�P�)�0���@[�d�e4��%��L�5��je���Ru��y������9Ο9�~I�M_��ԫ�Z*�y<��%��jh��\I�����I��qEVC�
f&/�*���V�h��ħ��	�q2$�l9j�`�4�,"��e'�~:�߯K���Yz�X 	
�����sE'O�n^6��YNf����	�umv)��xV~��A\����83?A�ٙRi�,q������;w���:�;;�#��y'�Q:�fT�y�g�����+�����ӧ��*,�      F   %   x��4(0��4��3�3�44�444�046������ U$+      G      x������ � �      H      x������ � �      I      x������ � �      J   		  x��Ymn[��}�
o`
���Mt�3CS�ɒ!�)�V��I�R�F�c��u��Cr�|P�Oi\+un�b�L�SmՇ̮�86yG;w{�����Ŷˋ�����|�~�.���A�� z���ni4Mf��Ǩ�e��4I�ϘE|�q������̚(�q%+i(�z-.��ՙn�K�ӏ�{���e؉�v����B��k�4x�5��2���ז#/sHU����B5W��|���iQ���dO���m{����/Z����?��՜x�U�X�)vVs���ь���zN˦:;f��1Իzјz��ͷ���,�?^�zJ��ws�up.9r��#�Z�Zl�-�LvКX��+�Q�D<V�S�<S(c��|<��ϳ���+�_o�,�"����bv�  [0� SlT��'����?�d���6�����"�������|������^�E�[G���~��ԜFJѹ޲���v>��|(��(x-ģ(�m�.驷ҷ5���8KAMv�:#(�4Q�>V�>6T톗�����^`�6�7�}��A��T���Է�c��]?��⧙#��]b���$��͸���~7}=�>�謄@��S�@-�N�*��:R�>�y��U�=�sPeà2�g�*�Qc��x��6�7�c��A�#�%R�a��h���wa���l��|��f�C"�4Ü#M(�l�K����w
�^!�"uL�( �Z&x�	���4������Or�����]n�f0���&�S�����f�r<�<I�fhA�Ђ8��ξ���DB��4磢z� ���S 	�=�� �w O_�z�G����M�RN�x�eg²Ĝ;��&c����ؾ}}�ݼ�(��J<@�:���u���W>�Y�V�\O�`���z{�81��ݘ��oh���۳�E5[���F �t�TR���[U����,�6J�њ9
����8!�x�߀�=���^5�����Ay���H�O�����v59=?-���c���}�W�����Y���.Q�B�*j"�s7o�o��5l���M\1��_�y)[?���v!�:�.(%2�8|u�n,E(j�^���8����^$��CS��Ԗ��T�3���I�&���wP���r=~>���y���?�|�%�\RN�p
h"Y3�Q�~(\:jW\�ݦ�����U�[2d��tz��j�hݐ:ʜ���Z��X��D��~��A��wpG, ��F��� ^B�>_/o/w��.-N�?�[z8F0����
ŏNr�M���t���}�S:F|Ϝ}98�� �6�4h�Z����]�h�I��e���]D>x"���$�g�R�y.�F�A-m%7�n��Ɗ�PT�B�f{W�7�Ԩ�9����g�Y9���e�zO��
w
<-�2r��ǆ�;k%�"�KS*���U�|GS��[@���\�ΕQ���30R��¯��P�Y�	g[|z,~Z���V�b]X�9�1z �����P�<����û����M�YI0~�¡������+�T�A��q1������@t�
�1Q��#�����$�y>?wa@�Ū������R�#W�|e����.�
b?t L ��h��en�P�:����}T����V��y3���HX ����,�ځ��i�C��)�� �F��?w��:ס$���Q��E�lʐ�=?�u'l�5��ԕ���Գ̊ȓj����}��@�0�́"���0+���3V-����� �I����v((��E^%�R ���};�`�2LCf�d���8�͑��-_}g��<[\�G��c2`$���Qg��Аޞ�t8��0�=��MKVS+��]H�� �ו=�"F?�ifO��|/��������_�x�F�l�����A�b���qv�7Iq�˅�h����}�$
��`�l��\d�q}� �V�3xK�s;�Z'C��ʴ����i��&W��-~�B$�<Ƅu�W������2Ø0����9,s�b�e����#c��gRW*��).����D����bYm��p������ᨥR�1��A�fE���;�����s�����dp�誼�
�Һ����!~Vdw!R��=c�"� 
{4TO�L9̎e'D�`�)D�U��:������ޭ���{hELB.��hN��[�G�T� �E\����0y������s�0��m(�u�"��V�2Y+:~:~&�H��N/]|�mZ��r.���C7���/`�ND�U`��X���'��Sp�A����ȝ�p�Ҥi
�a��O���F�"�      K   �
  x����n�����s�B���~�9x>r�)O�J�*��6��R/��$�gC� ��1�?��dF5�}wْs���.SV^R	^�&z-?�.o����.�S??����S9���cC�㹤��<���r�o����u��w0�Үןv��x:���_��N��u=�~��ڞ�)��c��֐Ik+�2�(��"�f�CO�k{�2~l�t=��r���ϗ�t�����?⏭8+�>)� j�Rk�J�2ec��mk1���������`u�B��&���S6I��Ɛ��V���4����+4_ø������qO/����s�.d�/d��6�k^Q�C����Բ���BCx?\�J��gJ��@i�t��N�!t,tr"g�(k�`���P}"ٓj�˖]��_��Hi��Li(����;�:
#e,�����v��Ȇ��D�]�nCj?���и��88z���!pEe�9�dO��L�I˨�������}�R���Pe��\e������������z#�띍��sh/\�p>U����	BK9�o�D���aY���Gq���l�pc��ʱ;��HN�F�i�pߒ��S�vkMC����.�q�3�qp��.�'C�X���	�2\��.���UW]ZK[��������N`��ZG�����	5�ш�"�����+���ޅ�EJ�Vmh�ک��\b��LbH����������JA7Ͻc���\�{[�V&�����p��^�r����G�o��Ӭ��++Y�ch�P���@�%(UPuV��)I����?�S����۞�e��].OW3�lg�֌V���ܫ7!([����}��:��2��7�p�3�qp���'
C�Xae�O�vJ&q�|��&&R���u_v�n(�o�����67>"���9ݦBC��<˺;��$ٸK�)QLURl]	���~k���K:!6<�08
ɸ��p�P+�[�dN��F���U��嶱��6�>��L�C��v`^��਄��~����i%���|>�t�+^�].�E�_^r7㸥����>>|�#�-�z���:��v�]�̯��c����-�˹΃���_ص�W�_o�������;��$��O��in��;L�"���m�$���zP9�J�s3�J|U2I��d.���|�௿s����K^�	��yF��QF��~>}u{��x5�m���͕�3����i��1*n����b'��Lt��{�M�a���Bk	��Z9���0��{�Tl��/o���s:�q���~^t���~_Z:�<�/|��[3�%���9�drdz�>�G��t�B&�
�B��BA�]�o�Ҿk����㡝nχ���p�%�^�$�U�TV�Q��(��Y�Y[��� |m/��x�Qp�V#.��>�� �&p/Nr�e�g|����J煝dRv�2!j�2qkIQp() ���^�U��M,ӝV\�'ő�������A7#���}�
�*x!tR=�WÕW@��J0�km�4g' bcv�G��SLm����-Q�!/b.ٳ��n��8>�GMaL��eMYEf�����8\m�����V���N��+
��Wf' v�4I�/&��Q�l!woM���a������	����G� <���б����W{֩�3r�r�-|5�k�e��u����	��Li(�����r���N$�c#�6����RG훮=�.�N�|mv�=?f���1�.����8V�8�s�霆8e+��q#�M3�[��V��k�"n{����]ޞ��.��m)m�-rM2�U�@5�E+�N�ϭmK_���M�7,ap�a����N%5�!Ys/繼�\�@��{�.j�%wQ��� |ev7=���x�1ĭh�Si^Hr�~ėL�W@j��S�G��1���N����H�=O5F����[U=q�)�%p��!([+��� �N���#@08�r���t�	��ʹ,DI��Ɍ2�>	�}j=դ�ܚH����	����C�a5����@��rBqؖ�z�Wk�YyEť�6��*��f'p��ZG��.����m��?�zw�/}
U	��S�݄��2!|<;�[^lߠ�����C����J6)��q����>]��oo��rKa_����σ2����g�:����I9���D�4�b��
no~�Ǐ2��g'`��u��u��;]��(dpI�F>�D��F9��c	��-�M}|svw`�3�t���A�����]���_����)f��ۘj�,����N@����	���t��6 �7g'p�  n�Nই� ���צ~�)y�1��Ep��TA�.���`����	���[s08����`v�W��J��)��7f<�J�(��[KV���N[����	܍y ��2 �~kv��JM�I!�[�c�)��IH���]�(��58xŭ��x{v��J��]�*i���YJYK
��{�UL�K� j nm�%!��	�+��Ey�W#�&'xq_����,��Yk�v |m/�=�>����9����	�Y�n����U����S�*S�K׫�߿Y3]�5X�����
��Wx9;a+��Z�R�lɝL�+�\�>R�|���w�pp4#�))V*%ޗA�R��T'�H-l�,>�l�-�gb`�g�w�� a���ϧ����_���      L   �  x���?o�1���w1���q�EP``�8��P@�}�����@��ٱ��k����*P!L��7���uIL�x��_�K�t�}���y���u�����ǻ�4�X0�ǾL]�&F�k1gY6��4檹�-�?E�$��yا�;J���cƊ�C'P����ƣrN��,�B�P0�S9r�ԲLf�$��^F�B�A�ph���7�1���m���B��Q�φ$�#R�{�#w`]�S�F!���ݖ͙r��&I�\��n���hkl(�;L�>���ʨ��W)b)�5��G��<))�1��#����˷}>��;�?ٽ����^�<������ǰK��9Dj���US�i� �����Uxw����+�E�E0�4�1��f��I�-��`�:L����E��d�f^�] g���
���vҞS��F�f(|ؠD�B�<���x����0Fa�.e6�v�����ڔ	Z&��s�ȨA)G��w���a]��      M     x��W[s�8~���<��i.34��٤�@wwfw'#�ǠE�\I&0;����`s�I���H��t.�9��<%�5����0c��bf�(9��DR���w���r^wݏ����p�^�n�/��:A��s�X��k��*�ad�ڎIH-X	GғFO�ԖG@���HX͟q��7���J3g�$~Ե��S<8���W����T:_���@���tzY�����QI�8��΁�e-�>\{\�y�QŨ�("t��,B;�,�d
׭F��q]�����ػ�!aB;������q|�����@�D`���{�*��^�0+���$4)|K-\��2��8�3:��S&*�t\�m�*���d�3?�vt��8g�8nY�7d�B�d}�j�y�Na�PT��a�u|�#NV�P�v6���rI滖_M����|��QN��>��:�SY7�4'7W:"�&c�z���z��Ǉ��܌�T�1v�T��g�ݡ�q��qdp&0�ZcO>��= 9�'�ǫ��(�I���<��$��5�`�(�b��,}fr���A8���� ��Z���e�L�Έ�'r���VH�C#�Hѽe�����F�Mw��wя��q��g�W&L����f��DDmp?+�ɉ��L�8d��v�����m��w�sHz"�*�݇�V�2ܫ�KdãU�"����I��]>�2̫�l'��#kg��������� e�%���A�.U������c�䭩�-9Z?��ʲ���p��s�oz��D�b����{7��t���}l��mZ{�Ӈ܃��{]c��H�:��[�*�,yT����	ij:��!�D�0J��HH�,Q��m��8-F���68��̒��

�h������[��b����cE�"���R�?^�G�������j[j~�Υ�j5/�xC�+��P��]T���H�u5��R�^K�(aa�Ϣ����s�-�|���������Ճf�)�K�海���-��7[��,�s�?���{�M���������8��p��      N      x������ � �      O      x������ � �      P   I   x�K6O56�L4�50�0�5I14�MJ35ҵL37�LN3K3M1��J�/.���OO��K�r�,�K-.F����� r}b      Q      x������ � �      R   K   x�+H,..�/J�,�1J�0�<���2�D����L�$��@7)��H�2���29�,�4Ō� �V�̒���b�=... ���      S      x������ � �      T      x������ � �      U   9  x���K�1Eǯ�Ҡ�?�-���LdI�ާ��?��$h2�AGG��ų�L)��WPo�i�����r��M��?wQ}�����֌gs�قV1��L̝�$��_�CF�B`�
 a	w�0�;U�;��.v{�?a}܏����8�ҁ�V���
ÚMz�9�o��������X&��#܍wY�'���\k+�u�|�a�6�:X��"�?O�nO%S+��68��H�òȼe�zy;Ϗ�}�>T�o��|�D9�`�͕�k�mAT=�ʘ�,��/	���/��b��@��� ���U|:�2�b�Ƿm�~q%��      V      x������ � �      W   �  x��T�j[A|>�+�*{_�cH�bH�[)̮vU�]|���+�I�:n��O��;�F��:Yt��U �K�b}����uQaw;���N��N���m[���`x�g�b�*eJ�<�ZAao qT�8����t�/�W=�C�
�!�S Q"p�:.1�|�n.�N��Ӌ��h|>�n~Լi��Ւg�v|�=��X�tj<����%�
V׈�����������pz=���N��}߮�`w::��V=
�s�XP��C�h &��d^��5�\]}�\���=��?��������2�a���JPB�*jvNF�9�n�Vw�i^�)-u��-��zHpp�<���AH���t%����h�i��E턔���=������%e�'7��	M�8���ȱ1[ �; !'���A�����6o�8-��Mwv�<��c&��(G)D핕�5AR�@ T5��P�+�8�mm�>�p�b��<�*�/Q��1+��Z:���i��c�9k�-�b
8�rD��#�o����0UE;�i�� )����%�-&#ė��;D�<��W��Df�	�1K'�6a$Xd�^�͞g=�n�,���������B� �I*eJa4є��-=�߻(��l0-	*6/��c�������1%�o:�S�͋��n�>�}�6��*      X      x������ � �      Y      x������ � �      Z      x������ � �      [      x������ � �      \      x������ � �      ]      x������ � �      ^      x������ � �      _      x������ � �      `      x������ � �      a      x������ � �      b   p   x���!�s���-��26�a�VY���JHz�u]��>v��ʣ]G8�uA���"��X����H̋�B�2Xu�ﴰ��T��G�9PL�{���s��פ�w��%0&�      c      x������ � �      d      x������ � �      e      x������ � �      f      x������ � �      g   �   x�5�Ij�@ ���(hm�>�c^0�^ɐdx���8��JT��Ī��T�A0g�e
�
�t�H]͛@4&PQ��'R��>�L+=O���S0�bɠ��2�X��W^6r����H��W��/n��{S����HM��ʃ���y�,FT���Rʴ	j�������uɮ�~>澧���;�����n!W��m۶C�G�      h      x������ � �      i      x������ � �      j      x������ � �      k      x������ � �      l      x������ � �      m      x������ � �      n   �  x��W��:[��wl6�2�q�%<e*��~!�fl{u�R$#;y�C�|8X�}�Y��B.�M"G�ǘ��x�eݛ��w-f�ؓIl��B1�۶c�7���\o���h�'�����}CBA[�)is�N.S�·�3ƞSސv�ѫ��}H]<餫����]��4�۽kR�8$n�lhѾw�~|��x�ZG�%����;��(>���������ie5� z0�Q���sT�7��m�R�H猹��.vm���k���w������g0N�#�u��#���̝@�ݠp��ʏ*�r,�L�t�Ȫp�{��݌�8-�TA�t��E�������h_��*�v�����'=@R�md�*.���������$��ɣ�V}�#�n��r�
4.Fi��*��+<����rh\ք��_�8��N/95�՟��6�U�p���F�N��eΈG$(�;�m=1�ePf�F��+*������txZǡ'Fu>���$���j�'��򙠃L�J)�ud��eo_��N:����tp_SZ�L��%oH�C	�߄
ω�-���X�e��5�#�F%��2u�Z�Nu���FC��d��t�C0>�2,�M�8��H�h����	�̾�7�l��t+F�t�k�w|�N�7'L��!uum������a(�:�*v�$�!�U�u(s���qy)��rT̺<��hɕ�����\u��s�|�=*�ѹ7�2�@� ��}#��v��x:v��!�&h��Vֵ�n��7���U���,�C��[}.C�6�]oH�[~�&]
��M����f��]�)��p��7PS�<_������,0�Ӳ�?�����ږi�2�π�n����_|�����U���͝\�d_�)�t�6s�i�?քQY�b�rA����m��T[�c�j�72fL�'.�Ӡ�o]�=Ə?r`��3u~HN7�	���b�*}�i�5���1[�XBsXeYg;�<qO��ʏ�/>�v�L�5�Xh�џح���t,���KX��:�3<z��KC���}��io쾫�]S��=�αL"%I�	�܂��g��rf�>^��b@�$�Nl��l���;�h=�γq����.����x*�[�~�VpK���e��5�����Gʫ?	����{7�|AO6|╁7����y����&i|[����ty�M]#�Ύ��T����-آ�P/�g���ǔ������Ih�;      o      x������ � �      p      x������ � �      q      x������ � �      r   �   x���1n1k�)	��Q�H�-i(R�6��?�>M�]`f��4%E� �2�zm�}������T��l� a��
+ҭ�J���2Z�38���t��;����8���v{�ܞ���y׬G��X�w�g,h�%��3����5�O�J�)�N��>��1�9&/Ս�\SJϭI     