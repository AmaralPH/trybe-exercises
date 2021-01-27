import React from 'react';

class TecnologiaPreferida extends React.Component {
    render() {
        const { select, handleChange } = this.props;

        return (
            <fieldset className="tecnologia">
                Qual é sua tecnologia preferida?
                <select
                    className="select entrada"
                    name="select"
                    value={select}
                    onChange={handleChange}
                >
                    <option>JavaScript</option>
                    <option>React</option>
                    <option>Python</option>
                </select>
            </fieldset>
        );
    }
}

export default TecnologiaPreferida;