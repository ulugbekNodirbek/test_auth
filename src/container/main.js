import { Button, Fade, Modal, TextField } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/loading/loading";
import { useForm } from "react-hook-form";
import "./main.scss";
import { useDispatch, useSelector } from "react-redux";
import { test_action } from "../redux/action";
import eye from "../assets/eye.svg";
const Main = () => {
  const [pas, setpas] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mod, setMod] = useState(false);
  const modalOpen = () => setMod(true);
  const modalClose = () => setMod(false);
  const dispatch = useDispatch();
  const [age, setAge] = useState("");
  const [datas, setDatas] = useState([]);
  const data = useSelector((state) => state.test);
  const classes = {
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: "white",
      border: "2px solid #000",
      padding: "20px",
      width: "80%",
      margin: "30px auto 0 auto",
    },
    modal_one: {
      height:"650px",
      overflov:"scrool"
    }
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    const now = new Date().getTime() - new Date(data.date).getTime();
    const age = new Date(now).getFullYear() - 1970;
    if (age < 18) {
      return setError("date", {
        type: "custom",
        message: "custom message",
      });
    }
    setLoeder(true);
    setTimeout(() => {
      setLoeder(false);
    }, 1000);
    setDatas(data);
    localStorage.setItem("tokken", "111111");
    handleClose();
    modalClose();
    dispatch(test_action(data));
  };

  const tokken = window.localStorage.getItem("tokken");

  function Del() {
    window.localStorage.setItem("tokken", null);
    dispatch(test_action([]));
  }


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [loader, setLoeder] = useState(false);
  if (loader) return <Loading />;
  return (
    <div className="header">
      <div className="header_inner">
        <div className="left">
          <h1>Test</h1>
        </div>
        <div className="header_inner_right">
          {tokken === "111111" ? (
            <Link className="link_info" to="/information">
              <Button variant="contained">Профил</Button>
            </Link>
          ) : (
            <Button onClick={modalOpen} variant="contained">
              Профил
            </Button>
          )}
          {tokken === "111111" ? (
            <Button
              onClick={() => Del()}
              variant="contained"
              className="red_btn"
            >
              Удалить профил
            </Button>
          ) : null}
        </div>
      </div>
      {tokken === "111111" ? (
        <h2>
          Добро пожаловать <p className="person_name">{data.Name}</p>
        </h2>
      ) : null}
      <div>
        <div className="modal_one">
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal_one}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropProps={{
              timeout: 400,
            }}
            style={{
              marginTop: "0",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
              overflow: "scroll",
            }}
          >
            <Fade in={open}>
              <div style={classes.paper}>
                <div className="auth_block">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                      type="text"
                      placeholder="Login"
                      {...register("Login", {
                        required: true,
                        minLength: 6,
                      })}
                    />
                    {errors.Login && (
                      <span>Логин должен содержать не менее 6 символов</span>
                    )}
                    <TextField
                      type="text"
                      placeholder="Email"
                      {...register("Email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                    {errors.Email && <span>Введите правильный email</span>}
                    <TextField
                      type="tel"
                      placeholder="Mobile"
                      defaultValue={"998"}
                      {...register("Mobile", {
                        required: true,
                        minLength: 6,
                        maxLength: 12,
                      })}
                    />
                    {errors.Mobile && (
                      <span>Номер должен содержать не менее 12 числ</span>
                    )}
                    <div className="password_block">
                      <TextField
                        id="outlined-password-input"
                        label="Password"
                        type={pas ? "password" : "text"}
                        autoComplete="current-password"
                        {...register("Pasword", {
                          required: true,
                          minLength: 8,
                        })}
                      />
                      <img
                        className="eye"
                        onClick={() => setpas(!pas)}
                        src={eye}
                        alt=""
                      />
                    </div>
                    {errors.Pasword && (
                      <span>Парол должен содержать не менее 8 символы</span>
                    )}
                    <TextField
                      type="text"
                      placeholder="Name"
                      {...register("Name", {
                        required: true,
                        maxLength: 80,
                        minLength: 2,
                      })}
                    />
                    {errors.Name && (
                      <span>Имя должен содержать не менее 2 символа</span>
                    )}
                    <TextField
                      type="date"
                      placeholder="date"
                      {...register("date", {
                        required: true,
                        maxLength: 80,
                      })}
                    />
                    {errors.date && <span>Извините вы младше 18 лет</span>}
                    <div className="btn">
                      <Button
                        type="submit"
                        style={{
                          color: "white",
                          display: "block",
                          marginTop: "15px",
                          background: "orange",
                        }}
                        variant="contained"
                      >
                        Oтправить
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </Fade>
          </Modal>
        </div>
      </div>
      <div className="modal_two">
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal_one}
          open={mod}
          onClose={modalClose}
          closeAfterTransition
          BackdropProps={{
            timeout: 400,
          }}
          style={{
            marginTop: "0",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Fade in={mod}>
            <div style={classes.paper}>
              <div className="auth_block1">
                <h2 className="info_desc">
                  Извините но вы не авторизованы пожалуйста Пройдите регистрацию
                </h2>
                <Button onClick={handleOpen} variant="contained">
                  Регистрироваться
                </Button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};

export default Main;
