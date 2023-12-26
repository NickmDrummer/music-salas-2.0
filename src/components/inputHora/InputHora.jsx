import { Slider } from 'primereact/slider';
import { useState } from 'react';
import './inputHora.css';

function InputHora() {
  const [value, setValue] = useState([9, 15]);
  return (
    <>
      <div className="p-grid p-fluid">
        <div className="input">
          <h6 className="tituloInput">
            Rango Horario: {value[0]} - {value[1]} Hs.
          </h6>
          <Slider
            value={value}
            onChange={e => setValue(e.value)}
            className="w-14rem"
            max={24}
            step={1}
            range
          />
        </div>
      </div>
    </>
  );
}

export default InputHora;
