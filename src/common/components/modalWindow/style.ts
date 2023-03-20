import styled from "styled-components";
import {fontSize} from "../../style/mixin";

type ModalWindowWrapperProps = {
    openModal: boolean
}

export const ModalWindowWrapper = styled.div`
  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
  }

  .modal-main-set {
    background: var(--color-bg-green-light);
    z-index: 55;
    position: fixed;
    top: 0;
    right: 0;
    -webkit-transform: translateY(-300%);
    transform: translateY(-300%);
    width: 100%;
    height: 100vh;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
    overflow-y: auto
  }

  .modal-main-set--active {
    -webkit-transform: translateX(0%) !important;
    transform: translateX(0%) !important
  }

  .modal-main-set__content {
    color: var(--colors-text-dark);
    padding: 100px 70px;
    position: relative
  }

  @media (max-width: 991px) {
    .modal-main-set__content {
      padding: 70px 0
    }
  }

  .modal-main-set__content .dynamic-contact__head {
    padding-bottom: 25px;
    margin-bottom: 45px;
    border-bottom: 1px solid #6EEC4E;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    gap: 30px
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__head {
      margin-bottom: 20px
    }
  }

  .modal-main-set__content .dynamic-contact__head .modal-title {
    font-size: 48px;
    font-weight: 100;
    color: var(--colors-text-dark);
  }

  @media (max-width: 991px) {
    .modal-main-set__content .dynamic-contact__head .modal-title {
      font-size: 50px
    }
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__head .modal-title {
      font-size: 30px
    }
  }

  .modal-main-set__content .dynamic-contact__head .close-modal {
    display: block;
    cursor: pointer;
    width: 56px;
    height: 56px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    position: relative;
    color: var(--colors-text-dark);
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__head .close-modal {
      width: 45px;
      height: 45px
    }
  }

  .modal-main-set__content .dynamic-contact__head .close-modal div {
    position: absolute;
    width: 70%;
    height: 2px;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: var(--colors-text-dark);
    -webkit-transition: all 0.2s;
    transition: all 0.2s
  }

  .modal-main-set__content .dynamic-contact__head .close-modal div:nth-child(1) {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg)
  }

  .modal-main-set__content .dynamic-contact__head .close-modal div:nth-child(2) {
    -webkit-transform: translate(-50%, -50%) rotate(-45deg);
    transform: translate(-50%, -50%) rotate(-45deg)
  }

  .modal-main-set__content .dynamic-contact__head .close-modal:hover div {
    width: 55%;
    opacity: .7
  }

  .modal-main-set__content .dynamic-contact__tabs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    gap: 15px;
    overflow: hidden
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__tabs {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      gap: 10px
    }
  }

  .modal-main-set__content .dynamic-contact__tabs .tab--active {
    border: 1px solid transparent !important;
    color: var(--colors-text-dark) !important
  }

  .modal-main-set__content .dynamic-contact__tabs .tab--active:before {
    width: 100% !important;
    opacity: 1 !important
  }

  .modal-main-set__content .dynamic-contact__tabs .tab {
    padding: 14px 32px;
    font-size: 16px;
    font-weight: 500;
    background: transparent;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    overflow: hidden;
    cursor: pointer;
    color: var(--colors-text-dark);
    transition: all 0.2s;
    position: relative;
    border: 1px solid var(--colors-text-light);
    border-radius: 500px
  }

  @media (max-width: 991px) {
    .modal-main-set__content .dynamic-contact__tabs .tab {
      font-size: 16px;
      padding: 20px
    }

    .modal-main-set__content .dynamic-contact__tabs .tab svg {
      width: 30px
    }
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__tabs .tab {
      width: 100%;
      text-align: center;
      font-size: 14px;
      padding: 15px
    }
  }

  .modal-main-set__content .dynamic-contact__tabs .tab:before {
    content: "";
    width: 0%;
    height: 100%;
    background: var(--colors-bg-green);
    background: var(--colors-bg-green);
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    z-index: -1
  }


  .modal-main-set__content .dynamic-contact__tabs .tab svg {
    -webkit-transition: all 0.2s;
    transition: all 0.2s
  }

  .modal-main-set__content .dynamic-contact__tabs .tab:hover {
    color: var(--colors-text-dark)
  }

  .modal-main-set__content .dynamic-contact__tabs .tab:hover:before {
    width: 100%
  }

  .modal-main-set__content .dynamic-contact__body {
    margin-top: 50px
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body {
      margin-top: 12px
    }
  }

  .modal-main-set__content .dynamic-contact__body .item {
    padding: 20px;
    font-size: 30px;
    font-weight: 700;
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item {
      padding: 20px 0
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 30px 1fr;
    grid-template-columns:repeat(2, 1fr);
    -webkit-column-gap: 30px;
    -moz-column-gap: 30px;
    column-gap: 30px;
    row-gap: 50px;
    grid-auto-flow: dense
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data {
      -ms-grid-columns: 1fr;
      grid-template-columns:1fr;
      row-gap: 30px
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item .input-wrapper {
    position: relative;
    padding: 10px 0
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item .input-wrapper:first-of-type {
    padding-top: 0
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item .input-wrapper:last-of-type {
    padding-bottom: 0
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item .input-wrapper .input-label {
    -webkit-transform-origin: left center;
    transform-origin: left center;
    color: var(--colors-text-dark);
    font-size: 18px;
    font-weight: 400;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 30px 30px;
    display: block;
    position: absolute;
    margin-top: -72px;
    z-index: 2;
    pointer-events: none;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    border-radius: 10px;
    line-height: 24px
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item .input-wrapper .input-label {
      font-size: 14px;
      margin-top: -64px;
      line-height: 19px
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item .input-wrapper .input-item {
    background: var(--color-bg-green-light);
    border: 1px solid var(--colors-text-dark);
    line-height: 0;
    font-size: 17px;
    width: 100%;
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px 30px;
    border-radius: 16px;
    color: var(--colors-text-dark);
    font-weight: 100;
    position: relative;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    z-index: 1;
    caret-color: var(--colors-text-dark) !important
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item .input-wrapper .input-item {
      padding: 14px 30px
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item .input-wrapper .input-item:focus {
    outline: none;
    color: var(--colors-text-dark);
    border: 1px solid var(--colors-text-dark);
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item .input-wrapper .input-item:valid {
    opacity: 1
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item .input-wrapper .input-item:focus ~ label {
    -webkit-transform: translate(20px, -31px);
    transform: translate(20px, -31px);
    background: var(--colors-text-green);
    background: var(--colors-text-green);
    color: var(--colors-text-dark);
    padding: 10px 30px;
    font-weight: 500;
    z-index: -1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item .input-wrapper .input-item:focus ~ label {
      -ms-grid-columns: 1fr;
      grid-template-columns:1fr;
      padding: 7px 25px;
      -webkit-transform: translate(20px, -14px);
      transform: translate(20px, -14px)
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item .input-wrapper .input-item:valid ~ label {
    opacity: 0
  }

  .modal-success-state__content .mess-cont__link:hover {
    opacity: 1
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item .input-wrapper:hover .input-item {
    border: 1px solid var(--colors-text-dark)
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item .input-wrapper:hover .input-label {
    color: var(--colors-text-dark)
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--choose {
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1/3
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--choose {
      -ms-grid-column: 1;
      grid-column: 1
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--choose .choose-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    gap: 24px
  }

  @media (max-width: 991px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--choose .choose-wrapper {
      gap: 15px
    }
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--choose .choose-wrapper {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--choose .choose-wrapper__title {
    font-size: 24px;
    font-weight: 400;
    text-align: left
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--choose .choose-wrapper__choise {
    gap: 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    align-items: normal;
    -ms-flex-line-pack: stretch;
    align-content: stretch
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--choose .choose-wrapper__choise:after {
    display: block;
    content: "";
    margin: 10px;
    -webkit-box-flex: 999;
    -ms-flex: 999 999 auto;
    flex: 999 999 auto
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--choose .choose-wrapper__choise:after {
      display: none
    }
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--choose .choose-wrapper__choise {
      gap: 7px
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--choose .choose-wrapper__choise .choise-btn--active {
    color: var(--colors-text-dark);
    border: 1px solid transparent;
    background: var(--colors-text-green);
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--choose .choose-wrapper__choise .choise-btn {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    text-align: center;
    border: 1px solid var(--colors-text-dark);
    border-radius: 500px;
    padding: 14px 32px;
    font-size: 16px;
    font-weight: 400;
    color: var(--colors-text-dark);
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    cursor: pointer
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--choose .choose-wrapper__choise .choise-btn:hover {
    color: var(--colors-text-dark);
    border: 1px solid var(--colors-text-dark)
  }

  @media (max-width: 991px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--choose .choose-wrapper__choise .choise-btn:hover {
      border: 1px solid var(--colors-text-dark);
      color: var(--colors-text-dark)
    }
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--choose .choose-wrapper__choise .choise-btn {
      font-size: 14px;
      padding: 10px 22px
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--multi-choose {
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1/3
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--multi-choose {
      -ms-grid-column: 1;
      grid-column: 1
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--multi-choose .choose-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    gap: 24px
  }

  @media (max-width: 991px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--multi-choose .choose-wrapper {
      gap: 15px
    }
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--multi-choose .choose-wrapper {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--multi-choose .choose-wrapper__title {
    font-size: 24px;
    font-weight: 400;
    text-align: left
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--multi-choose .choose-wrapper__choise {
    gap: 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--multi-choose .choose-wrapper__choise:after {
    display: block;
    content: "";
    margin: 10px;
    -webkit-box-flex: 999;
    -ms-flex: 999 999 auto;
    flex: 999 999 auto
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--multi-choose .choose-wrapper__choise:after {
      display: none
    }
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--multi-choose .choose-wrapper__choise {
      gap: 7px
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--multi-choose .choose-wrapper__choise .choise-btn--active {
    color: var(--colors-text-dark) !important;
    border: 1px solid transparent !important;
    background: var(--colors-text-green);
    background: var(--colors-text-green);
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--multi-choose .choose-wrapper__choise .choise-btn {
    border: 1px solid var(--colors-text-dark);
    border-radius: 500px;
    padding: 14px 32px;
    font-size: 16px;
    font-weight: 400;
    color: var(--colors-text-dark);
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    cursor: pointer;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    text-align: center
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--multi-choose .choose-wrapper__choise .choise-btn:hover {
    color: var(--colors-text-green);
    border: 1px solid var(--colors-text-dark)
  }

  @media (max-width: 991px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--multi-choose .choose-wrapper__choise .choise-btn:hover {
      border: 1px solid var(--colors-text-green);
      color: rgba(255, 255, 255, .4)
    }
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--multi-choose .choose-wrapper__choise .choise-btn {
      font-size: 14px;
      padding: 10px 22px
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--comment {
    -ms-grid-column: 1;
    grid-column: 1
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--comment {
      -ms-grid-column: 1;
      grid-column: 1
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--comment .textarea-wrapper {
    padding: 10px 0;
    position: relative
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--comment .textarea-wrapper .textarea-label {
    -webkit-transform-origin: left center;
    transform-origin: left center;
    color: var(--colors-text-dark);
    font-size: 20px;
    font-weight: 400;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 30px 30px;
    display: block;
    position: absolute;
    border-radius: 16px;
    top: 10px;
    z-index: 2;
    pointer-events: none;
    -webkit-transition: all 0.2s;
    transition: all 0.2s
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--comment .textarea-wrapper .textarea-label {
      font-size: 14px
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--comment .textarea-wrapper .textarea-item {
    min-height: 235px;
    resize: none;
    outline: none;
    background: var(--color-bg-green-light);
    border: 1px solid var(--colors-text-dark);
    font-family: "Montserrat", sans-serif;
    font-size: 17px;
    width: 100%;
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 30px 30px;
    border-radius: 16px;
    color: var(--colors-text-dark);
    font-weight: 100;
    position: relative;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    z-index: 1
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--comment .textarea-wrapper .textarea-item:focus {
    outline: none;
    color: var(--colors-text-dark);
    border: 1px solid var(--colors-text-dark)
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--comment .textarea-wrapper .textarea-item:valid {
    opacity: 1
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--comment .textarea-wrapper .textarea-item:focus ~ label {
    -webkit-transform: translate(20px, -45px);
    transform: translate(20px, -45px);
    background: var(--colors-text-green);
    color: var(--colors-text-dark);
    padding: 10px 30px;
    font-weight: 500;
    z-index: -1;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--comment .textarea-wrapper .textarea-item:focus ~ label {
      padding: 7px 25px;
      -webkit-transform: translate(20px, -29px);
      transform: translate(20px, -29px)
    }
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--btn {
      grid-row: auto;
      width: 100%
    }
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--btn .button-wrapper {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--btn .button-wrapper__btn {
    max-width: 400px;
    width: 100%
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--btn .button-wrapper__btn {
      width: 100%
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload {
    -ms-grid-column: 2;
    grid-column: 2;
    padding: 10px 0
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload {
      -ms-grid-column: 1;
      grid-column: 1
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    gap: 20px
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper .upload-cancel {
    display: none;
    cursor: pointer;
    height: 100%;
    padding: 50px 30px;
    border-radius: 16px;
    border: 1px dashed rgba(255, 91, 91, .5);
    overflow: hidden;
    -webkit-transition: all 0.2s;
    transition: all 0.2s
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper .upload-cancel__inner {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper .upload-cancel__icon {
    margin: auto;
    width: 40px;
    fill: rgba(255, 91, 91, .5);
    -webkit-transition: all 0.2s;
    transition: all 0.2s
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper .upload-cancel:hover {
    border: 1px dashed rgba(241, 9, 9, 0.5)
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper .upload-cancel:hover .upload-cancel__icon {
    fill: rgba(241, 9, 9, 0.5)
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper .upload-item {
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 50px 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    border-radius: 16px;
    border: 1px dashed var(--colors-text-dark);
    overflow: hidden;
    -webkit-transition: all 0.2s;
    transition: all 0.2s
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper .upload-item {
      padding: 50px 15px
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper .upload-item__ic-cont svg {
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    fill: rgba(255, 255, 255, .4)
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper .upload-item__label {
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    font-size: 20px;
    font-weight: 500;
    color: var(--colors-text-dark);
    word-break: break-all
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper .upload-item__label {
      font-size: 16px
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper .upload-item__input {
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper .upload-item__result {
    font-size: 18px;
    color: var(--colors-text-dark);
    font-weight: 500;
    margin-top: 10px;
    max-width: 220px;
    word-break: break-all
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper .upload-item:hover {
    border: 1px dashed var(--colors-text-dark)
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper .upload-item:hover .upload-item__ic-cont svg {
    fill: var(--colors-text-dark)
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--upload .upload-wrapper .upload-item:hover .upload-item__label {
    color: var(--colors-text-dark)
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--privacy-policy {
    -ms-grid-column: 2;
    grid-column: 2;
    padding: 10px 0
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--privacy-policy {
      -ms-grid-column: 1;
      grid-column: 1
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--privacy-policy .policy-wrapper .policy-item {
    font-size: 16px;
    font-weight: 400
  }

  //.modal-main-set__content .dynamic-contact__body .item .form-data__item--privacy-policy .policy-wrapper .policy-item a {
  //  color: var(--colors-text-dark);
  //  -webkit-transition: all 0.2s;
  //  transition: all 0.2s;
  //  text-decoration: none;
  //  position: relative;
  //  display: inline-block
  //}

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--privacy-policy .policy-wrapper .policy-item a:before {
    content: "";
    position: absolute;
    bottom: -3px;
    height: 1px;
    background: var(--colors-text-dark);
    width: 100%;
    -webkit-transition: all 0.7s;
    transition: all 0.7s
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--privacy-policy .policy-wrapper .policy-item a {
      font-size: 14px
    }
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--privacy-policy .policy-wrapper .policy-item a:hover {
    color: #9FA1A5
  }

  .modal-main-set__content .dynamic-contact__body .item .form-data__item--privacy-policy .policy-wrapper .policy-item a:hover:before {
    background: #9FA1A5;
    width: 0
  }

  @media (max-width: 767px) {
    .modal-main-set__content .dynamic-contact__body .item .form-data__item--privacy-policy .policy-wrapper .policy-item {
      font-size: 14px
    }
  }

  .empty-btn-1 {
    pointer-events: auto;
    cursor: pointer;
    border: 1px solid var(--colors-text-dark);
    padding: 16px 32px;
    margin: 0;
    font-family: inherit;
    text-decoration: none;
    position: relative;
    display: inline-block;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    font-size: 16px;
    border-radius: 500px;
    overflow: hidden;
    color: var(--colors-text-dark);
    text-align: center;
    z-index: 0;
    background: var(--colors-text-green);
    background: var(--colors-text-green);
    overflow: hidden
  }

  .empty-btn-1:before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    background: var(--colors-bg);
    width: 120%;
    left: -10%;
    -webkit-transform: skew(30deg);
    transform: skew(30deg);
    -webkit-transition: -webkit-transform 0.4s cubic-bezier(.3, 1, .8, 1);
    transition: -webkit-transform 0.4s cubic-bezier(.3, 1, .8, 1);
    transition: transform 0.4s cubic-bezier(.3, 1, .8, 1);
    transition: transform 0.4s cubic-bezier(.3, 1, .8, 1), -webkit-transform 0.4s cubic-bezier(.3, 1, .8, 1)
  }

  .empty-btn-1 span {
    position: relative
  }

  .empty-btn-1:hover {
    border: 1px solid transparent
  }

  .empty-btn-1:hover:before {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0)
  }
`