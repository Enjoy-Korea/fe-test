import styled from "styled-components";

const SelectComponent = ({
    options,
    onChange,
    defaultNone,
}: {
    options: { label: string; value: string }[];
    onChange: (value: string) => void;
    defaultNone?: boolean;
}) => {
    const defaultOption = { label: "선택", value: "" };
    const optionList = defaultNone ? options : [defaultOption, ...options];

    return (
        <div>
            <Select defaultValue={""} onChange={(e) => onChange(e.target.value)}>
                {optionList.map((item) => (
                    <option value={item.value} onClick={(e) => console.log(e)}>
                        {item.label}
                    </option>
                ))}
            </Select>
        </div>
    );
};

export default SelectComponent;

const Select = styled.select`
    min-width: 100px;
    height: 35px;
    background: white;
    color: gray;
    padding-left: 5px;
    font-size: 14px;
    border: none;
    margin-left: 10px;
`;
