import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  background-color: white;
  border-radius: 10px;
  width: 500px;
`;

export const Header = styled.div`
  background-color: #4f005f;
  padding: 1rem;

  h2 {
    margin: 0;
    color: white;
  }
`;

export const Content = styled.p`
  padding: 1rem;
`;

export const Actions = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;
