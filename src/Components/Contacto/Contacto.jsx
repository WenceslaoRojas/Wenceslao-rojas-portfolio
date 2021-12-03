import React from "react";
import contactoStyle from "./Contacto.module.css";
import { useForm, ValidationError } from "@formspree/react";
import whatsapp from "./img/whatsapp.svg";
import linkedin from "./img/linkedin.svg";
import github from "./img/github.svg";

function Contacto() {
  const [state, handleSubmit] = useForm("moqrabgk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div id='contacto' className={contactoStyle.container}>
      <div className={contactoStyle.containerForm}>
        <div className={contactoStyle.alignLeft}>
          <div className={contactoStyle.titleLeft}>
            <h1 className='title-left'>Enviame un mensaje</h1>
          </div>
          <form
            className={contactoStyle.form}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              className={contactoStyle.input}
              type='text'
              name='name'
              id='name'
              placeholder='Tu nombre'
              data-rule='minlen:4'
              data-msg='Please enter at least 4 chars'
            />
            <ValidationError prefix='Name' field='name' errors={state.errors} />
            <input
              className={contactoStyle.input}
              id='email'
              type='email'
              placeholder='Inserta tu direccion de email'
              name='email'
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <input
              className={contactoStyle.input}
              type='text'
              name='subject'
              id='subject'
              placeholder='Asunto'
              data-rule='minlen:4'
              data-msg='Please enter at least 8 chars of subject'
            />
            <ValidationError
              prefix='Subject'
              field='subject'
              errors={state.errors}
            />

            <textarea
              id='message'
              name='message'
              placeholder='Inserta tu mensaje'
              className={contactoStyle.input}
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
            <button type='submit' disabled={state.submitting}>
              Submit
            </button>
          </form>
        </div>
        <div className={contactoStyle.alignRight}>
          <div className={contactoStyle.titleLeft}>
            <h1 className='title-left'>Ponte en contacto</h1>
          </div>
          <p>
            Ya sea que quieras ponerte en contacto, hablar sobre una
            colaboración en un proyecto o simplemente saludar, me encantaría
            saber de vos.
            <br />
            <br /> Simplemente rellená con tu email y enviame un correo.
          </p>
          <div className={contactoStyle.socialConteiner}>
            <a
              href='https://github.com/WenceslaoRojas'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className={contactoStyle.icoCircle}>
                <img src={github} alt='enlace web' />
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/wenceslarojas/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className={contactoStyle.icoCircle}>
                <img src={linkedin} alt='enlace web' />
              </div>
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=543816398478&text=Hola+Wenceslao!+'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className={contactoStyle.icoCircle}>
                <img src={whatsapp} alt='enlace web' />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
