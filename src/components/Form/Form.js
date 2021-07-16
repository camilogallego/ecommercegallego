import React, { useContext, useState } from 'react';
import { ItemsContext } from '../../ItemsContext/ItemsContext'

export default function Form({ addOrEdit }) {
    const [items] = useContext(ItemsContext)


    const sumaPrecios = items.reduce((prev, next) => prev + (next.price * next.amount), 0);

    const initialState = {
        name: '',
        tel: '',
        email: '',
        emailConfirm: ''

    }
    const [values, setValues] = useState(initialState)

    const handleOnchange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        addOrEdit(values);
        setValues({ ...initialState });
        

    }
   
    return (
        <div className='container'>
            <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="name"
                        onChange={handleOnchange}
                        name='name'
                        value={values.name}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input
                        type="number"
                        className="form-control"
                        aria-describedby="telephone"
                        name='tel'
                        onChange={handleOnchange}
                        value={values.tel}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name='email'
                        onChange={handleOnchange}
                        value={values.email}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirme Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="EmailConfirm"
                        name='emailConfirm'
                        onChange={handleOnchange}
                        value={values.emailConfirm}
                    />
                </div>
                <div className="mb-3">
                    Total ${sumaPrecios}
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}