import React from 'react';
import {useState} from 'react';
import '../../styles/custom.css';



const SecondPage = () => {

    const[red, setRed] = useState(200);
    const[green, setGreen] = useState(200);
    const[blue, setBlue] = useState(200);

    const num = 5;

    if (red < 0) setRed(0);
    if (green < 0) setGreen(0);
    if (blue < 0) setBlue(0);

    if (red > 255) setRed(255);
    if (green > 255) setGreen(255);
    if (blue > 255) setBlue(255);


    return(
        <div className='pageContainer'>
            <div className='whiteBox'>
                <div className='boxContent'>
                    <div className='boxHeader'>
                        <div>
                            <div className='boxTitle'>Second</div>
                            <div className='boxSubTitle'>Change the color of a box</div>
                        </div>

                        <div className='rgbText'>{`RGB(${red}, ${green}, ${blue})`}</div>
                    </div>

                    <div style={{flex: 1, display: 'flex'}}>
                        <div className='colorBox' style={{flex: 1, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>

                        <div style={{flex: 1, display: "flex", flexDirection: 'column', justifyContent: 'space-between'}}>
                            <div className='buttonsContainer' style={{flex: 1, marginLeft: 20}}>
                                <button className='redButton' onClick={() => setRed(red + num)}>+ R</button>
                                <button className='greenButton' onClick={() => setGreen(green + num)}>+ G</button>
                                <button className='blueButton' onClick={() => setBlue(blue + num)}>+ B</button>
                            </div>
                            <div className='buttonsContainer' style={{flex: 1, marginLeft: 20}}>
                                <button className='redButton' onClick={() => setRed(red - num)}>- R</button>
                                <button className='greenButton' onClick={() => setGreen(green - num)}>- G</button>
                                <button className='blueButton' onClick={() => setBlue(blue - num)}>- B</button>
                            </div>
                            <div className='buttonsContainer' style={{marginLeft: 35}}>
                                <button className='cancelButton' onClick={() => {
                                    setRed(200)
                                    setGreen(200)
                                    setBlue(200)
                                }}>Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondPage;

