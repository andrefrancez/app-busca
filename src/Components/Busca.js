import { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { Button } from 'primereact/button'

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (event) => {
        console.log(event.target.value)
        this.setState({ termoDeBusca: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className='flex flex-column'>
                    <IconField iconPosition='left' className='w-full'>
                        <InputIcon className='pi pi-search' />
                        <InputText value={this.state.termoDeBusca} 
                        className='w-full'
                        placeholder={this.props.dica} 
                        onChange={this.onTermoAlterado}
                        />
                    </IconField>
                    <Button label='OK' className='p-button-outlined mt-2' />
                </div>
            </form>
        )
    }
}

Busca.defaultProps = {
    dica: 'Digite algo que deseja ver!'
}