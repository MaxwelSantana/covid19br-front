import React, { Component } from 'react';

import './styles.css';

export default class Main extends Component {
    state = {
        totalizadores: []
    }

    componentDidMount() {
        this.loadTotalizadores();
    }

    loadTotalizadores = async () => {
        const totalizadores = [
            { title: 'Confirmados', label: 'confirmados', number: 20, cardColor: 'green' },
            { title: 'Curados', label: 'curados', number: 40, cardColor: 'blue' }]
        this.setState({ totalizadores });
    };

    render() {
        const { totalizadores } = this.state;
        return (
            <div className="container">
                <h1 className="container-title">Hoje</h1>
                <div className="totalizadores">
                    {totalizadores.map((totalizador, index) => (
                        <article className={`card card-color-${totalizador.cardColor}`} key={`totalizador-${index}`}>
                            <h3 className="title">{totalizador.title}</h3>
                            <div className="color-label"></div>
                            <div className="number">
                                {totalizador.number}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        )
    }
}