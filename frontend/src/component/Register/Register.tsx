import React from 'react';
import axios from 'axios';
import { useRef, useState, useEffect } from 'react';

import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const EMAIL_REGEX = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// const REGISTER_URL = '/register';

const Register = () => {
	const userRef = useRef<HTMLInputElement>(null);
	const errRef = useRef<HTMLParagraphElement>(null);

	const [fname, setFname] = useState<string>('');

	const [lname, setLname] = useState<string>('');

	const [email, setEmail] = useState<string>('');
	const [validEmail, setValidEmail] = useState<boolean>(false);
	const [emailFocus, setEmailFocus] = useState<boolean>(false);

	const [user, setUser] = useState<string>('');
	const [validName, setValidName] = useState<boolean>(false);
	const [userFocus, setUserFocus] = useState<boolean>(false);

	const [pwd, setPwd] = useState<string>('');
	const [validPwd, setValidPwd] = useState<boolean>(false);
	const [pwdFocus, setPwdFocus] = useState<boolean>(false);

	const [matchPwd, setMatchPwd] = useState<string>('');
	const [validMatch, setValidMatch] = useState<boolean>(false);
	const [matchFocus, setMatchFocus] = useState<boolean>(false);

	const [errMsg, setErrMsg] = useState<string>('');
	const [success, setSuccess] = useState<boolean>(false);

    const navigate = useNavigate();

	useEffect(() => {
        if (userRef.current) {
            userRef.current.focus();
        }
	}, []);

	useEffect(() => {
		const result = EMAIL_REGEX.test(email);
		setValidEmail(result);
	}, [email]);

	useEffect(() => {
		const result = USER_REGEX.test(user);
		setValidName(result);
	}, [user]);

	useEffect(() => {
		const result = PWD_REGEX.test(pwd);
		setValidPwd(result);
		const match = pwd === matchPwd;
		setValidMatch(match);
	}, [pwd, matchPwd]);

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd, matchPwd]);

	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const data = {
			username: user,
			password: pwd,
			email: email, 
			fname: fname,
			lname: lname
		}
        
        const config = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }
		axios.post(`http://localhost:8000/register`, data, config)
        .then( () => {
            navigate('/login');
			setSuccess(true)
        })
        .catch((err) => {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
        })
	}

	return (
		<>
			{success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
						<Link to='/login'>Sign In</Link>
                    </p>
                </section>
            ) : (
				<section>
					<p ref={errRef} className={errMsg ? "errmsg" : 
					"offscreen"} aria-live="assertive">{errMsg}</p>
					<h1>Bank Registration</h1>
					<form onSubmit={(e) => handleSubmit(e)}>
						<label htmlFor='fname'>
							First Name:
						</label>
						<input 
							type="text"
							id="fname"
							ref={userRef}
							autoComplete="off"
							onChange={(e)=> setFname(e.target.value)}
							aria-describedby="firstname"
						/>
						
						<label htmlFor='lname'>
							Last Name:
						</label>
						<input 
							type="text"
							id="fname"
							autoComplete="off"
							onChange={(e)=> setLname(e.target.value)}
							aria-describedby="firstname"
						/>

						<label htmlFor="email">
							Email:
							<span className={validEmail ? "valid" : "hide"}>
								<FontAwesomeIcon icon={faCheck} />
							</span>
							<span className={validEmail || !email ? "hide" : "invalid"}>
								<FontAwesomeIcon icon={faTimes} />
							</span>
						</label>
						<input 
							type="text"
							id="email"
							autoComplete="off"
							onChange={(e)=> setEmail(e.target.value)}
							required
							aria-invalid={validEmail ? "false" : "true"}
							aria-describedby="emailnote"
							onFocus={() => setUserFocus(true)}
							onBlur={() => setUserFocus(false)}
						/>
						<p id="emailnote" className={userFocus && email && !validEmail ? "instructions" : "offscreen"}>
							<FontAwesomeIcon icon={faInfoCircle} />
							Must be correct email
						</p>

						<label htmlFor="username">
							Username:
							<span className={validName ? "valid" : "hide"}>
								<FontAwesomeIcon icon={faCheck} />
							</span>
							<span className={validName || !user ? "hide" : "invalid"}>
								<FontAwesomeIcon icon={faTimes} />
							</span>
						</label>
						<input 
							type="text"
							id="username"
							autoComplete="off"
							onChange={(e)=> setUser(e.target.value)}
							required
							aria-invalid={validName ? "false" : "true"}
							aria-describedby="uidnote"
							onFocus={() => setUserFocus(true)}
							onBlur={() => setUserFocus(false)}
						/>
						<p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
							<FontAwesomeIcon icon={faInfoCircle} />
							4 to 24 characters.<br />
							Must begin with a letter.<br />
							Letters, numbers, underscores, hyphens allowed.
						</p>

						<label htmlFor="password">
							Password:
							<span className={validPwd ? "valid" : "hide"}>
								<FontAwesomeIcon icon={faCheck} />
							</span>
							<span className={validPwd || !pwd ? "hide" : "invalid"}>
								<FontAwesomeIcon icon={faTimes} />
							</span>
						</label>
						<input 
							type="password"
							id="password"
							onChange={(e)=> setPwd(e.target.value)}
							required
							aria-invalid={validPwd ? "false" : "true"}
							aria-describedby="pwdnote"
							onFocus={() => setPwdFocus(true)}
							onBlur={() => setPwdFocus(false)}
						/>
						<p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
							<FontAwesomeIcon icon={faInfoCircle} />
							8 to 24 characters.<br/>
							Must include uppercase and lowercase letters, a number and a special character.<br/>
							Allowed special character: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
						</p>

						<label htmlFor="confirm_pwd">
							Confirm Password:
							<span className={validMatch && matchPwd ? "valid": "hide"}>
								<FontAwesomeIcon icon={faCheck} />
							</span>
							<span className={validMatch || !matchPwd ? "hide": "invalid"}>
								<FontAwesomeIcon icon={faTimes} />
							</span>
						</label>
						<input 
							type="password"
							id="confirm_pwd"
							onChange={(e)=> setMatchPwd(e.target.value)}
							value={matchPwd}
							required
							aria-invalid={validMatch ? "false" : "true"}
							aria-describedby="confirmnote"
							onFocus={() => setMatchFocus(true)}
							onBlur={() => setMatchFocus(false)}
						/>
						<p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
							<FontAwesomeIcon icon={faInfoCircle} />
							Must re-enter the password.
						</p>

						<button disabled={fname == undefined || !validName || !validPwd || !validMatch ? true : false}> Sign Up </button>
					</form>
					<p>
						Already registered? <br/>
						<span className="line">
							<Link to='/login'>Sign In</Link>
						</span>
					</p>
				</section>
				)
			}
		</>
	)
}

export default Register