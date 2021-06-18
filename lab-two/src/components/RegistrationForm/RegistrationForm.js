import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import show from '../../assets/Images/show.png';
import hide from '../../assets/Images/hide.png';


export default function RegistrationForm() {
    const [users, setUsers] = useState({
        userEmail: "",
        userPass: "",
    });
    const [usersErr, setUsersErr] = useState({
        EmailErr: null,
        passErr: null,
    });
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const handleChange = (e) => {
        if (e.target.name === "userEmail") {
            setUsers({
                ...users,
                userEmail: e.target.value,
            });
            if (e.target.value.length === 0) {
                setUsersErr({
                    ...usersErr,
                    EmailErr: "this field is required",
                })
            }
            else {
                if (!(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(e.target.value))) {
                    setUsersErr({
                        ...usersErr,
                        EmailErr: "Invalid Email",
                    })
                }
                else {
                    console.log("Valid")
                    setUsersErr({
                        ...usersErr,
                        EmailErr: null,
                    });
                }
            }
        }
        if (e.target.name === "userPassword") {
            setUsers({
                ...users,
                userPass: e.target.value,
            });
            if (e.target.value.length === 0) {
                setUsersErr({
                    ...usersErr,
                    passErr: "this field is required",
                })
            }
            else {
                if (e.target.value.length < 8) {
                    setUsersErr({
                        ...usersErr,
                        passErr: "Password must be more than 8 letters.",
                    })
                }
                else {
                    setUsersErr({
                        ...usersErr,
                        passErr: null,
                    });
                }
            }
        }

    };
    const submitSkillsForm = () => {
        if (users.userEmail.length === 0) {
            setUsersErr({
                ...usersErr,
                EmailErr: "this field is required",
            });
        }
        if (users.userPass.length === 0) {
            setUsersErr({
                ...usersErr,
                passErr: "this field is required",
            });
        }
        else {
            alert("Registered")
        }
    };
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Body>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={users.userEmail}
                                        onChange={handleChange}
                                        name="userEmail"
                                    />
                                    <small className="text-danger">{usersErr.EmailErr}</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <br/>
                                    <input
                                        type={isRevealPwd ? "text" : "password"}
                                        className="form-control"
                                        value={users.userPass}
                                        onChange={handleChange}
                                        style={{width:"90%",display:"inline"}}

                                        name="userPassword"
                                    />
                                    <img
                                        style={{
                                            width: "30px"
                                        }}
                                        title={isRevealPwd ? "Hide password" : "Show password"}
                                        src={isRevealPwd ? hide : show}
                                        onClick={() => setIsRevealPwd(prevState => !prevState)
                                        }
                                    />
                                    <br/>
                                    <small className="text-danger">{usersErr.passErr}</small>
                                </div>

                                <button
                                    type="button"
                                    onClick={submitSkillsForm}
                                    className="btn btn-primary"
                                >
                                    Registration
                                </button>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
