import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitacao-lanche',
  templateUrl: './solicitacao-lanche.component.html'
})
export class SolicitacaoLancheComponent implements OnInit {
  nome='';
  enderecoModel='';
  
  show:boolean = true; 
  isFinalizar:boolean = true; 
  value: string;
  description: string;    

  toggleShow(){

    this.show = !this.show;
  }

  toggleFinalizar(){

    this.isFinalizar = !this.isFinalizar;
  }

  troco : any[] = [
    {
      "value": "Sim"
    },
    {
      "value": "Não"
    }
  ];

  pagamento : any[] = [
    {
      "value": "Crédio"
    },
    {
      "value": "Débito"
    },
    {
      "value": "Dinheiro"
    }
  ];

  tipopao: any[] = [
    {
      "nome": "12 grãos",
      "valor": 4.5
    },
    {
      "nome": "3 Queijos",
      "valor": 3.25
    }
  ];

  queijos: any[]= [
     {
        "nome": "Cheedar",
        "valor": 1.5
      },
      {
        "nome": "Mussarela",
        "valor": 0.75
      },
      {
        "nome": "Prato",
        "valor": 0.95
      }
];

recheios: any[]= [

    {
      "nome": "Frango",
      "valor": 3.25
    },
    {
      "nome": "Carne",
      "valor": 2.75
    },
    {
      "nome": "Rosbife",
      "valor": 2.95
    },
    {
      "nome": "Presunto",
      "valor": 1.95
    },
    {
      "nome": "Vegetariano",
      "valor": 0
    }
  ];

molhos: any[] =[
      {
        "nome": "Mostarda e Mel",
        "valor": 0
      },
      {
        "nome": "Cebola Agridoce",
        "valor": 0.3
      },
      {
        "nome": "Barbecue",
        "valor": 0.25
      },
      {
        "nome": "Parmesão",
        "valor": 0.15
      },
      {
        "nome": "Maionese",
        "valor": 0.5
      },
      {
        "nome": "Apimentado",
        "valor": 0.2
      },
      {
        "nome": "Italiano",
        "valor": 0.25
      }
    ];
  
saladas: any [] =[

      {
        "nome": "Alface",
        "valor": 0
      },
      {
        "nome": "Rúcula",
        "valor": 0
      },
      {
        "nome": "Cebola",
        "valor": 0
      },
      {
        "nome": "Cebola roxa",
        "valor": 0.15
      },
      {
        "nome": "Acelga",
        "valor": 0.7
      }
];

temperos: any [] =[
  {
      "nome": "Pimenta",
      "valor": 0
    },
    {
      "nome": "Sal",
      "valor": 0
    },
    {
      "nome": "Orégano",
      "valor": 0
    },
    {
      "nome": "Pimenta calabresa",
      "valor": 0
    }
  ];


  constructor() { }

  ngOnInit() {
  }


  paoByLanches: any[] = [
    
    {
      "nome": "Carne e Queijo",
      "ingredientes": [
        {
          "categoria": "Tipo de pão",
          "nome": "3 queijos",
          "valor": 3.25
        },
        {
          "categoria": "Queijo",
          "nome": "Mussarela",
          "valor": 0.75
        },
        {
          "categoria": "Recheio",
          "nome": "Carne",
          "valor": 2.75
        }
      ]
    },
    {
      "nome": "Vegetariano",
      "ingredientes": [
        {
          "categoria": "Tipo de pão",
          "nome": "12 grãos",
          "valor": 4.5
        },
        {
          "categoria": "Queijo",
          "nome": "Mussarela",
          "valor": 0.75
        },
        {
          "categoria": "Recheio",
          "nome": "Vegetariano",
          "valor": 0
        },
        {
          "categoria": "Saladas",
          "nome": "Alface",
          "valor": 0
        },
        {
          "categoria": "Saladas",
          "nome": "Rúcula",
          "valor": 0
        },
        {
          "categoria": "Saladas",
          "nome": "Cebola",
          "valor": 0
        },
        {
          "categoria": "Saladas",
          "nome": "Cebola roxa",
          "valor": 0.15
        },
        {
          "categoria": "Saladas",
          "nome": "Acelga",
          "valor": 0.7
        }
      ]
    }
  ];


