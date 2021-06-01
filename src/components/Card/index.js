import React from 'react'
import './Card.css'
import asusgeforcertx from '../../assets/images/asusgeforcertx3090.png'

function Card() {
    return (
        <div className="card">
            <img src={asusgeforcertx} alt="imagenprod" />
            <div className="card-body">
                <h1 className="card-title">Placa Video Geforce Asus Rtx 3090 24gb </h1>
                <p className="card-text text-secondary">- Marca : ASUS
                - Modelo : ROG Strix GeForce RTX 3090
                - P/N : ROG-STRIX-RTX3090-O24G-GAMING
                - UPC : 192876928622
                - Chipset : NVIDIA GeForce RTX 3090
                - Coolers : 3
                - Pci Express : PCIe 4.0 16x
                - DirectX : 12
                - OpenGl : 4.6
                - Memoria : GDDR6X 24GB
                - Bits : 384
                - CUDA Cores : 10496
                - Core Clock : 1890 MHz
                - Mem Clock : 19.5 Gbps
                - Alimen. Suple : 3 x 8-pin
                - Fuente optima : 800w
                - Vga : No
                - Dvi : No
                - Hdmi : 2
                - Display Port : 3
                - Máximos displays soportados : 4
                - Perfil Bajo : No
                - Backplate : Si
                - Dimensiones : 31.85 x 14.01 x 5.78 CM
                - Slots PCI-e : 2,9
                - Iluminacion : Si
            </p>
            </div>

        </div>
    )
}

export default Card
