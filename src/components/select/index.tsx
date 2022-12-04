import styled from "styled-components";

interface ISelectComponent {
    options: { label: string; value: string }[];
    onChange: (value: string) => void;
    defaultNone?: boolean;
}

const SelectComponent = ({ options, onChange, defaultNone }: ISelectComponent) => {
    return (
        <>
            <Select defaultValue={""} onChange={(e) => onChange(e.target.value)}>
                {!defaultNone && <option value="">선택</option>}
                {options.map((item, index) => (
                    <option key={`${item.value}-${index}`} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </Select>
        </>
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
