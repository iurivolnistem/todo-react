import styles from './TodoList.module.css';
import { PlusCircle, Trash, Circle, CheckCircle } from 'phosphor-react';

import classNames from 'classnames';

export function TodoList(){
    const finalizada = true;

    return(
        <div className={styles.listaTarefasContainer}>
            <form className={styles.criarTarefaForm}>
                <input 
                    type="text"
                    placeholder="Adicione uma nova tarefa" 
                />
                <button type="submit">
                    Criar<PlusCircle size={16}/>
                </button>
            </form>

            <header className={styles.cabecalhoLista}>
                <strong>Tarfas criadas <span className={styles.badge}>5</span></strong>
                <strong>Concluídas <span className={styles.badge}>2 de 5</span></strong>
            </header>
            

            <div className={styles.listaTarefas}>
                <div className={classNames(styles.tarefa, {
                    [styles.finalizada]: true
                })}>
                    {finalizada ? <CheckCircle weight="fill" color="#5e60ce"/> : <Circle />}
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                    <button title="Excluir tarefa" className={styles.botaoRemover}>
                        <Trash size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
}