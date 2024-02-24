//import Image from "next/image";
//import { Inter } from "next/font/google";

import { time } from "console"

//const inter = Inter({ subsets: ["latin"] });

const nome:string = "Andre_L"
let canal:string = "Andre_C"

function retNome(nome:string){
  return nome
}

const cnl = () => {
  return (
    <div>
      
    </div>
  )
}

function Topo(){
  return (
    <div>
      <div>
        logo
      </div>
      <div>
        {canal}
      </div>
      <div>
        {nome}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      {Topo()}
      <Topo/>
      <div>Andre Luiz</div>
      <div>{retNome(nome)}</div>
      <div>{cnl()}</div>
    </main>
  );
}
