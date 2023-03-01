import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import FormContainer from "./style.js";
import { useContext } from "react";
import logo from "../../assets/images/Logo.svg";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import InputContainer from "../Input";
import ButtonSecondary from "../Buttons/ButtonScondary";
import { UserContext } from "../../providers/UserContext";

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
    const { navigate, user, setUser, onSubmitFunctionLogin } =
        useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const toRegister = (e) => {
        e.preventDefault();
        navigate("/register");
    };

    return (
        <FormContainer>
            <img src={logo} alt="logo" />

            <form onSubmit={handleSubmit(onSubmitFunctionLogin)}>
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

                <ButtonPrimary color="active" text="Entrar" type="submit" />

                <div className="footer">
                    <span>Ainda não possui uma conta?</span>

                    <ButtonSecondary
                        onClick={toRegister}
                        text="Cadatre-se"
                        type="button"
                    />
                </div>
            </form>
        </FormContainer>
    );
};

export default LoginForm;
