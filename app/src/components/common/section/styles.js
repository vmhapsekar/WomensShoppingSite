import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  padding: 0;
  border: 0;
  transition: padding 0.2s, border 0.2s;
  position: relative;

  @media screen and (min-width: 768px) {
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
    padding: 24px;

    ${props => props.variant === 'internal' && css`
      border: 0;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 0px 2px 0px;
    `}

    ${props => (props.highlight && props.highlight.length) && css`
      padding-top: 17px;
    `}

    ${props => (props.highlight && props.highlight === 'ocean-blue') && css`
      border-top: 7px solid #007DBA;
    `}

    ${props => (props.highlight && props.highlight === 'seagrass') && css`
      border-top: 7px solid rgb(88, 145, 153);
    `}
  }

  @media screen and (min-width: 960px) {
    padding: 36px;

    ${props => (props.highlight && props.highlight.length) && css`
      padding-top: 29px;
    `}
  }
`
