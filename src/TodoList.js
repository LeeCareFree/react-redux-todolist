import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) =>{
    let {inputValue,inputChange,addItem,deleteItem,list} = props;
    return (
        <div>
                <div>
                    <input value={inputValue} onChange={inputChange} />
                    <button onClick={addItem}>添加</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li key={index}>
                                    {item}
                                    <button onClick={deleteItem}>删除</button>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
    );
};

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action);
        },
        addItem() {
            let action = {
                type: 'add_item'
            }
            dispatch(action);
        },
        deleteItem(index) {
            console.log('lee');
            let action = {
                type: 'delete_item',
                index: index
            }
            dispatch(action);
        }
    }
}


export default connect(stateToProps, dispatchToProps)(TodoList);