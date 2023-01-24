import { CheckCircle, Circle, Trash } from "phosphor-react";

import classNames from 'classnames';

import styles from './Task.module.css';

interface ITarefa{
    id: string;
    name: string;
    finalizada: boolean;
}

interface TaskProps{
    tarefa: ITarefa;
    onRemoverTarefa: (idTarefa: string) => void;
    onConcluirTarefa: (idTarefa: string) => void;
}

export function Task({tarefa, onRemoverTarefa, onConcluirTarefa}: TaskProps){
    function lidarRemoverTarefa(){
        onRemoverTarefa(tarefa.id);
    }

    function lidarConcluirTarefa(){
        onConcluirTarefa(tarefa.id);
    }


    return(
        <div className={classNames(styles.tarefa, {[styles.finalizada]: tarefa.finalizada})}>
            <div className={styles.infoTarefa}>
                {
                tarefa.finalizada ? 
                <CheckCircle weight="fill" color="#5e60ce" 
                    onClick={lidarConcluirTarefa}
                /> : 
                <Circle 
                    onClick={lidarConcluirTarefa}
                />
                }
                <p>{tarefa.name}</p>
            </div>
            <button title="Excluir tarefa" className={styles.botaoRemover} onClick={lidarRemoverTarefa}>
                <Trash size={14} />
            </button>
        </div>
    );
}