const a = [
  {
    url: 'https://casa.mercadolibre.com.ar/MLA-1234310642',
    description:
      '80 m² cubiertos3 ambs.Casa en ventaIdeal Para Refaccionar ! Gas Natural Ostende Cerca Del CentroOstende, Bs.as. Costa Atlántica',
    precio: '60000 U$S',
    img: 'https://http2.mlstatic.com/D_NQ_NP_627945-MLA53158513940_012023-W.webp',
  },
  {
    url: 'https://casa.mercadolibre.com.ar/MLA-1234310642',
    description:
      '80 m² cubiertos3 ambs.Casa en ventaIdeal Para Refaccionar ! Gas Natural Ostende Cerca Del CentroOstende, Bs.as. Costa Atlántica',
    precio: '60000 U$S',
    img: 'https://http2.mlstatic.com/D_NQ_NP_627945-MLA53158513940_012023-W.webp',
  },
  {
    url: 'https://casa.mercadolibre.com.ar/MLA-1133212908',
    description:
      '84 m² cubiertos3 ambs.Casa en ventaCod 406  Casa AzcuenagaCherburgo 2302, Ostende, Provincia De Buenos Aires, Argentina, Ostende, Bs.as. Costa Atlántica',
    precio: '87000 U$S',
    img: 'https://http2.mlstatic.com/D_NQ_NP_910651-MLA49726053739_042022-W.webp',
  },
  {
    url: 'https://casa.mercadolibre.com.ar/MLA-1120915167',
    description:
      '81 m² cubiertos3 ambs.Casa en ventaCod. 313 - Hermosa Casa En OstendeEstrasburgo 642, Ostende, Provincia De Buenos Aires, Argentina, Ostende, Bs.as. Costa Atlántica',
    precio: '110000 U$S',
    img: 'https://http2.mlstatic.com/D_NQ_NP_913493-MLA48944542454_012022-W.webp',
  },
];





//quitando duplicados:

//metodo 1
const b = new Set(a.map((item) => JSON.stringify(item))) 
const set = Array.from(b).map(x=>JSON.parse(x)) 
set


//metodo 2
const existe = a.reduce((acc, el)=> {
 const isDuplicate = acc.find(item => item.url === el.url)
    if (!isDuplicate) {
      return [...acc, el]
    }else{
       return acc
    }
} ,[])
existe



