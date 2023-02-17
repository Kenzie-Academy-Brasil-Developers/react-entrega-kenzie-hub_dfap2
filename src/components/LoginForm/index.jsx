import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import FormContainer from "./style.js";
import { useState } from "react";
import logo from "../../assets/images/Logo.svg";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import InputContainer from "../Input";
import ButtonSecondary from "../Buttons/ButtonScondary";

const formSchema = yup
    .object({
        email: yup
            .string()
            .required("Campo obrigatório")
            .email("Digite um e-mail válido"),
        password: yup.string().required("Campo obrigatório"),
    })
    .required();

const LoginForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmitFunction = async (data) => {
        try {
            const res = await api.post("/sessions", data);
            setUser(res.data.user);

            localStorage.setItem("@TOKEN", res.data.token);
            localStorage.setItem("@USERID", user.id);

            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        }
    };

    const toRegister = () => navigate("/register");

    return (
        <FormContainer>
            <img src={logo} alt="logo" />

            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <h1>Login</h1>

                <InputContainer
                    typeName="email"
                    title="E-mail"
                    place="Digite seu e-mail"
                    errors={errors.email?.message}
                    register={register}
                />

                <InputContainer
                    typeName="password"
                    title="Senha"
                    place="Digite sua senha"
                    errors={errors.email?.message}
                    register={register}
                />

                {/* <label htmlFo)r="email">E-mail</label>
                <input
                    id="email"
                    placeholder="Digite seu e-mail"
                    {...register("email")}
                />
                <p>{errors.email?.message}</p>

                <label htmlFor="password">Senha</label>
                <input
                    id="password"
                    placeholder="Digite sua senha"
                    {...register("password")}
                />
                <p>{errors.password?.message}</p> */}

                <ButtonPrimary color="active" text="Entrar" type="submit" />

                <div className="footer">
                    <span>Ainda não possui uma conta?</span>

                    <ButtonSecondary click={toRegister} text="Cadatre-se" />
                </div>
            </form>
        </FormContainer>
    );
};

export default LoginForm;
