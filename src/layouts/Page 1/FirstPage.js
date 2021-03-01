import React from 'react';
import {useState} from 'react';
import '../../styles/custom.css';



const FirstPage = () => {

    const initialState = {
        firstValue: '',
        secondValue: '',
    }

    const [state, setState] = useState(initialState);
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState(null);

    let operationText;


    switch(operation) {
        case '+':
            operationText = 'addition';
            break;
        case '-':
            operationText = 'subtraction';
            break;
        case '*':
            operationText = 'multiplication';
            break;
        case '/':
            operationText = 'division';
            break;
        default:
            operationText = 'addition';
            break;
    }


    function getResult() {
        switch(operation) {
            case '+':
                setResult(parseInt(state.firstValue) + parseInt(state.secondValue));
                break;
            case '-':
                setResult(parseInt(state.firstValue) - parseInt(state.secondValue));
                break;
            case '*':
                setResult(parseInt(state.firstValue) * parseInt(state.secondValue));
                break;
            case '/':
                setResult(parseInt(state.firstValue) / parseInt(state.secondValue));
                break;
            default:
                break;
        }
    }


    function clearData() {
        setState({...state, firstValue: '', secondValue: ''})
        setResult('')
    }


    return(
        <div className='pageContainer'>
            <div className='whiteBox'>
                <div className='boxContent'>
                    <div className='boxHeader'>
                        <div>
                            <div className='boxTitle'>First Page</div>
                            <div className='boxSubTitle'>Get <div style={{color: '#37AD00', marginLeft: 8, marginRight: 8}}> {operationText} </div> of two numbers</div>
                        </div>

                        <div className='buttonsContainer'>
                            <button className={`operationButton ${operation === '+' && 'activeOperationButton'}`}
                                    onClick={() => setOperation('+')}
                            >+</button>
                            <button className={`operationButton ${operation === '-' && 'activeOperationButton'}`}
                                    onClick={() => setOperation('-')}
                            >-</button>
                            <button className={`operationButton ${operation === '*' && 'activeOperationButton'}`}
                                    onClick={() => setOperation('*')}
                            >*</button>
                            <button className={`operationButton ${operation === '/' && 'activeOperationButton'}`}
                                    onClick={() => setOperation('/')}
                            >/</button>
                        </div>
                    </div>

                    <div className='inputsContainer'>
                        <input value={state.firstValue}
                               className='defaultInput'
                               placeholder='First number'
                               onChange={(e) => setState({...state, firstValue: e.target.value})}
                        />
                        <div className='symbol'>{operation}</div>
                        <input value={state.secondValue}
                               className='defaultInput'
                               placeholder='Second number'
                               onChange={(e) => setState({...state, secondValue: e.target.value})}
                        />
                        <div className='symbol'>=</div>
                        <div className='result'>{result}</div>
                    </div>

                    <div className='buttonsContainer'>
                        {
                            !!state.firstValue && !!state.secondValue
                                ?
                                <button className='resultButton' onClick={() => getResult()}>Get Result</button>
                                :
                                <div className='grayButton'>Get Result</div>
                        }

                        <button className='cancelButton' onClick={() => clearData()}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstPage;

