import StyledDialog from "./style.js";
import InputContainer from "../Input/index.jsx";
import { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonPrimary from "../Buttons/ButtonPrimary/index.jsx";
import { TechContext } from "../../providers/TechContext.jsx";

const formSchema = yup
    .object({
        title: yup.string().required("Campo obrigatório"),
        status: yup.string().required("Campo obrigatório"),
    })
    .required();

const AddModal = ({ isOpen, setIsOpen }) => {
    const { onSubmitFunction } = useContext(TechContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    return (
        <StyledDialog open={isOpen}>
            <div className="modal__header">
                <h2>Cadastrar Tecnologia</h2>{" "}
                <span onClick={() => setIsOpen(false)}>X</span>
            </div>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <InputContainer
                    typeName="title"
                    title="Nome"
                    place="Digite o nome da tecnologia"
                    errors={errors.title?.message}
                    register={register}
                />
                <select {...register("status")} id="">
                    <option value="">Selecione uma opção</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <ButtonPrimary
                    type="submit"
                    color="active"
                    text="Cadastrar Tecnologia"
                />
            </form>
        </StyledDialog>
    );
};

export default AddModal;
