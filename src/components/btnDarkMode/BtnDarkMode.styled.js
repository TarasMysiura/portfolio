import styled from 'styled-components';


export const BtnDarkModeStyles = styled.button`

.dark-mode-btn {
    order: 9;
  
    position: relative;
    display: flex;
    justify-content: space-between;
  
    width: 51px;
    height: 26px;
    padding: 5px;
  
    border-radius: 50px;
    background-color: #272727;
  }
  
  .dark-mode-btn::before {
    content: "";
  
    position: absolute;
    top: 1px;
    left: 1px;
  
    display: block;
    width: 24px;
    height: 24px;
  
    border-radius: 50%;
    background-color: #fff;
  
    transition: left 0.2s ease-in;
  }
  
  .dark-mode-btn--active::before {
    left: 26px;
  }
  
  .dark-mode-btn__icon {
    position: relative;
    z-index: 9;
  }`