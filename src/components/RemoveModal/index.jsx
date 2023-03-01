import StyledDialog from "./style.js";
import InputContainer from "../Input/index.jsx";
import { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonPrimary from "../Buttons/ButtonPrimary/index.jsx";
import ButtonSecondary from "../Buttons/ButtonScondary/index.jsx";
import { TechContext } from "../../providers/TechContext.jsx";

const formSchema = yup
    .object({
        title: yup.string(),
        status: yup.string(),
    })
    .required();

const RemoveModal = ({ removeIsOpen, setRemoveIsOpen }) => {
    const { onSubmitRemove, onSubmitUpdate, card } = useContext(TechContext);
    const { title, status, id } = card;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const handleClick = (e) => {
        e.preventDefault();
        onSubmitRemove(id);
        setRemoveIsOpen(false);
    };

    return (
        <StyledDialog open={removeIsOpen}>
            <div className="modal__header">
                <h2>Cadastrar Tecnologia</h2>{" "}
                <span onClick={() => setRemoveIsOpen(false)}>X</span>
            </div>
            <form onSubmit={handleSubmit(onSubmitUpdate)}>
                <InputContainer
                    typeName="title"
                    title="Nome"
                    place={title}
                    errors={errors.title?.message}
                    register={register}
                    disabled="disabled"
                />
                <select {...register("status")}>
                    <option value={status}>{status}</option>
                    {status != "Iniciante" ? (
                        <option value="Iniciante">Iniciante</option>
                    ) : null}
                    {status != "Intermediário" ? (
                        <option value="Intermediário">Intermediário</option>
                    ) : null}
                    {status != "Avançado" ? (
                        <option value="Avançado">Avançado</option>
                    ) : null}
                </select>
                <p>{errors.status?.message}</p>
                <div className="footer__buttons">
                    <ButtonPrimary
                        onClick={() => {
                            setRemoveIsOpen(false);
                        }}
                        type="submit"
                        color="other"
                        text="Salvar alterações"
                    />
                    <ButtonSecondary
                        type="button"
                        onClick={handleClick}
                        text="Excluir"
                    />
                </div>
            </form>
        </StyledDialog>
    );
};

export default RemoveModal;
