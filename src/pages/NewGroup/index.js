import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function NewGroup() {
    const [nome, setNome] = useState('');
    const [valorMinimo, setValorMinimo] = useState('');
    const [valorMaximo, setValorMaximo] = useState('');

    const history = useHistory();

    const token = localStorage.getItem('token');
    const apelido = localStorage.getItem('apelido');

    async function handleNewGroup(e) {
        e.preventDefault();

        const data = {
            nome,
            valorMinimo,
            valorMaximo,
            apelido_admin : apelido,
        }

        try {
            await api.post('grupo', data, {
                headers: {
                    Authorization: token,
                }
            })

            history.push('/profile')
        } catch (err) {
            alert('Erro ao cadastrar, tente novametne');
        }
    }

    return (
        <div className="new-group-container">
            <section>
                
                <h1>Cadastrar novo grupo</h1>
                <br />
                <p>Cadastre seu grupo aqui!</p>

                <Link className="back-link" to="/profile"> 
                    <FiArrowLeft size={16} color="#8137af" />
                    Voltar para home
                </Link>

            </section>

            <form onSubmit={handleNewGroup}>
                <input
                    placeholder="Nome do Grupo"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <input
                    placeholder="Valor Minimo"
                    value={valorMinimo}
                    onChange={e => setValorMinimo(e.target.value)}
                />
                <input
                    placeholder="Valor Maximo"
                    value={valorMaximo}
                    onChange={e => setValorMaximo(e.target.value)}
                />
              
                <button className="button" type="submit">Cadastrar</button>

            </form>
        </div>
    )
}