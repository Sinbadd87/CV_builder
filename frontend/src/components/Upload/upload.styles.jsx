import styled from "styled-components";

export const UploadContainer = styled.div`
  width: 300px;
  height: 200px;
  border: 2px dashed #cccccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #aaaaaa;
  }

  &.dragging {
    border-color: #63cdda;
  }
`;

export const UploadText = styled.div`
  text-align: center;
  color: #63cdda;
`;

export const BrowseButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #63cdda;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #48a9a6;
  }
`;

export const FileInput = styled.input`
  display: none;
`;
