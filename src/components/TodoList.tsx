import { ChangeEvent, FormEvent, useState } from 'react';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';
import { PlusCircle, Trash, Circle, CheckCircle, ClipboardText } from 'phosphor-react';


import styles from './TodoList.module.css';

interface ITarefa{
    id: string;
    name: string;
    finalizada: boolean;
}

export function TodoList(){
    const [novaTarefa, setNovaTarefa] = useState("");
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);

    const qtdeTarefasConcluidas = tarefas.filter(t => {
        return t.finalizada
    }).length

    function criarNovaTarefa(event: FormEvent){
        event.preventDefault();

        const tarefaNova: ITarefa = {
            id: uuid(),
            name: novaTarefa,
            finalizada: false
        }

        setTarefas([...tarefas, tarefaNova])
        setNovaTarefa("");
    }
    
    function lidarCriacaoNovaTarefa(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setNovaTarefa(event.target.value);
    }

    function lidarCampoInvalido(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity("Este campo é obrigatório");
    }

    function concluirTarefa(idTarefaParaConcluir: string){
        const tarefasComConcluidas = tarefas.map((tarefa) => {
            if(tarefa.id === idTarefaParaConcluir){
                return {...tarefa, finalizada: !tarefa.finalizada}
            }

            return tarefa;
        })

        setTarefas(tarefasComConcluidas);
    }

    function removerTarefaDaLista(idTarefaParaDeletar: string){
        const tarefasSemDeletada = tarefas.filter(tarefa => {
            return tarefa.id !== idTarefaParaDeletar
        })

        setTarefas(tarefasSemDeletada);
    }
    
    return(
        <div className={styles.listaTarefasContainer}>
            <form className={styles.criarTarefaForm} onSubmit={criarNovaTarefa}>
                <input 
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={novaTarefa}
                    onChange={lidarCriacaoNovaTarefa}
                    onInvalid={lidarCampoInvalido}
                    required
                />
                <button type="submit">
                    Criar<PlusCircle size={16}/>
                </button>
            </form>

            <header className={styles.cabecalhoLista}>
                <strong>Tarfas criadas <span className={styles.badge}>{tarefas.length}</span></strong>
                <strong>Concluídas <span className={styles.badge}>{qtdeTarefasConcluidas} de {tarefas.length}</span></strong>
            </header>
            

            <div className={styles.listaTarefas}>

                {
                    tarefas.length == 0 ?
                    <div className={styles.listaTarefasVazia}>
                        <ClipboardText size={56} />
                        <h4>Você ainda não tem tarefas cadastradas</h4>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                    : 
                    tarefas.map(tarefa => {
                        return(
                        <div className={classNames(styles.tarefa, {[styles.finalizada]: tarefa.finalizada})}>
                            <div className={styles.infoTarefa}>
                                {tarefa.finalizada ? <CheckCircle weight="fill" color="#5e60ce" onClick={() => concluirTarefa(tarefa.id)}/> : <Circle onClick={() => concluirTarefa(tarefa.id)}/>}
                                <p>{tarefa.name}</p>
                            </div>
                            <button title="Excluir tarefa" className={styles.botaoRemover} onClick={() => removerTarefaDaLista(tarefa.id)}>
                                <Trash size={14} />
                            </button>
                        </div>
                        )
                    })
                }
                    
                
            </div>
        </div>
    );
}