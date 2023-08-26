import { styled } from "styled-components";
import { device } from "../config/breakPoints";

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bg};
  width: 100vw;
  min-height: 100vh;
  color: ${({ theme }) => theme.text};
`;

export const Wrapper = styled.div`
  padding: 3rem;
  border: 2px solid ${({ theme }) => theme.soft};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const SubTitle = styled.h4``;

export const Title = styled.h2``;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding-inline: 20px;
  font-size: 16px;
  background: ${({ theme }) => theme.bgLighter};
  border: 2px solid ${({ theme }) => theme.soft};
  outline: 0;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.textSoft};
  }
`;

export const Menu = styled.div`
  padding-block: 2rem;
  border-right: 2px solid ${({ theme }) => theme.soft};
  height: 100vh;
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  a {
    width: 100%;
  }

  @media ${device.sm} {
    span {
      display: none;
    }
  }
`;

export const ImageBox = styled.div`
  width: 10rem;
  padding-inline: 2rem;

  @media ${device.sm} {
    display: none;
  }
`;

export const Image = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

export const MainContainer = styled.main`
  flex: 1;
  padding: 1.5rem;
  align-self: flex-start;
  max-height: 100vh;
  overflow-y: scroll;
`;

export const ContainerHeader = styled.h2`
  text-align: center;
`;

export const Hr = styled.hr`
  width: 100%;
  margin-block: 20px;
  border: 1px solid ${({ theme }) => theme.textSoft};
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  @media ${device.md} {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  gap: 0.8rem;
`;

export const Label = styled.label`
  width: 30%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  outline: 0;
  height: 100px;
  font-size: 16px;
  padding: 20px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  font: inherit;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.textSoft};
  }
`;

export const FullImageBox = styled.div`
  height: 10rem;
  aspect-ratio: 1/1;
  align-self: center;
`;

export const InputFile = styled.input`
  align-self: center;

  &::-webkit-file-upload-button {
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.soft};
    color: ${({ theme }) => theme.blue};
    transition: color, border, background-color 0.3s;
    border-radius: 5px;
    max-width: fit-content;

    padding: 15px 30px;
    cursor: pointer;
    outline: 0;
    font-size: 16px;

    &:hover {
      border: 2px solid ${({ theme }) => theme.blue};
      background-color: ${({ theme }) => theme.blue};
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  padding-inline: 20px;
  font-size: 16px;
  background: ${({ theme }) => theme.bgLighter};
  border: 2px solid ${({ theme }) => theme.soft};
  outline: 0;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.textSoft};
  }
`;
export const Option = styled.option``;

// table
export const TableWrapper = styled.div`
  width: 100%;
  overflow: scroll;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

export const THead = styled.thead`
  background-color: ${({ theme }) => theme.soft};
`;

export const Tr = styled.tr`
  max-height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.soft};

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

export const Th = styled.th``;

export const TBody = styled.tbody``;

export const Td = styled.td`
  padding: 5px;
  text-overflow: ellipsis;
  overflow: hidden;

  svg {
    cursor: pointer;
    font-size: 20px;

    &:hover {
      scale: 1.5;
    }
  }
`;

export const TableImg = styled.img`
  height: 80px;
`;

// dashboard
export const Card = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.blue};
  border-radius: 10px;
`;

export const Count = styled.h1`
  font-size: 5rem;
  text-align: right;
`;
