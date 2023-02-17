import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import YupPassword from "yup-password";
YupPassword(yup);
import Form from "./style.js";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import InputContainer from "../Input/index.jsx";
import ButtonPrimary from "../Buttons/ButtonPrimary/index.jsx";

const RegisterForm = () => {
    const navigate = useNavigate();

    const formSchema = yup
        .object({
            name: yup.string().required("Campo obrigatório"),
            password: yup
                .string()
                .required("Campo obrigatório")
                .password()
                .min(8, "A senha deve conter pelo menos 8 caracteres")
                .minLowercase(
                    1,
                    "A senha deve conter pelo menos um letra minúscula"
                )
                .minUppercase(
                    1,
                    "A senha deve conter pelo menos um letra maiúscula"
                )
                .minSymbols(1, "A senha deve conter pelo menos um símbolo"),
            confirm: yup
                .string()
                .required("Campo Obrigatório*")
                .oneOf(
                    [yup.ref("password"), null],
                    "A senhas devem ser iguais"
                ),
            email: yup
                .string()
                .required("Campo obrigatório")
                .email("Email inválido"),
            bio: yup.string().required("Campo obrigatório"),
            contact: yup.string().required("Campo obrigatório"),
            course_module: yup.string().required("Campo obrigatório"),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onSubmitFunction = async (data) => {
        delete data.password_confirm;

        try {
            const res = await api.post("/users", data);

            console.log(res);

            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Form>
            <div className="header">
                <img src={logo} alt="logo" />

                <button onClick={() => navigate("/")}>Voltar</button>
            </div>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <InputContainer
                    typeName="name"
                    title="Nome"
                    place="Digite aqui seu nome"
                    errors={errors.name?.message}
                    register={register}
                />
                {/* <label htmlFor="name">Nome</label>
                <input
                    id="name"
                    maxLength={30}
                    placeholder="Digite aqui seu nome"
                />
                <span>{errors.name?.message}</span> */}

                <InputContainer
                    typeName="email"
                    title="E-mail"
                    place="Digite aqui seu e-mail"
                    errors={errors.email?.message}
                    register={register}
                />

                {/* <label htmlFor="email">Email</label>
                <input
                    id="email"
                    placeholder="Digite aqui se email"
                    {...register("email")}
                />
                <span>{errors.email?.message}</span> */}
                <InputContainer
                    typeName="password"
                    title="Senha"
                    place="Digite aqui sua senha"
                    errors={errors.password?.message}
                    register={register}
                />

                {/* <label htmlFor="password">Senha</label>
                <input
                    id="password"
                    placeholder="Digite aqui sua senha"
                    {...register("password")}
                />
                <span>{errors.password?.message}</span> */}

                <InputContainer
                    typeName="confirm"
                    title="Confirmar senha"
                    place="Digite novamente a sua senha"
                    errors={errors.password_confirm?.message}
                    register={register}
                />

                {/* <label htmlFor="confirm">Confirmar senha</label>
                <input
                    id="confirm"
                    placeholder="Digite novamente sua senha"
                    {...register("password_confirm")}
                />
                <span>{errors.password_confirm?.message}</span> */}

                <InputContainer
                    typeName="bio"
                    title="Bio"
                    place="Fale sobre você"
                    errors={errors.bio?.message}
                    register={register}
                />

                {/* <label htmlFor="bio">Bio</label>
                <input
                    id="bio"
                    maxLength={30}
                    placeholder="Fale sobre você"
                    {...register("bio")}
                    <span>{errors.bio?.message}</span>
                /> */}

                <InputContainer
                    typeName="contact"
                    title="Contato"
                    place="Opção de contato"
                    errors={errors.contact?.message}
                    register={register}
                />

                {/* <label htmlFor="contact">Contato</label>
                <input
                    id="contact"
                    maxLength={30}
                    placeholder="Opção de contato"
                    {...register("contact")}
                    <span>{errors.contact?.message}</span>
                /> */}

                <label htmlFor="select_module">Selecionar Módulo</label>
                <select id="select_module" {...register("course_module")}>
                    <option value="">Selecione um módulo</option>
                    <option value="Primeiro Módulo">Primeiro Módulo</option>
                    <option value="Segundo Módulo">Segundo Módulo</option>
                    <option value="Terceiro Módulo">Terceiro Módulo</option>
                    <option value="Quarto Módulo">Quarto Módulo</option>
                    <option value="Quinto Módulo">Quinto Módulo</option>
                    <option value="Sexto Módulo">Sexto Módulo</option>
                </select>
                <p>{errors.course_module?.message}</p>
                <ButtonPrimary type="submit" text="Cadastrar" color="active" />
            </form>
        </Form>
    );
};

export default RegisterForm;
