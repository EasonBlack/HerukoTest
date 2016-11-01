--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.3
-- Dumped by pg_dump version 9.5.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: answer; Type: TABLE; Schema: public; Owner: eason
--

CREATE TABLE answer (
    id integer NOT NULL,
    username character varying(20),
    content text[]
);


ALTER TABLE answer OWNER TO eason;

--
-- Name: answer_id_seq; Type: SEQUENCE; Schema: public; Owner: eason
--

CREATE SEQUENCE answer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE answer_id_seq OWNER TO eason;

--
-- Name: answer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eason
--

ALTER SEQUENCE answer_id_seq OWNED BY answer.id;


--
-- Name: item; Type: TABLE; Schema: public; Owner: eason
--

CREATE TABLE item (
    id integer NOT NULL,
    type character varying(20),
    name character varying(20)
);


ALTER TABLE item OWNER TO eason;

--
-- Name: item_id_seq; Type: SEQUENCE; Schema: public; Owner: eason
--

CREATE SEQUENCE item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE item_id_seq OWNER TO eason;

--
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eason
--

ALTER SEQUENCE item_id_seq OWNED BY item.id;


--
-- Name: question; Type: TABLE; Schema: public; Owner: eason
--

CREATE TABLE question (
    id integer NOT NULL,
    type integer,
    content text,
    options text[],
    extra boolean,
    show boolean,
    order_num integer
);


ALTER TABLE question OWNER TO eason;

--
-- Name: question_id_seq; Type: SEQUENCE; Schema: public; Owner: eason
--

CREATE SEQUENCE question_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE question_id_seq OWNER TO eason;

--
-- Name: question_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eason
--

ALTER SEQUENCE question_id_seq OWNED BY question.id;


--
-- Name: user_account; Type: TABLE; Schema: public; Owner: eason
--

CREATE TABLE user_account (
    id integer NOT NULL,
    name character varying(20),
    password character varying(20)
);


ALTER TABLE user_account OWNER TO eason;

--
-- Name: user_account_id_seq; Type: SEQUENCE; Schema: public; Owner: eason
--

CREATE SEQUENCE user_account_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE user_account_id_seq OWNER TO eason;

--
-- Name: user_account_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eason
--

ALTER SEQUENCE user_account_id_seq OWNED BY user_account.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: eason
--

ALTER TABLE ONLY answer ALTER COLUMN id SET DEFAULT nextval('answer_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: eason
--

ALTER TABLE ONLY item ALTER COLUMN id SET DEFAULT nextval('item_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: eason
--

ALTER TABLE ONLY question ALTER COLUMN id SET DEFAULT nextval('question_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: eason
--

ALTER TABLE ONLY user_account ALTER COLUMN id SET DEFAULT nextval('user_account_id_seq'::regclass);


--
-- Name: answer_pkey; Type: CONSTRAINT; Schema: public; Owner: eason
--

ALTER TABLE ONLY answer
    ADD CONSTRAINT answer_pkey PRIMARY KEY (id);


--
-- Name: item_pkey; Type: CONSTRAINT; Schema: public; Owner: eason
--

ALTER TABLE ONLY item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- Name: primary_id; Type: CONSTRAINT; Schema: public; Owner: eason
--

ALTER TABLE ONLY user_account
    ADD CONSTRAINT primary_id PRIMARY KEY (id);


--
-- Name: question_pkey; Type: CONSTRAINT; Schema: public; Owner: eason
--

ALTER TABLE ONLY question
    ADD CONSTRAINT question_pkey PRIMARY KEY (id);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