  entregas: any = [] =[
    [
      {
        "nome": "James Malta",
        "endereco": "Rua Itália, 3351",
        "latitude": "-21.780098",
        "longitude": "-48.187326",
        "pedido": {
          "id": 1,
          "data-recebimento": "18/12/2016 18:00",
          "valor": "70.0"
        }
      },
      {
        "nome": "Anderson Perez",
        "endereco": "Av. Padre Francisco Salles Culturato, 884",
        "latitude": "-21.779391",
        "longitude": "-48.188309",
        "pedido": {
          "id": 2,
          "data-recebimento": "18/12/2016 18:21",
          "valor": "30.0"
        }
      },
      {
        "nome": "Carla Assunção",
        "endereco": "R. Diogenes Muniz Barreto, 484",
        "latitude": "-21.781786",
        "longitude": "-48.187932",
        "pedido": {
          "id": 3,
          "data-recebimento": "18/12/2016 18:22",
          "valor": "22.25"
        }
      },
      {
        "nome": "Alexandre Oliveira",
        "endereco": "Rua Tupi, 610",
        "latitude": "-21.776519",
        "longitude": "-48.181465",
        "pedido": {
          "id": 4,
          "data-recebimento": "18/12/2016 18:28",
          "valor": "27.5"
        }
      },
      {
        "nome": "Mateus Pedroza",
        "endereco": "Rua São Bento, 3112",
        "latitude": "-21.772952",
        "longitude": "-48.180875",
        "pedido": {
          "id": 5,
          "data-recebimento": "18/12/2016 19:02",
          "valor": "37.30"
        }
      },
      {
        "nome": "Caio Silva",
        "endereco": "Rua Voluntários da Pátria, 2596",
        "latitude": "-21.784927",
        "longitude": "-48.180756",
        "pedido": {
          "id": 6,
          "data-recebimento": "18/12/2016 19:12",
          "valor": "47.75"
        }
      },
      {
        "nome": "Thais Guimarães",
        "endereco": "Rua Nove de Julho, 1724",
        "latitude": "-21.783034",
        "longitude": "-48.177161",
        "pedido": {
          "id": 7,
          "data-recebimento": "18/12/2016 19:12",
          "valor": "17.0"
        }
      },
      {
        "nome": "Yumi Matsukaha",
        "endereco": "Avenida São Geraldo, 324 - Centro",
        "latitude": "-21.782964",
        "longitude": "-48.176700",
        "pedido": {
          "id": 8,
          "data-recebimento": "18/12/2016 19:13",
          "valor": "21.50"
        }
      },
      {
        "nome": "José Antunes",
        "endereco": "Avenida Mauá, 422",
        "latitude": "-21.784807",
        "longitude": "-48.175574",
        "pedido": {
          "id": 9,
          "data-recebimento": "18/12/2016 19:20",
          "valor": "28.95"
        }
      },
      {
        "nome": "Antonio Machado",
        "endereco": "Avenida Prudente de Morais, 170",
        "latitude": "-21.786381",
        "longitude": "-48.173610",
        "pedido": {
          "id": 10,
          "data-recebimento": "18/12/2016 19:30",
          "valor": "31.95"
        }
      },
      {
        "nome": "Pablo Santanna",
        "endereco": "Avenida Barroso, 378",
        "latitude": "-21.787587",
        "longitude": "-48.175606",
        "pedido": {
          "id": 11,
          "data-recebimento": "18/12/2016 19:30",
          "valor": "46.0"
        }
      },
      {
        "nome": "Tafarel Leitão",
        "endereco": "Rua Gonçalves Dias, 764",
        "latitude": "-21.789211",
        "longitude": "-48.174243",
        "pedido": {
          "id": 12,
          "data-recebimento": "18/12/2016 19:30",
          "valor": "21.35"
        }
      },
      {
        "nome": "Beatriz Fernandes",
        "endereco": "Rua Nove de Julho, 818",
        "latitude": "-21.791034",
        "longitude": "-48.174962",
        "pedido": {
          "id": 13,
          "data-recebimento": "18/12/2016 19:31",
          "valor": "19.35"
        }
      },
      {
        "nome": "Aline Cavalcanti",
        "endereco": "Rua Itália, 1518-1628",
        "latitude": "-21.794291",
        "longitude": "-48.179629",
        "pedido": {
          "id": 14,
          "data-recebimento": "18/12/2016 20:00",
          "valor": "30.0"
        }
      },
      {
        "nome": "Luis Araujo",
        "endereco": "Avenida Bruno Opice, 66",
        "latitude": "-21.795019",
        "longitude": "-48.185401",
        "pedido": {
          "id": 15,
          "data-recebimento": "18/12/2016 20:00",
          "valor": "20.50"
        }
      },
      {
        "nome": "Emeline Magielse",
        "endereco": "Avenida Espanha, 1654",
        "latitude": "-21.794212",
        "longitude": "-48.187558",
        "pedido": {
          "id": 16,
          "data-recebimento": "18/12/2016 20:10",
          "valor": "15.60"
        }
      },
      {
        "nome": "Paulo Cunha",
        "endereco": "Avenida Dom Pedro Ⅱ, 1850",
        "latitude": "-21.798973",
        "longitude": "-48.188545",
        "pedido": {
          "id": 17,
          "data-recebimento": "18/12/2016 20:11",
          "valor": "60.65"
        }
      },
      {
        "nome": "Larissa Gomes",
        "endereco": "Avenida Bruno Opice, 2340",
        "latitude": "-21.797031",
        "longitude": "-48.193877",
        "pedido": {
          "id": 18,
          "data-recebimento": "18/12/2016 20:12",
          "valor": "30.60"
        }
      },
      {
        "nome": "Raissa Carvalho",
        "endereco": "Rua Gavião Peixoto, 465",
        "latitude": "-21.801573",
        "longitude": "-48.193802",
        "pedido": {
          "id": 19,
          "data-recebimento": "18/12/2016 20:15",
          "valor": "22.0"
        }
      },
      {
        "nome": "Kauan Azevedo",
        "endereco": "Avenida Itápolis, 2126",
        "latitude": "-21.803247",
        "longitude": "-48.192150",
        "pedido": {
          "id": 20,
          "data-recebimento": "18/12/2016 20:15",
          "valor": "30.75"
        }
      },
      {
        "nome": "Joao Lima",
        "endereco": "Avenida Alberto Toloi, 78",
        "latitude": "-21.807351",
        "longitude": "-48.189843",
        "pedido": {
          "id": 21,
          "data-recebimento": "18/12/2016 20:25",
          "valor": "27.0"
        }
      },
      {
        "nome": "Barbara Koenig",
        "endereco": "Avenida Afonso Mascia, 64",
        "latitude": "-21.808387",
        "longitude": "-48.186077",
        "pedido": {
          "id": 22,
          "data-recebimento": "18/12/2016 20:28",
          "valor": "27.5"
        }
      },
      {
        "nome": "Felipe Azevedo",
        "endereco": "Avenida Francisco Sampaio Peixoto, 560",
        "latitude": "-21.809074",
        "longitude": "-48.182193",
        "pedido": {
          "id": 23,
          "data-recebimento": "18/12/2016 20:28",
          "valor": "27.25"
        }
      },
      {
        "nome": "Lucas Melo",
        "endereco": "Avenida Doutor Bernardino Arantes de Almeida, 335",
        "latitude": "-21.809990",
        "longitude": "-48.180346",
        "pedido": {
          "id": 24,
          "data-recebimento": "18/12/2016 20:29",
          "valor": "27.4"
        }
      }
    ]

  ]
}
