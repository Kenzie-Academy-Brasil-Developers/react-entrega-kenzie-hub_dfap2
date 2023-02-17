import StyledContainer from "./style";

const InputContainer = ({ typeName, title, place, errors, register }) => {
    return (
        <StyledContainer>
            <label htmlFor={typeName}>{title}</label>
            <input
                type={
                    typeName == "password" ||
                    typeName == "email" ||
                    typeName == "confirm"
                        ? typeName == "confirm"
                            ? "password"
                            : typeName
                        : "text"
                }
                {...register(typeName)}
                id={typeName}
                placeholder={place}
            />
            <p>{errors}</p>
        </StyledContainer>
    );
};

export default InputContainer;
