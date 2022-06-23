import styled from 'styled-components';

export const StyledResultCard = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.common.white};
  width: 225px;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 0.5rem;
  text-decoration: none;
  svg {
    height: auto;
    width: auto;
  }

  .infoSection {
    height: 60%;
    display: flex;
    flex-direction: column;
  }

  .name {
    min-height: 50%;
    margin: auto 0;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.palette.common.black};
    font-size: ${({ theme }) => theme.font.size.small};
    text-decoration: none;
    .name-text {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: ${({ theme }) => theme.font.size.tiny};
    }
  }

  p {
    margin: 0 0 5px;
  }

  .author {
    font-weight: 500;
    font-size: ${({ theme }) => theme.font.size.extraTiny};
    color: ${({ theme }) => theme.palette.primary.dark};
    word-break: break-word;
  }

  .category {
    font-style: italic;
    align-self: flex-end;
  }

  .date {
    align-self: flex-end;
    font-size: ${({ theme }) => theme.font.size.extraTiny};
    color: ${({ theme }) => theme.palette.common.grey.high};
  }
`;
